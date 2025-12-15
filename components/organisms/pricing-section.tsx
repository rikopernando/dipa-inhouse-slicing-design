'use client';

import { useState } from 'react';
import { Typography } from '@/components/atoms/typography';
import { PRICING_CONTENT, PRICING_PLANS } from '@/lib/data/home';
import { PricingSwitch } from '@/components/molecules/pricing-switch';
import { PricingCard } from '@/components/molecules/pricing-card';

/**
 * PricingSection Component
 *
 * Displays the pricing plans section with Monthly/Annual toggle.
 * Features a centered header, billing period switch, and responsive card grid.
 */
export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-7xl border-x py-20">
          {/* Section Header */}
          <header className="mb-12 flex flex-col items-center gap-4 text-center">
            <Typography variant="small" className="text-primary text-base tracking-wider uppercase">
              {PRICING_CONTENT.label}
            </Typography>
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-[56px]">
              {PRICING_CONTENT.title.line1} <br /> {PRICING_CONTENT.title.line2}
            </Typography>
          </header>

          {/* Billing Period Toggle */}
          <div className="mb-20">
            <PricingSwitch
              isAnnual={isAnnual}
              onToggle={setIsAnnual}
              annualDiscount={PRICING_CONTENT.annualDiscount}
            />
          </div>

          {/* Pricing Cards Grid */}
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {PRICING_PLANS.map((plan) => (
              <div key={plan.id} className="relative">
                {plan.id === 'enterprise' && (
                  <div className="bg-gradient-price-tag absolute -top-7 -ml-px size-[calc(100%+2px)] h-full rounded-[20px] text-center text-white uppercase">
                    <Typography variant="small" className="text-xs">
                      Best Value
                    </Typography>
                  </div>
                )}
                <PricingCard plan={plan} isAnnual={isAnnual} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
