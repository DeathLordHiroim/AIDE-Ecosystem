import { useState } from 'react';
import { plans } from '../constants/plans';
import type { PricingPlan } from '../types';

export const usePricingLogic = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>(plans[0].name);

  const toggleBilling = () => setIsYearly(!isYearly);

  const getPrice = (plan: PricingPlan) => isYearly ? plan.yearlyPrice : plan.price;
  const getPeriod = (plan: PricingPlan) => isYearly ? "/year" : plan.period;

  return {
    isYearly,
    selectedPlan,
    setSelectedPlan,
    toggleBilling,
    getPrice,
    getPeriod,
    plans
  };
}; 