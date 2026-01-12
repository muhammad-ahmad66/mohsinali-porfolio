import { socialLinks } from './social-links';

// data/cta.ts
export const ctaData = {
  headline: 'Ready to Build Scalable Systems?',
  description:
    'Let’s discuss how intelligent systems, automation, and strategy can support your next stage of growth.',
  buttons: {
    primary: {
      text: 'Schedule a Call',
      href: `${socialLinks.find((link) => link.name === 'Schedule Call')?.href}`,
      icon: 'Calendar',
    },
    secondary: {
      text: 'Send an Inquiry',
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
