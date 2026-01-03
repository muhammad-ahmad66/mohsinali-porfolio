// components/sections/entrepreneur-hero.tsx
'use client';

import { Container } from '@/components/ui/container';
import { entrepreneurData } from '@/data/entrepreneur';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';

export default function EntrepreneurHero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary-200 bg-primary-50 px-5 py-2.5 text-sm font-bold text-primary-700 shadow-lg dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
              <TrendingUp className="h-5 w-5" />
              Entrepreneurial Journey
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Entrepreneur &
              </span>
              <br />
              <span className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
                Startup Builder
              </span>
              <br />
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Since 2015
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 text-center text-xl font-medium text-muted-foreground lg:text-2xl"
          >
            {entrepreneurData.tagline}
          </motion.p>

          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl lg:p-12"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />

            {/* Top decorative line */}
            <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />

            {/* Content */}
            <div className="relative">
              <Sparkles className="mb-4 h-8 w-8 text-primary-600 dark:text-primary-400" />
              <p className="text-lg leading-relaxed text-foreground/90">
                {entrepreneurData.description}
              </p>
            </div>

            {/* Bottom decorative corner */}
            <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 blur-2xl" />
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex justify-center gap-2"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
