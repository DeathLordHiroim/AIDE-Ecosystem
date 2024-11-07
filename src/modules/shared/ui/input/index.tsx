'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ 
  className = '', 
  ...props 
}) => {
  return (
    <input
      className={`w-full rounded-md shadow-sm text-sm ${className}`}
      {...props}
    />
  );
}; 