'use client';

import React, { useState } from 'react';
import { Button } from '../../../../shared/ui/button';
import { Input } from '/home/runner/AIDE/new_src/modules/shared/ui/input';
import { useAuth } from '/home/runner/AIDE/new_src/modules/auth/hooks/useAuth';
import { FiMail } from 'react-icons/fi';
import { useAuthForm } from '/home/runner/AIDE/new_src/modules/auth/hooks/useAuthForm';

export const ResetPasswordForm: React.FC = () => {
  const { resetPassword } = useAuth();
  const { formData, error, setError, handleChange } = useAuthForm({ 
    email: '' 
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(formData.email);
      setMessage('Check your email for password reset instructions');
    } catch (error) {
      setError('Failed to send password reset email');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="email" className="sr-only">Email address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiMail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="pl-10 w-full bg-gray-700 border-gray-600 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email address"
          />
        </div>
      </div>
      {message && <div className="text-green-500 text-sm mt-2">{message}</div>}
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      <div>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
        >
          Reset Password
        </Button>
      </div>
    </form>
  );
}; 