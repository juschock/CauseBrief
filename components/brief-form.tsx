'use client';

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { FormEvent, ReactNode, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  BriefFormData,
  campaignTypes,
  channelOptions,
  emptyBrief,
  formatBriefForEmail,
  toneOptions
} from '@/lib/intake';
import { ckPath } from '@/lib/nav';
import { INTAKE_EMAIL, PRODUCT_NAME } from '@/lib/site';

const fieldClass =
  'w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30';

function Field({
  label,
  htmlFor,
  required,
  hint,
  children
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="ml-0.5 text-primary">*</span> : null}
      </label>
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {children}
    </div>
  );
}

function FormSection({
  step,
  title,
  description,
  children
}: {
  step: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex size-8 items-center justify-center rounded-lg bg-secondary font-heading text-sm font-semibold text-primary">
          {step}
        </span>
        <h2 className="font-heading text-xl font-semibold text-foreground">{title}</h2>
      </div>
      {description ? <p className="mt-2 text-sm text-muted-foreground">{description}</p> : null}
      <div className="mt-6 grid gap-5">{children}</div>
    </section>
  );
}

export function BriefForm() {
  const [data, setData] = useState<BriefFormData>(emptyBrief);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof BriefFormData>(key: K, value: BriefFormData[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function toggleChannel(channel: string) {
    setData((current) => ({
      ...current,
      channels: current.channels.includes(channel)
        ? current.channels.filter((item) => item !== channel)
        : [...current.channels, channel]
    }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');

    const required = [
      ['organizationName', 'Organization name'],
      ['campaignName', 'Campaign name'],
      ['dateTime', 'Date & time'],
      ['locationOrLink', 'Location or link'],
      ['audience', 'Audience'],
      ['mainGoal', 'Main goal'],
      ['offerAsk', 'Offer / ask'],
      ['keyDetails', 'Key details'],
      ['deliveryEmail', 'Delivery email']
    ] as const;

    for (const [key, label] of required) {
      if (!String(data[key]).trim()) {
        setError(`${label} is required.`);
        return;
      }
    }
    if (data.campaignType === 'Other' && !data.campaignTypeOther.trim()) {
      setError('Please describe the campaign type.');
      return;
    }
    if (data.tone === 'Other' && !data.toneOther.trim()) {
      setError('Please describe the desired tone.');
      return;
    }
    if (data.channels.length === 0) {
      setError('Select at least one channel.');
      return;
    }

    const body = encodeURIComponent(formatBriefForEmail(data));
    const subject = encodeURIComponent(`${PRODUCT_NAME} Brief — ${data.campaignName}`);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.href = `mailto:${INTAKE_EMAIL}?subject=${subject}&body=${body}`;
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <CheckCircle2 className="size-7" />
        </span>
        <h1 className="mt-5 text-balance font-heading text-2xl font-semibold text-foreground sm:text-3xl">
          Your campaign brief has been received.
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {data.campaignName ? (
            <>
              If your email app opened, send the message to complete your submission. We&apos;ll review the details for{' '}
              <span className="font-medium text-foreground">{data.campaignName}</span> and prepare your {PRODUCT_NAME} campaign package for
              delivery within 48 hours.
            </>
          ) : (
            <>
              If your email app opened, send the message to complete your submission. We&apos;ll review the details and
              prepare your {PRODUCT_NAME} campaign package for delivery within 48 hours.
            </>
          )}
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          If anything important is missing, we&apos;ll contact you at the delivery email you provided.
        </p>
        <div className="mt-6 rounded-xl border border-border bg-secondary/40 p-4 text-sm text-foreground">
          Next step: we&apos;ll reply with payment instructions before fulfillment begins.
        </div>
        <div className="mt-8">
          <Button size="lg" variant="outline" nativeButton={false} render={<Link href={ckPath('/')}>Back to home</Link>} />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <FormSection step="1" title="Campaign basics">
        <Field label="Organization / Business Name" htmlFor="organizationName" required>
          <input
            id="organizationName"
            value={data.organizationName}
            onChange={(e) => update('organizationName', e.target.value)}
            placeholder="Example: Green Valley Animal Rescue"
            className={fieldClass}
          />
        </Field>

        <Field label="Campaign / Event Name" htmlFor="campaignName" required>
          <input
            id="campaignName"
            value={data.campaignName}
            onChange={(e) => update('campaignName', e.target.value)}
            placeholder="Example: Annual Dog Adoption Gala"
            className={fieldClass}
          />
        </Field>

        <Field label="Campaign Type" htmlFor="campaignType" required>
          <select
            id="campaignType"
            value={data.campaignType}
            onChange={(e) => update('campaignType', e.target.value)}
            className={fieldClass}
          >
            {campaignTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        {data.campaignType === 'Other' ? (
          <Field label="Describe campaign type" htmlFor="campaignTypeOther" required>
            <input
              id="campaignTypeOther"
              value={data.campaignTypeOther}
              onChange={(e) => update('campaignTypeOther', e.target.value)}
              className={fieldClass}
            />
          </Field>
        ) : null}

        <Field label="Date & Time" htmlFor="dateTime" required hint="For events or campaign windows.">
          <input
            id="dateTime"
            value={data.dateTime}
            onChange={(e) => update('dateTime', e.target.value)}
            placeholder="Saturday, October 15, 6:00 PM — or — Campaign runs October 1–15"
            className={fieldClass}
          />
        </Field>

        <Field label="Location or Online Link" htmlFor="locationOrLink" required>
          <input
            id="locationOrLink"
            value={data.locationOrLink}
            onChange={(e) => update('locationOrLink', e.target.value)}
            placeholder="123 Main Street, Herndon, VA — or — https://eventbrite.com/..."
            className={fieldClass}
          />
        </Field>
      </FormSection>

      <FormSection step="2" title="Audience and goal">
        <Field label="Target Audience" htmlFor="audience" required>
          <input
            id="audience"
            value={data.audience}
            onChange={(e) => update('audience', e.target.value)}
            placeholder="Local families, animal lovers, past donors, young professionals, existing customers"
            className={fieldClass}
          />
        </Field>

        <Field label="Main Goal" htmlFor="mainGoal" required>
          <input
            id="mainGoal"
            value={data.mainGoal}
            onChange={(e) => update('mainGoal', e.target.value)}
            placeholder="Sell 100 tickets, raise $5,000, get 50 sign-ups, bring 200 people to the store"
            className={fieldClass}
          />
        </Field>

        <Field label="Offer / Ask" htmlFor="offerAsk" required>
          <input
            id="offerAsk"
            value={data.offerAsk}
            onChange={(e) => update('offerAsk', e.target.value)}
            placeholder="$25 tickets, suggested $50 donation, free admission, 20% off this weekend"
            className={fieldClass}
          />
        </Field>

        <Field
          label="Key Details / Highlights"
          htmlFor="keyDetails"
          required
          hint="Special guests, deadlines, perks, speakers, entertainment, sponsors, parking, registration details, or anything that makes this special."
        >
          <textarea
            id="keyDetails"
            value={data.keyDetails}
            onChange={(e) => update('keyDetails', e.target.value)}
            rows={4}
            className={fieldClass}
          />
        </Field>
      </FormSection>

      <FormSection step="3" title="Tone and channels">
        <Field label="Desired Tone" htmlFor="tone" required>
          <select id="tone" value={data.tone} onChange={(e) => update('tone', e.target.value)} className={fieldClass}>
            {toneOptions.map((tone) => (
              <option key={tone} value={tone}>
                {tone}
              </option>
            ))}
          </select>
        </Field>

        {data.tone === 'Other' ? (
          <Field label="Describe tone" htmlFor="toneOther" required>
            <input
              id="toneOther"
              value={data.toneOther}
              onChange={(e) => update('toneOther', e.target.value)}
              className={fieldClass}
            />
          </Field>
        ) : null}

        <fieldset>
          <legend className="text-sm font-medium text-foreground">Channels Needed</legend>
          <p className="mt-1 text-xs text-muted-foreground">
            Not sure? A good starter set is Email, Facebook, Instagram, Flyer/Print, and Landing Page/Event Page.
          </p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {channelOptions.map((channel) => (
              <label
                key={channel}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground transition-colors hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-secondary/60"
              >
                <input
                  type="checkbox"
                  checked={data.channels.includes(channel)}
                  onChange={() => toggleChannel(channel)}
                  className="size-4 shrink-0 rounded border-input text-primary accent-primary"
                />
                {channel}
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="Website & Social Links" htmlFor="websiteSocial">
          <textarea
            id="websiteSocial"
            value={data.websiteSocial}
            onChange={(e) => update('websiteSocial', e.target.value)}
            rows={3}
            placeholder="Website, Facebook page, Instagram, Eventbrite, donation page, registration link, etc."
            className={fieldClass}
          />
        </Field>
      </FormSection>

      <FormSection step="4" title="Requirements and notes">
        <Field label="Phrases to Include" htmlFor="phrasesInclude">
          <textarea
            id="phrasesInclude"
            value={data.phrasesInclude}
            onChange={(e) => update('phrasesInclude', e.target.value)}
            rows={2}
            placeholder={'“Adopt, don\'t shop” · “Support local families” · “Limited seats available”'}
            className={fieldClass}
          />
        </Field>

        <Field label="Phrases / Topics to Avoid" htmlFor="phrasesAvoid">
          <textarea
            id="phrasesAvoid"
            value={data.phrasesAvoid}
            onChange={(e) => update('phrasesAvoid', e.target.value)}
            rows={2}
            placeholder="Avoid sounding too salesy · Do not mention prior low attendance · Avoid political language"
            className={fieldClass}
          />
        </Field>

        <Field label="Additional Notes" htmlFor="additionalNotes">
          <textarea
            id="additionalNotes"
            value={data.additionalNotes}
            onChange={(e) => update('additionalNotes', e.target.value)}
            rows={3}
            placeholder="Anything else we should know before preparing the package?"
            className={fieldClass}
          />
        </Field>

        <Field label="Delivery Email" htmlFor="deliveryEmail" required hint="Where should we send the finished package?">
          <input
            id="deliveryEmail"
            type="email"
            value={data.deliveryEmail}
            onChange={(e) => update('deliveryEmail', e.target.value)}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </Field>
      </FormSection>

      {error ? (
        <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">{error}</div>
      ) : null}

      <div className="rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8">
        <Button type="submit" size="lg" className="h-11 w-full text-base">
          Submit Brief for Review
        </Button>
        <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
          Submitting opens a prepared email with your campaign brief. No information is stored on this website.
          We&apos;ll reply with the next step before fulfillment begins. Fields marked with{' '}
          <span className="text-primary">*</span> are required.
        </p>
      </div>
    </form>
  );
}
