'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

/**
 * Header component with consistent navigation
 * Layout: Logo | Platform Solutions Resources Pricing (centered) | Login SignUp
 * Height: 84px, Border bottom: 1px
 */
export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-[84px] items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image src="/images/logo.webp" alt="Logo" width={155} height={40} priority />
        </Link>

        {/* Navigation Links - Centered */}
        <nav className="flex items-center gap-10">
          <Link
            href="/platform"
            className="text-foreground hover:text-foreground/80 text-sm transition-colors"
          >
            Platform
          </Link>

          {/* Solutions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-foreground/80 flex cursor-pointer items-center gap-1 text-sm transition-colors outline-none">
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
            className="text-foreground hover:text-foreground/80 text-sm transition-colors"
          >
            Resources
          </Link>

          <Link
            href="/pricing"
            className="text-foreground hover:text-foreground/80 text-sm transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {/* Login Button */}
          <Button variant="outline" size="lg">
            Login
          </Button>
          <Button size="lg">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
