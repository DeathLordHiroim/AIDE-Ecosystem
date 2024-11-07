import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '/home/runner/AIDE/new_src/modules/shared/ui/button';
import { titleAnimation, descriptionAnimation, buttonsAnimation } from '../../constants/animations';

const MobileHero: React.FC = () => (
  <section className="text-center py-12 px-4">
    <motion.h1 
      className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
      {...titleAnimation}
    >
      AIDE: AI-Powered Development
    </motion.h1>
    <motion.p 
      className="text-lg mb-6 text-gray-300"
      {...descriptionAnimation}
    >
      Revolutionize your coding with AI-driven development. Code faster and smarter with AIDE.
    </motion.p>
    <motion.div
      className="flex flex-col gap-4"
      {...buttonsAnimation}
    >
      <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md">
        Start AI-Powered Coding
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button size="lg" variant="secondary" className="w-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:bg-opacity-10 rounded-full">
        Explore AI Features
      </Button>
    </motion.div>
  </section>
);

export default MobileHero; 