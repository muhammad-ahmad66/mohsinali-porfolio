// components/sections/cta.tsx (Image Background with Dark Overlay)
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ctaData } from '@/data/cta';
import { formatPhoneNumber } from '@/lib/utils';
import Image from 'next/image';

interface CTAProps {
  variant?: 'default' | 'alternate';
  heading?: string;
  description?: string;
}

export default function CTA({
  variant = 'default',
  heading,
  description,
}: CTAProps) {
  const bgClass = variant === 'alternate' ? 'bg-muted/30' : 'bg-background';

  return (
    <section id="contact" className={`py-20 lg:py-32 ${bgClass}`}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl p-8 shadow-2xl lg:p-16">
          {/* Image Background with Dark Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/cta-bg.jpg"
              alt="Call to Action Background"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            {/* Dark Overlay for maximum text contrast */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {heading || ctaData.headline}
            </h2>

            <p className="mb-8 text-lg text-white/95 lg:text-xl">
              {description || ctaData.description}
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
            <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-white/30 pt-8 sm:flex-row sm:gap-12">
              <a
                href={ctaData.contact.email}
                className="text-white/95 transition hover:text-white"
              >
                {ctaData.contact.email.replace('mailto:', '')}
              </a>
              <a
                href={`tel:${ctaData.contact.phone.replace(/\s/g, '')}`}
                className="text-white/95 transition hover:text-white"
              >
                {formatPhoneNumber(ctaData.contact.phone.replace('tel:', ''))}
              </a>
            </div>
          </div>
        </div>
      </Container>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Trusted by clients across the USA, UK, Canada, and Europe
      </p>
    </section>
  );
}
