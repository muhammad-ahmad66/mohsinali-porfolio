// components/cards/project-card.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20">
      {/* Image Container with Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Main Image */}
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.featured}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Top Badges */}
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <span className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            {project.year}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1.5 rounded-full bg-primary-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
              <Award className="h-3 w-3" />
              Featured
            </span>
          )}
        </div>

        {/* Category Badge - Bottom */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-primary-700 backdrop-blur-sm dark:bg-primary-950/90 dark:text-primary-300">
            <div className="h-1.5 w-1.5 rounded-full bg-primary-600" />
            {project.category}
          </span>
        </div>

        {/* Hover: Quick Stats Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="grid grid-cols-2 gap-4 text-center">
            {project.results.slice(0, 2).map((result, idx) => {
              const match = result.match(/^([\d+%x]+)/);
              const number = match ? match[1] : '';
              const text = result.replace(/^[\d+%x]+\s*/, '');

              return (
                <div
                  key={idx}
                  className="rounded-lg bg-white/10 p-3 backdrop-blur-md"
                >
                  <div className="mb-1 text-2xl font-bold text-white">
                    {number}
                  </div>
                  <div className="text-xs text-white/80">{text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Client Name */}
        <div className="mb-2 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary-600" />
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            {project.client}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="mb-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary-600">
          {project.title}
        </h3>
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="rounded-md bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-950/50 dark:text-primary-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="mb-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Key Highlight */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-5 flex items-start gap-2 rounded-lg bg-muted/50 p-3">
            <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600" />
            <p className="text-xs leading-relaxed text-foreground">
              {project.highlights[0]}
            </p>
          </div>
        )}

        {/* CTA Button */}
        <Button
          variant="primary"
          size="md"
          icon={ArrowRight}
          fullWidth
          className="shadow-lg shadow-primary-600/20 group-hover:shadow-xl group-hover:shadow-primary-600/30"
          asChild
        >
          <Link href={`/projects/${project.slug}`}>View Details</Link>
        </Button>

        {/* Optional: View Details Link */}
        {project.url && (
          <div className="mt-3 text-center">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
            >
              View Live Project
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-primary-500/5 blur-3xl transition-all duration-700 group-hover:bg-primary-500/10" />
      <div className="pointer-events-none absolute -left-12 -top-12 h-24 w-24 rounded-full bg-secondary-500/5 blur-2xl transition-all duration-700 group-hover:bg-secondary-500/10" />
    </article>
  );
}
