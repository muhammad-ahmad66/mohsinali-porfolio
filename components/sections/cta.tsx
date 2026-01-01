// components/sections/cta.tsx (Updated with new Button)
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { ctaData } from '@/data/cta';

interface CTAProps {
  variant?: 'default' | 'alternate';
}

export default function CTA({ variant = 'default' }: CTAProps) {
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section id="contact" className={`py-20 lg:py-32 ${bgClass}`}>
      <Container>
        <div className="from-primary-600 to-secondary-600 relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 shadow-2xl lg:p-16">
          {/* Background pattern */}
          <div className="bg-grid-white/10 absolute inset-0" />

          <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {ctaData.headline}
            </h2>

            <p className="mb-8 text-lg opacity-90 lg:text-xl">
              {ctaData.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                icon={ArrowRight}
                className="text-primary-600 border-white bg-white hover:border-white hover:bg-white/90"
                asChild
              >
                <Link href={ctaData.buttons.primary.href}>
                  {ctaData.buttons.primary.text}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="ghost"
                icon={Calendar}
                className="text-white hover:bg-white/10"
                asChild
              >
                <a
                  href={ctaData.buttons.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ctaData.buttons.secondary.text}
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-white/20 pt-8 sm:flex-row sm:gap-12">
              <a
                href={`mailto:${ctaData.contact.email}`}
                className="text-white/90 transition hover:text-white"
              >
                {ctaData.contact.email}
              </a>
              <a
                href={`tel:${ctaData.contact.phone.replace(/\s/g, '')}`}
                className="text-white/90 transition hover:text-white"
              >
                {ctaData.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
