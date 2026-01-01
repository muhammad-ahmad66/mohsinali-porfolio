// app/(marketing)/projects/[slug]/not-found.tsx
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <section className="from-primary-50 via-background to-secondary-50 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20 flex min-h-screen items-center justify-center bg-gradient-to-br py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 Illustration */}
          <div className="text-primary-200 dark:text-primary-900/30 mb-8 text-9xl font-bold">
            404
          </div>

          {/* Content */}
          <div className="border-border bg-card mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm">
            <Search className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground">Project Not Found</span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Oops! This project doesn't exist
          </h1>

          <p className="text-muted-foreground mb-8 text-lg">
            The project you're looking for might have been moved or doesn't
            exist. Let's get you back on track.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" icon={ArrowLeft} asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
