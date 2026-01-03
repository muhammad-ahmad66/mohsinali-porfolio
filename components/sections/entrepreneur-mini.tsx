// components/sections/entrepreneur-mini.tsx
'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { entrepreneurData } from '@/data/entrepreneur';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  ArrowRight,
  Rocket,
  Building2,
  Users,
  Layers,
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  rocket: Rocket,
  building: Building2,
  users: Users,
  layers: Layers,
};

interface EntrepreneurMiniProps {
  variant?: 'default' | 'alternate';
}

export default function EntrepreneurMini({
  variant = 'default',
}: EntrepreneurMiniProps) {
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section className={`relative overflow-hidden py-20 lg:py-32 ${bgClass}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-300/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary-300/30 blur-3xl" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
            <TrendingUp className="h-4 w-4" />
            Entrepreneurial Journey
          </div>

          <h2 className="mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Entrepreneur & Startup Builder
            <br />
            <span className="bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text">
              Since 2015
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {entrepreneurData.description.slice(0, 200)}...
          </p>
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {entrepreneurData.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];

            return (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full overflow-hidden border border-border transition-all hover:border-primary-500 hover:shadow-lg">
                  <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 transition-opacity group-hover:opacity-100" />

                  <CardContent className="p-6">
                    <Icon className="mb-3 h-8 w-8 text-primary-600 dark:text-primary-400" />
                    <h3 className="mb-1 text-base font-bold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button size="lg" className="gap-2 shadow-lg" asChild>
            <Link href="/entrepreneur">
              View Full Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
