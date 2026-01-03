// components/ui/loading-spinner.tsx
'use client';

import { motion } from 'framer-motion';

export function LoadingSpinner() {
  return (
    <div className="relative h-20 w-20">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-primary-200 dark:border-primary-900"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
      </motion.div>

      {/* Middle pulsing circle */}
      <motion.div
        className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Inner spinning dot */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="h-3 w-3 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600" />
      </motion.div>
    </div>
  );
}
