// components/sections/philosophy.tsx
'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

interface PhilosophyProps {
  variant?: 'default' | 'alternate';
}

export default function Philosophy({ variant = 'default' }: PhilosophyProps) {
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section className={`relative overflow-hidden py-20 lg:py-32 ${bgClass}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary-400/20 via-secondary-400/20 to-primary-400/20 blur-3xl" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-primary-500"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-secondary-500"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-primary-500"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute bottom-1/4 right-1/3 h-2 w-2 rounded-full bg-secondary-500"
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Main Philosophy Card */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card shadow-2xl transition-all duration-500 hover:border-primary-500 hover:shadow-primary-500/20">
            {/* Animated gradient background */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-primary-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ backgroundSize: '200% 200%' }}
            />

            {/* Top decorative line with gradient */}
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

            <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              {/* Floating decorative quotes */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-8 top-8 opacity-20"
              >
                <Quote className="h-16 w-16 text-primary-500 sm:h-20 sm:w-20" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 3,
                }}
                className="absolute bottom-8 right-8 rotate-180 opacity-20"
              >
                <Quote className="h-16 w-16 text-secondary-500 sm:h-20 sm:w-20" />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8 flex justify-center"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
                  <Sparkles className="h-4 w-4" />
                  Core Philosophy
                </div>
              </motion.div>

              {/* Main Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 text-center"
              >
                <blockquote className="space-y-4">
                  <p className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-5xl">
                    <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                      I build{' '}
                    </span>
                    <span className="relative inline-block bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
                      systems that scale
                      {/* Underline decoration */}
                      <motion.span
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      />
                    </span>
                    <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                      {' '}
                      — not{' '}
                    </span>
                    <span className="relative inline-block bg-gradient-to-br from-foreground/60 to-foreground/40 bg-clip-text text-transparent">
                      services that expire
                      {/* Strike-through decoration */}
                      <motion.span
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="absolute left-0 right-0 top-1/2 h-0.5 origin-left bg-red-500/60"
                      />
                    </span>
                    <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                      .
                    </span>
                  </p>
                </blockquote>
              </motion.div>

              {/* Bottom decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                className="mt-12 flex justify-center gap-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
                <div className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
              </motion.div>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent" />
          </div>

          {/* Floating glow effect */}
          <div className="absolute inset-0 -z-10 blur-3xl">
            <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary-400/20" />
            <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-secondary-400/20" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
