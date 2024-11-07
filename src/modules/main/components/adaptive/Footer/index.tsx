import dynamic from 'next/dynamic';
import withAdaptive from '/home/runner/AIDE/new_src/modules/shared/hoc/withAdaptive';
import { withMemoization } from '/home/runner/AIDE/new_src/modules/shared/hoc/withMemoization';
import React from 'react';

const DesktopFooter = dynamic(() => import('./components/Desktop'), { 

});

const MobileFooter = dynamic(() => import('./components/Mobile'), { 
  
});

const AdaptiveFooter = withMemoization(withAdaptive(DesktopFooter, MobileFooter));

export default React.memo(AdaptiveFooter); 