'use client';

import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typography } from '@/components/atoms/typography';
import { Button } from '@/components/ui/button';
import { CTA_CONTENT } from '@/lib/data/home';
import { AnimateOnScroll } from '@/components/atoms/animate-on-scroll';
import { scaleIn, fadeInUp } from '@/lib/animations';

/**
 * CTASection Component
 *
 * Final call-to-action section with animated content, background pattern, and CTA button.
 * Features scale-in animation when scrolled into view with gradient text highlighting.
 */
export function CTASection() {
  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <AnimateOnScroll variants={scaleIn}>
          <div
            className="bg-enterprise container mx-auto max-w-7xl bg-cover bg-center bg-no-repeat px-4 py-20 text-center lg:px-6"
            style={{
              backgroundImage: `url(${CTA_CONTENT.backgroundImage})`,
            }}
          >
            <motion.header
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              {/* Title with Gradient Highlight */}
              <motion.div variants={fadeInUp}>
                <Typography variant="h1" className="text-white">
                  {CTA_CONTENT.title.text}
                  <br />
                  <span className="text-gradient-primary">{CTA_CONTENT.title.highlight}</span>{' '}
                  {CTA_CONTENT.title.suffix}
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="p"
                  className="text-accent-foreground font-neue-montreal mx-auto max-w-lg text-xl"
                >
                  {CTA_CONTENT.description}
                </Typography>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={fadeInUp}>
                <Button size="xl" className="group">
                  {CTA_CONTENT.buttonText}
                  <ChevronRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.header>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
