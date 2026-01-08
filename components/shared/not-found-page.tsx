// components/shared/not-found-page.tsx
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface NotFoundPageProps {
  title?: string;
  description?: string;
  badgeText?: string;
  badgeIcon?: LucideIcon;
  primaryButton?: {
    text: string;
    href: string;
    icon?: LucideIcon;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: LucideIcon;
  };
}

export default function NotFoundPage({
  title = 'Oops! Page not found',
  description = "The page you're looking for might have been moved or doesn't exist. Let's get you back on track.",
  badgeText = '404 Error',
  badgeIcon: BadgeIcon,
  primaryButton = {
    text: 'Go Home',
    href: '/',
    icon: Home,
  },
  secondaryButton = {
    text: 'View Projects',
    href: '/projects',
    icon: ArrowLeft,
  },
}: NotFoundPageProps) {
  const PrimaryIcon = primaryButton.icon || Home;
  const SecondaryIcon = secondaryButton.icon || ArrowLeft;

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 via-background to-secondary-50 py-20 dark:from-primary-950/20 dark:via-background dark:to-secondary-950/20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 Illustration */}
          <div className="mb-8 text-9xl font-bold text-primary-200 dark:text-primary-900/30">
            404
          </div>

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm">
            {BadgeIcon && (
              <BadgeIcon className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-muted-foreground">{badgeText}</span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg text-muted-foreground">{description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" icon={PrimaryIcon} asChild>
              <Link href={primaryButton.href}>{primaryButton.text}</Link>
            </Button>
            <Button size="lg" variant="outline" icon={SecondaryIcon} asChild>
              <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
