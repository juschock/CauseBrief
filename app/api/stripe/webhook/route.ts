import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { SNICKERDOODLE_OFFER } from '@/lib/offer';
import { getStripe } from '@/lib/stripe';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const signature = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !webhookSecret) return NextResponse.json({ error: 'Webhook not configured.' }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(await request.text(), signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 });
  }

  if (event.type !== 'checkout.session.completed' && event.type !== 'checkout.session.async_payment_succeeded') {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  if (session.payment_status !== 'paid') return NextResponse.json({ received: true });

  const intentId = session.metadata?.checkout_intent_id ?? session.client_reference_id;
  const customerEmail = session.customer_details?.email ?? session.customer_email;
  if (!intentId || !customerEmail || session.amount_total !== SNICKERDOODLE_OFFER.amountCents || session.currency !== SNICKERDOODLE_OFFER.currency) {
    return NextResponse.json({ error: 'Checkout data did not match the offer.' }, { status: 400 });
  }

  const { error } = await getSupabaseAdmin().rpc('finalize_stripe_checkout', {
    p_event_id: event.id,
    p_event_type: event.type,
    p_checkout_session_id: session.id,
    p_payment_intent_id: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id ?? '',
    p_intent_id: intentId,
    p_amount_total: session.amount_total,
    p_currency: session.currency,
    p_customer_email: customerEmail,
    p_paid_at: new Date(event.created * 1000).toISOString()
  });

  if (error) {
    console.error('Stripe fulfillment failed', { eventId: event.id, message: error.message });
    return NextResponse.json({ error: 'Fulfillment failed.' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
