import { ReactNode } from 'react';

export interface HeaderProps {
  onLogin: () => void;
}

export interface HeroProps {
  onGetStarted: () => void;
}

export interface PlanCardProps {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  highlighted?: boolean;
  isYearly: boolean;
}

export interface FeatureItemProps {
  feature: string;
  icon: ReactNode;
  description: string;
}

export interface CallToActionProps {
  onGetStarted: () => void;
}

export interface ScrollToTopButtonProps {
  show: boolean;
} 