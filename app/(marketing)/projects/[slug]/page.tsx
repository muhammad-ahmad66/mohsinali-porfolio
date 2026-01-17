// app/(marketing)/projects/[slug]/page.tsx
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Building2,
  Sparkles,
  TrendingUp,
  Target,
  Lightbulb,
  User,
} from 'lucide-react';
import CTA from '@/components/sections/cta';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Mohsin Ali Aziz`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-background to-secondary-50 py-16 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="flex flex-col justify-center">
              {/* Badges */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 dark:border-primary-900 dark:bg-primary-950 dark:text-primary-300">
                  <Sparkles className="h-4 w-4" />
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  {project.client}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mb-6 text-xl font-medium text-muted-foreground">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Services Tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" icon={ArrowRight} asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                {project.url && (
                  <Button
                    size="lg"
                    variant="outline"
                    icon={ExternalLink}
                    asChild
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Live Site
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Featured Image - Fixed Height */}
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:h-[600px]">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="pointer-events-none absolute -right-4 -top-4 -z-10 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl dark:bg-primary-900/20" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 -z-10 h-72 w-72 rounded-full bg-secondary-200/50 blur-3xl dark:bg-secondary-900/20" />
            </div>
          </div>
        </Container>
      </section>

      {/* Key Results - Enhanced Cards */}
      <section className="border-y border-border bg-muted/30 py-16 lg:py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              {project.keyResultsHeading || 'Key Results & Impact'}
            </h2>
            <p className="text-muted-foreground">
              {project.keyResultsDescription ||
                'Measured improvements delivered through system redesign'}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.results.map((result, index) => {
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-primary-500/10"
                >
                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-950 dark:text-primary-400">
                    <TrendingUp className="h-6 w-6" />
                  </div>

                  <div className="mb-2 text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {result.stat}
                  </div>

                  <div className="text-sm font-medium text-muted-foreground">
                    {result.label}
                  </div>

                  {/* Decorative element */}
                  <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary-500/5 blur-2xl transition-all group-hover:bg-primary-500/10" />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Project Details - Two Column Layout */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Challenge & Solution */}
            <div className="space-y-12">
              {/* Challenge */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    The Challenge
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Our Solution
                  </h2>
                </div>
                <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>

                {/* Technologies */}
                <div className="mb-8 mt-8">
                  <h3 className="mb-4 text-lg font-semibold">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                      >
                        {tech.name} -{' '}
                        <span className="text-xs text-muted-foreground">
                          {tech.usedFor}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* My Role - New Section */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      <User className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {project.myRoleHeading}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.myRoleDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div>
              <div className="mb-8">
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  Key Highlights
                </h2>
                <p className="text-muted-foreground">
                  Notable features and achievements
                </p>
              </div>

              <div className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:shadow-primary-500/5"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 transition-colors group-hover:bg-primary-600 dark:bg-primary-950">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 transition-colors group-hover:text-white dark:text-primary-400" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        variant="alternate"
        heading={project.ctaHeading}
        description={project.ctaDescription}
      />
    </>
  );
}
