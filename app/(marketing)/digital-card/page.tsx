// app/card/page.tsx
import { BusinessCard } from '@/components/ui/business-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Business Card | Mohsin Ali Aziz',
  description:
    'Save my contact information directly to your phone. Digital business card for Mohsin Ali Aziz - Digital Solutions & Software Engineering.',
};

export default function CardPage() {
  return (
    <div className="mx-auto my-16 max-w-md px-4">
      <BusinessCard showShareButton={true} />
    </div>
  );
}
