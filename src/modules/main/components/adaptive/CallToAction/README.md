# CallToAction Component

## Overview
A responsive call-to-action component that adapts to desktop and mobile viewports.

## Features
- Responsive design with dedicated Desktop and Mobile versions
- Smooth animations using framer-motion
- Performance optimized with memoization and lazy loading
- Accessible with ARIA attributes
- Integrated with shared UI components

## Technical Details
- Uses withAdaptive HOC for responsive behavior
- Uses withMemoization HOC for performance optimization
- Implements lazy loading with next/dynamic
- Follows TypeScript best practices
- Includes comprehensive test coverage

## Usage
```tsx
import CallToAction from '@/modules/main/components/adaptive/CallToAction';

function Page() {
  return <CallToAction className="custom-class" />;
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| className | string? | Optional CSS class name for custom styling |

## Dependencies
- framer-motion
- @/modules/shared/ui/button
- @/modules/shared/hoc/withAdaptive
- @/modules/shared/hoc/withMemoization

## Accessibility
- Uses semantic HTML structure
- Includes ARIA labels and roles
- Maintains proper heading hierarchy
- Ensures keyboard navigation support

## Performance Considerations
- Implements code splitting via dynamic imports
- Uses memoization to prevent unnecessary re-renders
- Optimizes animation performance with framer-motion