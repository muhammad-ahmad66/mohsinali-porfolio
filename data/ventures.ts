// data/ventures.ts
export interface Venture {
  id: string;
  year: string;
  name: string;
  description: string;
  category: string;
  url?: string;
}

export const ventures: Venture[] = [
  {
    id: 'setup-my-business',
    year: '2021',
    name: 'SetupMyBusiness.net',
    description:
      'Digital solutions agency specializing in AI, automation, and custom development',
    category: 'Agency',
    url: 'https://setupmybusiness.net',
  },
  {
    id: 'moe-numbers',
    year: '2022',
    name: 'MoeNumbers',
    description: 'Digital phone numbers and verification solutions platform',
    category: 'SaaS',
    url: 'https://moenumbers.com',
  },
  {
    id: 'yukio',
    year: '2023',
    name: 'Yukio.cc',
    description: 'Premium gaming software and digital products',
    category: 'Platform',
    url: 'https://yukio.cc',
  },
  {
    id: 'fantom-whip',
    year: '2024',
    name: 'FantomVIPSignals / Whip Algo',
    description:
      'Advanced algorithmic trading signals and automated trading systems',
    category: 'Trading',
  },
  {
    id: 'moe-organics',
    year: '2025',
    name: 'Moe Organics & AI Health Systems',
    description: 'AI-powered health and wellness solutions',
    category: 'Health Tech',
  },
];
