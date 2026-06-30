import { Plus } from "lucide-react"

const faqs = [
  {
    q: "Is this a subscription?",
    a: "No. V1 is a fixed-price campaign kit.",
  },
  {
    q: "Do you send the emails or post on social media?",
    a: "No. CampaignKit provides the materials. You publish, send, print, or post them using your own tools and accounts.",
  },
  {
    q: "Do I need a website?",
    a: "No. We can provide event page or landing page copy you can use on Eventbrite, Givebutter, GoFundMe, Facebook, your existing site, or a simple document.",
  },
  {
    q: "Do you design graphics?",
    a: "V1 includes flyer copy and graphics suggestions, not custom graphic design. You can use the copy in Canva, a flyer template, or with your designer.",
  },
  {
    q: "Can I edit the materials?",
    a: "Yes. The kit is delivered in editable formats.",
  },
  {
    q: "How fast is delivery?",
    a: "Within 48 hours after receiving a complete campaign brief.",
  },
  {
    q: "What if my campaign is urgent?",
    a: "If your deadline is very soon, include that in the brief. Rush delivery may be offered later, but V1 delivery is within 48 hours.",
  },
  {
    q: "What if I do not know what channels I need?",
    a: "Select the ones you already use. If you are unsure, choose Email, Facebook, Instagram, Flyer/Print, and Landing Page/Event Page as a general starter set.",
  },
  {
    q: "Can nonprofits use this?",
    a: "Yes. CampaignKit is especially useful for fundraisers, donor appeals, adoption events, volunteer drives, galas, local charity events, and community campaigns.",
  },
  {
    q: "Is this legal, fundraising, or advertising advice?",
    a: "No. CampaignKit provides campaign copy and planning materials. It is not legal, fundraising compliance, tax, or advertising advice.",
  },
  {
    q: "Can you guarantee results?",
    a: "No. Campaign results depend on your audience, timing, offer, list quality, local awareness, and execution.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Questions, answered.
          </h2>
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
      </div>
    </section>
  )
}
