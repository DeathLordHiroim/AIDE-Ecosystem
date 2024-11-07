'use client';

import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-bold text-blue-400">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}; 