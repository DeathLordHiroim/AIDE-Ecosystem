import { render, screen, fireEvent } from '@testing-library/react';
import { RegisterForm } from './index';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { useRouter } from 'next/navigation';

jest.mock('@/modules/auth/hooks/useAuth');
jest.mock('next/navigation');

describe('RegisterForm', () => {
  const mockRegister = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ register: mockRegister });
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it('renders correctly', () => {
    render(<RegisterForm />);
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<RegisterForm />);
    
    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /register/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    expect(mockRegister).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  it('displays error message on failed registration', async () => {
    mockRegister.mockRejectedValueOnce(new Error('Failed to create an account'));
    render(<RegisterForm />);
    
    const submitButton = screen.getByRole('button', { name: /register/i });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText('Failed to create an account');
    expect(errorMessage).toBeInTheDocument();
  });
}); 