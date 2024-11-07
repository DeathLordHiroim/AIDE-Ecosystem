import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturesSection from '../index';

describe('FeaturesSection', () => {
  it('renders without crashing', () => {
    render(<FeaturesSection />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('displays the correct heading', () => {
    render(<FeaturesSection />);
    expect(screen.getByText(/AI-Powered.*Features/)).toBeInTheDocument();
  });

  it('renders all features', () => {
    render(<FeaturesSection />);
    expect(screen.getAllByRole('article')).toHaveLength(6);
  });

  it('applies custom className', () => {
    const className = 'custom-class';
    render(<FeaturesSection className={className} />);
    expect(screen.getByRole('region')).toHaveClass(className);
  });
}); 