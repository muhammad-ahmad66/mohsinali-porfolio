// 'use client';

// import { Container } from '@/components/ui/container';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
// import { projects } from '@/data/projects';
// import Link from 'next/link';
// import Image from 'next/image';

// interface ProjectsProps {
//   variant?: 'default' | 'alternate';
//   limit?: number;
//   featured?: boolean;
// }

// export default function Projects({
//   variant = 'default',
//   limit,
//   featured = false,
// }: ProjectsProps) {
//   let displayProjects = featured
//     ? projects.filter((p) => p.featured)
//     : projects;

//   if (limit) {
//     displayProjects = displayProjects.slice(0, limit);
//   }

//   const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

//   return (
//     <section id="projects" className={`py-20 lg:py-32 ${bgClass}`}>
//       <Container>
//         {/* Section Header */}
//         <div className="mb-16 text-center">
//           <div className="bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
//             <Sparkles className="h-4 w-4" />
//             Real Projects. Real Impact.
//           </div>
//           <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
//             Featured{' '}
//             <span className="from-primary-600 to-secondary-600 bg-gradient-to-r bg-clip-text text-transparent">
//               Case Studies
//             </span>
//           </h2>
//           <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
//             Explore our selected case studies showcasing how we transform ideas
//             into high-performing digital products.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {displayProjects.map((project, index) => (
//             <article
//               key={project.id}
//               className="border-border bg-card hover:shadow-primary-500/10 group relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-2xl"
//             >
//               {/* Project Image */}
//               <div className="from-primary-100 to-secondary-100 dark:from-primary-950 dark:to-secondary-950 relative aspect-video overflow-hidden bg-gradient-to-br">
//                 <Image
//                   src={project.imageUrl}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 />

//                 {/* Overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//                 {/* Category Badge */}
//                 <div className="text-primary-700 dark:text-primary-300 absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm dark:bg-black/60">
//                   {project.category}
//                 </div>

//                 {/* Year Badge */}
//                 <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
//                   {project.year}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 {/* Title & Tagline */}
//                 <div className="mb-3">
//                   <h3 className="text-foreground group-hover:text-primary-600 mb-1 text-2xl font-bold transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-muted-foreground text-sm font-medium">
//                     {project.tagline}
//                   </p>
//                 </div>

//                 {/* Description */}
//                 <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
//                   {project.shortDescription}
//                 </p>

//                 {/* Tags */}
//                 <div className="mb-5 flex flex-wrap gap-2">
//                   {project.tags.slice(0, 3).map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="bg-primary-50 text-primary-700 dark:bg-primary-950/50 dark:text-primary-300 rounded-full px-3 py-1 text-xs font-medium"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                   {project.tags.length > 3 && (
//                     <span className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs font-medium">
//                       +{project.tags.length - 3}
//                     </span>
//                   )}
//                 </div>

//                 {/* Divider */}
//                 <div className="bg-border mb-5 h-px" />

//                 {/* Stats/Results Preview */}
//                 {project.results && project.results.length > 0 && (
//                   <div className="mb-5 grid grid-cols-2 gap-3">
//                     {project.results.slice(0, 2).map((result, idx) => {
//                       const match = result.match(/^([\d+%x]+)/);
//                       const number = match ? match[1] : '';
//                       const text = result.replace(/^[\d+%x]+\s*/, '');

//                       return (
//                         <div key={idx} className="text-center">
//                           <div className="text-primary-600 dark:text-primary-400 text-lg font-bold">
//                             {number}
//                           </div>
//                           <div className="text-muted-foreground text-xs">
//                             {text}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}

//                 {/* CTA Button */}
//                 <Button
//                   variant="outline"
//                   size="md"
//                   icon={ArrowRight}
//                   fullWidth
//                   className="group/btn"
//                   asChild
//                 >
//                   <Link href="/contact">Get a Quote</Link>
//                 </Button>
//               </div>

//               {/* Decorative corner gradient */}
//               <div className="bg-primary-500/10 group-hover:bg-primary-500/20 pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full blur-3xl transition-all duration-500" />
//             </article>
//           ))}
//         </div>

//         {/* View All Projects Link */}
//         {featured && (
//           <div className="mt-12 text-center">
//             <Button variant="ghost" size="lg" icon={ExternalLink} asChild>
//               <Link href="/projects">View All Projects</Link>
//             </Button>
//           </div>
//         )}
//       </Container>
//     </section>
//   );
// }

// components/sections/projects.tsx (Alternative with ProjectCard)
'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import ProjectCard from '@/components/cards/project-card';

interface ProjectsProps {
  variant?: 'default' | 'alternate';
  limit?: number;
  featured?: boolean;
}

export default function Projects({
  variant = 'default',
  limit,
  featured = false,
}: ProjectsProps) {
  let displayProjects = featured
    ? projects.filter((p) => p.featured)
    : projects;

  if (limit) {
    displayProjects = displayProjects.slice(0, limit);
  }

  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section
      id="projects"
      className={`relative overflow-hidden py-20 lg:py-32 ${bgClass}`}
    >
      {/* Decorative Background Elements */}
      <div className="bg-primary-500/5 pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-secondary-500/5 pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 rounded-full blur-3xl" />

      <Container>
        {/* Section Header */}
        <div className="relative z-10 mb-16 text-center">
          <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-900 dark:bg-primary-950 dark:text-primary-300 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm">
            <Sparkles className="h-4 w-4" />
            Real Projects. Real Impact.
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Featured{' '}
            <span className="from-primary-600 via-primary-500 to-secondary-600 bg-gradient-to-r bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Discover how we've helped businesses transform their digital
            presence and achieve measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects */}
        {featured && projects.length > displayProjects.length && (
          <div className="relative z-10 mt-12 text-center">
            <Button variant="outline" size="lg" icon={ArrowRight} asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        )}

        {/* Trust Indicators */}
        {/* <div className="border-border relative z-10 mt-16 border-t pt-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 mb-2 text-3xl font-bold">
                150+
              </div>
              <div className="text-muted-foreground text-sm">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 mb-2 text-3xl font-bold">
                98%
              </div>
              <div className="text-muted-foreground text-sm">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 mb-2 text-3xl font-bold">
                50+
              </div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
          </div>
        </div> */}
      </Container>
    </section>
  );
}
