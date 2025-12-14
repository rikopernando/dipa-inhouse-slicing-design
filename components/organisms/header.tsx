'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Typography } from '@/components/atoms/typography';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/**
 * Header component with consistent navigation
 * Layout: Logo | Platform Solutions Resources Pricing | Login SignUp
 * Height: 84px, Border bottom: 1px
 */
export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-[84px] items-center px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Typography variant="large" as="span" className="font-semibold">
            LOGO
          </Typography>
        </Link>

        {/* Navigation Links */}
        <nav className="ml-12 flex items-center gap-8">
          <Link
            href="/platform"
            className="text-foreground text-sm font-medium transition-colors hover:text-foreground/80"
          >
            Platform
          </Link>

          {/* Solutions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/80 outline-none">
              Solutions
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href="/solutions/automation">AI Automation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/workflow">Workflow Management</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/integration">Integration</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/resources"
            className="text-foreground text-sm font-medium transition-colors hover:text-foreground/80"
          >
            Resources
          </Link>

          <Link
            href="/pricing"
            className="text-foreground text-sm font-medium transition-colors hover:text-foreground/80"
          >
            Pricing
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">SignUp</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
