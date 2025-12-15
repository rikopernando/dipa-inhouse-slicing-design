import { Typography } from '@/components/atoms/typography';
import { PLATFORM_CONTENT, PLATFORM_DECORATIVE_IMAGES } from '@/lib/data/home';
import { PlatformDecorativeImage } from '@/components/molecules/platform-decorative-image';
import Image from 'next/image';

/**
 * Platform Section Component
 *
 * Displays the platform overview with decorative floating images,
 * header content, and main dashboard screenshot.
 */
export function PlatformSection() {
  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="bg-gradient-platfrom relative mx-auto max-w-7xl border-x px-8 pt-20 md:px-16">
          {/* Decorative Images */}
          {PLATFORM_DECORATIVE_IMAGES.map((image) => (
            <PlatformDecorativeImage
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              position={image.position}
            />
          ))}

          {/* Section Header */}
          <header className="mx-auto flex max-w-[600px] flex-col gap-4 text-center">
            <Typography variant="small" className="text-primary text-base tracking-wider uppercase">
              {PLATFORM_CONTENT.label}
            </Typography>
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-[56px]">
              {PLATFORM_CONTENT.title}
            </Typography>
            <Typography variant="lead" className="text-accent-foreground">
              {PLATFORM_CONTENT.description}
            </Typography>
          </header>

          {/* Main Dashboard Image */}
          <Image
            src={PLATFORM_CONTENT.mainImage.src}
            alt={PLATFORM_CONTENT.mainImage.alt}
            width={PLATFORM_CONTENT.mainImage.width}
            height={PLATFORM_CONTENT.mainImage.height}
            className="mt-12 rounded-tl-md rounded-tr-md border-x border-t object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1080px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
