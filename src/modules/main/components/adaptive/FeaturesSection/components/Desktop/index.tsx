import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import FeatureItem  from '../shared/FeatureItem';
import { features } from '../../constants/features';
import { desktopFeatureAnimation } from '../../utils/animations';
import type { FeaturesSectionProps } from '../../types';

const Desktop: React.FC<FeaturesSectionProps> = ({ className }) => {
  const featureItems = useMemo(() => 
    features.map((feature, index) => (
      <FeatureItem 
        key={index} 
        {...feature} 
        className="p-6 transition-all duration-300 hover:scale-105"
      />
    )),
    []
  );

  return (
    <section 
      id="features" 
      className={`py-20 ${className || ''}`}
      aria-labelledby="features-heading"
    >
      <motion.h2 
        id="features-heading"
        className="text-4xl font-bold text-center mb-12 text-blue-400"
        {...desktopFeatureAnimation}
      >
        AI-Powered Development Features
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureItems}
      </div>
    </section>
  );
};

export default React.memo(Desktop); 