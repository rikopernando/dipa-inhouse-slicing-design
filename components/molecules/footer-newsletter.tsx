'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Typography } from '@/components/atoms/typography';
import type { SocialLink } from '@/lib/data/home';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface FooterNewsletterProps {
  socialLinks: readonly SocialLink[];
}

/**
 * FooterNewsletter Component
 *
 * Newsletter subscription form with email input and social media links.
 * Includes client-side form handling and validation.
 */
export function FooterNewsletter({ socialLinks }: FooterNewsletterProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <Typography variant="h6" className="font-semibold">
          Subscribe
        </Typography>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <InputGroup className="bg-input rounded-none border-0">
            <InputGroupInput className="px-5" placeholder="Your email" />
            <InputGroupAddon align="inline-end">
              <div className="text-muted-foreground flex size-4 items-center justify-center">
                <ArrowRight className="size-5" />
              </div>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>

      <div className="flex items-center justify-between">
        <Typography variant="muted" className="text-sm">
          Follow Us
        </Typography>
        <div className="flex gap-0">
          {socialLinks.map((social) => {
            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center transition-colors',
                )}
                aria-label={social.name}
              >
                <Image
                  width={22}
                  height={22}
                  src={`/images/icons/${social.icon}.webp`}
                  alt={social.name}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
