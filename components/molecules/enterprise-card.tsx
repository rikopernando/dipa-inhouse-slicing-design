import Image from 'next/image';
import { Typography } from '@/components/atoms/typography';
import type { EnterpriseCard as EnterpriseCardType } from '@/lib/data/home';
import { cn } from '@/lib/utils';

interface EnterpriseCardProps {
  card: EnterpriseCardType;
}

/**
 * Shared card styles for consistency
 */
const CARD_STYLES = {
  base: 'h-[400px] group bg-enterprise-card relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
  content: 'space-y-3',
  title: 'text-2xl text-white',
  description: 'text-enterprise-card max-w-[420px] text-lg',
} as const;

/**
 * EnterpriseCard Component
 *
 * A unified card component that supports multiple layout variants:
 * - 'image-background': Image as full background with content overlay (AI Chatbot, Integrated App, Fast & Intuitive)
 * - 'image-top': Image positioned at top with content below (Security)
 *
 * This component consolidates all enterprise card variations into a single,
 * maintainable component with variant-based rendering.
 */
export function EnterpriseCard({ card }: EnterpriseCardProps) {
  const isImageBackground = card.variant === 'image-background';
  const isImageTop = card.variant === 'image-top';

  return (
    <div
      className={cn(
        CARD_STYLES.base,
        card.colSpan,
        isImageBackground && 'px-8 pt-8',
        isImageTop && 'p-8',
      )}
    >
      {/* Image Top Layout */}
      {isImageTop && (
        <>
          {/* Main Image */}
          <div className="relative flex-1">
            <div className="relative mx-auto h-full min-h-[200px] w-full max-w-[440px]">
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
          <div className={CARD_STYLES.content}>
            <Typography variant="lead" className={CARD_STYLES.title}>
              {card.title}
            </Typography>
            <Typography variant="p" className={CARD_STYLES.description}>
              {card.description}
            </Typography>
          </div>

          {/* Decorative Image (Optional) */}
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
        </>
      )}

      {/* Image Background Layout */}
      {isImageBackground && (
        <>
          {/* Card Content */}
          <div className={cn(CARD_STYLES.content, 'relative z-10')}>
            <Typography variant="lead" className={CARD_STYLES.title}>
              {card.title}
            </Typography>
            <Typography variant="p" className={CARD_STYLES.description}>
              {card.description}
            </Typography>
          </div>

          {/* Background Image */}
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </>
      )}
    </div>
  );
}
