import { FOOTER_COLUMNS, SOCIAL_LINKS, FOOTER_BOTTOM } from '@/lib/data/home';
import { FooterColumn } from '@/components/molecules/footer-column';
import { FooterNewsletter } from '@/components/molecules/footer-newsletter';
import { FooterBottom } from '@/components/molecules/footer-bottom';

/**
 * Footer Component
 *
 * Main footer organism with navigation columns, newsletter subscription, and legal links.
 * Features a responsive grid layout and comprehensive site navigation.
 */
export function Footer() {
  return (
    <>
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-7xl space-y-12 border-x px-8 py-20 md:px-16">
            {/* Footer Columns Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {/* Navigation Columns */}
              {FOOTER_COLUMNS.map((column) => (
                <FooterColumn key={column.id} column={column} />
              ))}

              {/* Newsletter Column */}
              <FooterNewsletter socialLinks={SOCIAL_LINKS} />
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <FooterBottom
        copyright={FOOTER_BOTTOM.copyright}
        logo={FOOTER_BOTTOM.logo}
        legalLinks={FOOTER_BOTTOM.legalLinks}
      />
    </>
  );
}
