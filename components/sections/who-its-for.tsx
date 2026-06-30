import { HeartHandshake, Store, CalendarDays, Briefcase } from "lucide-react"

const groups = [
  {
    icon: HeartHandshake,
    title: "Small Nonprofits",
    body: "Fundraisers, donor appeals, volunteer drives, galas, charity events, adoption programs, community campaigns.",
  },
  {
    icon: Store,
    title: "Local Businesses",
    body: "Sales, open houses, seasonal promotions, new services, workshops, customer appreciation events.",
  },
  {
    icon: CalendarDays,
    title: "Event Organizers",
    body: "Comedy shows, classes, markets, community events, pop-ups, performances, ticketed events.",
  },
  {
    icon: Briefcase,
    title: "Consultants & Small Teams",
    body: "Workshops, webinars, launches, service promotions, local outreach, client-facing campaigns.",
  },
]

export function WhoItsFor() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Built for small campaigns that still need to look professional.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <group.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
