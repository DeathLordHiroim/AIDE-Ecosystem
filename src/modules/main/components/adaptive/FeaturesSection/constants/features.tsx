import React from 'react';
import { Code, Zap, Shield, Users, Rocket, Terminal } from 'lucide-react';
import type { Feature } from '../types';

export const DESKTOP_ICON_SIZE = 32;
export const MOBILE_ICON_SIZE = 24;

export const features: Feature[] = [
  {
    icon: <Code size={DESKTOP_ICON_SIZE} />,
    title: "AI-Powered Code Generation",
    description: "Get intelligent code suggestions and auto-completion powered by advanced AI algorithms"
  },
  {
    icon: <Zap size={DESKTOP_ICON_SIZE} />,
    title: "Smart Code Refactoring",
    description: "Automatically improve your code structure and performance with AI-driven refactoring"
  },
  {
    icon: <Shield size={DESKTOP_ICON_SIZE} />,
    title: "Advanced Security Analysis",
    description: "Real-time vulnerability detection and AI-powered security recommendations"
  },
  {
    icon: <Users size={DESKTOP_ICON_SIZE} />,
    title: "Seamless Team Collaboration",
    description: "Enhance team productivity with AI-assisted version control and code sharing"
  },
  {
    icon: <Rocket size={DESKTOP_ICON_SIZE} />,
    title: "Automated CI/CD Integration",
    description: "Streamline your deployment process with AI-optimized CI/CD pipelines"
  },
  {
    icon: <Terminal size={DESKTOP_ICON_SIZE} />,
    title: "Multi-Language AI Support",
    description: "Develop in your preferred language with comprehensive AI assistance across multiple programming languages"
  }
] as const;

export const mobileFeatures: Feature[] = features.map(feature => ({
  ...feature,
  icon: React.cloneElement(feature.icon as React.ReactElement, { size: MOBILE_ICON_SIZE }),
  description: feature.description.split(' ').slice(0, 8).join(' ') + '...'
})); 