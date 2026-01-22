'use client';

import React, { useState } from 'react';
import { X, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BusinessCard } from './business-card';

export const ContactCardModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <Button
        variant="outline"
        size="lg"
        onClick={() => setIsOpen(true)}
        icon={CreditCard}
        iconPosition="left"
        className="group"
      >
        View Digital Card
      </Button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center p-4 duration-200">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="scrollbar-hide animate-in zoom-in-95 relative max-h-[90vh] w-full max-w-md overflow-y-auto duration-200">
            {/* Close button - Top right outside card */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/20"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Business Card Component */}
            <BusinessCard showShareButton={true} />
          </div>
        </div>
      )}

      {/* Global style to hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};
