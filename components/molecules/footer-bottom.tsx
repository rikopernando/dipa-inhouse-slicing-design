import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '@/components/atoms/typography';
import type { FooterLink } from '@/lib/data/home';

interface FooterBottomProps {
  copyright: string;
  logo: string;
  legalLinks: readonly FooterLink[];
}

/**
 * FooterBottom Component
 *
 * Bottom section of footer with copyright, logo, and legal links.
 * Three-column layout: copyright | logo | legal links
 */
export function FooterBottom({ copyright, logo, legalLinks }: FooterBottomProps) {
  return (
    <div className="border-t">
      <div className="container mx-auto p-6 lg:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <Typography variant="muted" className="text-sm">
            {copyright}
          </Typography>

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Moniveo"
              width={120}
              height={32}
              className="h-8 w-auto object-scale-down"
            />
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
