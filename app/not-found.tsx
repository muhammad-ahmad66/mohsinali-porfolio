// app/not-found.tsx
import NotFoundPage from '@/components/shared/not-found-page';
import { Home, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <NotFoundPage
      title="Oops! Page not found"
      description="The page you're looking for doesn't exist or has been moved. Let's get you back on track."
      badgeText="404 Error"
      primaryButton={{
        text: 'Go Home',
        href: '/',
        icon: Home,
      }}
      secondaryButton={{
        text: 'Contact Us',
        href: '/contact',
        icon: Mail,
      }}
    />
  );
}
