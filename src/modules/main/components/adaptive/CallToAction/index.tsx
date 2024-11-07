import dynamic from 'next/dynamic';
import withAdaptive  from '/home/runner/AIDE/new_src/modules/shared/hoc/withAdaptive';
import { withMemoization } from '/home/runner/AIDE/new_src/modules/shared/hoc/withMemoization';
import React from 'react';
import type { CallToActionProps } from './types';

const Desktop = dynamic(() => import('./components/Desktop/Desktop'), { 
  
});

const Mobile = dynamic(() => import('./components/Mobile/Mobile'), { 
 
});

const CallToAction = withMemoization(
  withAdaptive<CallToActionProps>(Desktop, Mobile)
);

export default React.memo(CallToAction);
export type { CallToActionProps };