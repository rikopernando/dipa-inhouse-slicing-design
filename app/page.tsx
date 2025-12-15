import type { Metadata } from 'next';
import { HeroSection } from '@/components/organisms/hero-section';
import { BrandSection } from '@/components/organisms/brand-section';
import { ToolkitSection } from '@/components/organisms/toolkit-section';
import { EnterpriseSection } from '@/components/organisms/enterprise-section';

/**
 * Enable ISR (Incremental Static Regeneration)
 * Revalidate every 30 minutes (1800 seconds)
 */
export const revalidate = 1800;

/**
 * Page-specific metadata
 */
export const metadata: Metadata = {
  title: 'AI Automation Platform - Turn Workflows into AI Agents',
  description:
    'Powerful and production-ready, our cloud platform has the solutions you need to succeed. Turn your workflows into AI agent automations.',
};

/**
 * Home Page (Server Component with ISR)
 * Pre-rendered at build time and revalidated every 30 minutes
 * Features hero, brand, toolkit, and enterprise sections
 */
export default async function Home() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <ToolkitSection />
      <EnterpriseSection />
    </>
  );
}
