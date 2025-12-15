'use client';

import { motion } from 'framer-motion';
import { Typography } from '@/components/atoms/typography';
import { BrandLogo } from '@/components/molecules/brand-logo';
import { BRANDS, BRAND_CONTENT } from '@/lib/data/home';
import { AnimateOnScroll } from '@/components/atoms/animate-on-scroll';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

/**
 * Brand Section Component
 *
 * Displays trusted brand logos to build credibility with stagger animations
 * Features:
 * - Headline text with fade-in animation
 * - Grid of brand logos with stagger effect
 * - Responsive layout
 */
export function BrandSection() {
  return (
    <section className="border-border bg-background border-t">
      <div className="container mx-auto px-0 lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-0 border-x md:flex-row md:justify-between">
          {/* Headline */}
          <AnimateOnScroll variants={fadeInUp}>
            <div className="flex h-[120px] max-w-xs items-center justify-center px-8 lg:h-[150px]">
              <Typography variant="p" className="text-muted-foreground max-w-lg text-xl">
                {BRAND_CONTENT.headline}
              </Typography>
            </div>
          </AnimateOnScroll>

          {/* Brand logos grid */}
          <motion.div
            className="grid flex-1 grid-cols-2 gap-0 md:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {BRANDS.map((brand, index) => (
              <motion.div key={brand.name} variants={staggerItem} custom={index}>
                <BrandLogo brand={brand} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
