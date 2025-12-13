# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using React 19, TypeScript, and Tailwind CSS v4. The project is a landing page for an AI automation platform that turns workflows into AI agent automations. It implements a design system following Atomic Design principles.

## Development Commands

```bash
# Development
yarn dev                 # Start development server

# Building
yarn build              # Create production build
yarn start              # Start production server

# Code Quality
yarn lint               # Run ESLint
yarn lint:fix           # Run ESLint with auto-fix
yarn format             # Format code with Prettier
yarn format:check       # Check formatting without changes
```

## Architecture

### Component Organization (Atomic Design)

The project follows Atomic Design methodology with a strict component hierarchy:

- `components/atoms/` - Basic building blocks (Typography, GridLayout)
- `components/molecules/` - Simple component groups (PageSection)
- `components/organisms/` - Complex UI sections (Header, Footer)
- `components/templates/` - Page-level layouts
- `components/ui/` - shadcn/ui components (Button, Card, Badge, Alert, etc.)

### Next.js App Structure

- Uses App Router with RSC (React Server Components)
- ISR enabled on pages with `export const revalidate = 1800` (30 minutes)
- Root layout includes:
  - Header/Footer organisms
  - Skip-to-content link for accessibility
  - Font configuration (Geist Sans & Mono)
  - SEO metadata configuration

### Styling System

- Tailwind CSS v4 with PostCSS
- Custom utility function `cn()` in `lib/utils.ts` combines clsx + tailwind-merge
- Typography component uses CVA (class-variance-authority) for variant styling
- Prettier plugin for Tailwind (automatically sorts classes)

### Key Utilities

- `lib/utils.ts`: `cn()` for className merging, `formatNumber()` for Indonesian locale
- `lib/constants.ts`: Centralized constants including HTTP status codes, grid config, API config
- `lib/errors.ts`: Error handling utilities

## Code Quality Setup

### Git Hooks (Husky)

Pre-commit hook runs:
- `lint-staged` - ESLint fix + Prettier on staged files

Commit-msg hook runs:
- `commitlint` - Validates conventional commit format

### Commit Message Format

Must follow Conventional Commits:
```
<type>(<scope>): <subject>

Types: feat, fix, docs, style, refactor, perf, test, chore, ci, revert
Max header length: 100 characters
Max body line length: 100 characters
Subject case: NOT upper-case, pascal-case, or start-case
```

### Linting & Formatting

- ESLint: Next.js config with TypeScript support + Prettier integration
- Prettier: Single quotes, semicolons, trailing commas, 100 char line width
- Lint-staged runs on all `.{ts,tsx,js,jsx,json,css,md}` files

## Important Patterns

### Component Pattern

Components use TypeScript with proper typing and JSDoc comments. UI components follow shadcn/ui patterns with `React.forwardRef` and variant props.

### Typography Usage

Use the `Typography` component for all text to maintain consistency:
```tsx
<Typography variant="h1">Page Title</Typography>
<Typography variant="muted">Secondary text</Typography>
```

### Metadata Pattern

Pages define metadata exports:
```tsx
export const metadata: Metadata = { /* ... */ };
```

Root layout includes comprehensive SEO setup with Open Graph, Twitter cards, and robot directives.

## Dependencies Notes

- Using React 19 and Next.js 16 (latest versions)
- Radix UI primitives for accessible components
- Framer Motion for animations
- Lucide React for icons
- next-themes for theme support (configured but not fully implemented)
