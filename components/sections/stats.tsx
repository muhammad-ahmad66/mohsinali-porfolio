// // components/sections/stats.tsx
// import { Container } from '@/components/ui/container';
// import { stats } from '@/data/stats';

// interface StatsProps {
//   variant?: 'default' | 'alternate';
// }

// export default function Stats({ variant = 'default' }: StatsProps) {
//   const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

//   return (
//     <section className={`py-20 lg:py-32 ${bgClass}`}>
//       <Container>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {stats.map((stat) => (
//             <div key={stat.id} className="text-center">
//               <div className="text-primary-600 dark:text-primary-400 mb-2 text-4xl font-bold lg:text-5xl">
//                 {stat.value}
//               </div>
//               <div className="text-foreground mb-1 text-lg font-semibold">
//                 {stat.label}
//               </div>
//               <div className="text-muted-foreground text-sm">
//                 {stat.description}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

// components/sections/stats.tsx
'use client';

import { Container } from '@/components/ui/container';
import { stats } from '@/data/stats';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Globe, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatsProps {
  variant?: 'default' | 'alternate';
}

const iconMap: Record<string, any> = {
  trending: TrendingUp,
  users: Users,
  award: Award,
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
  const numericValue = parseInt(stat.value.replace(/\D/g, ''));
  const suffix = stat.value.replace(/[0-9]/g, '');
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
      <div className="border-border from-card via-card to-muted/30 hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10 relative h-full overflow-hidden rounded-3xl border bg-gradient-to-br p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
        {/* Animated gradient background on hover */}
        <div className="from-primary-500/10 via-secondary-500/10 to-primary-500/10 absolute inset-0 -z-10 bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top decorative line */}
        <div className="from-primary-500 via-secondary-500 to-primary-500 absolute left-0 right-0 top-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Icon container */}
        <div className="from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg">
          <Icon className="text-primary-600 dark:text-primary-400 h-7 w-7" />
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
          <Sparkles className="text-secondary-500 h-5 w-5" />
        </motion.div>

        {/* Number with counter animation */}
        <div className="mb-3">
          <span className="from-primary-600 via-primary-500 to-secondary-600 bg-gradient-to-br bg-clip-text text-5xl font-black tracking-tight text-transparent lg:text-6xl">
            {count}
            {suffix}
          </span>
        </div>

        {/* Label */}
        <h3 className="text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-2 text-xl font-bold transition-colors duration-300">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {stat.description}
        </p>

        {/* Bottom decorative corner */}
        <div className="from-primary-500/20 to-secondary-500/20 absolute bottom-0 right-0 h-24 w-24 translate-x-12 translate-y-12 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
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
        <div className="bg-primary-300/20 dark:bg-primary-800/10 absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-secondary-300/20 dark:bg-secondary-800/10 absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl" />
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
          <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm">
            <Award className="h-4 w-4" />
            Driving Trust Through Innovation
          </div>

          <h2 className="from-foreground via-foreground to-foreground/70 mb-4 bg-gradient-to-br bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
            Our Impact & Milestones
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Empowering businesses globally with scalable, performance-driven
            digital solutions tailored for long-term growth.
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
          className="border-border mt-16 flex flex-wrap items-center justify-center gap-8 border-t pt-12"
        >
          {[
            '100% Satisfaction',
            'ISO Certified',
            '24/7 Support',
            'Money Back Guarantee',
          ].map((badge, index) => (
            <div
              key={index}
              className="border-border bg-card text-muted-foreground hover:border-primary-500 hover:text-foreground flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-all"
            >
              <div className="bg-primary-500 h-2 w-2 rounded-full" />
              {badge}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
