// components/sections/stats.tsx
'use client';

import { Container } from '@/components/ui/container';
import { stats } from '@/data/stats';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Award,
  Globe,
  Sparkles,
  History,
  CircleCheck,
  Handshake,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatsProps {
  variant?: 'default' | 'alternate';
}

// import { History, CircleCheck, Handshake, Globe } from 'lucide-react';

export const iconMap: Record<string, any> = {
  history: History,
  'check-circle': CircleCheck,
  handshake: Handshake,
  globe: Globe,
};

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, start, hasAnimated]);

  return [count, () => setHasAnimated(true)] as const;
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const Icon = iconMap[stat.icon] || TrendingUp;
  const numericValue = parseInt(stat.value?.replace(/\D/g, ''));
  const suffix = stat.value?.replace(/[0-9]/g, '');
  const [count, startAnimation] = useCountUp(numericValue);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onViewportEnter={() => startAnimation()}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/30 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10">
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-primary-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top decorative line */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Icon container */}
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg dark:from-primary-950 dark:to-secondary-950">
          <Icon className="h-7 w-7 text-primary-600 dark:text-primary-400" />
        </div>

        {/* Floating sparkle decoration */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-6 top-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <Sparkles className="h-5 w-5 text-secondary-500" />
        </motion.div>

        {/* Number with counter animation */}
        <div className="mb-3">
          <span className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-5xl font-black tracking-tight text-transparent lg:text-6xl">
            {count ? count : ''}
            {suffix ? suffix : ''}
          </span>
        </div>

        {/* Label */}
        <h3 className="mb-2 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {stat.label}
        </h3>

        {/* <Rocket className="absolute left-4 top-4 h-6 w-6 text-primary-300 opacity-20" /> */}

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {stat.description}
        </p>

        {/* Bottom decorative corner */}
        <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-12 translate-y-12 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}

export default function Stats({ variant = 'default' }: StatsProps) {
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section className={`relative overflow-hidden py-20 lg:py-32 ${bgClass}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-300/20 blur-3xl dark:bg-primary-800/10" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-secondary-300/20 blur-3xl dark:bg-secondary-800/10" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
            <Award className="h-4 w-4" />
            Driving Trust Through Innovation
          </div>

          <h2 className="mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text pb-1 text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Engineering Impact at Scale
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Delivering measurable impact through intelligent systems,
            automation, and scalable software solutions built for long-term
            growth.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3 border-t border-border pt-12 md:gap-8"
        >
          {[
            'Long-Term Client Partnerships',
            'Production-Grade Systems',
            'Security & Performance Focused',
            'Engineering-First Approach',
            '24/7 System Support',
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 rounded-full border border-border bg-card px-2 py-1.5 text-xs font-medium text-muted-foreground shadow-sm transition-all hover:border-primary-500 hover:text-foreground md:gap-2 md:px-4 md:py-2 md:text-sm"
            >
              <div className="h-2 w-2 rounded-full bg-primary-500" />
              {badge}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
