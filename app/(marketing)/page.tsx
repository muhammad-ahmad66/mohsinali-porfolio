// app/(marketing)/page.tsx
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Stats from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import CTA from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services variant="default" featured />
      <About variant="alternate" />
      <Stats variant="default" />
      <Projects variant="alternate" featured />
      <Testimonials variant="default" featured />
      <CTA variant="alternate" />
    </>
  );
}
