"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/index.module.css';
import { usePricingLogic } from '../../hooks/usePricingLogic';
import BillingToggle from '../BillingToggle';
import PlanCard from '../PlanCard';

const MobilePricingPlans: React.FC = () => {
  const { isYearly, selectedPlan, setSelectedPlan, toggleBilling, getPrice, getPeriod, plans } = usePricingLogic();

  return (
    <section className={styles.pricingSection}>
      <h2 className={styles.sectionTitle}>Choose Your Plan</h2>
      <BillingToggle isYearly={isYearly} toggleBilling={toggleBilling} />
      <div className={styles.selectWrapper}>
        <select
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          className={styles.planSelect}
        >
          {plans.map((plan) => (
            <option key={plan.name} value={plan.name}>{plan.name}</option>
          ))}
        </select>
        <div className={styles.selectArrow}></div>
      </div>
      <div className={styles.planCardContainer}>
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            plan.name === selectedPlan && (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PlanCard 
                  plan={plan} 
                  isYearly={isYearly} 
                  getPrice={getPrice} 
                  getPeriod={getPeriod} 
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MobilePricingPlans; 