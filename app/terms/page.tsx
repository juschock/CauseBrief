import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

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
              CauseBrief provides campaign copy and planning materials. It is not legal, fundraising compliance, tax,
              or advertising advice. Delivery timelines assume a complete brief. Results are not guaranteed.
            </p>
            <p>
              You are responsible for reviewing final details before publishing and for using materials in the platforms
              and channels available to you.
            </p>
            <p>These terms should be expanded before scaling paid orders or adding automated checkout.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
