// app/(marketing)/contact/page.tsx
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/forms/contact-form';
import { ContactInfo } from '@/components/ui/contact-info';
import { Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Mohsin Ali Aziz',
  description:
    'Get in touch to discuss your project and explore how we can work together.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background relative overflow-hidden py-20 lg:py-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="bg-primary-300/30 dark:bg-primary-800/20 absolute left-1/4 top-1/4 h-96 w-96 rounded-full blur-3xl" />
          <div className="bg-secondary-300/30 dark:bg-secondary-800/20 absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full blur-3xl" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm">
              <Sparkles className="h-4 w-4" />
              Get in Touch
            </div>

            <h1 className="from-foreground via-foreground to-foreground/70 mb-6 bg-gradient-to-br bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Let's Work Together
            </h1>

            <p className="text-muted-foreground text-lg lg:text-xl">
              Ready to transform your business with cutting-edge digital
              solutions? Let's discuss your project and explore the
              possibilities.
            </p>
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
