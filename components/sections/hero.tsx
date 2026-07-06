import Link from 'next/link';
import { Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  HERO_PROMISE,
  publicAsset,
  PRODUCT_NAME,
  SURVEY_CTA,
  TAGLINE_LINE_1,
  TAGLINE_LINE_2
} from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <h1 className="text-balance font-heading text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {PRODUCT_NAME}
          </h1>

          <p className="mt-4 max-w-xl text-balance font-heading text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
            {TAGLINE_LINE_1}
            <br />
            {TAGLINE_LINE_2}
          </p>

          <p className="mt-6 max-w-xl text-pretty text-xl leading-relaxed text-foreground sm:text-2xl sm:leading-relaxed">
            {HERO_PROMISE}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-7 text-base"
              nativeButton={false}
              render={<Link href="/brief">{SURVEY_CTA}</Link>}
            />
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 text-base"
              nativeButton={false}
              render={<Link href="/#what-you-get">See What&apos;s Included</Link>}
            />
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-3.5 shrink-0 text-primary" />
            Delivered within 48 hours · Prepared and human-reviewed by Racoben
          </p>

          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>
              You receive ready-to-use copy and campaign materials. You stay in control of where and how you publish
              them.
            </span>
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary/60" aria-hidden="true" />
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src={publicAsset('/images/campaign-kit-materials.png')}
              alt="A tidy set of printed campaign materials including a flyer, email drafts, social post cards, and a posting schedule"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
