# FeaturesSection Component

## Overview
A responsive features section component that showcases AI-powered development features with desktop and mobile variants.

## Features
- Responsive design with dedicated Desktop and Mobile versions
- Smooth animations using framer-motion
- Performance optimized with memoization and lazy loading
- Accessible with ARIA attributes
- Grid layout for desktop and list layout for mobile
- Hover animations for interactive feedback

## Technical Details
- Uses withAdaptive HOC for responsive behavior
- Uses withMemoization HOC for performance optimization
- Implements lazy loading with next/dynamic
- Follows TypeScript best practices
- Includes comprehensive test coverage

## Usage
```tsx
import FeaturesSection from '@/modules/main/components/adaptive/FeaturesSection';

function Page() {
  return <FeaturesSection className="custom-class" />;
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| className | string? | Optional CSS class name for custom styling |

## Dependencies
- framer-motion
- lucide-react (for icons)
- @/modules/shared/hoc/withAdaptive
- @/modules/shared/hoc/withMemoization

## Components Structure
- Desktop: Grid layout with hover effects
- Mobile: Stack layout with optimized content
- FeatureItem: Shared component for feature display

## Accessibility
- Uses semantic HTML structure
- Includes ARIA labels and roles
- Maintains proper heading hierarchy
- Ensures keyboard navigation support

## Performance Considerations
- Implements code splitting via dynamic imports
- Uses memoization to prevent unnecessary re-renders
- Optimizes animation performance with framer-motion
- Lazy loads icons and components 