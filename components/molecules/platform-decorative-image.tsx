import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PlatformDecorativeImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  position: string;
  className?: string;
}

/**
 * PlatformDecorativeImage Component
 *
 * Displays a decorative image with absolute positioning for the Platform Section.
 * Used to add visual interest with floating brand/integration logos.
 */
export function PlatformDecorativeImage({
  src,
  alt,
  width,
  height,
  position,
  className,
}: PlatformDecorativeImageProps) {
  return (
    <div className={cn('absolute hidden lg:block', position, className)}>
      <Image src={src} width={width} height={height} alt={alt} priority={false} />
    </div>
  );
}
