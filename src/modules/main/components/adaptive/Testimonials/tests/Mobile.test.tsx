import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileTestimonials from '../components/Mobile';
import { testimonials } from '../constants/testimonials';

describe('MobileTestimonials', () => {
  it('renders section title', () => {
    render(<MobileTestimonials />);
    expect(screen.getByText('What Developers Say')).toBeInTheDocument();
  });

  it('renders all testimonials', () => {
    render(<MobileTestimonials />);
    testimonials.forEach(testimonial => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.role)).toBeInTheDocument();
      expect(screen.getByText(`"${testimonial.quote}"`)).toBeInTheDocument();
    });
  });

  it('renders in list layout', () => {
    const { container } = render(<MobileTestimonials />);
    const list = container.querySelector('.mobileList');
    expect(list).toBeInTheDocument();
  });
}); 