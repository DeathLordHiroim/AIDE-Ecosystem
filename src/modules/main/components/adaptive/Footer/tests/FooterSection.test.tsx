import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FooterSection } from '../components/shared/FooterSection';

const mockSection = {
  title: 'Test Section',
  links: [
    { href: '/test1', label: 'Test Link 1' },
    { href: '/test2', label: 'Test Link 2' },
  ],
};

describe('FooterSection', () => {
  it('renders non-collapsible section correctly', () => {
    render(<FooterSection {...mockSection} />);
    
    expect(screen.getByText(mockSection.title)).toBeInTheDocument();
    mockSection.links.forEach(link => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('handles collapsible section correctly', () => {
    render(<FooterSection {...mockSection} isCollapsible={true} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    
    // Initially open
    mockSection.links.forEach(link => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
    
    // Click to close
    fireEvent.click(button);
    mockSection.links.forEach(link => {
      expect(screen.queryByText(link.label)).not.toBeInTheDocument();
    });
  });
}); 