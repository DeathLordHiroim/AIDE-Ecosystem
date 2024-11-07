import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../index';

describe('CallToAction', () => {
  it('renders without crashing', () => {
    render(<CallToAction />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });

  it('contains correct heading text', () => {
    render(<CallToAction />);
    expect(screen.getByText(/Ready to Revolutionize/i)).toBeInTheDocument();
  });

  it('contains a call to action button', () => {
    render(<CallToAction />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const className = 'custom-class';
    render(<CallToAction className={className} />);
    expect(screen.getByRole('region').parentElement).toHaveClass(className);
  });
}); 