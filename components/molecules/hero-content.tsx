import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/atoms/typography';
import { Badge } from '@/components/ui/badge';
import { HERO_CONTENT } from '@/lib/data/home';

/**
 * HeroContent Component
 *
 * Displays the main content of the hero section
 * Including badge, title, description, and CTA button
 */
export function HeroContent() {
  return (
    <div className="relative z-10 col-span-8 space-y-6">
      <div className="space-y-4">
        <Badge>
          <Image alt={HERO_CONTENT.badge} src="/images/icons/stars.webp" width={16} height={16} />
          {HERO_CONTENT.badge}
        </Badge>

        <Typography variant="h1">
          {HERO_CONTENT.title.line1}
          <br />
          <span className="text-gradient-primary">{HERO_CONTENT.title.line2}</span>{' '}
          {HERO_CONTENT.title.line3}
        </Typography>

        <Typography variant="p" className="text-muted-foreground max-w-lg text-xl">
          {HERO_CONTENT.description}
        </Typography>
      </div>

      <Button size="xl" className="group">
        {HERO_CONTENT.cta}
        <ChevronRight />
      </Button>
    </div>
  );
}
