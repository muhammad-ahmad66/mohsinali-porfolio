// app/(marketing)/page.tsx
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Stats from '@/components/sections/stats';
import Testimonials from '@/components/sections/testimonials';
import CTA from '@/components/sections/cta';

import TechStack from '@/components/sections/tech-stack';
import VenturesTimeline from '@/components/sections/ventures-timeline';
import Philosophy from '@/components/sections/philosophy';
import EntrepreneurMini from '@/components/sections/entrepreneur-mini';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services variant="default" featured />
      <Philosophy variant="alternate" />

      <About variant="default" />
      <Stats variant="alternate" />
      <TechStack variant="default" />
      {/* <VenturesTimeline variant="alternate" /> */}
      <EntrepreneurMini variant="alternate" />
      <Projects variant="default" featured />
      <Testimonials variant="alternate" featured />
      <CTA variant="default" />
    </>
  );
}
