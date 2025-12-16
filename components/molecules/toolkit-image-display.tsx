import Image from 'next/image';
import type { ToolkitItem } from '@/lib/data/home';

interface ToolkitImageDisplayProps {
  currentItem: ToolkitItem;
}

/**
 * ToolkitImageDisplay Component
 *
 * Displays the image for the currently selected toolkit feature
 * Part of the Toolkit Section organism
 */
export function ToolkitImageDisplay({ currentItem }: ToolkitImageDisplayProps) {
  return (
    <div className="bg-gradient-toolkit relative mt-0 aspect-square overflow-hidden rounded-3xl p-10 sm:mt-8">
      <div className="relative h-full w-full">
        <Image
          key={currentItem.id}
          src={currentItem.image}
          alt={currentItem.title}
          fill
          className="object-contain transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
