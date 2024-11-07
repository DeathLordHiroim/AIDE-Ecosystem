import { ReactNode } from 'react';

export interface PlanFeature {
  feature: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: PlanFeature[];
  highlighted?: boolean;
  description: string;
  buttonText: string;
}

export interface BillingToggleProps {
  isYearly: boolean;
  toggleBilling: () => void;
}

export interface PlanCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  getPrice: (plan: PricingPlan) => string;
  getPeriod: (plan: PricingPlan) => string;
} 