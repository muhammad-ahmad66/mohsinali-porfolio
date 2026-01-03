// app/(marketing)/entrepreneur/page.tsx
import EntrepreneurHero from '@/components/sections/entrepreneur-hero';
import EntrepreneurHighlights from '@/components/sections/entrepreneur-highlights';
import EntrepreneurTimeline from '@/components/sections/entrepreneur-timeline';
import VenturesTimeline from '@/components/sections/ventures-timeline';
import CTA from '@/components/sections/cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entrepreneur & Startup Builder | Mohsin Ali Aziz',
  description:
    'Building and growing startups since 2015. Founder of multiple successful ventures across technology, AI, SaaS, and automation.',
};

export default function EntrepreneurPage() {
  return (
    <>
      <EntrepreneurHero />
      <EntrepreneurHighlights />
      <EntrepreneurTimeline />
      <VenturesTimeline variant="alternate" />
      <CTA />
    </>
  );
}
