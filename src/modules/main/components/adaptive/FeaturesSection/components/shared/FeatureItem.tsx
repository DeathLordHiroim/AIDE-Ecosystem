import React from 'react';
import { motion } from 'framer-motion';
import type { FeatureItemProps } from '../../types';
import { fadeInUpAnimation } from '../../utils/animations';

const FeatureItem: React.FC<FeatureItemProps> = ({ 
  icon, 
  title, 
  description,
  className = '' 
}) => (
  <motion.div 
    className={`bg-gray-800 bg-opacity-50 rounded-lg shadow-lg ${className}`}
    {...fadeInUpAnimation}
    aria-labelledby={`feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
    role="article"
  >
    <div className="text-blue-400">{icon}</div>
    <h3 
      id={`feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="font-semibold text-gray-200"
    >
      {title}
    </h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

FeatureItem.displayName = 'FeatureItem';

export default React.memo(FeatureItem); 