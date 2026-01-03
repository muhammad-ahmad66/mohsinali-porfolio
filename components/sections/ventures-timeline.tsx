// components/sections/ventures-timeline.tsx
'use client';

import { Container } from '@/components/ui/container';
import { ventures } from '@/data/ventures';
import { motion } from 'framer-motion';
import { Rocket, ExternalLink, Sparkles } from 'lucide-react';

interface VenturesTimelineProps {
  variant?: 'default' | 'alternate';
}

export default function VenturesTimeline({
  variant = 'default',
}: VenturesTimelineProps) {
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section className={`relative overflow-hidden py-20 lg:py-32 ${bgClass}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-secondary-400/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary-400/30 blur-3xl" />
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-secondary-50 px-4 py-2 text-sm font-semibold text-secondary-700 shadow-sm dark:border-secondary-800 dark:bg-secondary-950 dark:text-secondary-300">
            <Rocket className="h-4 w-4" />
            Journey & Innovation
          </div>

          <h2 className="mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Brands & Ventures
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A timeline of innovation, growth, and entrepreneurial excellence
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />

            {/* Timeline Items */}
            <div className="relative flex justify-between">
              {ventures.map((venture, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={venture.id}
                    initial={{ opacity: 0, y: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative flex flex-1 flex-col items-center"
                  >
                    {/* Connector Line */}
                    <div
                      className={`absolute ${isEven ? 'top-0' : 'bottom-0'} h-12 w-0.5 bg-gradient-to-b from-primary-500 to-transparent ${isEven ? '' : 'rotate-180'}`}
                    />

                    {/* Timeline Dot */}
                    <div
                      className={`relative z-10 ${isEven ? 'order-2' : 'order-1'} my-4`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`${isEven ? 'order-1 mb-16' : 'order-2 mt-16'} w-full max-w-xs`}
                    >
                      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/20">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                        {/* Year Badge */}
                        <div className="mb-3 inline-flex rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-3 py-1 text-xs font-bold text-white">
                          {venture.year}
                        </div>

                        {/* Category Badge */}
                        <div className="mb-2 ml-1.5 inline-flex rounded-full border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                          {venture.category}
                        </div>

                        {/* Venture Name */}
                        <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-foreground">
                          {venture.name}
                          {venture.url && (
                            <a
                              href={venture.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 transition-transform hover:scale-110 dark:text-primary-400"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </h3>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {venture.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative space-y-8 border-l-2 border-primary-500 pl-8">
              {ventures.map((venture, index) => (
                <motion.div
                  key={venture.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary-500 to-secondary-500">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:border-primary-500 hover:shadow-xl">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="mb-3 inline-flex rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-3 py-1 text-xs font-bold text-white">
                      {venture.year}
                    </div>

                    <div className="mb-2 inline-flex rounded-full border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {venture.category}
                    </div>

                    <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-foreground">
                      {venture.name}
                      {venture.url && (
                        <a
                          href={venture.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 transition-transform hover:scale-110 dark:text-primary-400"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {venture.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
