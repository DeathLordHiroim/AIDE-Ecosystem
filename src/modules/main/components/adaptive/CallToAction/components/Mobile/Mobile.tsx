import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '/home/runner/AIDE/new_src/modules/shared/ui/button';
import { fadeInUpAnimation } from '../../utils/animations';
import type { CallToActionProps } from '../../types';

const Mobile: React.FC<CallToActionProps> = ({ className }) => (
  <section className={`py-12 text-center px-4 ${className || ''}`}>
    <motion.div
      {...fadeInUpAnimation}
      aria-labelledby="cta-heading-mobile"
      role="region"
    >
      <h2 
        id="cta-heading-mobile"
        className="text-3xl font-bold mb-4 text-blue-400"
      >
        Ready to Revolutionize Your Development?
      </h2>
      <p className="text-lg mb-6 text-gray-300">
        Join thousands of developers coding smarter and faster with AI. 
        Experience the future with AIDE.
      </p>
      <Button 
        size="lg" 
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 w-full"
        aria-label="Start AI coding now"
      >
        Start AI Coding Now
      </Button>
    </motion.div>
  </section>
);

export default Mobile; 