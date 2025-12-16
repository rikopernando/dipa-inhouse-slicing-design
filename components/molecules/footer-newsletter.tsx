'use client';

import { ArrowRight } from 'lucide-react';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { Typography } from '@/components/atoms/typography';
import { SocialMediaLinks } from '@/components/molecules/social-media-links';
import type { SocialLink } from '@/lib/data/home';

interface FooterNewsletterProps {
  socialLinks: readonly SocialLink[];
}

/**
 * FooterNewsletter Component
 *
 * Newsletter subscription form with email input and social media links.
 * Form submission is handled inline without additional state.
 */
export function FooterNewsletter({ socialLinks }: FooterNewsletterProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    console.log('Subscribe:', email);
    e.currentTarget.reset();
  };

  return (
    <div className="col-span-2 space-y-6 sm:col-span-1">
      <Typography variant="h6" className="font-semibold">
        Subscribe
      </Typography>

      <form onSubmit={handleSubmit}>
        <InputGroup className="bg-input rounded-none border-0">
          <InputGroupInput
            name="email"
            type="email"
            className="px-5"
            placeholder="Your email"
            required
          />
          <InputGroupAddon align="inline-end">
            <button
              type="submit"
              className="text-muted-foreground hover:text-foreground flex size-8 items-center justify-center transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight className="size-5" />
            </button>
          </InputGroupAddon>
        </InputGroup>
      </form>

      <SocialMediaLinks socialLinks={socialLinks} />
    </div>
  );
}
