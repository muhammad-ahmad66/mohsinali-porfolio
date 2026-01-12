// components/sections/cta.tsx (Improved Background)
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ctaData } from '@/data/cta';
import { formatPhoneNumber } from '@/lib/utils';

interface CTAProps {
  variant?: 'default' | 'alternate';
}

export default function CTA({ variant = 'default' }: CTAProps) {
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section id="contact" className={`py-20 lg:py-32 ${bgClass}`}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 p-8 shadow-2xl lg:p-16">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Glowing Orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary-400/20 blur-3xl" />

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
                className="border-white bg-white text-primary-600 hover:border-white hover:bg-white/90"
                asChild
              >
                <Link href={ctaData.buttons.primary.href}>
                  {ctaData.buttons.primary.text}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="ghost"
                icon={ArrowRight}
                iconPosition="right"
                className="text-white hover:bg-white/10 hover:text-white"
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
                href={ctaData.contact.email}
                className="text-white/90 transition hover:text-white"
              >
                {ctaData.contact.email.replace('mailto:', '')}
              </a>
              <a
                href={`tel:${ctaData.contact.phone.replace(/\s/g, '')}`}
                className="text-white/90 transition hover:text-white"
              >
                {formatPhoneNumber(ctaData.contact.phone.replace('tel:', ''))}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
