"use client"

import dynamic from 'next/dynamic';
import withAdaptive from '/home/runner/AIDE/new_src/modules/shared/hoc/withAdaptive';

const DesktopHowItWorks = dynamic(() => import('./components/Desktop'), { ssr: false });
const MobileHowItWorks = dynamic(() => import('./components/Mobile'), { ssr: false });

export default withAdaptive(DesktopHowItWorks, MobileHowItWorks); 