// app/(marketing)/projects/[slug]/page.tsx
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Building2,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Case Study | Mohsin Ali Aziz`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero Section */}
      <section className="from-primary-50 via-background to-secondary-50 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20 relative overflow-hidden bg-gradient-to-br py-16 lg:py-24">
        <Container>
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" icon={ArrowLeft} asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div>
              {/* Badges */}
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="border-primary-200 bg-primary-100 text-primary-700 dark:border-primary-900 dark:bg-primary-950 dark:text-primary-300 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4" />
                  {project.category}
                </span>
                <span className="bg-muted text-muted-foreground rounded-full px-4 py-2 text-sm font-medium">
                  <Calendar className="mr-2 inline h-4 w-4" />
                  {project.year}
                </span>
                <span className="bg-muted text-muted-foreground rounded-full px-4 py-2 text-sm font-medium">
                  <Building2 className="mr-2 inline h-4 w-4" />
                  {project.client}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="text-muted-foreground mb-6 text-xl font-medium">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {project.description}
              </p>

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

            {/* Featured Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="bg-primary-200/50 dark:bg-primary-900/20 absolute -right-4 -top-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
              <div className="bg-secondary-200/50 dark:bg-secondary-900/20 absolute -bottom-4 -left-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Key Results */}
      <section className="border-border bg-muted/30 border-y py-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {project.results.map((result, index) => {
              const match = result.match(/^([\d+%x]+)/);
              const number = match ? match[1] : '';
              const text = result.replace(/^[\d+%x]+\s*/, '');

              return (
                <div key={index} className="text-center">
                  <div className="mb-2 flex items-center justify-center">
                    <TrendingUp className="text-primary-600 dark:text-primary-400 h-5 w-5" />
                  </div>
                  <div className="text-primary-600 dark:text-primary-400 mb-2 text-4xl font-bold">
                    {number}
                  </div>
                  <div className="text-muted-foreground text-sm">{text}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Challenge
              </h2>
              <div className="from-primary-600 to-secondary-600 h-1 w-20 rounded-full bg-gradient-to-r" />
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </Container>
      </section>

      {/* Solution */}
      <section className="bg-muted/30 py-20 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Solution
              </h2>
              <div className="from-primary-600 to-secondary-600 h-1 w-20 rounded-full bg-gradient-to-r" />
            </div>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {project.solution}
            </p>

            {/* Services Provided */}
            <div className="mt-12">
              <h3 className="mb-4 text-xl font-semibold">Services Provided</h3>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300 rounded-full px-4 py-2 text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Highlights */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Key Highlights
              </h2>
              <div className="from-primary-600 to-secondary-600 h-1 w-20 rounded-full bg-gradient-to-r" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="border-border bg-card flex items-start gap-4 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="bg-primary-100 dark:bg-primary-950 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 className="text-primary-600 dark:text-primary-400 h-5 w-5" />
                  </div>
                  <p className="text-foreground text-base leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="bg-muted/30 py-20 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Technologies Used
              </h2>
              <div className="from-primary-600 to-secondary-600 h-1 w-20 rounded-full bg-gradient-to-r" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="border-border bg-card text-foreground flex items-center justify-center rounded-lg border px-6 py-4 text-center font-medium shadow-sm transition-all hover:shadow-md"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="from-primary-600 to-secondary-600 relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 shadow-2xl lg:p-16">
            <div className="bg-grid-white/10 absolute inset-0" />

            <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="mb-8 text-lg opacity-90 lg:text-xl">
                Let's create something amazing together. Get in touch to discuss
                your project needs.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="outline"
                  icon={ArrowRight}
                  className="text-primary-600 border-white bg-white hover:bg-white/90"
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Next Project */}
      <section className="border-border border-t py-12">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground mb-2 text-sm font-medium">
                Next Project
              </p>
              <h3 className="text-2xl font-bold">{nextProject.title}</h3>
            </div>
            <Button variant="outline" icon={ArrowRight} asChild>
              <Link href={`/projects/${nextProject.slug}`}>View Project</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
