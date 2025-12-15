'use client';

import { useState, useMemo } from 'react';
import { Typography } from '@/components/atoms/typography';
import { Accordion } from '@/components/ui/accordion';
import { ToolkitAccordionItem } from '@/components/molecules/toolkit-accordion-item';
import { ToolkitImageDisplay } from '@/components/molecules/toolkit-image-display';
import { TOOLKIT_ITEMS, TOOLKIT_CONTENT } from '@/lib/data/home';

/**
 * Toolkit Section Component
 *
 * Features:
 * - Interactive accordion showcasing toolkit features
 * - Dynamic image display based on selected accordion item
 * - Four main features: AI Chatbots, Workflow, Table, Interfaces
 */
export function ToolkitSection() {
  const [activeItem, setActiveItem] = useState<string>(TOOLKIT_ITEMS[0].id);

  const currentItem = useMemo(
    () => TOOLKIT_ITEMS.find((item) => item.id === activeItem) || TOOLKIT_ITEMS[0],
    [activeItem],
  );

  return (
    <section className="bg-background border-t">
      <div className="container mx-auto px-0 lg:px-6">
        <div className="mx-auto max-w-7xl border-x px-16 py-20 sm:px-8 sm:py-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left content - Dynamic Image Display */}
            <ToolkitImageDisplay currentItem={currentItem} />

            {/* Right content - Accordion */}
            <div className="space-y-6">
              <header className="flex flex-col gap-4">
                <Typography
                  variant="small"
                  className="text-primary text-base tracking-wider uppercase"
                >
                  {TOOLKIT_CONTENT.label}
                </Typography>
                <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl">
                  {TOOLKIT_CONTENT.title}
                </Typography>
              </header>

              <Accordion
                type="single"
                collapsible
                value={activeItem}
                onValueChange={(value) => value && setActiveItem(value)}
                className="w-full"
              >
                {TOOLKIT_ITEMS.map((item) => (
                  <ToolkitAccordionItem
                    key={item.id}
                    item={item}
                    isActive={activeItem === item.id}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
