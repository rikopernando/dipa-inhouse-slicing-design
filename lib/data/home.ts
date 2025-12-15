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
 * Achievement item configuration type
 */
export interface AchievementItem {
  id: string;
  title: string;
  description: string;
}

/**
 * Platform decorative image configuration type
 */
export interface PlatformDecorativeImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  position: string;
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
  mainImage: {
    src: '/images/platform/dashboard.svg',
    alt: 'Dashboard Platform',
    width: 1080,
    height: 572,
  },
} as const;

/**
 * Decorative images for the Platform Section
 */
export const PLATFORM_DECORATIVE_IMAGES: PlatformDecorativeImage[] = [
  {
    id: 'connected',
    src: '/images/platform/connected.webp',
    alt: 'Connected',
    width: 120,
    height: 82,
    position: 'top-36 left-40',
  },
  {
    id: 'salesforce',
    src: '/images/platform/salesforce.webp',
    alt: 'Salesforce',
    width: 120,
    height: 82,
    position: 'top-48 right-24',
  },
] as const;

/**
 * Achievement items for the Achievement Section
 */
export const ACHIEVEMENT_ITEMS: AchievementItem[] = [
  {
    id: '1',
    title: '2M+',
    description: 'Customers building with Moniveo',
  },
  {
    id: '2',
    title: 'SOC 3',
    description: 'Standards for security and compliance',
  },
  {
    id: '3',
    title: '98',
    description: 'Enterprise SLA Volumes block storage',
  },
] as const;

/**
 * Pricing feature configuration type
 */
export interface PricingFeature {
  id: string;
  text: string;
  included: boolean;
  disabled: boolean;
}

/**
 * Pricing plan configuration type
 */
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: 'default' | 'outline';
  bestValueLabel?: string;
}

/**
 * Content for the Pricing Section
 */
export const PRICING_CONTENT = {
  label: 'PRICING',
  title: {
    line1: 'Start for free',
    line2: 'Get used to winning',
  },
  annualDiscount: '10% off',
} as const;

/**
 * Pricing plans for the Pricing Section
 */
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Kickstart your product research in your bussiness at no cost',
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      { id: 'users', text: '25 Users', included: true, disabled: true },
      { id: 'support', text: 'Email and live chat support', included: true, disabled: true },
      { id: 'ai-powerups', text: 'AI power-ups', included: true, disabled: true },
    ],
    buttonText: 'Current Plan',
    buttonVariant: 'outline',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Fuel your product workflow with more advanced research.',
    monthlyPrice: 12,
    annualPrice: 10.8,
    features: [
      { id: 'workspace', text: 'Unlimited workspace', included: true, disabled: false },
      {
        id: 'admin',
        text: 'Advanced admin permissions and app controls',
        included: true,
        disabled: false,
      },
      { id: 'tasks', text: 'Annual task limits', included: true, disabled: false },
    ],
    buttonText: 'Upgrade Now',
    buttonVariant: 'default',
    bestValueLabel: 'Best Value',
  },
] as const;
