'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Zap,
  Target,
  Award,
  ArrowRight,
  Send,
  CalendarClock,
} from 'lucide-react';
import { aboutData } from '@/data/about';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface AboutProps {
  variant?: 'default' | 'alternate';
}

const iconMap = {
  sparkles: Sparkles,
  zap: Zap,
  target: Target,
  award: Award,
};

export default function About({ variant = 'default' }: AboutProps) {
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-20 lg:py-32 ${bgClass}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary-200/40 blur-3xl dark:bg-secondary-900/20" />
      </div>

      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-stretch lg:gap-20">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300"
              >
                <Sparkles className="h-4 w-4" />
                {aboutData.badge}
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl"
              >
                {aboutData.headline}
              </motion.h2>

              {/* Paragraphs */}
              <div className="mb-10 space-y-4">
                {aboutData.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Highlights - Premium Card Grid */}
            {/* <div className="grid gap-4 sm:grid-cols-2">
              {aboutData.highlights.map((highlight, index) => {
                const iconName = ['sparkles', 'zap', 'target', 'award'][
                  index % 4
                ] as keyof typeof iconMap;
                const Icon = iconMap[iconName];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 dark:hover:shadow-primary-500/5"
                  >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-950 dark:text-primary-400 dark:group-hover:bg-primary-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    ={' '}
                    <p className="font-medium leading-snug text-foreground">
                      {highlight}
                    </p>
                    <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-primary-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-primary-700" />
                  </motion.div>
                );
              })}
            </div> */}
          </motion.div>

          {/* Image Side with CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col"
          >
            {/* Main Image Container */}
            <div className="relative min-h-[500px] flex-1 lg:min-h-full">
              {/* Image wrapper with gradient border effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl border-2 border-transparent bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 p-[2px] shadow-2xl">
                <div className="h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950">
                  <div className="flex h-full items-center justify-center">
                    <Image
                      src={aboutData.image.src}
                      alt={aboutData.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Card - Full Width Over Image Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute inset-x-0 bottom-6 mx-auto w-[90%]"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/20 sm:p-8">
                  {/* Glassmorphism effect overlay */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/80 to-white/60 dark:from-white/5 dark:to-black/20" />

                  {/* Content */}
                  <div className="relative">
                    {/* Heading */}
                    <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
                      Ready to Transform Your Business?
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-sm text-foreground/80 sm:text-base">
                      Let's discuss how we can help you achieve your goals with
                      cutting-edge digital solutions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button
                        size="lg"
                        className="group flex-1 gap-2 bg-primary-600 py-2 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                        asChild
                      >
                        <a
                          href="https://calendly.com/setupmybusinessusa/book-a-call"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CalendarClock className="h-4 w-4" />
                          <span>Book a Call</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="group flex-1 gap-2 border-2 border-white/40 bg-white/20 py-2 text-foreground backdrop-blur-sm hover:bg-white/30 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
                        asChild
                      >
                        <Link href="/contact">
                          <span>Contact Us</span>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Large decorative blobs */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -right-12 -top-12 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-primary-300/30 to-primary-500/30 blur-3xl dark:from-primary-800/20 dark:to-primary-900/20"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="absolute -bottom-12 -left-12 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-secondary-300/30 to-secondary-500/30 blur-3xl dark:from-secondary-800/20 dark:to-secondary-900/20"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
