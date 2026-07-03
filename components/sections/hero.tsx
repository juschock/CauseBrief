import Link from 'next/link';
import { Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { publicAsset, TAGLINE } from '@/lib/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Clock className="size-3.5 text-primary" />
            Delivered within 48 hours · Prepared and human-reviewed by Racoben
          </span>

          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {TAGLINE}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            CauseBrief prepares a polished campaign package from the details of your event, fundraiser, promotion, or local
            campaign — polished emails, social posts, flyer copy, landing page copy, subject lines, CTAs, and a
            simple posting schedule.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 px-6 text-base"
              nativeButton={false}
              render={<Link href="/brief">Start Your Campaign Brief</Link>}
            />
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-6 text-base"
              nativeButton={false}
              render={<Link href="/#what-you-get">See What&apos;s Included</Link>}
            />
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Built for small nonprofits, local businesses, consultants, event organizers, and community groups.
          </p>

          <p className="mt-4 flex items-start gap-2 text-sm text-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
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
