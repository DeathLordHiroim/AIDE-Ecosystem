import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './index';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { useRouter } from 'next/navigation';

// Mock the hooks
jest.mock('@/modules/auth/hooks/useAuth');
jest.mock('next/navigation');

describe('LoginForm', () => {
  const mockLogin = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ login: mockLogin });
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it('renders correctly', () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<LoginForm />);
    
    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  it('displays error message on failed login', async () => {
    mockLogin.mockRejectedValueOnce(new Error('Failed to log in'));
    render(<LoginForm />);
    
    const submitButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText('Failed to log in');
    expect(errorMessage).toBeInTheDocument();
  });
}); 