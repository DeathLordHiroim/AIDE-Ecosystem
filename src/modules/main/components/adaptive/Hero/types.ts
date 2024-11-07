import { ButtonProps } from "../../../../shared/ui/button/types";

export interface HeroAnimationProps {
  initial: {
    opacity: number;
    y?: number;
    scale?: number;
  };
  animate: {
    opacity: number;
    y?: number;
    scale?: number;
  };
  transition: {
    type?: string;
    stiffness?: number;
    damping?: number;
    delay?: number;
    duration: number;
    repeat?: number;
    repeatType?: string;
  };
  whileHover?: {
    scale?: number;
  };
  exit?: {
    opacity: number;
    y?: number;
    scale?: number;
  };
}

export interface HeroButtonProps extends ButtonProps {
  variant?: ButtonProps['variant'];
}

