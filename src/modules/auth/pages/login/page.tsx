'use client';

import React from 'react';
import { LoginForm } from '../../components/forms/LoginForm';
import { AuthLayout } from '../../../shared/ui/AuthLayout';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import { Button } from '../../../shared/ui/button';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const { signInWithGoogle, user, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      router.push('/welcome');
    }
  }, [user, router]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.push('/welcome');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  if (user) {
    return null;
  }

  return (
    <AuthLayout title="Sign in to AIDE">
      <LoginForm />
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
          </div>
        </div>
        <div className="mt-6">
          <Button
            onClick={handleGoogleSignIn}
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
          >
            <FaGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-center text-sm text-gray-300">
          Don't have an account?{' '}
          <Link href="/auth/register" className="font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300">
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage; 