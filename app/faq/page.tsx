import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { faqs } from '@/lib/content';
import { ckPath } from '@/lib/nav';
import { KIT_PRICE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Common questions about CauseBrief — pricing, delivery, scope, and what is included.'
};

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</span>
            <h1 className="mt-3 text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Everything you need to know before starting your campaign brief.
            </p>
          </div>

          <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-medium text-foreground">
                  {faq.q}
                  <Plus className="size-4 shrink-0 text-primary transition-transform group-open:rotate-45" />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<Link href={ckPath('/brief')}>Start Your Campaign Brief — {KIT_PRICE}</Link>} />
            <Button size="lg" variant="outline" nativeButton={false} render={<Link href={ckPath('/')}>Back to home</Link>} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
