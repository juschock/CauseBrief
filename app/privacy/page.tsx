import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PRODUCT_NAME } from '@/lib/site';

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
              {PRODUCT_NAME} stores the campaign survey and contact information you submit so Racoben can process your order,
              prepare your package, provide support, and maintain business records.
            </p>
            <p>
              Stripe processes checkout and payment information. Racoben does not receive or store your full card number.
              Do not include passwords, payment card numbers, or other unnecessary sensitive information in the survey form.
            </p>
            <p>Order information is available only to authorized fulfillment staff and service providers needed to operate the service.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
