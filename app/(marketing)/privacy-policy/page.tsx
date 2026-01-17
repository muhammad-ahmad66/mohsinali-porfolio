// app/privacy-policy/page.tsx
import { Container } from '@/components/ui/container';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mohsin Ali Aziz',
  description:
    'Privacy Policy for Mohsin Ali Aziz - Digital Systems & Software Engineering',
};

export default function PrivacyPolicyPage() {
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
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  Privacy Policy
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
                Mohsin Ali Aziz ("we", "our", or "us") values your privacy. This
                Privacy Policy explains how we collect, use, and protect
                personal information when you visit this website or engage with
                our services.
              </p>
            </div>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Information We Collect
              </h2>
              <p className="mb-4 text-muted-foreground">We may collect:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>
                    Personal identifiers (name, email address, phone number)
                    submitted via forms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>
                    Project or consultation details you voluntarily provide
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>
                    Internet activity data (IP address, browser type, device,
                    pages visited)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Cookies and analytics data</span>
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                How We Use Your Information
              </h2>
              <p className="mb-4 text-muted-foreground">
                Your information is used to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Respond to inquiries and project requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Schedule and manage consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Improve website performance and user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Maintain security and prevent fraud</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Communicate service-related updates</span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg border-l-4 border-primary-600 bg-primary-600/5 p-4">
                <p className="text-sm font-medium text-foreground">
                  We do not sell or rent personal information.
                </p>
              </div>
            </section>

            {/* Sharing of Information */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Sharing of Information
              </h2>
              <p className="mb-4 text-muted-foreground">
                We may share information with trusted service providers for:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Website hosting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Analytics and performance monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Communication and scheduling tools</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                All providers are required to protect your information.
              </p>
            </section>

            {/* California Privacy Rights */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                California Privacy Rights (CCPA)
              </h2>
              <p className="mb-4 text-muted-foreground">
                If you are a California resident, you have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Request access to your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Request deletion of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>
                    Opt out of any future sale of personal data (we do not sell
                    data)
                  </span>
                </li>
              </ul>

              <div className="mt-6 rounded-lg border border-border/50 bg-background p-6">
                <p className="mb-2 text-sm font-medium text-foreground">
                  To exercise these rights, contact:
                </p>
                <a
                  href="mailto:contact@mohsinaliaziz.com"
                  className="inline-flex items-center gap-2 text-primary-600 transition-colors hover:text-primary-700"
                >
                  <Mail className="h-4 w-4" />
                  contact@mohsinaliaziz.com
                </a>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Data Security
              </h2>
              <p className="text-muted-foreground">
                Reasonable administrative, technical, and physical safeguards
                are used to protect your data. However, no system is completely
                secure.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page.
              </p>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 rounded-lg border border-border/50 bg-gradient-to-br from-background via-background to-muted/30 p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Have Questions About Your Privacy?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Feel free to reach out if you have any concerns or questions about
              how we handle your data.
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
