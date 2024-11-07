import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DesktopTestimonials from '../components/Desktop';
import { testimonials } from '../constants/testimonials';

describe('DesktopTestimonials', () => {
  it('renders section title', () => {
    render(<DesktopTestimonials />);
    expect(screen.getByText('What Developers Say')).toBeInTheDocument();
  });

  it('renders all testimonials', () => {
    render(<DesktopTestimonials />);
    testimonials.forEach(testimonial => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.role)).toBeInTheDocument();
      expect(screen.getByText(`"${testimonial.quote}"`)).toBeInTheDocument();
    });
  });

  it('renders in grid layout', () => {
    const { container } = render(<DesktopTestimonials />);
    const grid = container.querySelector('.desktopGrid');
    expect(grid).toBeInTheDocument();
  });
}); 