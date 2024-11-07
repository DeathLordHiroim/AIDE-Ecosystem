import React from 'react';
import { useMediaQuery } from '/home/runner/AIDE/new_src/modules/shared/hooks/useMediaQuery';

export interface WithAdaptiveProps {
  isMobile?: boolean;
}

const withAdaptive = <P extends object>(
  DesktopComponent: React.ComponentType<P>,
  MobileComponent: React.ComponentType<P>
) => {
  return function AdaptiveComponent(props: P & WithAdaptiveProps) {
    const isMobile = useMediaQuery('(max-width: 768px)');
    
    if (isMobile) {
      return <MobileComponent {...props} />;
    }
    
    return <DesktopComponent {...props} />;
  };
};

export default withAdaptive; 