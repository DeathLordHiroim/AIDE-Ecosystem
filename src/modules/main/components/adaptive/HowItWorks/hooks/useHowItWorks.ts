import React from 'react';
import { steps } from '../utils/steps';

export const useHowItWorks = (initialStep = 0) => {
  const [currentStep, setCurrentStep] = React.useState(initialStep);
  const [currentSubStep, setCurrentSubStep] = React.useState(-1);
  const [output, setOutput] = React.useState("");
  const [isProcessing, setIsProcessing] = React.useState(false);

  React.useEffect(() => {
    if (isProcessing) {
      const timer = setTimeout(() => {
        if (currentSubStep < steps[currentStep].subSteps.length - 1) {
          setCurrentSubStep(prev => prev + 1);
        } else {
          setOutput(`${steps[currentStep].title} completed successfully.`);
          setIsProcessing(false);
          setCurrentSubStep(-1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, currentSubStep, isProcessing]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setOutput("");
    setIsProcessing(true);
    setCurrentSubStep(0);
  };

  const selectStep = (stepIndex: number) => {
    if (stepIndex !== currentStep && !isProcessing) {
      setCurrentStep(stepIndex);
      setOutput("");
      setIsProcessing(true);
      setCurrentSubStep(0);
    }
  };

  return {
    currentStep,
    currentSubStep,
    output,
    isProcessing,
    nextStep,
    selectStep,
    steps
  };
};