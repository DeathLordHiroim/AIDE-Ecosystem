import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlanCard from '../components/PlanCard';
import type { PricingPlan } from '../types';

const mockPlan: PricingPlan = {
  name: "Test Plan",
  price: "$99",
  yearlyPrice: "$990",
  period: "/month",
  description: "Test description",
  features: [
    { feature: "Feature 1", included: true },
    { feature: "Feature 2", included: true }
  ],
  buttonText: "Test Button"
};

const mockProps = {
  plan: mockPlan,
  isYearly: false,
  getPrice: (plan: PricingPlan) => plan.price,
  getPeriod: (plan: PricingPlan) => plan.period
};

describe('PlanCard', () => {
  it('renders plan details correctly', () => {
    render(<PlanCard {...mockProps} />);

    expect(screen.getByText('Test Plan')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('$99')).toBeInTheDocument();
    expect(screen.getByText('/month')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('applies highlighted styles when plan is highlighted', () => {
    const highlightedPlan = { ...mockPlan, highlighted: true };
    const { container } = render(<PlanCard {...mockProps} plan={highlightedPlan} />);

    expect(container.firstChild).toHaveClass('highlightedCard');
  });

  it('shows correct price and period based on billing period', () => {
    const yearlyProps = { ...mockProps, isYearly: true };
    yearlyProps.getPrice = (plan: PricingPlan) => plan.yearlyPrice;
    yearlyProps.getPeriod = () => '/year';

    render(<PlanCard {...yearlyProps} />);

    expect(screen.getByText('$990')).toBeInTheDocument();
    expect(screen.getByText('/year')).toBeInTheDocument();
  });
}); 