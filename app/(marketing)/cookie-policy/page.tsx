// app/cookie-policy/page.tsx
import { Container } from '@/components/ui/container';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Cookie, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | Mohsin Ali Aziz',
  description:
    'Cookie Policy for Mohsin Ali Aziz - Digital Systems & Software Engineering',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-gradient-to-b from-muted/30 to-background">
        <Container>
          <div className="py-16 lg:py-20">
            <Link
              href="/"
              className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-600"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600">
                <Cookie className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  Cookie Policy
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Last updated: January 2026
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container>
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {/* Introduction */}
            <div className="mb-8 rounded-lg border border-border/50 bg-muted/30 p-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                This website uses cookies to enhance functionality and
                performance.
              </p>
            </div>

            {/* What Are Cookies */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                What Are Cookies?
              </h2>
              <p className="text-muted-foreground">
                Cookies are small data files stored on your device that help
                improve website functionality and understand user behavior.
              </p>
            </section>

            {/* Cookies We Use */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Cookies We Use
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>
                    <strong className="text-foreground">
                      Essential Cookies
                    </strong>{' '}
                    – Required for site operation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>
                    <strong className="text-foreground">
                      Analytics Cookies
                    </strong>{' '}
                    – Measure traffic and usage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>
                    <strong className="text-foreground">
                      Preference Cookies
                    </strong>{' '}
                    – Remember user settings
                  </span>
                </li>
              </ul>
            </section>

            {/* How Cookies Are Used */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                How Cookies Are Used
              </h2>
              <p className="mb-4 text-muted-foreground">Cookies help us:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Improve site performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Understand how visitors use the site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Enhance security and reliability</span>
                </li>
              </ul>
            </section>

            {/* Managing Cookies */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Managing Cookies
              </h2>
              <p className="text-muted-foreground">
                You may control or disable cookies through your browser
                settings. Disabling cookies may limit site functionality.
              </p>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Third-Party Cookies
              </h2>
              <p className="text-muted-foreground">
                Third-party services (e.g., analytics tools) may place cookies.
                These are governed by their own privacy policies.
              </p>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Policy Updates
              </h2>
              <p className="text-muted-foreground">
                This Cookie Policy may be updated periodically.
              </p>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 rounded-lg border border-border/50 bg-gradient-to-br from-background via-background to-muted/30 p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Questions About Cookies?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              If you have concerns about how we use cookies, feel free to reach
              out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-primary-600/20 transition-all hover:-translate-y-0.5 hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
