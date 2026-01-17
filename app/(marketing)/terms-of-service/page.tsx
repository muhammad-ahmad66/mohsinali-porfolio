// app/terms-of-service/page.tsx
import { Container } from '@/components/ui/container';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Mohsin Ali Aziz',
  description:
    'Terms of Service for Mohsin Ali Aziz - Digital Systems & Software Engineering',
};

export default function TermsOfServicePage() {
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
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                  Terms of Service
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
                By accessing or using this website, you agree to the following
                Terms of Service.
              </p>
            </div>

            {/* Website Use */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Website Use
              </h2>
              <p className="text-muted-foreground">
                This website is provided for informational and professional
                purposes only. You agree not to misuse or attempt to disrupt the
                site.
              </p>
            </section>

            {/* No Professional Guarantee */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                No Professional Guarantee
              </h2>
              <p className="text-muted-foreground">
                Content on this website does not constitute legal, financial, or
                investment advice. Any services discussed are subject to
                separate written agreements.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All content on this website—including text, branding, visuals,
                system descriptions, and code—is the intellectual property of
                Mohsin Ali Aziz unless otherwise stated. Unauthorized
                reproduction or distribution is prohibited.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Limitation of Liability
              </h2>
              <p className="mb-4 text-muted-foreground">
                To the fullest extent permitted by U.S. law, Mohsin Ali Aziz is
                not liable for:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Indirect, incidental, or consequential damages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Business interruption or loss of data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                  <span>Errors, omissions, or reliance on website content</span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg border-l-4 border-primary-600 bg-primary-600/5 p-4">
                <p className="text-sm font-medium text-foreground">
                  Use of this website is at your own risk.
                </p>
              </div>
            </section>

            {/* External Links */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                External Links
              </h2>
              <p className="text-muted-foreground">
                This website may include links to third-party sites. We are not
                responsible for their content or practices.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Termination
              </h2>
              <p className="text-muted-foreground">
                We reserve the right to restrict or terminate access if these
                terms are violated.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary-600" />
                Governing Law
              </h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the United States,
                without regard to conflict of law principles.
              </p>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 rounded-lg border border-border/50 bg-gradient-to-br from-background via-background to-muted/30 p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              Questions About These Terms?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              If you have any questions or concerns about our Terms of Service,
              please get in touch.
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
