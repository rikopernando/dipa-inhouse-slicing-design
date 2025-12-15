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
      width: 90,
      height: 36,
    },
    {
      name: 'Expedia',
      logo: '/images/brands/Expedia.webp',
      width: 146,
      height: 32,
    },
    {
      name: 'DocuSign',
      logo: '/images/brands/DocuSign.webp',
      width: 130,
      height: 30,
    },
    {
      name: 'Phantom',
      logo: '/images/brands/Phantom.webp',
      width: 130,
      height: 30,
    },
  ];

  return (
    <section className="border-border bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-0 border-x md:flex-row md:justify-between">
          {/* Headline */}
          <div className="max-w-xs px-12 py-8 text-center md:text-left">
            <Typography variant="p" className="text-muted-foreground max-w-lg text-xl">
              Trusted by 100+ world&apos;s best brand
            </Typography>
          </div>

          {/* Brand logos grid */}
          <div className="grid flex-1 grid-cols-2 gap-0 md:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center border-l p-12 grayscale transition-all duration-300 hover:grayscale-0"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
