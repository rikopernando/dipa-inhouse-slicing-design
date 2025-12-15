import Link from 'next/link';
import { Typography } from '@/components/atoms/typography';
import type { FooterColumn as FooterColumnType } from '@/lib/data/home';

interface FooterColumnProps {
  column: FooterColumnType;
}

/**
 * FooterColumn Component
 *
 * Displays a column of navigation links in the footer.
 * Includes a title and list of links with hover effects.
 */
export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <Typography variant="h6" className="text-lg font-medium">
        {column.title}
      </Typography>
      <nav className="flex flex-col gap-3">
        {column.links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-accent-foreground hover:text-foreground text-sm transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
