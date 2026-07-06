import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SURVEY_CTA } from "@/lib/site"

const steps = [
  {
    step: "01",
    title: "Fill out one survey",
    body: "Tell us what you are promoting, who it is for, when it happens, and what you want people to do.",
    meta: "Takes about 10 minutes.",
  },
  {
    step: "02",
    title: "We build your campaign execution package",
    body: "Racoben turns your survey into a complete package: email, social, landing pages, flyers, press outreach, subject lines, CTAs, and a posting schedule.",
  },
  {
    step: "03",
    title: "You receive a polished package",
    body: "Within 48 hours, you get an organized, editable package you can copy, paste, print, publish, or hand off to your team.",
  },
  {
    step: "04",
    title: "You use it where you already work",
    body: "Use your package in Mailchimp, Facebook, Instagram, Eventbrite, Givebutter, Canva, Google Docs, your website, or printed materials.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              How it works
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              One survey in. A complete campaign execution package out.
            </h2>
          </div>
          <Button size="lg" nativeButton={false} render={<Link href="/brief">{SURVEY_CTA}</Link>} />
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.step} className="relative rounded-2xl border border-border bg-card p-6">
              <span className="font-heading text-2xl font-semibold text-primary">{step.step}</span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              {step.meta ? (
                <p className="mt-3 text-xs font-medium text-accent-foreground">{step.meta}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
