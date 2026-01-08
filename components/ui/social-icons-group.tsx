// components/ui/social-icons-group.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';
import { SocialIcon, SocialIconProps } from './social-icon';

export interface SocialIconsGroupProps {
  icons: Omit<SocialIconProps, 'size' | 'variant'>[];
  variant?: 'icon-only' | 'with-label' | 'card';
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'grid-2' | 'grid-3' | 'grid-4';
  className?: string;
}

export function SocialIconsGroup({
  icons,
  variant = 'icon-only',
  size = 'md',
  layout = 'horizontal',
  className,
}: SocialIconsGroupProps) {
  const layoutClasses = {
    horizontal: 'flex flex-wrap gap-3',
    'grid-2': 'grid grid-cols-2 gap-3',
    'grid-3': 'grid grid-cols-2 gap-3 sm:grid-cols-3',
    'grid-4': 'grid grid-cols-2 gap-3 sm:grid-cols-4',
  };

  return (
    <div className={cn(layoutClasses[layout], className)}>
      {icons.map((iconProps, index) => (
        <SocialIcon key={index} {...iconProps} variant={variant} size={size} />
      ))}
    </div>
  );
}
