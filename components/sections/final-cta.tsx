import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24">
        <h2 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
          Tell us what you&apos;re promoting. We&apos;ll turn it into a polished campaign package.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
          Submit one short brief and receive emails, social posts, landing page copy, flyer copy,
          press copy, CTAs, and a posting schedule — delivered within 48 hours.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="h-11 px-6 text-base"
            nativeButton={false}
            render={<Link href="/brief">Start Your Campaign Brief</Link>}
          />
          <Button
            size="lg"
            nativeButton={false}
            className="h-11 border border-primary-foreground/30 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10"
            render={<Link href="/#what-you-get">See What&apos;s Included</Link>}
          />
        </div>
      </div>
    </section>
  )
}
