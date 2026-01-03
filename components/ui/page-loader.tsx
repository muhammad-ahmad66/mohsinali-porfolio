// components/ui/page-loader.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { LoadingSpinner } from './loading-spinner';

interface PageLoaderProps {
  isLoading: boolean;
}

export function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Loading Spinner */}
            <LoadingSpinner />

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-lg font-semibold text-foreground">
                Loading...
              </p>

              {/* Animated dots */}
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-2 w-2 rounded-full bg-primary-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
