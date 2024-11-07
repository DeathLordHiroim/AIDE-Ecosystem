import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '/home/runner/AIDE/new_src/modules/shared/ui/button';
import { titleAnimation, descriptionAnimation, buttonsAnimation } from '../../constants/animations';

const DesktopHero: React.FC = () => (
  <section className="text-center py-20">
    <motion.h1 
      className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
      {...titleAnimation}
    >
      AIDE: AI-Powered Development Ecosystem
    </motion.h1>
    <motion.p 
      className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
      {...descriptionAnimation}
    >
      Revolutionize your coding experience with AI-driven development. From smart code suggestions to automated testing, AIDE empowers developers to code faster and smarter.
    </motion.p>
    <motion.div
      className="flex justify-center items-center gap-4"
      {...buttonsAnimation}
    >
      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md">
        Start AI-Powered Coding
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button size="lg" variant="secondary" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded-full">
        Explore AI Features
      </Button>
    </motion.div>
  </section>
);

export default DesktopHero; 