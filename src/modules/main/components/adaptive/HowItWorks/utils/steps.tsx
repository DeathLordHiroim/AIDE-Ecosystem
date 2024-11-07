import React from 'react';
import { Code, GitBranch, Shield, Users, Zap, Play, FileText, RefreshCw } from 'lucide-react';
import type { Step } from '../types';

export const steps: Step[] = [
  {
    icon: React.createElement(FileText, { className: "w-5 h-5" }),
    title: "Project Initialization",
    command: "aide init project",
    description: "AIDE analyzes your project idea and sets up the development environment.",
    subSteps: [
      "Analyzing project requirements...",
      "Setting up development environment...",
      "Initializing project structure...",
      "Configuring version control..."
    ]
  },
  {
    icon: React.createElement(Code, { className: "w-5 h-5" }),
    title: "AI-Driven Development",
    command: "aide develop feature",
    description: "AIDE generates code, suggests optimizations, and helps with problem-solving.",
    subSteps: [
      "Analyzing feature requirements...",
      "Generating initial code structure...",
      "Implementing core functionality...",
      "Optimizing code performance..."
    ]
  },
  {
    icon: React.createElement(GitBranch, { className: "w-5 h-5" }),
    title: "Version Control",
    command: "aide commit -m 'New feature'",
    description: "AIDE manages your git workflow, ensuring clean and organized code versioning.",
    subSteps: [
      "Analyzing code changes...",
      "Generating commit message...",
      "Creating feature branch...",
      "Pushing changes to remote repository..."
    ]
  },
  {
    icon: React.createElement(Shield, { className: "w-5 h-5" }),
    title: "Testing & Quality Assurance",
    command: "aide test",
    description: "AIDE generates and runs tests to ensure your code is robust and error-free.",
    subSteps: [
      "Generating unit tests...",
      "Running integration tests...",
      "Performing code quality checks...",
      "Generating test reports..."
    ]
  },
  {
    icon: React.createElement(Users, { className: "w-5 h-5" }),
    title: "Collaboration",
    command: "aide collaborate",
    description: "AIDE facilitates seamless collaboration between team members and AI.",
    subSteps: [
      "Analyzing team member contributions...",
      "Suggesting code reviews...",
      "Resolving merge conflicts...",
      "Updating project documentation..."
    ]
  },
  {
    icon: React.createElement(Zap, { className: "w-5 h-5" }),
    title: "Performance Optimization",
    command: "aide optimize",
    description: "AIDE analyzes your app's performance and suggests optimizations.",
    subSteps: [
      "Profiling application performance...",
      "Identifying bottlenecks...",
      "Suggesting optimization strategies...",
      "Implementing performance improvements..."
    ]
  },
  {
    icon: React.createElement(Play, { className: "w-5 h-5" }),
    title: "Deployment",
    command: "aide deploy",
    description: "AIDE automates the deployment process, ensuring smooth releases.",
    subSteps: [
      "Preparing deployment package...",
      "Running pre-deployment checks...",
      "Deploying to production environment...",
      "Monitoring post-deployment performance..."
    ]
  },
  {
    icon: React.createElement(RefreshCw, { className: "w-5 h-5" }),
    title: "Continuous Improvement",
    command: "aide improve",
    description: "AIDE continuously learns and improves its capabilities to serve you better.",
    subSteps: [
      "Analyzing user feedback...",
      "Identifying areas for improvement...",
      "Updating AI models...",
      "Enhancing development processes..."
    ]
  }
];