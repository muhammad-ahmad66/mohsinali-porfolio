// types/index.ts
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  technologies: string[];
  category: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  imageUrl: string;
  tags: string[];
  category: string;
  year: string;
  client: string;
  services: string[];
  technologies: string[];
  url: string | null;
  featured: boolean;
  highlights: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string | null;
  rating: number;
  content: string;
  project: string;
  featured: boolean;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface NavigationLink {
  label: string;
  href: string;
}
