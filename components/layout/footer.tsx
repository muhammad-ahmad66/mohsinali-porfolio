// components/layout/footer.tsx
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Button } from '../ui/button';
import { ctaData } from '@/data/cta';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-muted/30 border-t">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="text-primary-600 dark:text-primary-400 text-2xl font-bold"
              >
                Mohsin Ali Aziz
              </Link>
              <p className="text-muted-foreground mt-4 text-sm">
                Building premium digital solutions with a focus on innovation,
                quality, and measurable results.
              </p>

              <Button
                size="lg"
                variant="link"
                icon={ExternalLink}
                iconPosition="right"
                className="text-primary-600 border-white bg-white p-0 hover:border-white hover:bg-white/90"
                // asChild
              >
                <Link href={ctaData.buttons.primary.href}>
                  Start Your Project
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground mb-4 text-sm font-semibold uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-foreground mb-4 text-sm font-semibold uppercase">
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@mohsinaliaziz.com"
                    className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-2 text-sm transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    hello@mohsinaliaziz.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+16313868474"
                    className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-2 text-sm transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    +1 (631) 386-8474
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-border mt-8 border-t pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Mohsin Ali Aziz. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
