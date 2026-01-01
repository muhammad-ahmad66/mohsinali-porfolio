// // components/sections/services.tsx
// import { Container } from '@/components/ui/container';
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardFooter,
// } from '@/components/ui/card';
// import { services } from '@/data/services';
// import { Button } from '../ui/button';

// interface ServicesProps {
//   variant?: 'default' | 'alternate';
//   limit?: number;
//   featured?: boolean;
// }

// export default function Services({
//   variant = 'default',
//   limit,
//   featured = false,
// }: ServicesProps) {
//   const displayServices = limit ? services.slice(0, limit) : services;

//   const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

//   return (
//     <section id="services" className={`py-20 lg:py-32 ${bgClass}`}>
//       <Container>
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
//             Core Services
//           </h2>
//           <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
//             Integrated digital solutions engineered for performance,
//             scalability, and growth
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {displayServices.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <Card
//                 key={service.id}
//                 className="hover:shadow-primary-500/10 dark:hover:shadow-primary-500/5 group transition-all hover:shadow-lg"
//               >
//                 <CardHeader>
//                   <div className="bg-primary-100 text-primary-600 group-hover:bg-primary-600 dark:bg-primary-950 dark:text-primary-400 dark:group-hover:bg-primary-600 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors group-hover:text-white">
//                     <Icon className="h-6 w-6" />
//                   </div>
//                   <CardTitle className="text-xl">{service.title}</CardTitle>
//                   <CardDescription className="text-base">
//                     {service.shortDescription}
//                   </CardDescription>
//                 </CardHeader>
//               </Card>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// }
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
import { ArrowUpRight, Sparkles } from 'lucide-react';
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
    <section id="services" className={`py-20 lg:py-32 ${bgClass}`}>
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Core Services
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Integrated digital solutions engineered for performance,
            scalability, and growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="hover:shadow-primary-500/10 dark:hover:shadow-primary-500/5 group flex h-full flex-col transition-all hover:shadow-lg"
              >
                <CardHeader className="flex-1">
                  <div className="bg-primary-100 text-primary-600 group-hover:bg-primary-600 dark:bg-primary-950 dark:text-primary-400 dark:group-hover:bg-primary-600 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button
                    variant="link"
                    size="sm"
                    className="group/btn text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:bg-primary-950 dark:hover:text-primary-300 w-full justify-start p-0 font-semibold transition-all"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
