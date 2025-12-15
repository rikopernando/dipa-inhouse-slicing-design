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
    <footer>
      <div className="bg-background border-t">
        <div className="container mx-auto px-0 lg:px-6">
          <div className="mx-auto max-w-7xl border-x">
            {/* Footer Columns Grid */}
            <div className="grid grid-cols-1 gap-8 px-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-16 lg:py-20">
              {/* Navigation Columns */}
              {FOOTER_COLUMNS.map((column) => (
                <FooterColumn key={column.id} column={column} />
              ))}

              {/* Newsletter Column */}
              <FooterNewsletter socialLinks={SOCIAL_LINKS} />
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <FooterBottom
        copyright={FOOTER_BOTTOM.copyright}
        logo={FOOTER_BOTTOM.logo}
        legalLinks={FOOTER_BOTTOM.legalLinks}
      />
    </footer>
  );
}
