import { HeroAnimationProps } from '../types';

// Базовые настройки для оптимизации производительности
const baseTransition = {
  type: "spring", // Добавляем spring для более плавных анимаций
  stiffness: 100,
  damping: 15
};

// Анимации для десктопной версии
export const titleAnimation: HeroAnimationProps = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { ...baseTransition, duration: 0.8 },
  whileHover: { scale: 1.02 }, // Добавляем интерактивность
  exit: { opacity: 0, y: -10 } // Добавляем анимацию выхода
};

export const descriptionAnimation: HeroAnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { ...baseTransition, delay: 0.4, duration: 0.6 },
  exit: { opacity: 0 }
};

export const buttonsAnimation: HeroAnimationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { ...baseTransition, delay: 0.8, duration: 0.6 },
  exit: { opacity: 0, y: 10 }
};

// Добавляем анимации для мобильной версии (могут быть более сдержанными)
export const mobileAnimations = {
  title: {
    ...titleAnimation,
    transition: { ...baseTransition, duration: 0.6 } // Ускоряем для мобильных
  },
  description: {
    ...descriptionAnimation,
    transition: { ...baseTransition, delay: 0.3, duration: 0.4 }
  },
  buttons: {
    ...buttonsAnimation,
    transition: { ...baseTransition, delay: 0.6, duration: 0.4 }
  }
};

// Добавляем анимации для состояний загрузки и ошибок
export const loadingAnimation: HeroAnimationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 0.7 },
  transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" }
};

export const errorAnimation: HeroAnimationProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { ...baseTransition, duration: 0.4 }
};

// Добавляем вспомогательные функции для управления анимациями
export const getAnimationVariants = (isMobile: boolean) => ({
  title: isMobile ? mobileAnimations.title : titleAnimation,
  description: isMobile ? mobileAnimations.description : descriptionAnimation,
  buttons: isMobile ? mobileAnimations.buttons : buttonsAnimation
});

