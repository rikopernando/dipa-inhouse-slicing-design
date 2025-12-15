'use client';

import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Typography } from '@/components/atoms/typography';
import { cn } from '@/lib/utils';

interface PricingSwitchProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
  annualDiscount?: string;
}

/**
 * PricingSwitch Component
 *
 * Toggle switch for Monthly/Annual billing with optional discount badge.
 * Uses shadcn/ui Switch component for accessibility and consistency.
 * Used in the Pricing Section to allow users to switch between billing periods.
 */
export function PricingSwitch({ isAnnual, onToggle, annualDiscount }: PricingSwitchProps) {
  return (
    <div className="flex items-center justify-center gap-3 px-4 sm:px-0">
      <button
        onClick={() => onToggle(false)}
        className={cn(
          'cursor-pointer transition-colors',
          !isAnnual ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
        )}
        type="button"
      >
        <Typography variant="large">Monthly</Typography>
      </button>

      {/* shadcn Switch Component */}
      <Switch checked={isAnnual} onCheckedChange={onToggle} aria-label="Toggle billing period" />

      <button
        onClick={() => onToggle(true)}
        className={cn(
          'flex cursor-pointer items-center gap-2 transition-colors',
          isAnnual ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
        )}
        type="button"
      >
        <Typography variant="large">Annual</Typography>
        {annualDiscount && (
          <Badge variant="secondary" className="text-primary bg-primary/10 px-2 py-1 uppercase">
            {annualDiscount}
          </Badge>
        )}
      </button>
    </div>
  );
}
