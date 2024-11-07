import dynamic from 'next/dynamic';
import withAdaptive from '/home/runner/AIDE/new_src/modules/shared/hoc/withAdaptive';
import { withMemoization } from '/home/runner/AIDE/new_src/modules/shared/hoc/withMemoization';
import React from 'react';
import type { FeaturesSectionProps } from './types';

const Desktop = dynamic(() => import('./components/Desktop'), { 
  
});

const Mobile = dynamic(() => import('./components/Mobile'), { 
 
});

const FeaturesSection = withMemoization(
  withAdaptive<FeaturesSectionProps>(Desktop, Mobile)
);

export default React.memo(FeaturesSection);
export type { FeaturesSectionProps };