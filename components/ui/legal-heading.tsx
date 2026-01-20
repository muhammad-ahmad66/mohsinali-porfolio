// components/ui/legal-heading.tsx
import { ReactNode } from 'react';

interface LegalHeadingProps {
  children: ReactNode;
}

export function LegalHeading({ children }: LegalHeadingProps) {
  return (
    <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
      <span className="h-1 w-8 rounded-full bg-secondary-600" />
      {children}
    </h2>
  );
}
