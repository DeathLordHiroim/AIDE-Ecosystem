"use client"

import dynamic from 'next/dynamic';
import withAdaptive from '/home/runner/AIDE/new_src/modules/shared/hoc/withAdaptive';
import { withMemoization } from '/home/runner/AIDE/new_src/modules/shared/hoc/withMemoization';

const DesktopTestimonials = dynamic(() => import('./components/Desktop'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

const MobileTestimonials = dynamic(() => import('./components/Mobile'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

const AdaptiveTestimonials = withMemoization(withAdaptive(DesktopTestimonials, MobileTestimonials));

export default AdaptiveTestimonials; 