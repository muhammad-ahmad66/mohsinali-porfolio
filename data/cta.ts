import { socialLinks } from './social-links';

// data/cta.ts
export const ctaData = {
  headline: 'Ready to Build Something Scalable?',
  description:
    'Let’s discuss how intelligent systems, automation, and engineering-led solutions can support your next stage of growth.',
  buttons: {
    primary: {
      text: 'Schedule a Call',
      href: `${socialLinks.find((link) => link.name === 'Schedule Call')?.href}`,
      icon: 'Calendar',
    },
    secondary: {
      text: 'Get Started',
      href: '/contact',
      icon: 'ArrowUpRight',
      external: true,
    },
  },
  contact: {
    email: `${socialLinks.find((link) => link.name === 'Email')?.href}`,
    phone: `${socialLinks.find((link) => link.name === 'Phone')?.href}`,
  },
};
