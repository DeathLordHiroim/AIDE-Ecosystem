import dynamic from 'next/dynamic';
import withAdaptive from '/home/runner/AIDE/new_src/modules/shared/hoc/withAdaptive';
import { withMemoization } from '/home/runner/AIDE/new_src/modules/shared/hoc/withMemoization';
import React from 'react';
import type { HeaderProps } from './types';

const Desktop = dynamic(() => import('./components/Desktop'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

const Mobile = dynamic(() => import('./components/Mobile'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

const Header = withMemoization(
  withAdaptive<HeaderProps>(Desktop, Mobile)
);

export default React.memo(Header);
export type { HeaderProps };
