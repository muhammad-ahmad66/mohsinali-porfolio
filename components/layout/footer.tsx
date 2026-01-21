// components/layout/footer.tsx
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Linkedin, Instagram, Phone, Mail, Calendar1Icon } from 'lucide-react';

import { Button } from '../ui/button';
import { ctaData } from '@/data/cta';
import { socialLinks } from '@/data/social-links';
import { FaWhatsapp } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/about' },
  { name: 'Featured Work', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const emailLink = socialLinks.find((link) => link.name === 'Email');
const instaLink = socialLinks.find((link) => link.name === 'Instagram');
const linkedinLink = socialLinks.find((link) => link.name === 'LinkedIn');
const whatsapp = socialLinks.find((link) => link.name === 'Whatsapp');

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 bg-gradient-to-b from-background to-muted/20">
      {/* Decorative gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-600/5 via-transparent to-transparent" />

      <Container className="relative">
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-5">
              <Link
                href="/"
                className="group inline-block text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary-600"
              >
                Mohsin Ali Aziz
                <div className="mt-1 h-0.5 w-0 bg-primary-600 transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Designing and engineering premium digital solutions for global
                businesses.
              </p> */}

              {/* Testimonial Card */}
              {/* <div className="group relative mt-8 overflow-hidden rounded-lg border border-border/50 bg-gradient-to-br from-background via-background to-muted/30 p-6 transition-all duration-300 hover:border-primary-600/30 hover:shadow-lg hover:shadow-primary-600/5">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-600/5 blur-2xl transition-all duration-300 group-hover:bg-primary-600/10" />
                <div className="relative">
                  <svg
                    className="mb-3 h-6 w-6 text-primary-600/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm italic leading-relaxed text-foreground/90">
                    Professional, fast, and extremely detail-oriented.
                  </p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">
                    — SaaS Founder, USA
                  </p>
                </div>
              </div> */}

              {/* What I Do Card */}
              <div className="mt-6 rounded-lg border border-border/50 bg-muted/30 p-6 backdrop-blur-sm">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                  <span className="h-1 w-8 rounded-full bg-primary-600" />
                  What I Do
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Custom software development, automation systems, web
                  platforms, AI tools, and scalable growth infrastructure for
                  startups and established businesses worldwide.
                </p>
              </div>

              {/* Primary CTA Button with arrow on hover */}
              <Button
                variant="primary"
                size="md"
                className="mt-6"
                showArrowOnHover={true}
              >
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>

            {/* Quick Links Section */}
            <div className="lg:col-span-3">
              <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Quick Links
              </h3>
              <nav>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-600"
                      >
                        <span className="h-px w-0 bg-primary-600 transition-all duration-300 group-hover:w-4" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-4">
              <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Get in Touch
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                For new projects, collaborations, or consulting inquiries.
              </p>

              {/* Contact Links */}
              <div className="space-y-4 rounded-lg border border-border bg-muted/30 p-3 backdrop-blur-sm">
                <a
                  href={emailLink?.href}
                  className="group flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-muted/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600/10 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    {emailLink?.href.replace('mailto:', '')}
                  </span>
                </a>

                <a
                  href="tel:+16313868474"
                  className="group flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-muted/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600/10 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    +1 (631) 386-8474
                  </span>
                </a>
              </div>

              {/* Schedule Call Button */}
              {/* <Button
                variant="outline"
                size="sm"
                icon={Calendar1Icon}
                iconPosition="left"
                className="mt-6 w-full"
                asChild
              >
                <Link
                  href={ctaData.buttons.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </Link>
              </Button> */}

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                <a
                  href={linkedinLink?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background text-muted-foreground transition-all hover:border-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-lg hover:shadow-primary-600/20"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={instaLink?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background text-muted-foreground transition-all hover:border-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-lg hover:shadow-primary-600/20"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={whatsapp?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background text-muted-foreground transition-all hover:border-green-600 hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-600/20"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 space-y-6 border-t border-border/40 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
              <div>
                <p className="text-sm text-muted-foreground">
                  © {currentYear} Mohsin Ali Aziz. All rights reserved.
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  Engineering scalable systems for the modern web
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-xs text-muted-foreground transition-colors hover:text-primary-600"
                >
                  Privacy Policy
                </Link>
                <span className="text-muted-foreground/30">•</span>
                <Link
                  href="/terms-of-service"
                  className="text-xs text-muted-foreground transition-colors hover:text-primary-600"
                >
                  Terms of Service
                </Link>
                <span className="text-muted-foreground/30">•</span>
                <Link
                  href="/cookie-policy"
                  className="text-xs text-muted-foreground transition-colors hover:text-primary-600"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
