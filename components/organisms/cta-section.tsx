import { ChevronRight } from 'lucide-react';
import { Typography } from '@/components/atoms/typography';
import { Button } from '@/components/ui/button';
import { CTA_CONTENT } from '@/lib/data/home';

/**
 * CTASection Component
 *
 * Final call-to-action section with background pattern, headline, description, and CTA button.
 * Features a centered layout with gradient text highlighting and decorative background.
 */
export function CTASection() {
  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <div
          className="bg-enterprise container mx-auto max-w-7xl bg-cover bg-center bg-no-repeat px-4 py-20 text-center lg:px-6"
          style={{
            backgroundImage: `url(${CTA_CONTENT.backgroundImage})`,
          }}
        >
          <header className="space-y-6">
            {/* Title with Gradient Highlight */}
            <Typography variant="h1" className="text-white">
              {CTA_CONTENT.title.text}
              <br />
              <span className="text-gradient-primary">{CTA_CONTENT.title.highlight}</span>{' '}
              {CTA_CONTENT.title.suffix}
            </Typography>

            {/* Description */}
            <Typography
              variant="p"
              className="text-accent-foreground font-neue-montreal mx-auto max-w-lg text-xl"
            >
              {CTA_CONTENT.description}
            </Typography>

            {/* CTA Button */}
            <Button size="xl" className="group">
              {CTA_CONTENT.buttonText}
              <ChevronRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </header>
        </div>
      </div>
    </section>
  );
}
