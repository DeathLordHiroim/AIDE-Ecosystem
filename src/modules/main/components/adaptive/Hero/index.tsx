import dynamic from 'next/dynamic';
import withAdaptive from '/home/runner/AIDE/new_src/modules/shared/hoc/withAdaptive';
import { withMemoization } from '/home/runner/AIDE/new_src/modules/shared/hoc/withMemoization';
import React from 'react';

const DesktopHero = dynamic(() => import('./components/Desktop'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

const MobileHero = dynamic(() => import('./components/Mobile'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

const AdaptiveHero = withMemoization(withAdaptive(DesktopHero, MobileHero));

export default React.memo(AdaptiveHero); 