import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h1 className="font-heading text-3xl font-semibold text-foreground">Privacy</h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              CauseBrief V1 does not use accounts or a customer-facing database. When you submit a campaign brief via
              email, your information is handled through your email provider and Racoben&apos;s manual fulfillment process.
            </p>
            <p>
              We use brief information only to produce and deliver your campaign package. Do not include passwords or
              payment card numbers in the brief form.
            </p>
            <p>This page should be updated if analytics, payment, or form providers are added later.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
