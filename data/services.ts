// data/services.ts
import {
  Cpu,
  TrendingUp,
  Layers,
  Code,
  MessageSquare,
  Target,
} from 'lucide-react';

export const services = [
  {
    id: 'ai-engineering-automation',
    slug: 'ai-engineering-automation',
    icon: Cpu,
    title: 'AI Engineering & Automation',
    shortDescription:
      'AI-driven systems that automate operations and scale decision-making.',
    description:
      'I design and build AI-driven automation systems that replace manual work, make operations smarter, and give businesses an unfair technological advantage.',
    deliverables: [
      'NLP models',
      'Predictive systems',
      'AI dashboards',
      'Automated reporting',
      'Workflow automation',
      'Voice & text classification',
    ],
    cta: 'Book AI Consultation',
    category: 'AI',
  },
  {
    id: 'trading-algo-development',
    slug: 'trading-algo-development',
    icon: TrendingUp,
    title: 'Trading Strategy & Algo Bot Development',
    shortDescription:
      'Institutional-grade algorithmic trading systems for live markets.',
    description:
      'I build advanced trading strategies, indicators, and fully automated trading bots designed for consistency, risk control, and performance.',
    deliverables: [
      'Algorithmic trading bots',
      'Custom trading strategies',
      'Smart money concept systems',
      'Backtesting & optimization tools',
      'Risk & position management logic',
      'Market analytics dashboards',
    ],
    cta: 'Discuss Trading System',
    category: 'Trading',
  },
  {
    id: 'saas-development',
    slug: 'saas-development',
    icon: Layers,
    title: 'SaaS Development',
    shortDescription: 'Scalable SaaS products built for long-term growth.',
    description:
      'From MVPs to production-grade platforms, I build SaaS products with clean architecture, secure infrastructure, and scalable systems.',
    deliverables: [
      'SaaS MVP development',
      'Full-stack SaaS platforms',
      'Authentication & role systems',
      'Admin dashboards',
      'Subscription & billing systems',
      'API-first backend architecture',
    ],
    cta: 'Build My SaaS',
    category: 'Development',
  },
  {
    id: 'web-custom-software',
    slug: 'web-custom-software',
    icon: Code,
    title: 'Web & Custom Software',
    shortDescription:
      'High-performance web platforms and custom internal systems.',
    description:
      'I build premium web platforms and custom software tailored to business needs, optimized for performance, scalability, and maintainability.',
    deliverables: [
      'Custom web platforms',
      'Internal business tools',
      'Dashboards & admin panels',
      'API integrations',
      'Performance-optimized builds',
      'Production-ready deployments',
    ],
    cta: 'Start a Web Project',
    category: 'Development',
  },
  {
    id: 'discord-telegram-ecosystems',
    slug: 'discord-telegram-ecosystems',
    icon: MessageSquare,
    title: 'Discord & Telegram Ecosystems',
    shortDescription: 'Automated communities engineered to scale engagement.',
    description:
      'I engineer fully automated Discord and Telegram ecosystems for trading communities, SaaS products, and brands.',
    deliverables: [
      'Custom Discord bots',
      'Telegram automation bots',
      'Paid access & subscription systems',
      'Signal & alert automation',
      'Role & permission logic',
      'Community analytics & moderation tools',
    ],
    cta: 'Build My Community',
    category: 'Ecosystems',
  },
  {
    id: 'business-growth-systems',
    slug: 'business-growth-systems',
    icon: Target,
    title: 'Business Growth & System Design',
    shortDescription:
      'Engineering systems that scale businesses, not services.',
    description:
      'I help founders design scalable business systems by combining automation, technology, and strategy for long-term growth.',
    deliverables: [
      'Business system architecture',
      'Automation-first growth frameworks',
      'Founder & startup advisory',
      'Operational workflow design',
      'Scalable tech foundations',
      'Process optimization systems',
    ],
    cta: 'Plan My Growth System',
    category: 'Strategy',
  },
];
