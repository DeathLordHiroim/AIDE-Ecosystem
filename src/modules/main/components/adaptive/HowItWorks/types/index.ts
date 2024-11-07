import { ReactNode } from 'react';

export interface Step {
  icon: ReactNode;
  title: string;
  command: string;
  description: string;
  subSteps: string[];
  terminalContent?: string;
} 