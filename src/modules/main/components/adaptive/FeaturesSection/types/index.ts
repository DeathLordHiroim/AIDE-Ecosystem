import { ReactNode } from 'react';

export interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export interface FeaturesSectionProps {
  className?: string;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FeatureAnimationProps {
  initial: {
    opacity: number;
    y: number;
  };
  animate: {
    opacity: number;
    y: number;
  };
  transition: {
    duration: number;
  };
  whileHover?: {
    scale: number;
  };
} 