// components/sections/entrepreneur-highlights.tsx
'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { entrepreneurData } from '@/data/entrepreneur';
import { motion } from 'framer-motion';
import { Rocket, Building2, Users, Layers } from 'lucide-react';

const iconMap: Record<string, any> = {
  rocket: Rocket,
  building: Building2,
  users: Users,
  layers: Layers,
};

export default function EntrepreneurHighlights() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-300/30 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-secondary-300/30 blur-3xl" />
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
          <h2 className="mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Key Achievements
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A decade of building, scaling, and transforming ideas into
            successful ventures
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {entrepreneurData.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];

            return (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative h-full overflow-hidden border border-border transition-all duration-300 hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/20">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Top gradient accent */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg dark:from-primary-950 dark:to-primary-900">
                      <Icon className="h-8 w-8 text-primary-600 transition-all duration-500 group-hover:scale-110 dark:text-primary-400" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold leading-tight text-foreground">
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>

                  {/* Bottom corner glow */}
                  <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
