import { ACHIEVEMENT_ITEMS } from '@/lib/data/home';
import { AchievementCard } from '@/components/molecules/achievement-card';

/**
 * Achievement Section Component
 *
 * Displays platform achievements and metrics in a grid layout.
 * Responsive design adapts from single column on mobile to three columns on desktop.
 */
export function AchievementSection() {
  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-7xl border-x">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {ACHIEVEMENT_ITEMS.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
