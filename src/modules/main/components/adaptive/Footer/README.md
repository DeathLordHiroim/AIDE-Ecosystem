# Footer Component

## Overview
An adaptive footer component that provides different layouts for desktop and mobile views, with collapsible sections in mobile view and smooth animations.

## Features
- Responsive design with dedicated Desktop and Mobile versions
- Collapsible sections in mobile view with smooth animations
- Icon support for footer links
- Accessible with ARIA attributes
- Performance optimized with memoization and lazy loading
- Customizable through className props

## Technical Details
- Uses withAdaptive HOC for responsive behavior
- Uses withMemoization HOC for performance optimization
- Implements lazy loading with next/dynamic
- Uses framer-motion for animations
- Follows TypeScript best practices
- Includes comprehensive test coverage

## Usage
```tsx
import Footer from '@/modules/main/components/adaptive/Footer';

function Page() {
  return <Footer className="custom-class" />;
}
```

## Props
| Prop | Type | Description |
|------|------|-------------|
| className | string? | Optional CSS class name for custom styling |

## Components Structure
- Desktop: Grid layout with static sections
- Mobile: Stack layout with collapsible sections
- FooterSection: Shared component for section display

## Accessibility
- Uses semantic HTML structure
- Includes ARIA labels and roles
- Maintains proper heading hierarchy
- Ensures keyboard navigation support
- Proper ARIA states for collapsible sections

## Performance Considerations
- Implements code splitting via dynamic imports
- Uses memoization to prevent unnecessary re-renders
- Optimizes animation performance with framer-motion
- Lazy loads icons and components

## Dependencies
- framer-motion
- lucide-react (for icons)
- next/dynamic
- @/modules/shared/hoc/withAdaptive
- @/modules/shared/hoc/withMemoization

## Testing
- Unit tests for both Desktop and Mobile versions
- Tests for FooterSection component
- Tests for collapsible functionality
- Tests for accessibility features
