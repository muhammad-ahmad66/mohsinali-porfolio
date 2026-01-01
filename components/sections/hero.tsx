// // components/sections/hero.tsx (Updated with new Button)
// import { Container } from '@/components/ui/container';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Sparkles } from 'lucide-react';
// import Link from 'next/link';
// import { heroData } from '@/data/hero';

// export default function Hero() {
//   return (
//     <section className="from-primary-50 via-background to-secondary-50 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20 relative overflow-hidden bg-gradient-to-br py-20 lg:py-32">
//       <Container>
//         <div className="mx-auto max-w-4xl text-center">
//           {/* Badge */}
//           <div className="border-border bg-card mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm">
//             <Sparkles className="text-primary-500 h-4 w-4" />
//             <span className="text-muted-foreground">{heroData.badge.text}</span>
//           </div>

//           {/* Main heading */}
//           <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
//             {heroData.headline}{' '}
//             <span className="from-primary-600 to-secondary-600 bg-gradient-to-r bg-clip-text text-transparent">
//               {heroData.highlightedText}
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="text-muted-foreground mb-10 text-lg sm:text-xl lg:text-2xl">
//             {heroData.description}
//           </p>

//           {/* CTA Buttons - UPDATED */}
//           <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <Button size="lg" asChild>
//               <Link href="/projects">
//                 View My Work <ArrowRight className="h-5 w-5" />
//               </Link>
//             </Button>
//             <Button size="lg" variant="outline" asChild>
//               <Link href={heroData.cta.secondary.href}>
//                 {heroData.cta.secondary.text}
//               </Link>
//             </Button>
//           </div>

//           {/* Client Logos */}
//           <div className="mt-16">
//             <p className="text-muted-foreground mb-6 text-sm font-medium">
//               {heroData.clients.heading}
//             </p>
//             <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0">
//               {heroData.clients.logos.map((client) => (
//                 <div
//                   key={client.name}
//                   className="text-foreground/40 text-2xl font-bold"
//                 >
//                   {client.display}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// components/sections/hero.tsx
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Users,
  Trophy,
  Clock,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { heroData } from '@/data/hero';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Trophy, value: '98%', label: 'Success Rate' },
  { icon: Clock, value: '24/7', label: 'Support' },
  { icon: TrendingUp, value: '50%', label: 'Growth' },
];

// Simple inline Card components
const Card = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`border-border bg-card rounded-lg border shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`p-4 ${className}`}>{children}</div>;

export default function Hero() {
  return (
    <section className="from-primary-50 via-background to-secondary-50 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20 relative overflow-hidden bg-gradient-to-br py-20 lg:py-32">
      {/* Background Effects */}
      <div className="dark:bg-grid-white/10 bg-grid-black/10 bg-grid-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="from-background/50 to-background/30 absolute inset-0 bg-gradient-to-t via-transparent" />

      {/* Animated Orbs */}
      <div className="from-primary-500/20 to-secondary-500/20 absolute -left-20 -top-20 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r blur-3xl" />
      <div className="from-primary-500/20 to-accent-500/20 absolute -bottom-20 -right-20 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="select-text">
            {/* Badge */}
            <div className="border-border bg-card mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm">
              <Sparkles className="text-primary h-4 w-4" />
              <span className="text-muted-foreground">
                {heroData.badge.text}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mb-6 select-text text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {heroData.headline}{' '}
              <span className="from-primary-600 to-secondary-600 bg-gradient-to-r bg-clip-text text-transparent">
                {heroData.highlightedText}
              </span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground mb-10 select-text text-lg sm:text-xl lg:text-2xl">
              {heroData.description}
            </p>

            {/* CTA Buttons - FIXED: Wrap icon in span or remove direct icon child */}
            <div className="mb-16 flex flex-col items-start gap-4 sm:flex-row">
              <Button size="lg" asChild className="relative z-10">
                <Link href="/projects">
                  <span className="flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="relative z-10"
              >
                <Link href={heroData.cta.secondary.href}>
                  {heroData.cta.secondary.text}
                </Link>
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((StatIcon, index) => (
                <Card
                  key={index}
                  className="hover:border-primary/50 group select-text transition-all duration-300 hover:shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="bg-primary/10 mb-2 inline-flex items-center justify-center rounded-lg p-2">
                      <StatIcon.icon className="text-primary h-5 w-5" />
                    </div>
                    <div className="text-2xl font-bold">{StatIcon.value}</div>
                    <div className="text-muted-foreground text-sm">
                      {StatIcon.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Fixed Height */}
          <div className="relative">
            {/* Image Container with Fixed Height */}
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Image with overflow-hidden */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <Image
                  src="/images/workspace.webp"
                  alt="Professional Workspace"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient Overlay */}
                <div className="from-primary/20 to-secondary/20 absolute inset-0 bg-gradient-to-tr opacity-30" />
              </div>

              {/* Floating Badge - OUTSIDE the overflow-hidden container */}
              <div className="absolute -left-4 -top-4 z-20">
                <div className="from-primary to-secondary text-primary-foreground flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold shadow-lg">
                  <Sparkles className="h-4 w-4" />
                  <span>Premium Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
        <div className="via-primary h-8 w-px bg-gradient-to-b from-transparent to-transparent" />
      </div>
    </section>
  );
}
