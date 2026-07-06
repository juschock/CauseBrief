import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { sampleKits } from '@/lib/sample-kits';
import { PRODUCT_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sample campaign packages',
  description: `Preview fictional ${PRODUCT_NAME} sample packages for nonprofits, local businesses, and community campaigns.`
};

export default function SamplesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary/30">
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Samples</p>
            <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              See what a {PRODUCT_NAME} campaign package looks like.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              These fictional samples show the structure, tone, and level of detail a customer can expect. Final
              packages are built from the customer&apos;s submitted survey and reviewed before delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleKits.map((kit) => (
              <Link
                key={kit.slug}
                href={`/samples/${kit.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/40"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{kit.campaignType}</p>
                <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground">{kit.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{kit.summary}</p>
                <p className="mt-6 font-medium text-primary group-hover:underline">View sample →</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold text-foreground">What these samples are — and are not</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              These are fictional examples. They do not represent real clients, real outcomes, or guaranteed
              performance. They are intended to show how {PRODUCT_NAME} organizes campaign copy, calls to action,
              reminders, and follow-up materials into a usable package.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
