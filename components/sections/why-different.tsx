import { X, Check } from "lucide-react"
import { PRODUCT_NAME } from "@/lib/site"

const without = [
  "A blank editor staring back at you",
  "A library of templates to assemble yourself",
  "A complicated dashboard to learn",
  "Five different documents to coordinate",
]

const withKit = [
  "A finished package built around your campaign",
  "Copy shaped to your event, audience, goal, and tone",
  "No new system to learn",
  "Everything organized in one place",
]

export function WhyDifferent() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Not another marketing platform.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Most tools hand you a blank editor or a dashboard. {PRODUCT_NAME} gives you a finished
            campaign package based on your actual event, audience, goal, and tone.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-heading text-lg font-semibold text-foreground">Most tools give you</p>
            <ul className="mt-5 space-y-3">
              {without.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-card p-6 ring-1 ring-primary/10 sm:p-8">
            <p className="font-heading text-lg font-semibold text-foreground">{PRODUCT_NAME} gives you</p>
            <ul className="mt-5 space-y-3">
              {withKit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
