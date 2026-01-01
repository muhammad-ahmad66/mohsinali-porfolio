// components/cards/project-card.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border-border bg-card hover:shadow-primary-500/20 group relative h-full overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
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
            <span className="bg-primary-600 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
              <Award className="h-3 w-3" />
              Featured
            </span>
          )}
        </div>

        {/* Category Badge - Bottom */}
        <div className="absolute bottom-4 left-4">
          <span className="text-primary-700 dark:bg-primary-950/90 dark:text-primary-300 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">
            <div className="bg-primary-600 h-1.5 w-1.5 rounded-full" />
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
          <div className="bg-primary-600 h-1.5 w-1.5 rounded-full" />
          <span className="text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider">
            {project.client}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-foreground group-hover:text-primary-600 mb-2 text-2xl font-bold transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-3 text-sm font-medium">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="bg-primary-50 text-primary-700 dark:bg-primary-950/50 dark:text-primary-300 rounded-md px-2.5 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-muted text-muted-foreground rounded-md px-2.5 py-1 text-xs font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="via-border mb-5 h-px bg-gradient-to-r from-transparent to-transparent" />

        {/* Key Highlight */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="bg-muted/50 mb-5 flex items-start gap-2 rounded-lg p-3">
            <TrendingUp className="text-primary-600 mt-0.5 h-4 w-4 flex-shrink-0" />
            <p className="text-foreground text-xs leading-relaxed">
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
          className="shadow-primary-600/20 group-hover:shadow-primary-600/30 shadow-lg group-hover:shadow-xl"
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
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 inline-flex items-center gap-1 text-xs font-medium transition-colors"
            >
              View Live Project
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="bg-primary-500/5 group-hover:bg-primary-500/10 pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full blur-3xl transition-all duration-700" />
      <div className="bg-secondary-500/5 group-hover:bg-secondary-500/10 pointer-events-none absolute -left-12 -top-12 h-24 w-24 rounded-full blur-2xl transition-all duration-700" />
    </article>
  );
}
