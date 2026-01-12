// lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Generate slug from string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
/**
 * Formats phone numbers like:
 * +16313868474  -> +1 (631) 386-8474
 * 6313868474    -> (631) 386-8474
 */
export function formatPhoneNumber(input: string): string {
  // Detect whether input explicitly contained +1
  const hadPlusOne = /^\+?1/.test(input);

  // Strip everything except digits
  const digits = input.replace(/\D/g, '');

  // Normalize by removing country code 1 (for formatting only)
  const normalized =
    digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;

  // If not 10 digits, just return original cleaned number
  if (normalized.length !== 10) return input;

  const area = normalized.slice(0, 3);
  const prefix = normalized.slice(3, 6);
  const line = normalized.slice(6);

  const formatted = `(${area}) ${prefix}-${line}`;

  return hadPlusOne ? `+1 ${formatted}` : formatted;
}
