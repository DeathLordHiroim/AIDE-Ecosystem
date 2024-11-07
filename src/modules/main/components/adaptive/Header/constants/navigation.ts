import { NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing Plans', href: '#PricingPlans' },
  { label: 'Testimonials', href: '#testimonials' }
];

export const HEADER_BUTTON_CLASSES = 
  'bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300';

export const MOBILE_MENU_ANIMATION = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.2 }
};