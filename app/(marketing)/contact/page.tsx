// app/(marketing)/contact/page.tsx
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/forms/contact-form';
import { ContactInfo } from '@/components/ui/contact-info';
import { Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactCardModal } from '@/components/ui/contact-card-modal';

export const metadata: Metadata = {
  title: 'Contact Mohsin Ali Aziz | Start Your Project',
  description:
    'Discuss your project with Mohsin Ali Aziz. AI systems, automation, SaaS platforms, and scalable software engineering for global businesses.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-300/30 blur-3xl dark:bg-primary-800/20" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary-300/30 blur-3xl dark:bg-secondary-800/20" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
              <Sparkles className="h-4 w-4" />
              Get in Touch
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              Ready to transform your business with cutting-edge digital
              solutions? Let's discuss your project and explore the
              possibilities.
            </p>

            {/* Digital Card Button */}
            <div className="flex justify-center">
              <ContactCardModal />
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="pb-20 lg:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Info Sidebar */}
            <ContactInfo />

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
