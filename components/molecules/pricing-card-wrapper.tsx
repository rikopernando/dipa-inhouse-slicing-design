import { Typography } from '@/components/atoms/typography';
import { PricingCard } from '@/components/molecules/pricing-card';
import type { PricingPlan } from '@/lib/data/home';

interface PricingCardWrapperProps {
  plan: PricingPlan;
  isAnnual: boolean;
}

/**
 * PricingCardWrapper Component
 *
 * Wraps a PricingCard with an optional "Best Value" badge for highlighted plans.
 * The badge appears as a gradient overlay at the top of the card.
 */
export function PricingCardWrapper({ plan, isAnnual }: PricingCardWrapperProps) {
  return (
    <div className="relative">
      {/* Best Value Badge */}
      {plan.bestValueLabel && (
        <div className="bg-gradient-price-tag absolute -top-7 -ml-px size-[calc(100%+2px)] h-full rounded-[20px] text-center text-white uppercase">
          <Typography variant="small" className="text-xs">
            {plan.bestValueLabel}
          </Typography>
        </div>
      )}

      {/* Pricing Card */}
      <PricingCard plan={plan} isAnnual={isAnnual} />
    </div>
  );
}
