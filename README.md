# AI Automation Platform Landing Page

A modern landing page for an AI automation platform that turns workflows into AI agent automations. Built with Next.js 16, React 19, and TypeScript, implementing a design system following Atomic Design principles.

## Tech Stack

- **Framework:** Next.js 16 (App Router with React Server Components)
- **React:** 19 (latest)
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI primitives + shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Code Quality:** ESLint, Prettier, Husky, Commitlint

## Features

- ⚡ Server-side rendering with ISR (30-minute revalidation)
- 🎨 Atomic Design component architecture
- 🌓 Theme support (configured via next-themes)
- ♿ Accessibility-first approach with skip-to-content links
- 📱 Fully responsive design
- 🎯 SEO optimized with metadata configuration
- 🔧 Comprehensive code quality tools and git hooks

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dipa-inhouse-slicing-design
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

```bash
# Development
yarn dev                 # Start development server on localhost:3000

# Building
yarn build              # Create production build
yarn start              # Start production server

# Code Quality
yarn lint               # Run ESLint
yarn lint:fix           # Run ESLint with auto-fix
yarn format             # Format code with Prettier
yarn format:check       # Check formatting without changes

# Git Hooks
yarn prepare            # Install Husky git hooks
```

## Project Architecture

### Component Organization (Atomic Design)

The project follows Atomic Design methodology with a strict component hierarchy:

```
components/
├── atoms/              # Basic building blocks
│   ├── typography.tsx  # Text component with variants
│   └── grid-layout.tsx # Grid container component
├── molecules/          # Simple component groups
│   └── page-section.tsx # Reusable page section wrapper
├── organisms/          # Complex UI sections
│   ├── header.tsx      # Site header with navigation
│   └── footer.tsx      # Site footer
├── templates/          # Page-level layouts
└── ui/                 # shadcn/ui components
    ├── button.tsx
    ├── card.tsx
    ├── badge.tsx
    └── ...
```

### Directory Structure

```
.
├── app/                # Next.js App Router pages
│   ├── layout.tsx      # Root layout with Header/Footer
│   ├── page.tsx        # Home page
│   └── ...
├── components/         # React components (Atomic Design)
├── lib/               # Utility functions and constants
│   ├── utils.ts       # cn(), formatNumber()
│   ├── constants.ts   # Centralized constants
│   └── errors.ts      # Error handling utilities
├── public/            # Static assets
└── styles/            # Global styles
```

### Key Patterns

#### Typography Component

Use the `Typography` component for consistent text styling:

```tsx
<Typography variant="h1">Page Title</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="muted">Secondary text</Typography>
```

Available variants: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `body`, `large`, `small`, `muted`

#### Utility Functions

```tsx
import { cn, formatNumber } from '@/lib/utils';

// Merge className with conditional logic
<div className={cn('base-class', isActive && 'active-class')} />;

// Format numbers in Indonesian locale
formatNumber(1000000); // "1.000.000"
```

#### Page Metadata

Pages define metadata exports for SEO:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```

## Code Quality

### ESLint & Prettier

The project uses ESLint with Next.js configuration and Prettier for code formatting:

- **Line width:** 100 characters
- **Quotes:** Single quotes
- **Semicolons:** Required
- **Trailing commas:** ES5 compatible

Run `yarn lint:fix` to auto-fix issues and `yarn format` to format code.

### Git Hooks (Husky)

Automated checks run on git operations:

**Pre-commit:**

- Runs `lint-staged` on staged files
- Auto-fixes ESLint issues
- Formats code with Prettier

**Commit-msg:**

- Validates commit message format using Commitlint

### Commit Message Convention

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

Examples:
feat(home): add hero section
fix(header): resolve navigation menu overflow
docs(readme): update installation instructions
```

**Allowed types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `ci` - CI/CD changes
- `revert` - Revert previous commit

**Rules:**

- Max header length: 100 characters
- Subject must be lowercase
- No period at the end of subject

## Styling System

### Tailwind CSS v4

The project uses Tailwind CSS v4 with custom configuration:

- PostCSS setup for processing
- Prettier plugin for automatic class sorting
- Custom utility classes defined in global CSS

### shadcn/ui Components

Pre-built accessible components from shadcn/ui:

```bash
# Add new shadcn/ui components
npx shadcn@latest add <component-name>
```

All UI components are in `components/ui/` and can be customized.

## Performance

- **ISR (Incremental Static Regeneration):** Pages revalidate every 30 minutes
- **React Server Components:** Default server-side rendering for optimal performance
- **Code Splitting:** Automatic code splitting via Next.js App Router
- **Optimized Images:** Next.js Image component for automatic optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[Add your license here]

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes following the commit convention
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ using Next.js and React
