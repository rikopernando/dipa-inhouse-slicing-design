import { Typography } from '@/components/atoms/typography';
import { PLATFORM_CONTENT } from '@/lib/data/home';
import Image from 'next/image';

/**
 * Platform Section Component
 *
 */
export function PlatformSection() {
  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="bg-gradient-platfrom relative mx-auto max-w-7xl border-x px-16 pt-20">
          <div className="absolute top-36 left-40">
            <Image src="/images/platform/connected.webp" width={120} height={82} alt="Connected" />
          </div>
          <div className="absolute top-48 right-24">
            <Image
              src="/images/platform/salesforce.webp"
              width={120}
              height={82}
              alt="Salesforce"
            />
          </div>
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
          <div className="relative mt-8 h-[572px] w-full rounded-tl-md rounded-tr-md border-t border-r border-l">
            <Image
              src="/images/platform/dashboard.svg"
              alt="Dashboard Platform"
              fill
              className="mt-1.5 rounded-tl-md rounded-tr-md object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
