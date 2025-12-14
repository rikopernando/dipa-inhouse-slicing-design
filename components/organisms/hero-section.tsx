import Image from 'next/image';
import { ChevronRight, Globe, Mic, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/atoms/typography';
import { Badge } from '@/components/ui/badge';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from '@/components/ui/input-group';

/**
 * Hero Section Component
 *
 * Main hero section for the landing page featuring:
 * - AI Solution headline and description
 * - Call-to-action button
 * - Three hero images with decorative positioning
 * - Gradient background with dot patterns
 */
export function HeroSection() {
  return (
    <section className="container mx-auto overflow-hidden px-4 lg:px-6">
      <div className="bg-gradient-hero relative mx-auto max-w-7xl border-x pt-16 pl-16">
        {/* Decorative dot patterns */}
        <div className="absolute inset-0 bg-[url(/images/hero-pattern.webp)] bg-cover bg-center bg-no-repeat opacity-40" />
        <div className="bg-gradient-shadow-hero absolute bottom-0 left-0 z-[99] h-[360px] w-[482px]" />
        <div className="grid grid-cols-12 items-center gap-0">
          {/* Left content */}
          <div className="relative z-10 col-span-8 space-y-6">
            <div className="space-y-4">
              <Badge>
                <Image alt="AI Solution" src="/images/icons/stars.webp" width={16} height={16} />
                AI Solution
              </Badge>
              <Typography variant="h1">
                Turn Workflow Into
                <br />
                <span className="text-gradient-primary">AI agent</span> automations.
              </Typography>
              <Typography variant="p" className="text-muted-foreground max-w-lg text-xl">
                Powerful and production-ready, our cloud platform has the solutions you need to
                succeed.
              </Typography>
            </div>

            <Button size="xl" className="group">
              Get Started
              <ChevronRight />
            </Button>
          </div>
        </div>
        <div className="animate-fade-in absolute top-6 right-0 col-span-4 w-[45%] opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] 2xl:top-0">
          <Image
            src="/images/hero-03.webp"
            alt="AI Automation Platform Interface"
            width={400}
            height={300}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="animate-fade-in absolute top-[56%] left-1/2 z-20 w-[25%] -translate-x-1/2 -translate-y-1/2 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          <Image
            src="/images/hero-02.webp"
            alt="Workflow Automation Dashboard"
            width={450}
            height={350}
            className="w-fullx h-auto"
            priority
          />
        </div>

        <div className="relative h-[340px]">
          <div className="animate-fade-in absolute bottom-0 left-0 z-10 w-[50%] opacity-0 [animation-fill-mode:forwards]">
            <Image
              src="/images/hero-01.webp"
              alt="AI Agent Automation"
              width={400}
              height={300}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        <div className="absolute right-8 bottom-8 w-[480px] rounded-[18px] bg-white p-[1px]">
          <InputGroup className="!h-[190px]">
            <InputGroupTextarea id="message" name="message" placeholder="Ask anythings..." />
            <InputGroupAddon align="block-end">
              <InputGroupButton variant="outline" className="rounded-full" size="icon-md">
                <Plus />
              </InputGroupButton>
              <Button variant="outline">
                <Globe />
                Web Search
              </Button>
              <InputGroupButton variant="outline" className="ml-auto rounded-full" size="icon-md">
                <Mic />
              </InputGroupButton>
              <InputGroupButton className="rounded-full" size="icon-md" variant="default">
                <Image alt="AI Solution" src="/images/icons/sparkle.webp" width={18} height={18} />
                <span className="sr-only">Send</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </section>
  );
}
