'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageSquare, Workflow, Table2, Layout } from 'lucide-react';
import { Typography } from '@/components/atoms/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

/**
 * Toolkit Section Component
 *
 * Features:
 * - Interactive accordion showcasing toolkit features
 * - Dynamic image display based on selected accordion item
 * - Four main features: AI Chatbots, Workflow, Table, Interfaces
 */

interface ToolkitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const toolkitItems: ToolkitItem[] = [
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    description:
      'Powerful and production-ready, our cloud platform has the solutions you need to succeed.',
    icon: <MessageSquare className="h-5 w-5" />,
    image: '/images/toolkits/chatbots.webp',
  },
  {
    id: 'workflow',
    title: 'Workflow',
    description:
      'Streamline your processes with intelligent workflow automation that adapts to your needs.',
    icon: <Workflow className="h-5 w-5" />,
    image: '/images/toolkits/chatbots.webp',
  },
  {
    id: 'table',
    title: 'Table',
    description:
      'Organize and manage your data efficiently with powerful table features and integrations.',
    icon: <Table2 className="h-5 w-5" />,
    image: '/images/toolkits/chatbots.webp',
  },
  {
    id: 'interfaces',
    title: 'Interfaces',
    description:
      'Build custom interfaces that perfectly match your workflow requirements and user needs.',
    icon: <Layout className="h-5 w-5" />,
    image: '/images/toolkits/chatbots.webp',
  },
];

export function ToolkitSection() {
  const [activeItem, setActiveItem] = useState<string>('chatbots');

  const currentItem = toolkitItems.find((item) => item.id === activeItem) || toolkitItems[0];

  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-7xl border-x px-16 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content - Image */}
            <div className="bg-gradient-toolkit relative mt-8 aspect-square overflow-hidden rounded-3xl p-10">
              <div className="relative h-full w-full">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-contain transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right content - Accordion */}
            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <Typography
                  variant="small"
                  className="text-primary text-base tracking-wider uppercase"
                >
                  TOOLKIT
                </Typography>
                <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl">
                  Complete toolkit for AI automation
                </Typography>
              </div>

              <Accordion
                type="single"
                collapsible
                value={activeItem}
                onValueChange={(value) => value && setActiveItem(value)}
                className="w-full"
              >
                {toolkitItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className={cn(
                      'border-b',
                      activeItem === item.id ? 'border-primary border-b-2' : '',
                    )}
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className={activeItem === item.id ? 'text-primary' : 'text-muted'}>
                          {item.icon}
                        </div>
                        <Typography variant="h4" className="text-left text-lg">
                          {item.title}
                        </Typography>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Typography
                        variant="large"
                        className="text-accent-foreground font-neue-montreal pl-8"
                      >
                        {item.description}
                      </Typography>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
