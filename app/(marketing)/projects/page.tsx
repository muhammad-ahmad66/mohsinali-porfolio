'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/cards/project-card';
import { Sparkles, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import CTA from '@/components/sections/cta';
import { Metadata } from 'next';

// Add Metadata
// export const metadata: Metadata = {
//   title: 'Case Studies & Projects | Scalable Systems by Mohsin Ali Aziz',
//   description:
//     'Explore real-world projects including SaaS platforms, AI systems, automation tools, and performance-driven web applications built for scale.',
// };

export default function ProjectsPage() {
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, projects.length));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-secondary-50 py-16 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm dark:border-primary-900 dark:bg-primary-950 dark:text-primary-300">
              <Sparkles className="h-4 w-4" />
              Our Work
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Projects &{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>

            <p className="text-lg text-muted-foreground lg:text-xl">
              Discover how we've helped businesses transform their digital
              presence and achieve measurable results through innovative
              solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-32">
        <Container>
          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-12 text-center">
              <Button
                size="lg"
                variant="outline"
                icon={RefreshCw}
                onClick={loadMore}
              >
                Load More Projects
              </Button>
            </div>
          )}
        </Container>
      </section>

      <CTA variant="alternate" />
    </>
  );
}
