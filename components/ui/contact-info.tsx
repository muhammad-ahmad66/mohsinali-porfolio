// components/contact/contact-info.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Calendar, Linkedin, Instagram } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Email Card */}
      <Card className="transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex h-10 w-10 items-center justify-center rounded-lg">
              <Mail className="h-5 w-5" />
            </div>
            Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href="mailto:hello@mohsinaliaziz.com"
            className="text-foreground hover:text-primary-600 text-base font-medium transition-colors"
          >
            hello@mohsinaliaziz.com
          </a>
          <p className="text-muted-foreground mt-2 text-sm">
            Available Monday to Friday
            <br />
            8:00 AM - 6:30 PM CST
          </p>
        </CardContent>
      </Card>

      {/* Phone Card */}
      <Card className="transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="bg-secondary-100 text-secondary-600 dark:bg-secondary-950 dark:text-secondary-400 flex h-10 w-10 items-center justify-center rounded-lg">
              <Phone className="h-5 w-5" />
            </div>
            Phone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href="tel:+16313868474"
            className="text-foreground hover:text-primary-600 text-base font-medium transition-colors"
          >
            +1 (631) 386-8474
          </a>
          <p className="text-muted-foreground mt-2 text-sm">
            US residents only
            <br />
            International: WhatsApp
          </p>
        </CardContent>
      </Card>

      {/* Calendar Card */}
      <Card className="border-primary-200 from-primary-50 to-secondary-50 dark:border-primary-800 dark:from-primary-950/50 dark:to-secondary-950/50 border-2 bg-gradient-to-br transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="bg-primary-600 flex h-10 w-10 items-center justify-center rounded-lg text-white">
              <Calendar className="h-5 w-5" />
            </div>
            Schedule a Call
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-sm">
            Book a free 30-minute consultation to discuss your project and
            explore how we can help you achieve your goals.
          </p>
          <Button variant="primary" className="w-full" asChild>
            <a
              href="https://calendly.com/setupmybusinessusa/book-a-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Social Links Card */}
      <Card className="transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Connect With Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-card hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 flex h-12 w-12 items-center justify-center rounded-lg border transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-card hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 flex h-12 w-12 items-center justify-center rounded-lg border transition-all"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
