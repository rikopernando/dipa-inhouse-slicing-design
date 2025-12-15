import Image from 'next/image';
import { Globe, Mic, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from '@/components/ui/input-group';

/**
 * AIChatbot Component
 *
 * Interactive input group for the hero section
 * Includes textarea and action buttons
 */
export function AIChatbot() {
  return (
    <div className="absolute right-8 bottom-8 hidden w-[480px] rounded-[18px] bg-white p-px lg:block">
      <InputGroup className="h-[190px]!">
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
            <Image alt="Send message" src="/images/icons/sparkle.webp" width={18} height={18} />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
