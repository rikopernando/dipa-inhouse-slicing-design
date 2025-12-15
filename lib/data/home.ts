import { MessageSquare, Workflow, Table2, Layout, type LucideIcon } from 'lucide-react';

/**
 * Data for the home page sections
 */

/**
 * Brand configuration type
 */
export interface Brand {
  name: string;
  logo: string;
  width: number;
  height: number;
}

/**
 * Toolkit item configuration type
 */
export interface ToolkitItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

/**
 * Brand logos for the Brand Section
 */
export const BRANDS: Brand[] = [
  {
    name: 'eBay',
    logo: '/images/brands/eBay.webp',
    width: 90,
    height: 36,
  },
  {
    name: 'Expedia',
    logo: '/images/brands/Expedia.webp',
    width: 146,
    height: 32,
  },
  {
    name: 'DocuSign',
    logo: '/images/brands/DocuSign.webp',
    width: 130,
    height: 30,
  },
  {
    name: 'Phantom',
    logo: '/images/brands/Phantom.webp',
    width: 130,
    height: 30,
  },
] as const;

/**
 * Toolkit features for the Toolkit Section
 */
export const TOOLKIT_ITEMS: ToolkitItem[] = [
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    description:
      'Powerful and production-ready, our cloud platform has the solutions you need to succeed.',
    icon: MessageSquare,
    image: '/images/toolkits/chatbots.webp',
  },
  {
    id: 'workflow',
    title: 'Workflow',
    description:
      'Streamline your processes with intelligent workflow automation that adapts to your needs.',
    icon: Workflow,
    image: '/images/toolkits/chatbots.webp',
  },
  {
    id: 'table',
    title: 'Table',
    description:
      'Organize and manage your data efficiently with powerful table features and integrations.',
    icon: Table2,
    image: '/images/toolkits/chatbots.webp',
  },
  {
    id: 'interfaces',
    title: 'Interfaces',
    description:
      'Build custom interfaces that perfectly match your workflow requirements and user needs.',
    icon: Layout,
    image: '/images/toolkits/chatbots.webp',
  },
] as const;

/**
 * Content for the Hero Section
 */
export const HERO_CONTENT = {
  badge: 'AI Solution',
  title: {
    line1: 'Turn Workflow Into',
    line2: 'AI agent',
    line3: 'automations.',
  },
  description:
    'Powerful and production-ready, our cloud platform has the solutions you need to succeed.',
  cta: 'Get Started',
} as const;

/**
 * Content for the Brand Section
 */
export const BRAND_CONTENT = {
  headline: "Trusted by 100+ world's best brand",
} as const;

/**
 * Content for the Toolkit Section
 */
export const TOOLKIT_CONTENT = {
  label: 'TOOLKIT',
  title: 'Complete toolkit for AI automation',
} as const;

/**
 * Enterprise card configuration type
 */
export interface EnterpriseCard {
  id: string;
  title: string;
  description: string;
  image: string;
  decorativeImage?: string;
  colSpan: string;
  variant: 'image-background' | 'image-top';
}

/**
 * Content for the Enterprise Section
 */
export const ENTERPRISE_CONTENT = {
  label: 'AI + AUTOMATIONS',
  title: 'Enterprise-ready automation in seconds',
} as const;

/**
 * Enterprise cards for the Enterprise Section
 */
export const ENTERPRISE_CARDS: EnterpriseCard[] = [
  {
    id: 'ai-team',
    title: 'AI for the whole team',
    description:
      'Bring workflow automation and AI to the entire organization with apps, chatbots, and integrations.',
    image: '/images/enterprises/ai-chatbot-enterprise.svg',
    colSpan: 'col-span-8',
    variant: 'image-background',
  },
  {
    id: 'security',
    title: 'Enterprise security',
    description: 'Keep data safe with best‑in‑class security protocols and AI guardrails.',
    image: '/images/enterprises/security-enterprise.svg',
    decorativeImage: '/images/enterprises/security-shadow.webp',
    colSpan: 'col-span-4',
    variant: 'image-top',
  },
  {
    id: 'integrated-app',
    title: 'Integrate everything',
    description: 'Connect any tool, LLM, or app to orchestrate intelligent workflows.',
    image: '/images/enterprises/integrated-app.svg',
    colSpan: 'col-span-5',
    variant: 'image-background',
  },
  {
    id: 'fast-intuitive',
    title: 'Fast and intuitive',
    description: 'Build easily with drag and drop, low/no‑code and collaboration tools.',
    image: '/images/enterprises/fast-and-intuitive.svg',
    colSpan: 'col-span-7',
    variant: 'image-background',
  },
] as const;

/**
 * Content for the Platform Section
 */
export const PLATFORM_CONTENT = {
  label: 'THE PLATFORM',
  title: 'Connected AI orchestration platform',
  description:
    'Powerful and production-ready, our cloud platform has the solutions you need to succeed.',
} as const;
