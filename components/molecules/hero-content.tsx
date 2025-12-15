'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/atoms/typography';
import { Badge } from '@/components/ui/badge';
import { HERO_CONTENT } from '@/lib/data/home';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

/**
 * HeroContent Component
 *
 * Displays the main content of the hero section with stagger animations
 * Including badge, title, description, and CTA button
 */
export function HeroContent() {
  return (
    <motion.div
      className="relative z-10 col-span-8 space-y-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-4">
        <motion.div variants={staggerItem}>
          <Badge>
            <Image alt={HERO_CONTENT.badge} src="/images/icons/stars.webp" width={16} height={16} />
            {HERO_CONTENT.badge}
          </Badge>
        </motion.div>

        <motion.div variants={staggerItem}>
          <Typography variant="h1">
            {HERO_CONTENT.title.line1}
            <br />
            <span className="text-gradient-primary">{HERO_CONTENT.title.line2}</span>{' '}
            {HERO_CONTENT.title.line3}
          </Typography>
        </motion.div>

        <motion.div variants={staggerItem}>
          <Typography variant="p" className="text-muted-foreground max-w-lg text-xl">
            {HERO_CONTENT.description}
          </Typography>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp}>
        <Button size="xl" className="group">
          {HERO_CONTENT.cta}
          <ChevronRight className="transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
