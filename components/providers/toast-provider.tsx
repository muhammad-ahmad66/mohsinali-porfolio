// components/providers/toast-provider.tsx
'use client';

import * as React from 'react';
import { Toast } from '../ui/toast';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastOptions {
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<
    Array<ToastOptions & { id: string }>
  >([]);

  const toast = React.useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...options, id };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove after duration
    const duration = options.duration || 5000;
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}
