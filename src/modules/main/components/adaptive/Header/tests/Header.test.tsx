import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useAuth } from '/home/runner/AIDE/new_src/modules/shared/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import Header from '../index';

// Мокаем необходимые модули
jest.mock('@/modules/shared/hooks/useAuth');
jest.mock('next/navigation');

describe('Header', () => {
  const mockSignOut = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    // Настраиваем моки перед каждым тестом
    (useAuth as jest.Mock).mockReturnValue({
      user: null,
      signOut: mockSignOut
    });
    (usePathname as jest.Mock).mockReturnValue('/');
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush
    });
  });

  it('renders logo', () => {
    render(<Header />);
    expect(screen.getByText('AIDE')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<Header />);
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument();
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
  });

  it('shows login button on main page', () => {
    render(<Header />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('shows logout button when user is authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: { id: '1' },
      signOut: mockSignOut
    });
    (usePathname as jest.Mock).mockReturnValue('/dashboard');

    render(<Header />);
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('handles login click', () => {
    render(<Header />);
    fireEvent.click(screen.getByText('Login'));
    expect(mockPush).toHaveBeenCalledWith('/auth/login');
  });

  it('handles logout click', async () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: { id: '1' },
      signOut: mockSignOut
    });
    (usePathname as jest.Mock).mockReturnValue('/dashboard');

    render(<Header />);
    fireEvent.click(screen.getByText('Logout'));
    expect(mockSignOut).toHaveBeenCalled();
  });
});
