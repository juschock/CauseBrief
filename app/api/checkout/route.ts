import { NextResponse } from 'next/server';
import { briefCheckoutSchema } from '@/lib/checkout';
import { SNICKERDOODLE_OFFER } from '@/lib/offer';
import { PUBLIC_PREFIX, SITE_ORIGIN } from '@/lib/site';
import { getStripe } from '@/lib/stripe';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const origin = request.headers.get('origin');
    const requestOrigin = new URL(request.url).origin;
    const configuredOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN;
    const checkoutOrigin = configuredOrigin ? new URL(configuredOrigin).origin : requestOrigin;
    const allowedOrigins = new Set([requestOrigin, new URL(SITE_ORIGIN).origin]);
    if (origin && !allowedOrigins.has(origin)) {
      return NextResponse.json({ error: 'Invalid checkout origin.' }, { status: 403 });
    }

    const parsed = briefCheckoutSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid survey.' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data: intent, error: intentError } = await supabase
      .from('checkout_intents')
      .insert({
        brief_json: parsed.data,
        delivery_email: parsed.data.deliveryEmail,
        amount_cents: SNICKERDOODLE_OFFER.amountCents,
        currency: SNICKERDOODLE_OFFER.currency
      })
      .select('id')
      .single();

    if (intentError || !intent) throw new Error('Unable to save the survey.');

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      customer_email: parsed.data.deliveryEmail,
      client_reference_id: intent.id,
      line_items: [{
        quantity: 1,
        price_data: {
          currency: SNICKERDOODLE_OFFER.currency,
          unit_amount: SNICKERDOODLE_OFFER.amountCents,
          product_data: {
            name: SNICKERDOODLE_OFFER.name,
            description: SNICKERDOODLE_OFFER.description
          }
        }
      }],
      metadata: { checkout_intent_id: intent.id, offer_id: SNICKERDOODLE_OFFER.id },
      payment_intent_data: { metadata: { checkout_intent_id: intent.id, offer_id: SNICKERDOODLE_OFFER.id } },
      success_url: `${checkoutOrigin}${PUBLIC_PREFIX}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${checkoutOrigin}${PUBLIC_PREFIX}/checkout/cancel`,
      billing_address_collection: 'auto',
      allow_promotion_codes: false
    });

    const { error: updateError } = await supabase
      .from('checkout_intents')
      .update({ stripe_checkout_session_id: session.id, status: 'checkout_created', updated_at: new Date().toISOString() })
      .eq('id', intent.id);

    if (updateError) throw new Error('Unable to connect the checkout session.');
    if (!session.url) throw new Error('Stripe did not return a checkout URL.');

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout session creation failed', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Checkout is temporarily unavailable. Please try again.' }, { status: 500 });
  }
}
