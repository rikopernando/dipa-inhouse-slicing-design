import { Typography } from '@/components/atoms/typography';
import { BrandLogo } from '@/components/molecules/brand-logo';
import { BRANDS, BRAND_CONTENT } from '@/lib/data/home';

/**
 * Brand Section Component
 *
 * Displays trusted brand logos to build credibility
 * Features:
 * - Headline text
 * - Grid of brand logos (eBay, Expedia, DocuSign, Phantom)
 * - Responsive layout
 */
export function BrandSection() {
  return (
    <section className="border-border bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-0 border-x md:flex-row md:justify-between">
          {/* Headline */}
          <div className="max-w-xs px-12 py-8 text-center md:text-left">
            <Typography variant="p" className="text-muted-foreground max-w-lg text-xl">
              {BRAND_CONTENT.headline}
            </Typography>
          </div>

          {/* Brand logos grid */}
          <div className="grid flex-1 grid-cols-2 gap-0 md:grid-cols-4">
            {BRANDS.map((brand) => (
              <BrandLogo key={brand.name} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
