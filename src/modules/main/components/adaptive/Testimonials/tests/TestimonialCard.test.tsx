import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialCard from '../components/TestimonialCard';

const mockTestimonial = {
  name: "Test User",
  role: "Test Role",
  quote: "Test Quote"
};

describe('TestimonialCard', () => {
  it('renders testimonial content correctly', () => {
    render(<TestimonialCard {...mockTestimonial} />);

    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('Test Role')).toBeInTheDocument();
    expect(screen.getByText('"Test Quote"')).toBeInTheDocument();
  });

  it('renders 5 stars', () => {
    render(<TestimonialCard {...mockTestimonial} />);
    const stars = screen.getAllByTestId('star-icon');
    expect(stars).toHaveLength(5);
  });

  it('applies hover animation class', () => {
    const { container } = render(<TestimonialCard {...mockTestimonial} />);
    expect(container.firstChild).toHaveStyle('transform: none');
  });
}); 