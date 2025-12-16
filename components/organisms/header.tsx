'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

/**
 * Header component with consistent navigation
 * Layout: Logo | Platform Solutions Resources Pricing (centered) | Login SignUp
 * Height: 84px, Border bottom: 1px
 */
export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-[84px] max-w-7xl items-center justify-between px-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Image src="/images/logo.webp" alt="Logo" width={155} height={40} priority />
        </Link>

        {/* Desktop Navigation Links - Centered */}
        <nav className="hidden items-center gap-4 lg:flex lg:gap-10">
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

        {/* Mobile Menu Toggle - Shows only on mobile */}
        <div className="flex items-center lg:hidden">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <button
                className="text-foreground rounded-md p-2 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-4/5 max-w-sm border-r">
              <DrawerHeader className="p-4">
                <div className="flex items-center justify-between">
                  <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                  <DrawerDescription className="sr-only">Main navigation options</DrawerDescription>
                  <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
                    <Image src="/images/logo.webp" alt="Logo" width={155} height={40} priority />
                  </Link>
                  <DrawerClose
                    className="text-foreground rounded-md p-2 hover:bg-gray-100 focus:outline-none"
                    aria-label="Close navigation menu"
                  >
                    <X className="h-6 w-6" />
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <nav className="flex-1 overflow-y-auto p-4 pt-0">
                <ul className="space-y-4">
                  <li>
                    <DrawerClose asChild>
                      <Link
                        href="/platform"
                        className="text-foreground hover:text-foreground/80 block py-2 text-base transition-colors"
                      >
                        Platform
                      </Link>
                    </DrawerClose>
                  </li>

                  <li>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="hover:text-foreground/80 flex cursor-pointer items-center gap-1 text-base transition-colors outline-none">
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
                  </li>

                  <li>
                    <DrawerClose asChild>
                      <Link
                        href="/resources"
                        className="text-foreground hover:text-foreground/80 block py-2 text-base transition-colors"
                      >
                        Resources
                      </Link>
                    </DrawerClose>
                  </li>

                  <li>
                    <DrawerClose asChild>
                      <Link
                        href="/pricing"
                        className="text-foreground hover:text-foreground/80 block py-2 text-base transition-colors"
                      >
                        Pricing
                      </Link>
                    </DrawerClose>
                  </li>

                  <li className="border-t border-gray-200 pt-4">
                    <div className="flex flex-col gap-3">
                      <DrawerClose asChild>
                        <Button variant="outline" className="w-full justify-center">
                          Login
                        </Button>
                      </DrawerClose>
                      <DrawerClose asChild>
                        <Button className="w-full justify-center">Sign Up</Button>
                      </DrawerClose>
                    </div>
                  </li>
                </ul>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Auth Buttons - Hidden on mobile */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="outline" size="lg">
            Login
          </Button>
          <Button size="lg">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
