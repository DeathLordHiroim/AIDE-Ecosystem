export interface CallToActionProps {
    className?: string;
  }
  
  export interface CallToActionAnimationProps {
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
  } 