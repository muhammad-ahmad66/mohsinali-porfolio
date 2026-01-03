// components/providers/loading-provider.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { PageLoader } from '@/components/ui/page-loader';

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader on route change
    setIsLoading(true);

    // Hide loader after a short delay (simulating page load)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      {children}
    </>
  );
}
