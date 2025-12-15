import Image from 'next/image';
import { Typography } from '@/components/atoms/typography';
import type { EnterpriseCard as EnterpriseCardType } from '@/lib/data/home';
import { cn } from '@/lib/utils';

interface EnterpriseAIChatbotCardProps {
  card: EnterpriseCardType;
}

/**
 * EnterpriseAIChatbotCard Component
 *
 * Displays an enterprise feature card with image and description
 * Part of the Enterprise Section organism
 */
export function EnterpriseAIChatbotCard({ card }: EnterpriseAIChatbotCardProps) {
  return (
    <div
      className={cn(
        'group bg-enterprice-card [400px] relative flex flex-col overflow-hidden rounded-3xl px-8 pt-8 transition-shadow duration-300 hover:shadow-lg',
        card.colSpan,
      )}
    >
      {/* Card Content */}
      <div className="space-y-3">
        <Typography variant="lead" className="text-2xl text-white">
          {card.title}
        </Typography>
        <Typography variant="p" className="text-enterprice-card max-w-[420px] text-lg">
          {card.description}
        </Typography>
      </div>

      {/* Main Image */}
      <div className="absolute top-0 left-0 mx-auto h-full w-full">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
