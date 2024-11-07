"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronRight, Loader, Check } from 'lucide-react';
import styles from '../../styles/index.module.css';
import { useHowItWorks } from '../../hooks/useHowItWorks';
import { steps } from '../../utils/steps';
import type { Step } from '../../types';

export default function MobileHowItWorks() {
  const { currentStep, currentSubStep, output, isProcessing, nextStep, selectStep } = useHowItWorks();

  return (
    <section className={styles.howItWorksSection}>
      <h2 className={styles.sectionTitle}>How AIDE Works</h2>
      <div className={styles.terminalWindow}>
        <div className="flex items-center justify-between bg-gray-700 bg-opacity-50 px-4 py-2">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400">AIDE Terminal</div>
        </div>
        <div className={styles.terminalContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-4 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center space-x-2 text-green-400">
                  <Terminal className="w-3 h-3" />
                  <span>aide@user:~$</span>
                </div>
                <div className="mt-2 text-blue-300">{steps[currentStep].command}</div>
                {isProcessing && (
                  <div className="mt-2">
                    {steps[currentStep].subSteps.map((subStep, index) => (
                      <div key={index} className={`flex items-center space-x-2 ${index > currentSubStep ? 'text-gray-600' : 'text-gray-300'}`}>
                        {index < currentSubStep ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : index === currentSubStep ? (
                          <Loader className="w-4 h-4 text-blue-500 animate-spin" />
                        ) : (
                          <div className="w-4 h-4" />
                        )}
                        <span>{subStep}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {output && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300"
                >
                  {output}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <div className="flex items-center space-x-3 overflow-x-auto pb-4 w-full justify-center">
          {steps.map((step: Step, index: number) => (
            <motion.div
              key={index}
              className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                index === currentStep ? 'bg-blue-600' : 'bg-gray-700 bg-opacity-50'
              } cursor-pointer`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => selectStep(index)}
            >
              {step.icon}
            </motion.div>
          ))}
        </div>
        <motion.button
          onClick={nextStep}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition-all duration-300 mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Next Step'}
          <ChevronRight className="ml-2 w-4 h-4" />
        </motion.button>
      </div>
      <div className={styles.stepInfo}>
        <h3 className={styles.stepTitle}>{steps[currentStep].title}</h3>
        <p className={styles.stepDescription}>{steps[currentStep].description}</p>
      </div>
    </section>
  );
} 