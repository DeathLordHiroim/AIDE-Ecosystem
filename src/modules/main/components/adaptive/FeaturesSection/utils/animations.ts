import { FeatureAnimationProps } from '../types';

export const fadeInUpAnimation: FeatureAnimationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

export const desktopFeatureAnimation: FeatureAnimationProps = {
  ...fadeInUpAnimation,
  whileHover: { scale: 1.05 }
};

export const mobileFeatureAnimation: FeatureAnimationProps = {
  ...fadeInUpAnimation
}; 