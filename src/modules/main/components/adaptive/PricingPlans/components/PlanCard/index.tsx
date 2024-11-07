import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import styles from '../../styles/index.module.css';
import type { PlanCardProps } from '../../types';

const PlanCard: React.FC<PlanCardProps> = ({ plan, isYearly, getPrice, getPeriod }) => {
  const price = getPrice(plan);
  const period = getPeriod(plan);

  return (
    <motion.div 
      className={`${styles.planCard} ${plan.highlighted ? styles.highlightedCard : ''} flex flex-col justify-between`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div>
        <h3 className={styles.planName}>{plan.name}</h3>
        <p className={styles.planDescription}>{plan.description}</p>
        <div className={styles.planPrice}>
          {price}<span className={styles.pricePeriod}>{period}</span>
        </div>
        <ul className={styles.featureList}>
          {plan.features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <FaCheck className={styles.featureIcon} />
              <span>{feature.feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.planButton}>
        {plan.buttonText}
      </button>
    </motion.div>
  );
};

export default PlanCard; 