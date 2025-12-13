import type { Metadata } from 'next';

/**
 * Enable ISR (Incremental Static Regeneration)
 * Revalidate every 30 minutes (1800 seconds)
 */
export const revalidate = 1800;

/**
 * Page-specific metadata
 */
export const metadata: Metadata = {};

/**
 * Home Page (Server Component with ISR)
 * Pre-rendered at build time and revalidated every 30 minutes
 * Includes client-side search functionality
 */
export default async function Home() {
  return <div className="container mx-auto px-4 py-4 lg:px-6 lg:py-8">Home Page</div>;
}
