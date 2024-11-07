'use client';

import React from 'react';
import { RegisterForm } from '../../components/forms/RegisterForm';
import { AuthLayout } from '../../../shared/ui/AuthLayout';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';

const RegisterPage: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;
  if (user) {
    router.push('/welcome');
    return null;
  }

  return (
    <AuthLayout title="Register for AIDE">
      <RegisterForm />
      <p className="mt-4 text-center text-gray-300">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-blue-400 hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage; 