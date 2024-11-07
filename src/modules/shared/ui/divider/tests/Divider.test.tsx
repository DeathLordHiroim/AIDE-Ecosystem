import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Divider from '../index';

describe('Divider', () => {
  it('renders correctly', () => {
    const { container } = render(<Divider />);
    const divider = container.firstChild;
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('divider');
  });
}); 