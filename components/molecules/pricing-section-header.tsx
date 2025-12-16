import { Typography } from '@/components/atoms/typography';

interface PricingSectionHeaderProps {
  label: string;
  title: Record<string, string>;
  description?: string;
}

/**
 * PricingSectionHeader Component
 *
 * Displays the header for the pricing section with label, title, and optional description.
 * Centered layout with consistent spacing and typography.
 */
export function PricingSectionHeader({ label, title }: PricingSectionHeaderProps) {
  return (
    <header className="mb-6 flex flex-col items-center gap-4 text-center sm:mb-12">
      <Typography variant="small" className="text-primary text-base tracking-wider uppercase">
        {label}
      </Typography>
      <Typography variant="h2" className="text-3xl md:text-4xl lg:text-[56px]">
        {title.line1}
        <br /> {title.line2}
      </Typography>
    </header>
  );
}
