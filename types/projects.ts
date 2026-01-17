// types/project.ts

export interface Technology {
  name: string;
  usedFor: string;
}

export interface ProjectResult {
  stat: string;
  label: string;
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
  technologies: Technology[];
  url: string;
  featured: boolean;
  keyResultsHeading: string;
  keyResultsDescription: string;
  highlights: string[];
  challenge: string;
  solution: string;
  results: ProjectResult[];
  myRoleHeading: string;
  myRoleDescription: string;
}
