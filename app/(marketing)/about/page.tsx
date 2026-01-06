// app/(marketing)/about/page.tsx
import { Container } from '@/components/ui/container';
import About from '@/components/sections/about';
import Stats from '@/components/sections/stats';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import CTA from '@/components/sections/cta';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-secondary-50 py-16 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground lg:text-xl">
              Learn more about our journey, mission, and the team behind our
              success.
            </p>
          </div>
        </Container>
      </section>

      <About variant="default" />
      <Stats variant="alternate" />
      <Services variant="default" limit={6} />
      <Testimonials variant="alternate" limit={3} featured />
      <CTA variant="default" />
    </>
  );
}
