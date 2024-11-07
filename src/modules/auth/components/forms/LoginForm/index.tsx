'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../../../shared/ui/button';
import { Input } from '/home/runner/AIDE/new_src/modules/shared/ui/input';
import { useAuth } from '/home/runner/AIDE/new_src/modules/auth/hooks/useAuth';
import { FiMail, FiLock } from 'react-icons/fi';
import Link from 'next/link';
import { useAuthForm } from '/home/runner/AIDE/new_src/modules/auth/hooks/useAuthForm';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const { formData, error, setError, handleChange } = useAuthForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password || '');
      router.push('/welcome');
    } catch (error) {
      console.error("Login error:", error);
      setError('Failed to log in');
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
      {/* Password input */}
      <div>
        <label htmlFor="password" className="sr-only">Password</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiLock className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={formData.password}
            onChange={handleChange}
            className="pl-10 w-full bg-gray-700 border-gray-600 text-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
          />
        </div>
      </div>
      {/* Remember me and Forgot password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-gray-700"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <Link href="/auth/reset-password" className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300">
            Forgot your password?
          </Link>
        </div>
      </div>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      <div>
        <Button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
        >
          Sign in
        </Button>
      </div>
    </form>
  );
}; 