// app/(marketing)/projects/page.tsx
import { Container } from '@/components/ui/container';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/cards/project-card';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Projects & Case Studies | Mohsin Ali Aziz',
  description:
    'Explore our portfolio of successful digital projects. From web development to AI automation, see how we help businesses achieve their goals.',
};

export default function ProjectsPage() {
  const categories = Array.from(
    new Set(projects.map((p) => p.category))
  ).sort();

  return (
    <>
      {/* Hero Section */}
      <section className="from-primary-50 via-background to-secondary-50 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20 relative overflow-hidden bg-gradient-to-br py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="border-primary-200 bg-primary-100 text-primary-700 dark:border-primary-900 dark:bg-primary-950 dark:text-primary-300 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              Our Work
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Projects &{' '}
              <span className="from-primary-600 to-secondary-600 bg-gradient-to-r bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>

            <p className="text-muted-foreground text-lg lg:text-xl">
              Discover how we've helped businesses transform their digital
              presence and achieve measurable results through innovative
              solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="border-border bg-muted/30 border-y py-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 mb-2 text-4xl font-bold">
                {projects.length}+
              </div>
              <div className="text-muted-foreground text-sm">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 mb-2 text-4xl font-bold">
                {categories.length}+
              </div>
              <div className="text-muted-foreground text-sm">
                Industry Sectors
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary-600 dark:text-primary-400 mb-2 text-4xl font-bold">
                98%
              </div>
              <div className="text-muted-foreground text-sm">
                Client Satisfaction
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects by Category */}
      {categories.map((category) => {
        const categoryProjects = projects.filter(
          (p) => p.category === category
        );

        return (
          <section key={category} className="py-20 lg:py-32">
            <Container>
              {/* Category Header */}
              <div className="mb-12">
                <h2 className="mb-2 text-3xl font-bold tracking-tight">
                  {category}
                </h2>
                <div className="from-primary-600 to-secondary-600 h-1 w-20 rounded-full bg-gradient-to-r" />
              </div>

              {/* Projects Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="bg-muted/30 py-20 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how we can help bring your vision to life with our
              proven expertise.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="bg-primary-600 shadow-primary-600/25 hover:bg-primary-700 hover:shadow-primary-600/30 inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-base font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
              >
                Start Your Project
              </a>
              <a
                href="https://calendly.com/setupmybusinessusa/book-a-call"
                target="_blank"
                rel="noopener noreferrer"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-950/50 inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 bg-transparent px-6 text-base font-medium transition-all duration-200 active:scale-[0.98]"
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
