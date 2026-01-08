// components/ui/toast.tsx
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  title: string;
  description?: string;
  type?: ToastType;
  onClose: () => void;
}

const toastConfig = {
  success: {
    icon: CheckCircle2,
    bg: 'bg-green-50 dark:bg-green-950/50',
    border: 'border-green-200 dark:border-green-800',
    iconColor: 'text-green-600 dark:text-green-400',
    titleColor: 'text-green-900 dark:text-green-100',
    descColor: 'text-green-700 dark:text-green-300',
  },
  error: {
    icon: XCircle,
    bg: 'bg-red-50 dark:bg-red-950/50',
    border: 'border-red-200 dark:border-red-800',
    iconColor: 'text-red-600 dark:text-red-400',
    titleColor: 'text-red-900 dark:text-red-100',
    descColor: 'text-red-700 dark:text-red-300',
  },
  warning: {
    icon: AlertCircle,
    bg: 'bg-yellow-50 dark:bg-yellow-950/50',
    border: 'border-yellow-200 dark:border-yellow-800',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    titleColor: 'text-yellow-900 dark:text-yellow-100',
    descColor: 'text-yellow-700 dark:text-yellow-300',
  },
  info: {
    icon: Info,
    bg: 'bg-blue-50 dark:bg-blue-950/50',
    border: 'border-blue-200 dark:border-blue-800',
    iconColor: 'text-blue-600 dark:text-blue-400',
    titleColor: 'text-blue-900 dark:text-blue-100',
    descColor: 'text-blue-700 dark:text-blue-300',
  },
};

export function Toast({
  title,
  description,
  type = 'info',
  onClose,
}: ToastProps) {
  const config = toastConfig[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={cn(
        'pointer-events-auto relative flex w-full max-w-md items-start gap-3 overflow-hidden rounded-xl border p-4 shadow-lg backdrop-blur-sm',
        config.bg,
        config.border
      )}
    >
      {/* Icon */}
      <Icon className={cn('mt-0.5 h-5 w-5 flex-shrink-0', config.iconColor)} />

      {/* Content */}
      <div className="flex-1 space-y-1">
        <p className={cn('text-sm font-semibold', config.titleColor)}>
          {title}
        </p>
        {description && (
          <p className={cn('text-sm', config.descColor)}>{description}</p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className={cn(
          'flex-shrink-0 rounded-lg p-1 transition-colors hover:bg-black/5 dark:hover:bg-white/5',
          config.iconColor
        )}
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
