const tasks = [
  "Write the announcement",
  "Come up with subject lines",
  "Make social posts",
  "Describe the offer",
  "Write the flyer copy",
  "Draft the press release",
  "Remind people again",
  "Make it all sound consistent",
]

export function Problem() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              You should not have to start every campaign from a blank page.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Most small teams do not have a full-time marketing department. So when an event,
              fundraiser, sale, class, open house, or local promotion comes up, the work falls on
              whoever has time.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              CampaignKit gives you a polished starting package built around your actual campaign.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-sm font-medium text-foreground">And somehow, one person has to:</p>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {tasks.map((task) => (
                <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
