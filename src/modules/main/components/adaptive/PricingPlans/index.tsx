"use client"

import dynamic from 'next/dynamic';
import withAdaptive from '/home/runner/AIDE/new_src/modules/shared/hoc/withAdaptive';

const DesktopPricingPlans = dynamic(() => import('./components/Desktop'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

const MobilePricingPlans = dynamic(() => import('./components/Mobile'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default withAdaptive(DesktopPricingPlans, MobilePricingPlans); 