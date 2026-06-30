import type { Metadata } from 'next';
import { Clock } from 'lucide-react';
import { BriefForm } from '@/components/brief-form';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { KIT_PRICE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Start Your Campaign Brief',
  description: `Tell us about your campaign. We use this brief to prepare your ${KIT_PRICE} Campaign Kit and follow up if anything important is missing.`
};

export default function BriefPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Clock className="size-3.5 text-primary" />
              Most briefs take 5–10 minutes
            </span>
            <h1 className="mt-5 text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Start your CampaignKit brief
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              You do not need perfect marketing copy here. Just give us the facts, goals, links, and tone you want us
              to work from.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Tell us about your campaign. We&apos;ll use this brief to prepare your{' '}
              <span className="font-medium text-foreground">{KIT_PRICE} Campaign Kit</span> and follow up if anything
              important is missing.
            </p>
          </div>

          <div className="mt-10">
            <BriefForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
