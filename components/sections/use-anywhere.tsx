import { publicAsset } from '@/lib/site';

const uses = [
  'Paste emails into Mailchimp or Constant Contact.',
  'Post social copy on Facebook, Instagram, LinkedIn, X, or TikTok.',
  'Add landing page copy to Eventbrite, Givebutter, GoFundMe, Squarespace, WordPress, or your own website.',
  'Use flyer copy in Canva or a printed handout.',
  'Send the press release to local newspapers, newsletters, radio, schools, churches, or partners.',
  'Share the posting schedule with staff or volunteers.'
];

export function UseAnywhere() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src={publicAsset('/images/campaign-kit-folder.png')}
              alt="A finished campaign kit organized in a tabbed folder on a warm desk"
              width={680}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Use your kit anywhere you already promote your work.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            CampaignKit is connective tissue, not another platform to learn. Drop the materials straight into the
            tools and channels you already use.
          </p>
          <ul className="mt-6 space-y-3">
            {uses.map((use) => (
              <li key={use} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="leading-relaxed">{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
