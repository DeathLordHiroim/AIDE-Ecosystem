import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollToTopButton from '../index';
import * as useScrollToTop from '../hooks/useScrollToTop';

jest.mock('../hooks/useScrollToTop', () => ({
  useScrollToTop: jest.fn()
}));

describe('ScrollToTopButton', () => {
  const mockScrollToTop = jest.fn();

  beforeEach(() => {
    (useScrollToTop.useScrollToTop as jest.Mock).mockReturnValue({
      isMobile: false,
      show: true,
      scrollToTop: mockScrollToTop
    });
  });

  it('renders when show is true', () => {
    render(<ScrollToTopButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('does not render when show is false', () => {
    (useScrollToTop.useScrollToTop as jest.Mock).mockReturnValue({
      isMobile: false,
      show: false,
      scrollToTop: mockScrollToTop
    });
    render(<ScrollToTopButton />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls scrollToTop when clicked', () => {
    render(<ScrollToTopButton />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockScrollToTop).toHaveBeenCalledTimes(1);
  });
}); 