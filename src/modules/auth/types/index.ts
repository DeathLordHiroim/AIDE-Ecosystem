export interface AuthFormProps {
  onSubmit: (data: AuthFormData) => Promise<void>;
  error?: string;
}

export interface AuthFormData {
  email: string;
  password?: string;
}

export interface AuthPageProps {
  loading?: boolean;
  user?: any;
  children: React.ReactNode;
} 