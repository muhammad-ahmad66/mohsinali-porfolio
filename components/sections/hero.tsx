// components/sections/hero.tsx
'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { heroData } from '@/data/hero';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  UserCircle,
  BadgeCheck,
  Target,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/data/social-links';

const capabilities = [
  'Custom Software Development',
  'Automation & Workflow Systems',
  'Web Platform Engineering',
  'AI Tools & Intelligent Systems',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/30 via-background to-secondary-50/30 py-12 dark:from-primary-950/10 dark:via-background dark:to-secondary-950/10 sm:py-16 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-secondary-400/20 to-primary-400/20 blur-3xl"
        />
      </div>

      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700 shadow-sm dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
            >
              <BadgeCheck className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{heroData.badge.text}</span>
            </motion.div>

            {/* Main Heading */}
            {/* <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4 text-2xl font-bold leading-tight tracking-tight sm:mb-6 sm:text-2xl md:text-5xl md:leading-tight"
            >
              <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text font-normal text-transparent">
                {heroData.headline}
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
                {heroData.highlightedText}
              </span>
            </motion.h1> */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:text-4.5xl mb-6 text-3xl font-light leading-[1.2] tracking-tight sm:text-5xl md:leading-[1.2]"
            >
              <span className="text-foreground/60">
                Engineering Intelligent Systems That
              </span>
              <br />
              <span className="text-foreground/60">for </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-semibold text-transparent">
                  Drive Results.
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-primary-600 to-secondary-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{ originX: 0 }}
                />
              </span>
              {/* <span className="text-foreground/60">.</span> */}
            </motion.h1>
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg"
            >
              {/* {heroData.description} */}
              AI Engineer and SaaS builder designing automation systems,
              intelligent platforms, and data-driven solutions that scale
              businesses.
            </motion.p>

            {/* Capabilities List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6 grid gap-2 sm:mb-8 sm:grid-cols-2 sm:gap-3"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary-600 dark:text-primary-400 sm:h-5 sm:w-5" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Button size="lg" className="shadow-sm" asChild>
                <Link
                  href={
                    socialLinks.find((link) => link.name == 'Schedule Call')
                      ?.href || '#'
                  }
                >
                  Schedule a Strategy Call
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group gap-2 shadow-lg"
                asChild
              >
                <Link href="/#projects">
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators - Fully Responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:pt-8"
            >
              {/* Clients */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 sm:-space-x-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background sm:h-10 sm:w-10">
                    <Image
                      src="/images/clients/man-1.webp"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background sm:h-10 sm:w-10">
                    <Image
                      src="/images/clients/man-2.webp"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background sm:h-10 sm:w-10">
                    <Image
                      src="/images/clients/man-3.webp"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-foreground">
                    500+ Clients
                  </div>
                  <div className="text-muted-foreground">Worldwide</div>
                </div>
              </div>

              {/* Divider - Hidden on mobile */}
              <div className="hidden h-8 w-px bg-border sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-950 sm:h-10 sm:w-10">
                  <Globe className="h-4 w-4 text-primary-600 dark:text-primary-400 sm:h-5 sm:w-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-foreground">
                    Trusted by clients in
                  </div>
                  <div className="text-muted-foreground">
                    USA, UK, Canada & Europe
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            {/* Image Container with Fixed Height */}
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px]">
              {/* Main Image */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-border shadow-2xl sm:rounded-3xl">
                <Image
                  src="/images/workspace.webp"
                  alt="Professional Workspace"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-secondary-600/20" />
              </div>

              {/* Floating Badge - Top Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -left-2 -top-2 z-20 sm:-left-4 sm:-top-4"
              >
                <div className="flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1.5 shadow-xl backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2">
                  <Sparkles className="h-3 w-3 text-primary-600 dark:text-primary-400 sm:h-4 sm:w-4" />
                  <span className="text-xs font-semibold text-foreground sm:text-sm">
                    AI Engineer & Startup Builder Since 2015{' '}
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-2 -right-2 z-20 sm:-bottom-4 sm:-right-4"
              >
                <div className="rounded-xl border border-border bg-card p-2.5 shadow-xl backdrop-blur-sm sm:rounded-2xl sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 sm:h-12 sm:w-12 sm:rounded-xl">
                      <Target className="h-4 w-4 text-white sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground sm:text-sm">
                        Engineering With Precision.
                      </div>
                      <div className="text-[10px] text-muted-foreground sm:text-xs">
                        A disciplined, data-informed approach to building
                        scalable systems.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom decorative blur */}
              <div className="absolute -bottom-4 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500/30 to-secondary-500/30 blur-3xl sm:-bottom-8 sm:h-32" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
