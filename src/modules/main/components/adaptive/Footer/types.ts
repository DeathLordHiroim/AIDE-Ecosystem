import { ReactNode } from 'react';

export interface FooterProps {
  className?: string;
}

export interface FooterLink {
  href: string;
  label: string;
  icon?: React.ComponentType<{ size?: number }>;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterSectionProps extends FooterSection {
  isCollapsible?: boolean;
  className?: string;
} 