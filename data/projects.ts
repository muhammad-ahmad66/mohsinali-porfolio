import { Project } from '@/types/projects';

// MoeNumbers Project
// Title
// MoeNumbers Case Study | Scalable E-commerce Platform
// Description
// Case study of MoeNumbers — a high-performance digital phone number marketplace optimized for search, instant provisioning, and conversion efficiency.
// :small_blue_diamond: KRY Clients Project
// Title
// KRY Clients Case Study | Gaming Platform at Scale
// Description
// How KRY Clients scaled a gaming community platform with high-performance infrastructure, automation, and real-time systems supporting 50K+ users.
// :small_blue_diamond: YUKIO Project
// Title
// YUKIO Case Study | High-Performance Futuristic Web Experience
// Description
// A futuristic digital experience built for performance and visual impact — featuring advanced UI, smooth animations, and 95+ Lighthouse scores.

export const projects: Project[] = [
  {
    id: 'kry-clients',
    slug: 'kry-clients',
    title: 'KRY Clients',
    seoTitle: 'KRY Clients Case Study | Gaming Platform at Scale',
    tagline: 'Gaming Software Community Platform',
    shortDescription:
      'High-performance platform for a fast-growing gaming software community with full UX redesign, scalable backend, and automated workflows.',
    description:
      'KRY Clients needed a complete digital transformation to support their rapidly growing gaming software community. We delivered a high-performance platform with intuitive UX, robust backend infrastructure, and automated workflows that improved user engagement by 250%.',
    seoDescription:
      'How KRY Clients scaled a gaming community platform with high-performance infrastructure, automation, and real-time systems supporting 50K+ users.',
    image: '🎮',
    imageUrl: '/images/projects/kry-clients.webp',
    tags: ['UX Design', 'Backend', 'Automation', 'Community'],
    category: 'Web Development',
    year: '2019',
    client: 'KRY',
    services: ['Web Development', 'UX Design', 'Backend Development'],
    technologies: [
      {
        name: 'Next.js',
        usedFor: 'Frontend Layer',
      },
      {
        name: 'Node.js',
        usedFor: 'Application Layer',
      },
      {
        name: 'PostgreSQL',
        usedFor: 'Primary Data Layer',
      },
      {
        name: 'Redis',
        usedFor: 'Caching and Real-time Layer',
      },
      {
        name: 'Discord API',
        usedFor: 'External Integration Layer',
      },
    ],
    url: 'https://kryclients.com',
    featured: true,
    keyResultsHeading: 'Key Results & Impact',
    keyResultsDescription:
      'Measured improvements delivered through platform re-architecture',
    highlights: [
      'Full UX/UI redesign for modern gaming aesthetic',
      'Scalable backend supporting 50K+ concurrent users',
      'Automated Discord integration for seamless community management',
      'Real-time notifications and updates system',
      '250% increase in user engagement',
      '60% reduction in support tickets through automation',
    ],
    challenge:
      "KRY Clients was experiencing rapid growth but their existing platform couldn't scale. Users faced slow load times, confusing navigation, and limited automation for community management.",
    solution:
      'We re-architected the platform with a focus on scalability, performance, and operational reliability. This included backend optimization, real-time automation, Discord system integrations, and a modular architecture capable of supporting rapid community growth without performance degradation.',
    results: [
      {
        stat: '250%',
        label: 'Increase in User Engagement',
      },
      {
        stat: '3×',
        label: 'Faster Page Load Times',
      },
      {
        stat: '60%',
        label: 'Reduction in Support Tickets',
      },
      {
        stat: '50K+',
        label: 'Concurrent Users Supported',
      },
    ],
    myRoleHeading: 'My Role',
    myRoleDescription:
      'System architecture, backend development, scalability planning, automation workflows, Discord integrations, performance optimization, and production deployment.',

    ctaHeading: 'Want Similar Results for Your Platform?',
    ctaDescription:
      'Let’s discuss how platform architecture, automation, and performance optimization can support sustainable growth and measurable outcomes.',
  },
  {
    id: 'yukio',
    slug: 'yukio',
    title: 'YUKIO',
    seoTitle: 'YUKIO Case Study | High-Performance Futuristic Web Experience',
    seoDescription:
      'A futuristic digital experience built for performance and visual impact — featuring advanced UI, smooth animations, and 95+ Lighthouse scores.',
    tagline: 'Futuristic Digital Experience',
    shortDescription:
      'Complete digital experience rebuild with sleek interface, optimized load times, and structured feature dashboards aligned with futuristic aesthetic.',
    description:
      'YUKIO required a complete digital transformation to match their futuristic brand vision. We created a cutting-edge web experience with stunning visuals, lightning-fast performance, and intuitive feature dashboards.',
    image: '🚀',
    imageUrl: '/images/projects/yukio-project-ss.webp',
    tags: ['UI/UX', 'Performance', 'Design System', 'Animation'],
    category: 'Web Design',
    year: '2020',
    client: 'YUKIO',
    services: ['Web Development', 'UI/UX Design', 'Performance Optimization'],
    technologies: [
      {
        name: 'Next.js',
        usedFor: 'Frontend Layer',
      },
      {
        name: 'TypeScript',
        usedFor: 'Type Safety',
      },
      {
        name: 'Three.js',
        usedFor: '3D Graphics Library',
      },
      {
        name: 'Framer Motion',
        usedFor: 'Animation Library',
      },
    ],
    url: 'https://yukio.io',
    featured: true,
    keyResultsHeading: 'Key Results & Impact',
    keyResultsDescription:
      'Measured improvements delivered through system redesign',
    highlights: [
      'Futuristic UI with smooth animations and transitions',
      'Optimized load times (1.2s average)',
      'Interactive 3D elements using Three.js',
      'Comprehensive design system implementation',
      'Mobile-first responsive design',
      // '95+ Lighthouse performance score',
    ],
    challenge:
      "YUKIO's previous website didn't reflect their innovative brand. They needed a premium digital experience that showcased their forward-thinking approach while maintaining excellent performance.",
    solution:
      'We engineered a high-performance, futuristic web experience combining motion design, 3D elements, and a scalable frontend architecture. Every interaction was optimized for speed, responsiveness, and visual clarity without compromising performance.',
    results: [
      {
        stat: '95+',
        label: 'Lighthouse Performance Score',
      },
      {
        stat: '~1.2s',
        label: 'Average Page Load Time',
      },
      {
        stat: '120%',
        label: 'Increase in Average Session Duration',
      },
      {
        stat: '38%',
        label: 'Increase in Conversion Rate',
      },
    ],
    myRoleHeading: 'My Role',
    myRoleDescription:
      'System architecture, backend development, scalability planning, automation workflows, Discord integrations, performance optimization, and production deployment.',
    ctaHeading: 'Want a High-Performance Experience Like This?',
    ctaDescription:
      'Let’s discuss how performance-focused design and frontend architecture can elevate your product experience.',
  },
  {
    id: 'moenumbers',
    slug: 'moenumbers',
    title: 'MoeNumbers',
    seoTitle: 'MoeNumbers Case Study | Scalable E-commerce Platform',
    seoDescription:
      'Case study of MoeNumbers — a high-performance digital phone number marketplace optimized for search, instant provisioning, and conversion efficiency.',
    tagline: 'Digital Phone Number Marketplace',
    shortDescription:
      'High-performance platform for digital phone numbers with seamless UX, modern UI, and streamlined purchase flow for better conversions.',
    description:
      'MoeNumbers needed an e-commerce platform optimized for selling digital phone numbers. We built a high-performance marketplace with intuitive search, instant provisioning, and a streamlined checkout process.',
    image: '📱',
    imageUrl: '/images/projects/moe-numbers-project-ss.webp',
    tags: ['E-commerce', 'UI/UX', 'Conversion', 'Payment Integration'],
    category: 'E-commerce',
    year: '2023',
    client: 'MoeNumbers',
    services: ['Web Development', 'E-commerce', 'Payment Integration'],
    technologies: [
      {
        name: 'Next.js',
        usedFor: 'Frontend Layer',
      },
      {
        name: 'PostgreSQL',
        usedFor: 'Primary Data Layer',
      },
      {
        name: 'Stripe',
        usedFor: 'Payment Processing',
      },
      {
        name: 'Twilio API',
        usedFor: 'SMS and Voice Integration',
      },
    ],
    url: 'https://moenumbers.com',
    featured: true,
    highlights: [
      'Advanced search and filtering for phone numbers',
      'Instant number provisioning system',
      'Streamlined one-click checkout',
      'Secure payment processing with Stripe',
      '85% reduction in checkout abandonment',
      'Real-time inventory management',
    ],
    challenge:
      'MoeNumbers had a complicated purchase flow that resulted in high cart abandonment. The search functionality was slow, and users struggled to find the right phone numbers.',
    solution:
      'We re-architected the e-commerce flow with a focus on speed, reliability, and conversion efficiency. Implemented advanced search, one-click purchasing, and instant provisioning to create a seamless buying experience.',
    keyResultsHeading: 'Key Results & Impact',
    keyResultsDescription:
      'Measured improvements delivered through system redesign',
    results: [
      // convert to array of objects
      {
        stat: '85%',
        label: 'Reduction in Checkout Abandonment',
      },
      {
        stat: '220%',
        label: 'Increase in Daily Transactions',
      },
      {
        stat: '4.8/5',
        label: 'Average Customer Rating',
      },
      {
        stat: '50%',
        label: 'Faster Search Performance',
      },
    ],
    myRoleHeading: 'My Role',
    myRoleDescription:
      'System architecture, backend development, performance optimization, payment integration, and end-to-end deployment.',
    ctaHeading: 'Want Similar Results for Your Platform?',
    ctaDescription:
      'Let’s discuss how system design, automation, and performance optimization can deliver measurable outcomes for your product.',
  },
];
