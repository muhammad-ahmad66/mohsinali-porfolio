// app/card/page.tsx
import DigitalBusinessCard from '@/components/sections/digital-business-card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Business Card | Mohsin Ali Aziz',
  description:
    'Save my contact information directly to your phone. Digital business card for Mohsin Ali Aziz - Digital Solutions & Software Engineering.',
};

export default function CardPage() {
  return <DigitalBusinessCard />;
}
