// components/sections/services.tsx
'use client';

import { Container } from '@/components/ui/container';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServicesProps {
  variant?: 'default' | 'alternate';
  limit?: number;
  featured?: boolean;
}

export default function Services({
  variant = 'default',
  limit,
  featured = false,
}: ServicesProps) {
  const displayServices = limit ? services.slice(0, limit) : services;
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section
      id="services"
      className={`relative overflow-hidden py-20 lg:py-32 ${bgClass}`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary-300/30 blur-3xl dark:bg-primary-800/20" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary-300/30 blur-3xl dark:bg-secondary-800/20" />
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
            Core Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Integrated digital systems engineered for performance, scalability,
            and growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative flex h-full flex-col overflow-hidden border border-border transition-all duration-300 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:border-primary-700 dark:hover:shadow-primary-500/5">
                  {/* Top gradient accent */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <CardHeader className="space-y-4 pb-4">
                    {/* Icon with premium styling */}
                    <div className="relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg dark:from-primary-950 dark:to-primary-900">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                      <Icon className="relative z-10 h-8 w-8 text-primary-600 transition-all duration-500 group-hover:scale-110 dark:text-primary-400" />
                    </div>

                    {/* Title and Description */}
                    <div>
                      <CardTitle className="mb-2 text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {service.shortDescription}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col justify-between space-y-6 pb-6">
                    {/* Deliverables Section */}
                    <div>
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables
                          .slice(0, 4)
                          .map((deliverable, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                              <span className="text-foreground/80">
                                {deliverable}
                              </span>
                            </li>
                          ))}
                        {service.deliverables.length > 4 && (
                          <li className="text-sm text-muted-foreground">
                            + {service.deliverables.length - 4} more
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="group/btn w-full justify-between border-2 font-semibold transition-all hover:border-primary-500 hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-950 dark:hover:text-primary-300"
                      asChild
                    >
                      <Link href="/contact">
                        <span>{service.cta}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
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
