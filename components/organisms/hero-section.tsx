import { HeroContent } from '@/components/molecules/hero-content';
import { HeroImages } from '@/components/molecules/hero-images';
import { AIChatbot } from '@/components/molecules/ai-chatbot';

/**
 * Hero Section Component
 *
 * Main hero section for the landing page featuring:
 * - AI Solution headline and description
 * - Call-to-action button
 * - Three hero images with decorative positioning
 * - Gradient background with dot patterns
 * - Interactive input group
 */
export function HeroSection() {
  return (
    <section className="container mx-auto overflow-hidden px-4 lg:px-6">
      <div className="bg-gradient-hero relative mx-auto max-w-7xl border-x pt-16 pl-16">
        {/* Decorative Background Patterns */}
        <div className="absolute inset-0 bg-[url(/images/hero-pattern.webp)] bg-cover bg-center bg-no-repeat opacity-40" />
        <div className="bg-gradient-shadow-hero absolute bottom-0 left-0 z-99 h-[360px] w-[482px]" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 items-center gap-0">
          <HeroContent />
        </div>

        {/* Animated Hero Images */}
        <HeroImages />

        {/* Interactive AI Chatbot */}
        <AIChatbot />
      </div>
    </section>
  );
}
