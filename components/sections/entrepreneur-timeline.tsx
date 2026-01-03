// components/sections/entrepreneur-timeline.tsx
'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { entrepreneurData } from '@/data/entrepreneur';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Mouse,
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function EntrepreneurTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  // Check scroll position
  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  // Scroll functions
  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 400;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-secondary-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-300/30 blur-3xl" />
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-secondary-50 px-4 py-2 text-sm font-semibold text-secondary-700 shadow-sm dark:border-secondary-800 dark:bg-secondary-950 dark:text-secondary-300">
            <Calendar className="h-4 w-4" />
            Journey Timeline
          </div>

          <h2 className="mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            A Decade of Innovation
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From first digital startup to AI-driven products - a journey of
            continuous growth and innovation
          </p>

          {/* Scroll hints with icons */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mouse className="h-5 w-5 animate-bounce" />
              <span>Scroll or use arrows to navigate</span>
            </div>

            {/* Desktop navigation buttons */}
            <div className="hidden items-center gap-3 lg:flex">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"
            style={{ scaleX: scrollXProgress, transformOrigin: '0%' }}
          />
        </div>

        {/* Scroll Container with Navigation Buttons */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-background shadow-xl transition-all hover:scale-110 hover:border-primary-500 disabled:opacity-0 lg:flex ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-background shadow-xl transition-all hover:scale-110 hover:border-primary-500 disabled:opacity-0 lg:flex ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={containerRef}
            className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-500/30 hover:scrollbar-thumb-primary-500/50 overflow-x-auto overflow-y-hidden"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgb(59 127 204 / 0.3) transparent',
            }}
          >
            {/* Timeline Container */}
            <div className="relative inline-flex min-w-max gap-8 py-20 pl-8 pr-8">
              {/* Timeline Line */}
              <div className="absolute left-8 right-8 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-primary-500 via-secondary-500 via-50% to-primary-500" />

              {/* Timeline Items */}
              {entrepreneurData.timeline.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="relative flex w-[340px] flex-col"
                  >
                    {/* Timeline structure */}
                    <div className="flex h-full flex-col">
                      {/* Top card (for even indices) or spacer */}
                      <div className={`flex-1 ${isEven ? 'pb-8' : ''}`}>
                        {isEven && (
                          <motion.div
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                          >
                            <div className="group relative h-full overflow-hidden rounded-2xl border-2 border-border bg-card shadow-xl transition-all hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/30">
                              {/* Gradient overlay */}
                              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                              {/* Top gradient line */}
                              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />

                              <div className="flex h-full flex-col p-6">
                                {/* Year Badge */}
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  className="mb-3 inline-flex w-fit rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-1.5 text-lg font-bold text-white shadow-lg"
                                >
                                  {item.year}
                                </motion.div>

                                {/* Milestone Tag */}
                                <div className="mb-3 inline-flex w-fit rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
                                  {item.milestone}
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-lg font-bold leading-tight text-foreground">
                                  {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>

                              {/* Bottom corner glow */}
                              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Timeline Dot - Centered */}
                      <div className="relative z-10 flex items-center justify-center py-4">
                        {/* Connector Lines */}
                        {isEven && (
                          <div className="absolute bottom-full h-8 w-0.5 bg-gradient-to-b from-primary-500 to-transparent" />
                        )}
                        {!isEven && (
                          <div className="absolute top-full h-8 w-0.5 bg-gradient-to-t from-primary-500 to-transparent" />
                        )}

                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary-500 to-secondary-500 shadow-xl"
                        >
                          <TrendingUp className="h-7 w-7 text-white" />
                        </motion.div>

                        {/* Pulsing ring effect */}
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className="absolute inset-0 m-auto h-16 w-16 rounded-full border-2 border-primary-500"
                        />
                      </div>

                      {/* Bottom card (for odd indices) or spacer */}
                      <div className={`flex-1 ${!isEven ? 'pt-8' : ''}`}>
                        {!isEven && (
                          <motion.div
                            whileHover={{ y: 8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                          >
                            <div className="group relative h-full overflow-hidden rounded-2xl border-2 border-border bg-card shadow-xl transition-all hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/30">
                              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />

                              <div className="flex h-full flex-col p-6">
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  className="mb-3 inline-flex w-fit rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-1.5 text-lg font-bold text-white shadow-lg"
                                >
                                  {item.year}
                                </motion.div>

                                <div className="mb-3 inline-flex w-fit rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
                                  {item.milestone}
                                </div>

                                <h3 className="mb-3 text-lg font-bold leading-tight text-foreground">
                                  {item.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>

                              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* End marker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex w-[340px] items-center justify-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-dashed border-primary-500 bg-background">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <TrendingUp className="h-8 w-8 text-primary-500" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-20 whitespace-nowrap text-center">
                  <p className="text-lg font-bold text-foreground">
                    To Be Continued...
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Building the future
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation hint */}
        <div className="mt-8 text-center text-xs text-muted-foreground lg:hidden">
          ← Swipe to navigate →
        </div>
      </Container>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
          margin: 0 40px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgb(59 127 204 / 0.3);
          border-radius: 10px;
          transition: background 0.3s;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgb(59 127 204 / 0.5);
        }
      `}</style>
    </section>
  );
}
