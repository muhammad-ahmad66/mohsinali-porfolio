mohsinaliaziz/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── clients/
│   │   └── about/
│   ├── fonts/
│   ├── favicon.ico
│   └── logo.svg
│
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                     # Home page
│   │   ├── layout.tsx                   # Marketing layout
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── newsletter/
│   │       └── route.ts
│   │
│   ├── globals.css
│   ├── layout.tsx                       # Root layout
│   └── not-found.tsx
│
├── components/
│   ├── providers/                       # Context providers
│   │   └── theme-provider.tsx           # Theme provider (dark/light mode)
│   │
│   ├── ui/                              # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   └── container.tsx
│   │
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── mobile-menu.tsx
│   │
│   ├── sections/                        # Page sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── projects.tsx
│   │   ├── testimonials.tsx
│   │   ├── stats.tsx
│   │   ├── about.tsx
│   │   ├── cta.tsx
│   │   └── contact-form.tsx
│   │
│   ├── cards/                           # Specific card components
│   │   ├── service-card.tsx
│   │   ├── project-card.tsx
│   │   └── testimonial-card.tsx
│   │
│   └── shared/                          # Shared components
│       ├── logo.tsx
│       ├── social-links.tsx
│       ├── scroll-to-top.tsx
│       └── theme-toggle.tsx             # Dark/Light mode toggle
│
├── lib/
│   ├── utils.ts                         # Utility functions (cn, etc.)
│   ├── constants.ts                     # App constants
│   └── validations.ts                   # Zod schemas
│
├── types/
│   ├── index.ts
│   ├── project.ts
│   ├── service.ts
│   └── testimonial.ts
│
├── data/                                # Static data
│   ├── services.ts
│   ├── projects.ts
│   ├── testimonials.ts
│   └── social-links.ts
│
├── hooks/                               # Custom React hooks
│   ├── use-scroll.ts
│   ├── use-media-query.ts
│   └── use-intersection-observer.ts
│
├── styles/
│   └── theme.css                        # Additional theme variables
│
├── .env.local                           # Environment variables
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
