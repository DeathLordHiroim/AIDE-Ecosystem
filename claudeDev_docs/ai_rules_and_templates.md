# AI Rules and Templates

## Code Generation Rules
1. Always use TypeScript for type safety.
2. Follow React best practices and hooks guidelines.
3. Implement error handling in all API calls.
4. Use Tailwind CSS for styling components.
5. Create reusable components when possible.

## Code Templates

### React Component Template
```typescript
import React from 'react';

interface ComponentProps {
  // Define props here
}

const ComponentName: React.FC<ComponentProps> = ({ /* destructure props */ }) => {
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

### API Route Template
```typescript
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Handle POST request
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```
