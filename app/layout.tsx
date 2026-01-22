import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { TopLoader } from '@/components/ui/top-loader';
import './globals.css';
import { ToastProvider } from '@/components/providers/toast-provider';
import GoogleAnalytics from '@/components/shared/google-analytics';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = 'https://mohsinaliaziz.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Mohsin Ali Aziz | AI Engineer & Scalable Software Systems',
  description:
    'Mohsin Ali Aziz is an AI Engineer and software systems architect specializing in scalable platforms, automation, SaaS, and performance-driven digital solutions for global businesses.',
  keywords:
    'AI Engineer, Software Architect, Automation Systems, SaaS Development, Scalable Systems, Web Platforms, Performance Optimization',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Mohsin Ali Aziz',
    title: 'AI Engineer & Scalable Software Systems | Mohsin Ali Aziz',
    description:
      'Designing and engineering intelligent, scalable software systems for global businesses.',
    url: baseUrl, // Added this missing property
    images: [
      {
        url: '/images/logos/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohsin Ali Aziz - AI Engineer & Scalable Software Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineer & Scalable Software Systems | Mohsin Ali Aziz',
    description:
      'Designing and engineering intelligent, scalable software systems for global businesses.',
    images: ['/images/logos/og-image.png'],
  },
  alternates: {
    canonical: baseUrl,
  },
  // Add this icons configuration
  icons: {
    icon: [
      { url: '/images/logos/favicons/favicon.ico' },
      { url: '/images/logos/favicons/icon0.svg', type: 'image/svg+xml' },
      { url: '/images/logos/favicons/icon1.png', type: 'image/png' },
    ],
    apple: [{ url: '/images/logos/favicons/apple-icon.png' }],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/logos/favicons/apple-icon.png',
      },
    ],
  },
  manifest: '/images/logos/favicons/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add canonical tag explicitly for better compatibility */}
        <link rel="canonical" href={baseUrl} />

        {/* Add explicit meta robots tag as requested */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Add Open Graph meta tags explicitly for better compatibility */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mohsin Ali Aziz" />
        <meta
          property="og:title"
          content="AI Engineer & Scalable Software Systems | Mohsin Ali Aziz"
        />
        <meta
          property="og:description"
          content="Designing and engineering intelligent, scalable software systems for global businesses."
        />
        <meta
          property="og:image"
          content={`${baseUrl}/images/logos/og-image.png`}
        />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Mohsin Ali Aziz - AI Engineer & Scalable Software Systems"
        />

        {/* Manual links for better compatibility */}
        <link rel="icon" href="/images/logos/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/images/logos/favicons/apple-icon.png"
        />
        <link rel="manifest" href="/images/logos/favicons/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <TopLoader />
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
