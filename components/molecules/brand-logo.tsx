import Image from 'next/image';
import type { Brand } from '@/lib/data/home';

interface BrandLogoProps {
  brand: Brand;
}

/**
 * BrandLogo Component
 *
 * Displays a single brand logo with hover effects
 * Part of the Brand Section organism
 */
export function BrandLogo({ brand }: BrandLogoProps) {
  return (
    <div className="flex h-[120px] items-center justify-center border-l p-4 grayscale transition-all duration-300 hover:grayscale-0 lg:h-[150px]">
      <Image
        src={brand.logo}
        alt={`${brand.name} logo`}
        width={brand.width}
        height={brand.height}
      />
    </div>
  );
}
