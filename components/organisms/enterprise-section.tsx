'use client';

import { motion } from 'framer-motion';
import { Typography } from '@/components/atoms/typography';
import { ENTERPRISE_CONTENT, ENTERPRISE_CARDS } from '@/lib/data/home';
import { EnterpriseCard } from '@/components/molecules/enterprise-card';
import { AnimateOnScroll } from '@/components/atoms/animate-on-scroll';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

/**
 * Enterprise Section Component
 *
 * Displays the enterprise features section with animated grid of feature cards.
 * Each card supports different layout variants with hover lift effects.
 */
export function EnterpriseSection() {
  return (
    <section className="bg-enterprise">
      <div className="container mx-auto px-0 lg:px-6">
        <div className="border-enterprise mx-auto max-w-7xl border-x px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-20">
          {/* Section Header */}
          <AnimateOnScroll variants={fadeInUp}>
            <header className="mb-8 flex max-w-[560px] flex-col sm:mb-12 sm:gap-4">
              <Typography
                variant="small"
                className="text-gradient-enterprise text-base tracking-wider uppercase"
              >
                {ENTERPRISE_CONTENT.label}
              </Typography>
              <Typography variant="h2" className="text-3xl text-white md:text-4xl lg:text-[56px]">
                {ENTERPRISE_CONTENT.title}
              </Typography>
            </header>
          </AnimateOnScroll>

          {/* Enterprise Cards Grid */}
          <motion.div
            className="grid grid-cols-1 gap-4 lg:grid-cols-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {ENTERPRISE_CARDS.map((card) => (
              <motion.div key={card.id} variants={staggerItem} className={card.colSpan}>
                <EnterpriseCard card={card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
