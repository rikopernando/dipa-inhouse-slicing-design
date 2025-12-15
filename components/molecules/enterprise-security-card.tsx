import Image from 'next/image';
import { Typography } from '@/components/atoms/typography';
import type { EnterpriseCard as EnterpriseCardType } from '@/lib/data/home';
import { cn } from '@/lib/utils';

interface EnterpriseSecurityCardProps {
  card: EnterpriseCardType;
}

/**
 * EnterpriseSecurityCard Component
 *
 * Displays an enterprise feature card with image and description
 * Part of the Enterprise Section organism
 */
export function EnterpriseSecurityCard({ card }: EnterpriseSecurityCardProps) {
  return (
    <div
      className={cn(
        'group bg-enterprice-card relative flex h-[400px] flex-col overflow-hidden rounded-3xl p-8 transition-shadow duration-300 hover:shadow-lg',
        card.colSpan,
      )}
    >
      {/* Main Image */}
      <div className="relative flex-1">
        <div className="relative mx-auto h-full min-h-[200px] w-full max-w-[440px]!">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="space-y-3">
        <Typography variant="lead" className="text-2xl text-white">
          {card.title}
        </Typography>
        <Typography variant="p" className="text-enterprice-card max-w-[420px] text-lg">
          {card.description}
        </Typography>
      </div>

      {/* Decorative Image (Optional - for first card) */}
      {card.decorativeImage && (
        <div className="absolute top-0 right-0 left-0 h-full">
          <Image
            src={card.decorativeImage}
            alt="Decorative pattern"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
