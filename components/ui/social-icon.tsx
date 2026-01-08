// components/ui/social-icon.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  label?: string;
  variant?: 'icon-only' | 'with-label' | 'card';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SocialIcon({
  icon: Icon,
  href,
  label,
  variant = 'icon-only',
  size = 'md',
  className,
}: SocialIconProps) {
  const sizeClasses = {
    sm: {
      container: 'h-9 w-9',
      icon: 'h-4 w-4',
      text: 'text-xs',
      padding: 'px-3 py-2',
    },
    md: {
      container: 'h-12 w-12',
      icon: 'h-5 w-5',
      text: 'text-sm',
      padding: 'px-4 py-3',
    },
    lg: {
      container: 'h-14 w-14',
      icon: 'h-6 w-6',
      text: 'text-base',
      padding: 'px-5 py-4',
    },
  };

  const baseClasses =
    'inline-flex items-center justify-center rounded-lg border border-border bg-card transition-all hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950';

  // Icon Only Variant
  if (variant === 'icon-only') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          baseClasses,
          sizeClasses[size].container,
          'group',
          className
        )}
        aria-label={label || 'Social link'}
      >
        <Icon
          className={cn(
            sizeClasses[size].icon,
            'transition-transform group-hover:scale-110'
          )}
        />
      </a>
    );
  }

  // With Label Variant (Horizontal)
  if (variant === 'with-label') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          baseClasses,
          sizeClasses[size].padding,
          'group gap-2',
          className
        )}
      >
        <Icon
          className={cn(
            sizeClasses[size].icon,
            'transition-transform group-hover:scale-110'
          )}
        />
        {label && (
          <span className={cn('font-medium', sizeClasses[size].text)}>
            {label}
          </span>
        )}
      </a>
    );
  }

  // Card Variant (Vertical with label below)
  if (variant === 'card') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/10',
          className
        )}
      >
        <div
          className={cn(
            'flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 transition-all group-hover:scale-110 group-hover:from-primary-600 group-hover:to-secondary-600 dark:from-primary-950 dark:to-primary-900',
            sizeClasses[size].container
          )}
        >
          <Icon
            className={cn(
              sizeClasses[size].icon,
              'text-primary-600 group-hover:text-white dark:text-primary-400'
            )}
          />
        </div>
        {label && (
          <span
            className={cn(
              'font-semibold text-foreground',
              sizeClasses[size].text
            )}
          >
            {label}
          </span>
        )}
      </a>
    );
  }

  return null;
}
