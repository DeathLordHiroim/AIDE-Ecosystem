# Header Component

## Overview
An adaptive header component that provides different layouts for desktop and mobile views, with authentication integration and responsive navigation.

## Features
- Responsive design with dedicated Desktop and Mobile versions
- Animated mobile menu with smooth transitions
- Authentication integration (Login/Logout functionality)
- Dynamic navigation based on current route
- Performance optimized with memoization and lazy loading
- Accessible with ARIA attributes

## Technical Details
- Uses withAdaptive HOC for responsive behavior
- Uses withMemoization HOC for performance optimization
- Implements lazy loading with next/dynamic
- Uses framer-motion for animations
- Follows TypeScript best practices
- Includes comprehensive test coverage

## Usage
```tsx
import Header from '@/modules/main/components/adaptive/Header';

function Page() {
  return <Header className="custom-class" />;
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| className | string? | Optional CSS class name for custom styling |

## Components Structure
- Desktop: Full navigation with horizontal menu
- Mobile: Collapsible menu with hamburger button
- Shared: Common authentication and navigation logic

## Accessibility
- Uses semantic HTML structure
- Includes ARIA labels and roles
- Maintains proper heading hierarchy
- Ensures keyboard navigation support
- Proper ARIA states for mobile menu

## Performance Considerations
- Implements code splitting via dynamic imports
- Uses memoization to prevent unnecessary re-renders
- Optimizes animation performance with framer-motion
- Lazy loads icons and components

## Dependencies
- framer-motion
- react-icons/fi
- next/navigation
- @/modules/shared/ui/button
- @/modules/shared/hooks/useAuth
- @/modules/shared/hoc/withAdaptive
- @/modules/shared/hoc/withMemoization

## Testing
- Unit tests for both Desktop and Mobile versions
- Tests for authentication functionality
- Tests for navigation behavior
- Tests for mobile menu interactions
