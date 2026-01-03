// app/(marketing)/loading.tsx
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function MarketingLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <LoadingSpinner />

        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-semibold text-foreground">Loading...</p>

          {/* Animated dots */}
          <div className="flex gap-1">
            <div className="h-2 w-2 animate-bounce rounded-full bg-primary-500 [animation-delay:-0.3s]" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-primary-500 [animation-delay:-0.15s]" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-primary-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
