import React from 'react';
import { render, screen } from '@testing-library/react';
import { FeatureItem } from '../components/shared/FeatureItem';
import { Code } from 'lucide-react';

describe('FeatureItem', () => {
  const mockProps = {
    icon: <Code size={24} data-testid="code-icon" />,
    title: "Test Feature",
    description: "Test Description",
    className: "test-class"
  };

  it('renders without crashing', () => {
    render(<FeatureItem {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('displays title and description', () => {
    render(<FeatureItem {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<FeatureItem {...mockProps} />);
    expect(screen.getByRole('article')).toHaveClass(mockProps.className);
  });

  it('renders icon', () => {
    render(<FeatureItem {...mockProps} />);
    expect(screen.getByTestId('code-icon')).toBeInTheDocument();
  });
}); 