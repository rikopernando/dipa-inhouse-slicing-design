import Image from 'next/image';
import { Typography } from '@/components/atoms/typography';
import type { SocialLink } from '@/lib/data/home';
import { cn } from '@/lib/utils';

interface SocialMediaLinksProps {
  socialLinks: readonly SocialLink[];
  className?: string;
}

/**
 * SocialMediaLinks Component
 *
 * Displays a row of social media icon links.
 * Uses image icons with hover effects.
 */
export function SocialMediaLinks({ socialLinks, className }: SocialMediaLinksProps) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <Typography variant="muted" className="text-sm">
        Follow Us
      </Typography>
      <div className="flex gap-0">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80"
            aria-label={social.name}
          >
            <Image
              width={22}
              height={22}
              src={`/images/icons/${social.icon}.webp`}
              alt={social.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
