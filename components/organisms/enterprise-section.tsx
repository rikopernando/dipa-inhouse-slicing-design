import { Typography } from '@/components/atoms/typography';
import { ENTERPRISE_CONTENT, ENTERPRISE_CARDS } from '@/lib/data/home';
import { EnterpriseAIChatbotCard } from '@/components/molecules/enterprise-ai-chatbot-card';
import { EnterpriseSecurityCard } from '@/components/molecules/enterprise-security-card';
import { EnterpriseIntegratedAppCard } from '@/components/molecules/enterprise-integrated-app-card';
import { EnterpriseFastIntuitiveCard } from '@/components/molecules/enterprise-fast-intuitive-card';

/**
 * Enterprise Section Component
 */
export function EnterpriseSection() {
  return (
    <section className="enterprice-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="border-enterprice mx-auto max-w-7xl border-x px-16 py-20">
          {/* Section Header */}
          <header className="mb-12 flex max-w-[560px] flex-col gap-4">
            <Typography
              variant="small"
              className="text-gradient-enterprice text-base tracking-wider uppercase"
            >
              {ENTERPRISE_CONTENT.label}
            </Typography>
            <Typography variant="h2" className="text-3xl text-white md:text-4xl lg:text-[56px]">
              {ENTERPRISE_CONTENT.title}
            </Typography>
          </header>

          {/* Enterprise Cards Grid */}
          <div className="grid gap-4 md:grid-cols-12">
            <EnterpriseAIChatbotCard card={ENTERPRISE_CARDS[0]} />
            <EnterpriseSecurityCard card={ENTERPRISE_CARDS[1]} />
            <EnterpriseIntegratedAppCard card={ENTERPRISE_CARDS[2]} />
            <EnterpriseFastIntuitiveCard card={ENTERPRISE_CARDS[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
