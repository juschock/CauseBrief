import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ckPath } from '@/lib/nav';
import { SNICKERDOODLE_OFFER } from '@/lib/offer';
import { getStripe } from '@/lib/stripe';

export default async function CheckoutSuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id: sessionId } = await searchParams;
  let paid = false;
  if (sessionId) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(sessionId);
      paid = session.payment_status === 'paid'
        && session.amount_total === SNICKERDOODLE_OFFER.amountCents
        && session.currency === SNICKERDOODLE_OFFER.currency
        && session.metadata?.offer_id === SNICKERDOODLE_OFFER.id;
    } catch {
      paid = false;
    }
  }
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center bg-secondary/30 px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
          {paid ? <CheckCircle2 className="mx-auto size-14 text-primary" /> : null}
          <h1 className="mt-5 font-heading text-3xl font-semibold">{paid ? 'Payment received' : 'Payment confirmation pending'}</h1>
          <p className="mt-4 text-muted-foreground">
            {paid
              ? 'Your survey and payment are in. The Snickerdoodle team will review your details and contact you if anything is missing before fulfillment begins.'
              : 'We could not confirm a completed payment from this link. If you completed checkout, wait a moment and refresh; otherwise return to the survey.'}
          </p>
          {paid && sessionId ? <p className="mt-4 text-xs text-muted-foreground">Confirmation: {sessionId.slice(-12)}</p> : null}
          <Button className="mt-8" nativeButton={false} render={<Link href={ckPath('/')}>Back to Snickerdoodle</Link>} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
