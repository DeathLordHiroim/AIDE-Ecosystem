'use client';

import { useState } from 'react';
import { AuthFormData } from '../types';

export const useAuthForm = (initialState: AuthFormData = { email: '', password: '' }) => {
  const [formData, setFormData] = useState<AuthFormData>(initialState);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
    setError('');
  };

  return {
    formData,
    error,
    setError,
    handleChange,
    resetForm
  };
}; 