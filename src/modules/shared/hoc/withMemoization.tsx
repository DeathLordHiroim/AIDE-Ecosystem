import React from 'react';

export function withMemoization<P extends object>(
  Component: React.ComponentType<P>,
  propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean
) {
  const displayName = Component.displayName || Component.name || 'Component';
  const WrappedComponent = React.memo(Component, propsAreEqual);
  WrappedComponent.displayName = `Memoized${displayName}`;
  return WrappedComponent;
}

export default withMemoization;
