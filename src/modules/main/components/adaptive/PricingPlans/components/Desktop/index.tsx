"use client"

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/index.module.css';
import { usePricingLogic } from '../../hooks/usePricingLogic';
import BillingToggle from '../BillingToggle';
import PlanCard from '../PlanCard';

const DesktopPricingPlans: React.FC = () => {
  const { isYearly, toggleBilling, getPrice, getPeriod, plans } = usePricingLogic();

  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.sectionTitle}>Choose Your Plan</h2>
      <BillingToggle isYearly={isYearly} toggleBilling={toggleBilling} />
      <div className={styles.plansGrid}>
        {plans.map((plan, index) => (
          <PlanCard 
            key={index} 
            plan={plan} 
            isYearly={isYearly} 
            getPrice={getPrice} 
            getPeriod={getPeriod} 
          />
        ))}
      </div>
    </section>
  );
};

export default DesktopPricingPlans; 