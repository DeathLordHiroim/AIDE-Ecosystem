// Hero/components/HeroButton/index.tsx
import { Button } from 'new_src/modules/shared/ui/button';
import { cn } from 'new_src/modules/shared/utils/cn';
import { HeroButtonProps } from '../types';

export const HeroButton: React.FC<HeroButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => (
  <Button
    className={cn(
      {
        'bg-blue-600 hover:bg-blue-700': variant === 'primary',
        'border border-blue-400 hover:bg-blue-400/10': variant === 'secondary',
      },
      className
    )}
    {...props}
  >
    {children}
  </Button>
);