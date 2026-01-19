import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { TopLoader } from '@/components/ui/top-loader';
import './globals.css';
import { ToastProvider } from '@/components/providers/toast-provider';
import GoogleAnalytics from '@/components/shared/google-analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohsin Ali Aziz | Digital Solutions & AI Expert',
  description:
    'Portfolio of Mohsin Ali Aziz - Expert in web development, AI automation, blockchain, and digital solutions.',
  keywords: [
    'web development',
    'AI',
    'automation',
    'blockchain',
    'digital solutions',
  ],
  authors: [{ name: 'Mohsin Ali Aziz' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohsinaliaziz.com',
    title: 'Mohsin Ali Aziz | Digital Solutions & AI Expert',
    description:
      'Portfolio of Mohsin Ali Aziz - Expert in web development, AI automation, blockchain, and digital solutions.',
    siteName: 'Mohsin Ali Aziz Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohsin Ali Aziz | Digital Solutions & AI Expert',
    description:
      'Portfolio of Mohsin Ali Aziz - Expert in web development, AI automation, blockchain, and digital solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
