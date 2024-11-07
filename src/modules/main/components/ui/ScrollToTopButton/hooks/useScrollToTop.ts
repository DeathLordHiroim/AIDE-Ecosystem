import { useState, useEffect } from 'react';
import { useMediaQuery } from '/home/runner/AIDE/new_src/modules/shared/hooks/useMediaQuery';

export const useScrollToTop = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    isMobile,
    show,
    scrollToTop
  };
}; 