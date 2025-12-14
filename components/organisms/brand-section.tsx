import Image from 'next/image';
import { Typography } from '@/components/atoms/typography';

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
  const brands = [
    {
      name: 'eBay',
      logo: '/images/brands/eBay.webp',
      width: 120,
      height: 50,
    },
    {
      name: 'Expedia',
      logo: '/images/brands/Expedia.webp',
      width: 140,
      height: 50,
    },
    {
      name: 'DocuSign',
      logo: '/images/brands/DocuSign.webp',
      width: 140,
      height: 50,
    },
    {
      name: 'Phantom',
      logo: '/images/brands/Phantom.webp',
      width: 140,
      height: 50,
    },
  ];

  return (
    <section className="border-border bg-background border-t py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-12">
          {/* Headline */}
          <div className="text-center md:text-left">
            <Typography variant="h3" className="text-muted-foreground max-w-xs font-semibold">
              Trusted by 100+ world&apos;s best brand
            </Typography>
          </div>

          {/* Brand logos grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="h-auto w-full max-w-[120px] object-contain md:max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
