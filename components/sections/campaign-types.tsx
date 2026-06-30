const types = [
  { label: "Fundraiser", note: "Donor emails, social posts, landing page copy, CTAs, and reminders." },
  { label: "Gala or event", note: "Build anticipation with announcements, reminders, and day-of messages." },
  { label: "Adoption drive", note: "Warm, clear copy for families, donors, volunteers, and supporters." },
  { label: "Yard sale", note: "Quick local promotion across social, flyers, and reminders." },
  { label: "Comedy show", note: "Urgent posts, short CTAs, and day-of reminders to sell seats." },
  { label: "Open house", note: "Promote the date, location, benefits, and reason to attend." },
  { label: "Class or workshop", note: "Educational positioning, sign-up emails, and a final reminder." },
  { label: "Charity drive", note: "Community-focused appeals with clear ways to give." },
  { label: "Product launch", note: "Announcement copy, social posts, and landing page structure." },
  { label: "New service", note: "Introduce what you offer and why it matters to customers." },
  { label: "Volunteer drive", note: "Recruit help with motivating, easy-to-share messaging." },
  { label: "Seasonal promotion", note: "Timely offers framed for the moment and your audience." },
  { label: "Community meeting", note: "Clear invites and reminders to bring people together." },
  { label: "Ticketed event", note: "Sell tickets with countdowns, CTAs, and reminders." },
  { label: "Donation campaign", note: "Multi-touch appeals that ask clearly without sounding pushy." },
]

export function CampaignTypes() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Use it for almost any local or small-organization campaign.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((type) => (
            <div
              key={type.label}
              className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-card"
            >
              <p className="font-medium text-foreground">{type.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{type.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
