# Hero Component

An adaptive hero section component that provides different layouts for desktop and mobile views.

## Features
- Responsive design with desktop and mobile variants
- Animated content using Framer Motion
- Call-to-action buttons
- Gradient text effects
- Memoized for performance

## Usage
```tsx
import { Hero } from '@/modules/main/components/adaptive/Hero';

const Page = () => (
  <div>
    <Hero />
    {/* Other content */}
  </div>
);
```

## Dependencies
- framer-motion
- lucide-react
- @/modules/shared/ui/button
- @/modules/shared/hoc/withAdaptive
- @/modules/shared/hoc/withMemoization

## Structure
- Desktop: Centered layout with larger text and horizontal buttons
- Mobile: Compact layout with smaller text and stacked buttons



// Hero/README.md
## Animations

The Hero component uses three main animations:
1. Title Animation: Fade in and slide down
2. Description Animation: Simple fade in
3. Buttons Animation: Fade in and slide up

Each animation has its own timing and delay for a smooth sequence.