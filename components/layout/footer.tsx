// components/layout/footer.tsx
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import {
  Linkedin,
  Instagram,
  Phone,
  ExternalLink,
  Mail,
  Calendar1Icon,
} from 'lucide-react';
import { Button } from '../ui/button';
import { ctaData } from '@/data/cta';
import { socialLinks } from '@/data/social-links';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Featured Work', href: 'featured-work' },
  { name: 'Contact', href: '/contact' },
];

const emailLink = socialLinks.find((link) => link.name === 'Email');
const instaLink = socialLinks.find((link) => link.name === 'Instagram');
const linkedinLink = socialLinks.find((link) => link.name === 'LinkedIn');
const EmailIcon = emailLink?.icon;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="text-2xl font-bold text-primary-600 dark:text-primary-400"
              >
                Mohsin Ali Aziz
              </Link>
              {/* <p className="mt-4 text-sm text-muted-foreground">
                Building premium digital solutions with a focus on innovation,
                quality, and measurable results.
              </p> */}

              <p className="mt-4 rounded-sm border-l-4 border-primary-600 bg-background p-2 text-sm leading-snug text-muted-foreground">
                <span className="italic">
                  Professional, fast, and extremely detail-oriented.
                </span>
                <br />
                <span className="">— SaaS Founder, USA</span>
              </p>

              <Button
                size="lg"
                variant="link"
                icon={ExternalLink}
                iconPosition="right"
                className="mt-2 border-white p-0 text-primary-600 hover:border-white"
                // asChild
              >
                <Link href={ctaData.buttons.primary.href}>
                  Start Your Project
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-foreground">
                Get in Touch
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                For new projects, collaborations, or consulting inquiries.
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href={emailLink?.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Mail className="h-4 w-4" />
                    {emailLink?.href.replace('mailto:', '')}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+16313868474"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Phone className="h-4 w-4" />
                    +1 (631) 386-8474
                  </a>
                </li>
              </ul>
              <Button
                variant="link"
                icon={Calendar1Icon}
                className="mt-2 p-0 text-primary-600 hover:border-white"
                asChild
              >
                <Link
                  href={ctaData.buttons.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </Link>
              </Button>
              <div className="mt-1 flex gap-4 border-t border-border pt-3">
                <a
                  href={linkedinLink?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={instaLink?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mohsin Ali Aziz. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Mohsin Ali Aziz — Digital Systems & Software Engineering
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
