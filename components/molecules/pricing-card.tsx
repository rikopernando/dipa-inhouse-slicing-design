import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Typography } from '@/components/atoms/typography';
import type { PricingPlan } from '@/lib/data/home';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
}

/**
 * PricingCard Component
 *
 * Displays a pricing plan with title, description, price, features, and CTA button.
 * Supports both monthly and annual pricing display with conditional rendering.
 */
export function PricingCard({ plan, isAnnual }: PricingCardProps) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const billingPeriod = isAnnual ? 'year' : 'month';

  return (
    <Card
      className={cn(
        'border-border relative flex flex-col overflow-hidden rounded-[20px] pt-6 pb-8 shadow-none',
        plan.id === 'enterprise' ? 'bg-gradient-price-card' : '',
      )}
    >
      {/* Card Header */}
      <CardHeader className="space-y-4 px-8">
        <div className="grid grid-cols-5 items-center gap-x-2 gap-y-8">
          <CardTitle className="col-span-2 text-2xl">{plan.name}</CardTitle>
          <CardDescription className="text-accent-foreground col-span-3 max-w-[250px] text-base">
            {plan.description}
          </CardDescription>

          {/* Price */}
          <div className="col-span-2 flex items-baseline gap-2">
            <Typography variant="h2" className="lg:text-[40px]">
              ${price}
            </Typography>
            <Typography variant="muted" className="text-lg">
              / {billingPeriod}
            </Typography>
          </div>

          {/* CTA Button */}
          <Button
            className={cn(
              'col-span-3 w-max',
              plan.buttonVariant === 'outline' ? 'font-normal' : 'font-medium',
            )}
            variant={plan.buttonVariant}
            size="lg"
            disabled={plan.buttonVariant === 'outline'}
          >
            {plan.buttonText}
          </Button>
        </div>
      </CardHeader>

      {/* Features List */}
      <CardContent className="flex-1 px-8">
        <div className="border-t pt-6">
          <ul className="space-y-4">
            {plan.features.map((feature) => (
              <li key={feature.id} className="flex items-start gap-3">
                <span
                  className={cn(
                    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center',
                    !feature.disabled ? 'text-primary' : 'text-muted',
                  )}
                >
                  {feature.included ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                </span>
                <Typography
                  variant="p"
                  className={cn(
                    'text-base',
                    feature.included ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {feature.text}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
