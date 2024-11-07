import { CallToActionAnimationProps } from '../types';

export const fadeInUpAnimation: CallToActionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}; 