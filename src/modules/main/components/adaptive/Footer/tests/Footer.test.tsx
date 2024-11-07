import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../index';
import { footerSections } from '../constants/footerSections';

describe('Footer', () => {
  it('renders all sections', () => {
    render(<Footer />);
    
    footerSections.forEach(section => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });
  });

  it('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2023 AIDE/)).toBeInTheDocument();
  });
}); 