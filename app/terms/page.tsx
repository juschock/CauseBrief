import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PRODUCT_LEGAL_DISCLAIMER } from '@/lib/site';

export const metadata: Metadata = { title: 'Terms' };

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h1 className="font-heading text-3xl font-semibold text-foreground">Terms</h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              {PRODUCT_LEGAL_DISCLAIMER} Delivery timelines assume a complete survey. Results are not guaranteed.
            </p>
            <p>
              You are responsible for reviewing final details before publishing and for using materials in the platforms
              and channels available to you.
            </p>
            <p>The introductory package price is a one-time $99 USD payment. Fulfillment begins after successful payment and a complete survey.</p>
            <p>If the survey is incomplete, Racoben may pause the delivery timeline while requesting clarification. Contact snickerdoodle@racoben.com for order or refund questions.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
