import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import FeatureItem  from '../shared/FeatureItem';
import { mobileFeatures } from '../../constants/features';
import { mobileFeatureAnimation } from '../../utils/animations';
import type { FeaturesSectionProps } from '../../types';

const Mobile: React.FC<FeaturesSectionProps> = ({ className }) => {
  const featureItems = useMemo(() => 
    mobileFeatures.map((feature, index) => (
      <FeatureItem 
        key={index} 
        {...feature} 
        className="p-4 mb-4 flex flex-col"
      />
    )),
    []
  );

  return (
    <section 
      id="features" 
      className={`py-12 px-4 ${className || ''}`}
      aria-labelledby="features-heading-mobile"
    >
      <motion.h2 
        id="features-heading-mobile"
        className="text-3xl font-bold text-center mb-8 text-blue-400"
        {...mobileFeatureAnimation}
      >
        AI-Powered Features
      </motion.h2>
      <div className="space-y-4">
        {featureItems}
      </div>
    </section>
  );
};

export default React.memo(Mobile); 