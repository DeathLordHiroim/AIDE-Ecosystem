'use client';

import React from 'react';
import { ResetPasswordForm } from '../../components/forms/ResetPasswordForm';
import { AuthLayout } from '../../../shared/ui/AuthLayout';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';

const ResetPasswordPage: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;
  if (user) {
    router.push('/welcome');
    return null;
  }

  return (
    <AuthLayout title="Reset your password">
      <ResetPasswordForm />
      <div className="mt-6">
        <p className="text-center text-sm text-gray-300">
          Remember your password?{' '}
          <Link 
            href="/auth/login" 
            className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordPage; 