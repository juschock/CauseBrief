import { ShieldCheck } from "lucide-react"

export function TrustLimitations() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-accent-foreground">
            <ShieldCheck className="size-6" />
          </span>
          <h2 className="mt-5 text-balance font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
            Clear scope. Usable materials. No false promises.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            CampaignKit helps you prepare campaign copy and planning materials. It does not
            guarantee donations, sales, attendance, ticket purchases, press coverage, ad approval,
            or social media reach.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            You are responsible for reviewing final details before publishing, and for using the
            materials in the platforms, channels, and communities available to you.
          </p>
        </div>
      </div>
    </section>
  )
}
