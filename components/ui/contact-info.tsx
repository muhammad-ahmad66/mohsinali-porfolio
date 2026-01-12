// components/contact/contact-info.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Calendar, Linkedin, Instagram, Link } from 'lucide-react';
import { socialLinks } from '@/data/social-links';
import { formatPhoneNumber } from '@/lib/utils';
import { SocialIconsGroup } from './social-icons-group';
import { SocialIcon } from './social-icon';

export function ContactInfo() {
  const phoneNumber = socialLinks.find((link) => link.name === 'Phone')?.href;
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber || '');

  return (
    <div className="space-y-6">
      {/* Email Card */}
      <Card className="transition-all">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
              <Mail className="h-5 w-5" />
            </div>
            Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href={socialLinks.find((link) => link.name === 'Email')?.href}
            className="text-base font-medium text-foreground transition-colors hover:text-primary-600"
          >
            {socialLinks
              .find((link) => link.name === 'Email')
              ?.href.replace('mailto:', '')}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Primary contact for new projects, collaborations, and consulting
            inquiries.
            <br />
            Response within 24–48 hours (business days).
          </p>
        </CardContent>
      </Card>

      {/* Phone Card */}
      <Card className="transition-all">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600 dark:bg-secondary-950 dark:text-secondary-400">
              <Phone className="h-5 w-5" />
            </div>
            Phone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href="tel:+16313868474"
            className="text-base font-medium text-foreground transition-colors hover:text-primary-600"
          >
            {formattedPhoneNumber}
          </a>
          {/* <p className="mt-2 text-sm text-muted-foreground">
            US-based inquiries.
            <br />
            International clients: WhatsApp or scheduled call.
          </p> */}
          <p className="mt-2 text-sm text-muted-foreground">
            US-based inquiries.
            <br />
            International clients:{' '}
            <a
              href={`https://wa.me/${phoneNumber?.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-400"
            >
              WhatsApp
            </a>{' '}
            or{' '}
            <a
              href={
                socialLinks.find((link) => link.name === 'Schedule Call')?.href
              }
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-400"
            >
              scheduled call
            </a>
            .
          </p>
        </CardContent>
      </Card>

      {/* Calendar Card */}
      <Card className="border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50 transition-all hover:shadow-lg dark:border-primary-800 dark:from-primary-950/50 dark:to-secondary-950/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white">
              <Calendar className="h-5 w-5" />
            </div>
            Schedule a Call
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Book a complimentary 30-minute consultation to discuss your project,
            goals, and next steps.
          </p>
          <Button variant="primary" className="w-full" asChild>
            <a
              href={
                socialLinks.find((link) => link.name === 'Schedule Call')?.href
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Call
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Social Links Card */}
      <Card className="transition-all">
        <CardHeader>
          <CardTitle className="text-lg">Professional Profiles</CardTitle>
          <CardDescription>
            Professional updates and selected work.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <SocialIcon
              icon={Linkedin}
              href={socialLinks.find((link) => link.name === 'LinkedIn')?.href!}
              label="LinkedIn"
              variant="with-label"
              size="md"
            />
            <SocialIcon
              icon={Instagram}
              href={
                socialLinks.find((link) => link.name === 'Instagram')?.href!
              }
              label="Instagram"
              variant="with-label"
              size="md"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
