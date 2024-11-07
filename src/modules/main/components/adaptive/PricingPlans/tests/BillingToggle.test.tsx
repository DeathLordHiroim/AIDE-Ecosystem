import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BillingToggle from '../components/BillingToggle';

describe('BillingToggle', () => {
  const mockToggleBilling = jest.fn();

  beforeEach(() => {
    mockToggleBilling.mockClear();
  });

  it('renders correctly with monthly billing selected', () => {
    render(<BillingToggle isYearly={false} toggleBilling={mockToggleBilling} />);

    expect(screen.getByText('Monthly')).toHaveClass('text-blue-400');
    expect(screen.getByText('Yearly (Save 20%)')).toHaveClass('text-gray-400');
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('renders correctly with yearly billing selected', () => {
    render(<BillingToggle isYearly={true} toggleBilling={mockToggleBilling} />);

    expect(screen.getByText('Monthly')).toHaveClass('text-gray-400');
    expect(screen.getByText('Yearly (Save 20%)')).toHaveClass('text-blue-400');
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls toggleBilling when checkbox is clicked', () => {
    render(<BillingToggle isYearly={false} toggleBilling={mockToggleBilling} />);

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockToggleBilling).toHaveBeenCalledTimes(1);
  });
}); 