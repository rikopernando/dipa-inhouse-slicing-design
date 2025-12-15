import { Typography } from '@/components/atoms/typography';
import type { AchievementItem } from '@/lib/data/home';
import { cn } from '@/lib/utils';

interface AchievementCardProps {
  achievement: AchievementItem;
  isFirst?: boolean;
}

/**
 * AchievementCard Component
 *
 * Displays a single achievement metric with title and description.
 * Used in the Achievement Section to showcase platform statistics and credentials.
 */
export function AchievementCard({ achievement, isFirst = false }: AchievementCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 px-8 py-12 text-center md:px-16 lg:px-24',
        !isFirst && 'border-l',
      )}
    >
      <Typography variant="h2" className="text-4xl md:text-5xl lg:text-6xl">
        {achievement.title}
      </Typography>
      <Typography variant="large" className="text-accent-foreground mx-auto max-w-[190px]">
        {achievement.description}
      </Typography>
    </div>
  );
}
