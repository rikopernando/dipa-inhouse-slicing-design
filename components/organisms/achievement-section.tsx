import { Typography } from '@/components/atoms/typography';
import { ACHIEVEMENT_ITEMS } from '@/lib/data/home';
import { cn } from '@/lib/utils';

/**
 * Achievement Section Component
 */
export function AchievementSection() {
  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-7xl border-x">
          <div className="grid grid-cols-3">
            {ACHIEVEMENT_ITEMS.map((achievement, index) => (
              <div
                key={achievement.id}
                className={cn(
                  'flex flex-col gap-4 px-24 py-12 text-center',
                  index === 0 ? 'border-l-0' : 'border-l',
                )}
              >
                <Typography variant="h2" className="text-3xl md:text-4xl lg:text-6xl">
                  {achievement.title}
                </Typography>
                <Typography variant="large" className="mx-w-[190px] text-accent-foreground mx-auto">
                  {achievement.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
