'use client';

import { Typography } from '@/components/atoms/typography';
import type { AchievementItem } from '@/lib/data/home';
import { cn } from '@/lib/utils';
import { useCountUp } from '@/hooks/use-count-up';

interface AchievementCardProps {
  achievement: AchievementItem;
  isFirst?: boolean;
}

/**
 * AchievementCard Component
 *
 * Displays a single achievement metric with animated count-up for numbers.
 * Used in the Achievement Section to showcase platform statistics and credentials.
 */
export function AchievementCard({ achievement, isFirst = false }: AchievementCardProps) {
  // Extract number from title for count-up animation (e.g., "2M+" -> 2)
  const numericValue = parseInt(achievement.title.replace(/[^0-9]/g, ''), 10);
  const hasNumber = !isNaN(numericValue);
  const suffix = achievement.title.replace(/[0-9]/g, '');

  const { count, ref } = useCountUp(hasNumber ? numericValue : 0, 2000);

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-4 px-8 py-12 text-center md:px-16 lg:px-24',
        !isFirst && 'border-l',
      )}
    >
      <Typography variant="h2" className="text-4xl md:text-5xl lg:text-6xl">
        {hasNumber ? `${count}${suffix}` : achievement.title}
      </Typography>
      <Typography variant="large" className="text-accent-foreground mx-auto max-w-[190px]">
        {achievement.description}
      </Typography>
    </div>
  );
}
