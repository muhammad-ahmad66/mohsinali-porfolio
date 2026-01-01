// components/ui/button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'destructive'
    | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  asChild?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      icon: Icon,
      iconPosition = 'left',
      fullWidth = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap';

    const variantStyles = {
      primary:
        'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 focus-visible:ring-primary-500 active:scale-[0.98] dark:bg-primary-600 dark:hover:bg-primary-700',
      secondary:
        'bg-secondary-600 text-white shadow-lg shadow-secondary-600/25 hover:bg-secondary-700 hover:shadow-xl hover:shadow-secondary-600/30 focus-visible:ring-secondary-500 active:scale-[0.98] dark:bg-secondary-600 dark:hover:bg-secondary-700',
      outline:
        'border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 hover:border-primary-700 focus-visible:ring-primary-500 active:scale-[0.98] dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-950/50 dark:hover:border-primary-400',
      ghost:
        'text-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.98]',
      destructive:
        'bg-red-600 text-white shadow-lg shadow-red-600/25 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30 focus-visible:ring-red-500 active:scale-[0.98]',
      link: 'text-primary-600 underline-offset-4 hover:underline dark:text-primary-400',
    };

    const sizeStyles = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-5 text-base',
      lg: 'h-12 px-6 text-base',
      xl: 'h-14 px-8 text-lg',
    };

    const iconSizes = {
      sm: 'h-4 w-4',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
      xl: 'h-5 w-5',
    };

    return (
      <Comp
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        disabled={!asChild ? disabled || loading : undefined}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && (
              <svg
                className={cn('animate-spin', iconSizes[size])}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}

            {!loading && Icon && iconPosition === 'left' && (
              <Icon className={iconSizes[size]} />
            )}

            {children}

            {!loading && Icon && iconPosition === 'right' && (
              <Icon className={iconSizes[size]} />
            )}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };
