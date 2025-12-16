'use client';

import { useState } from 'react';
import { PRICING_CONTENT, PRICING_PLANS } from '@/lib/data/home';
import { PricingSwitch } from '@/components/molecules/pricing-switch';
import { PricingSectionHeader } from '@/components/molecules/pricing-section-header';
import { PricingCardWrapper } from '@/components/molecules/pricing-card-wrapper';

/**
 * PricingSection Component
 *
 * Displays the pricing plans section with Monthly/Annual toggle.
 * Features a centered header, billing period switch, and responsive card grid.
 * Uses extracted molecule components for better modularity and reusability.
 */
export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-0 lg:px-6">
        <div className="mx-auto max-w-7xl border-x px-4 py-6 sm:px-8 sm:py-12 lg:py-20">
          {/* Section Header */}
          <PricingSectionHeader label={PRICING_CONTENT.label} title={PRICING_CONTENT.title} />

          {/* Billing Period Toggle */}
          <div className="mb-6 sm:mb-12 lg:mb-20">
            <PricingSwitch
              isAnnual={isAnnual}
              onToggle={setIsAnnual}
              annualDiscount={PRICING_CONTENT.annualDiscount}
            />
          </div>

          {/* Pricing Cards Grid */}
          <div className="mx-auto grid max-w-5xl gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-8">
            {PRICING_PLANS.map((plan) => (
              <PricingCardWrapper key={plan.id} plan={plan} isAnnual={isAnnual} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
