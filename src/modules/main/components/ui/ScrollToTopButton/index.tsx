'use client';

import dynamic from 'next/dynamic';
import { withMemoization } from '/home/runner/AIDE/new_src/modules/shared/hoc/withMemoization';
import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useScrollToTop } from './hooks/useScrollToTop';
import styles from './styles/index.module.css';

const ScrollToTopButton: React.FC = () => {
  const { isMobile, show, scrollToTop } = useScrollToTop();

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className={styles.scrollButton}
      aria-label="Scroll to top"
    >
      <FiArrowUp size={isMobile ? 20 : 24} />
    </button>
  );
};

const MemoizedScrollToTopButton = withMemoization(ScrollToTopButton);

export default React.memo(MemoizedScrollToTopButton); 