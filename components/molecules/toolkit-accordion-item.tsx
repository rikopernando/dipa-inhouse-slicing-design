import { Typography } from '@/components/atoms/typography';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import type { ToolkitItem } from '@/lib/data/home';

interface ToolkitAccordionItemProps {
  item: ToolkitItem;
  isActive: boolean;
}

/**
 * ToolkitAccordionItem Component
 *
 * Individual accordion item for toolkit features
 * Part of the Toolkit Section organism
 */
export function ToolkitAccordionItem({ item, isActive }: ToolkitAccordionItemProps) {
  const Icon = item.icon;

  return (
    <AccordionItem
      value={item.id}
      className={cn('border-b', isActive && 'border-primary border-b-2')}
    >
      <AccordionTrigger className="hover:no-underline">
        <div className="flex items-center gap-3">
          <div className={isActive ? 'text-primary' : 'text-muted'}>
            <Icon className="h-5 w-5" />
          </div>
          <Typography variant="h4" className="text-left text-lg">
            {item.title}
          </Typography>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <Typography variant="large" className="text-accent-foreground font-neue-montreal pl-8">
          {item.description}
        </Typography>
      </AccordionContent>
    </AccordionItem>
  );
}
