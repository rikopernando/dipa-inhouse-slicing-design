import { Typography } from '@/components/atoms/typography';
import { ENTERPRISE_CONTENT, ENTERPRISE_CARDS } from '@/lib/data/home';
import { EnterpriseCard } from '@/components/molecules/enterprise-card';

/**
 * Enterprise Section Component
 *
 * Displays the enterprise features section with a grid of feature cards.
 * Each card supports different layout variants for flexible content presentation.
 */
export function EnterpriseSection() {
  return (
    <section className="bg-enterprice">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="border-enterprice mx-auto max-w-7xl border-x px-16 py-20">
          {/* Section Header */}
          <header className="mb-12 flex max-w-[560px] flex-col gap-4">
            <Typography
              variant="small"
              className="text-gradient-enterprice text-base tracking-wider uppercase"
            >
              {ENTERPRISE_CONTENT.label}
            </Typography>
            <Typography variant="h2" className="text-3xl text-white md:text-4xl lg:text-[56px]">
              {ENTERPRISE_CONTENT.title}
            </Typography>
          </header>

          {/* Enterprise Cards Grid */}
          <div className="grid gap-4 md:grid-cols-12">
            {ENTERPRISE_CARDS.map((card) => (
              <EnterpriseCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
