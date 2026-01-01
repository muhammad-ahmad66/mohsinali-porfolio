// components/ui/textarea.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(
            'border-input bg-background flex min-h-[120px] w-full rounded-xl border px-4 py-3 text-sm transition-all',
            'placeholder:text-muted-foreground',
            'focus:border-primary-500 focus:ring-primary-500/20 focus:outline-none focus:ring-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error &&
              'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
