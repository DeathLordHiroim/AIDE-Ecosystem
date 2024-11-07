import { render, screen, fireEvent } from '@testing-library/react';
import { ResetPasswordForm } from './index';
import { useAuth } from '@/modules/auth/hooks/useAuth';

jest.mock('@/modules/auth/hooks/useAuth');

describe('ResetPasswordForm', () => {
  const mockResetPassword = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ resetPassword: mockResetPassword });
  });

  it('renders correctly', () => {
    render(<ResetPasswordForm />);
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset password/i })).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<ResetPasswordForm />);
    
    const emailInput = screen.getByPlaceholderText('Email address');
    const submitButton = screen.getByRole('button', { name: /reset password/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    expect(mockResetPassword).toHaveBeenCalledWith('test@example.com');
  });

  it('displays success message', async () => {
    mockResetPassword.mockResolvedValueOnce({});
    render(<ResetPasswordForm />);
    
    const submitButton = screen.getByRole('button', { name: /reset password/i });
    fireEvent.click(submitButton);

    const successMessage = await screen.findByText('Check your email for password reset instructions');
    expect(successMessage).toBeInTheDocument();
  });

  it('displays error message on failure', async () => {
    mockResetPassword.mockRejectedValueOnce(new Error('Failed to send password reset email'));
    render(<ResetPasswordForm />);
    
    const submitButton = screen.getByRole('button', { name: /reset password/i });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText('Failed to send password reset email');
    expect(errorMessage).toBeInTheDocument();
  });
}); 