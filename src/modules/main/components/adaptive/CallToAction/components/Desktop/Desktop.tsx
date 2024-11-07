import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '/home/runner/AIDE/new_src/modules/shared/ui/button';
import { fadeInUpAnimation } from '../../utils/animations';
import type { CallToActionProps } from '../../types';

const Desktop: React.FC<CallToActionProps> = ({ className }) => (
  <section className={`py-20 text-center ${className || ''}`}>
    <motion.div
      {...fadeInUpAnimation}
      aria-labelledby="cta-heading"
      role="region"
    >
      <h2 
        id="cta-heading"
        className="text-4xl font-bold mb-6 text-blue-400"
      >
        Ready to Revolutionize Your Development Process?
      </h2>
      <p className="text-xl mb-8 text-gray-300">
        Join thousands of developers who are coding smarter and faster with AI-powered assistance. 
        Experience the future of development with AIDE.
      </p>
      <Button 
        size="lg" 
        className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
        aria-label="Start your AI coding journey"
      >
        Start Your AI Coding Journey
      </Button>
    </motion.div>
  </section>
);

export default Desktop; 