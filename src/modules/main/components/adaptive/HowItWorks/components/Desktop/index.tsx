"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronRight, Loader, Check } from 'lucide-react';
import styles from '../../styles/index.module.css';
import { useHowItWorks } from '../../hooks/useHowItWorks';
import { steps } from '../../utils/steps';
import type { Step } from '../../types';

export default function DesktopHowItWorks() {
  const { currentStep, currentSubStep, output, isProcessing, nextStep, selectStep } = useHowItWorks();

  return (
    <section className={styles.howItWorksSection}>
      <h2 className={styles.sectionTitle}>How AIDE Works</h2>
      <div className="flex justify-between space-x-6">
        <div className="w-1/3">
          {steps.map((step: Step, index: number) => (
            <div
              key={index}
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-all duration-300 ${
                index === currentStep ? 'bg-blue-600 text-white' : 'bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => selectStep(index)}
            >
              <div className="mr-3">{step.icon}</div>
              <span>{step.title}</span>
            </div>
          ))}
        </div>
        <div className="w-2/3">
          <div className={styles.terminalWindow}>
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
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
                      <Terminal className="w-4 h-4" />
                      <span className="text-sm">aide@user:~$</span>
                    </div>
                    <div className="mt-2 text-blue-400 text-sm">{steps[currentStep].command}</div>
                    {isProcessing && (
                      <div className="mt-4">
                        {steps[currentStep].subSteps.map((subStep, index) => (
                          <div key={index} className={`flex items-center space-x-2 mb-2 ${index > currentSubStep ? 'text-gray-600' : 'text-gray-300'}`}>
                            {index < currentSubStep ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : index === currentSubStep ? (
                              <Loader className="w-4 h-4 text-blue-500 animate-spin" />
                            ) : (
                              <div className="w-4 h-4" />
                            )}
                            <span className="text-sm">{subStep}</span>
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
                      className="text-green-400 text-sm mt-4"
                    >
                      {output}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className={styles.terminalFooter}>
              <motion.button
                onClick={nextStep}
                className={styles.terminalNextButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Next Step'}
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </div>
          <div className={styles.stepInfo}>
            <h3 className={styles.stepTitle}>{steps[currentStep].title}</h3>
            <p className={styles.stepDescription}>{steps[currentStep].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 