export type CampaignFamilyId = 'cause-nonprofit' | 'local-acquisition' | 'booking-reservation';

export type CampaignTemplate = {
  id: string;
  title: string;
  family: CampaignFamilyId;
  audience: string[];
  primaryActions: string[];
  whyItBelongs: string;
  defaultDeliverables: string[];
  exampleAngle: string;
  qaFocus: string[];
  /** Public /samples/[slug] page — only three in V1 */
  isPublicSample: boolean;
  sampleSlug?: string;
  /** Internal variants (e.g. pet groomer under seasonal booking) */
  variants?: string[];
};

export const CAMPAIGN_FAMILY_LABELS: Record<CampaignFamilyId, string> = {
  'cause-nonprofit': 'Cause / Nonprofit',
  'local-acquisition': 'Local customer acquisition',
  'booking-reservation': 'Booking / Reservation'
};

/** Maps intake survey campaign family strings to template family ids. */
export const INTAKE_FAMILY_TO_TEMPLATE_FAMILY: Record<string, CampaignFamilyId> = {
  'Cause / Nonprofit campaign': 'cause-nonprofit',
  'Local customer acquisition': 'local-acquisition',
  'Booking / Reservation campaign': 'booking-reservation'
};

export const campaignTemplates: CampaignTemplate[] = [
  {
    id: 'adoption-event',
    title: 'Animal Rescue Adoption Event',
    family: 'cause-nonprofit',
    audience: [
      'local animal lovers',
      'families',
      'prospective adopters',
      'foster volunteers',
      'rescue supporters'
    ],
    primaryActions: ['attend', 'RSVP', 'donate', 'foster', 'share'],
    whyItBelongs:
      'Warm community event campaigns need one clear turnout action without guilt-heavy framing — ideal for cause organizations hosting adoption days.',
    defaultDeliverables: [
      'event announcement email',
      'mission/story email',
      'logistics reminder',
      'last-call reminder',
      'day-of post',
      'thank-you/follow-up',
      'Facebook posts',
      'Instagram captions',
      'local group post',
      'flyer copy',
      'CTA bank',
      'event page copy',
      'posting schedule'
    ],
    exampleAngle: 'Weekend adoption event — meet adoptable pets and help animals get seen by the right families.',
    qaFocus: [
      'No guilt-heavy or manipulative pet stories',
      'Verified pet names and details only',
      'Event date/time/location match fact ledger',
      'Hopeful, community-centered tone'
    ],
    isPublicSample: true,
    sampleSlug: 'adoption-event'
  },
  {
    id: 'year-end-appeal',
    title: 'Nonprofit Year-End Appeal',
    family: 'cause-nonprofit',
    audience: [
      'donors',
      'lapsed donors',
      'first-time prospects',
      'recurring donor candidates',
      'newsletter subscribers'
    ],
    primaryActions: ['donate before year-end', 'become a monthly donor'],
    whyItBelongs:
      'Deadline-driven fundraising requires donor-respecting urgency, impact language, and follow-up — not generic appeal copy.',
    defaultDeliverables: [
      'campaign launch email',
      'impact/story email',
      'deadline reminder',
      'final 48-hour email',
      'Dec. 31 final-day email',
      'thank-you email',
      'January impact follow-up',
      'donation page copy',
      'subject lines',
      'CTA bank',
      'social posts',
      'campaign calendar'
    ],
    exampleAngle: 'Year-end giving push — help the organization start January ready to serve.',
    qaFocus: [
      'Impact amounts substantiated in fact ledger',
      'No guilt-based donor framing',
      'Deadline dates accurate',
      'Grateful, mission-centered tone'
    ],
    isPublicSample: true,
    sampleSlug: 'year-end-appeal'
  },
  {
    id: 'volunteer-drive',
    title: 'Volunteer Drive Campaign',
    family: 'cause-nonprofit',
    audience: [
      'local supporters',
      'parents',
      'church members',
      'students',
      'community members'
    ],
    primaryActions: ['sign up for a volunteer shift'],
    whyItBelongs:
      'Recruitment campaigns need role clarity, low-friction signup CTAs, and shift reminders — one audience, one signup action.',
    defaultDeliverables: [
      'volunteer recruitment email',
      'role descriptions',
      'shift signup copy',
      'FAQ',
      'Facebook posts',
      'Instagram captions',
      'flyer copy',
      'local group post',
      'confirmation message',
      'day-before reminder',
      'volunteer thank-you',
      'follow-up / next-shift ask'
    ],
    exampleAngle: 'Community volunteer day — fill specific roles before event week.',
    qaFocus: [
      'Role descriptions match actual volunteer needs',
      'Shift times and locations verified',
      'Clear signup path in every asset',
      'Welcoming, not desperate tone'
    ],
    isPublicSample: false
  },
  {
    id: 'sponsor-ask-local-event',
    title: 'Sponsor Ask Campaign for Local Event',
    family: 'cause-nonprofit',
    audience: ['local businesses', 'community partners', 'board networks', 'in-kind donors'],
    primaryActions: ['sponsor', 'donate in-kind', 'provide venue/items', 'share event'],
    whyItBelongs:
      'Sponsor outreach is B2B community fundraising — one ask (sponsor this event) with recognition and level language.',
    defaultDeliverables: [
      'sponsor ask email',
      'sponsor one-page copy',
      'sponsorship level language',
      'in-kind sponsor ask',
      'LinkedIn post',
      'board/ambassador share copy',
      'sponsor recognition copy',
      'sponsor thank-you email',
      'post-event sponsor recap',
      'claims/approval checklist'
    ],
    exampleAngle: 'Local benefit event — secure cash and in-kind sponsors before public launch.',
    qaFocus: [
      'Sponsor levels and benefits approved by organization',
      'No invented partner logos or commitments',
      'Recognition language matches agreement',
      'Professional, community-partnership tone'
    ],
    isPublicSample: false
  },
  {
    id: 'restaurant-local-discovery',
    title: 'Restaurant Local Discovery Campaign',
    family: 'local-acquisition',
    audience: [
      'nearby residents',
      'first-time diners',
      'local office workers',
      'families',
      'regulars who have not visited recently'
    ],
    primaryActions: ['visit', 'order', 'reserve', 'try lunch special', 'leave review', 'refer a neighbor'],
    whyItBelongs:
      'New and growing restaurants need local discovery — not generic grand-opening blasts. One offer, one visit action, nearby audience.',
    defaultDeliverables: [
      'local offer / positioning sheet',
      'Google Business Profile post',
      'Facebook local post',
      'Instagram food caption',
      'local group version',
      'email to past customers or list',
      'lunch-special flyer / counter-card',
      'table-tent copy',
      'review request',
      'referral prompt',
      'receipt insert copy',
      'campaign calendar',
      'terms/exclusions note'
    ],
    exampleAngle:
      'Weekday lunch special for neighbors who still do not know the restaurant is here — fictional business only in public samples.',
    qaFocus: [
      'Offer terms and exclusions in fact ledger',
      'No invented reviews or star ratings',
      'Menu items and prices verified',
      'Local, welcoming tone — not corporate ad speak',
      'Do not reference real businesses without permission'
    ],
    isPublicSample: true,
    sampleSlug: 'restaurant-local-discovery'
  },
  {
    id: 'fast-casual-lunch-offer',
    title: 'Fast-Casual Lunch Offer Campaign',
    family: 'local-acquisition',
    audience: [
      'office workers',
      'students',
      'nearby residents',
      'first-time customers',
      'repeat lunch buyers'
    ],
    primaryActions: ['visit', 'order online', 'try combo', 'bring a friend', 'review'],
    whyItBelongs:
      'Fast-casual concepts convert on simple weekday offers — one combo, one order/visit action, concrete deadline or hours.',
    defaultDeliverables: [
      'offer sheet',
      'Google Business offer post',
      'Instagram food post',
      'Facebook local post',
      'flyer / counter-card',
      'QR order copy',
      'receipt insert',
      'review request',
      'refer-a-friend prompt',
      'slow-day reminder',
      'campaign calendar'
    ],
    exampleAngle: 'Weekday lunch combo — drive orders during 11 AM–2 PM window.',
    qaFocus: [
      'Offer valid days/hours explicit',
      'Order link and pickup details verified',
      'Food claims match menu',
      'Urgent but not spammy tone'
    ],
    isPublicSample: false
  },
  {
    id: 'restaurant-catering-signature',
    title: 'Restaurant Catering / Signature Dish Campaign',
    family: 'local-acquisition',
    audience: [
      'local offices',
      'event planners',
      'families hosting gatherings',
      'existing dine-in customers',
      'catering prospects'
    ],
    primaryActions: [
      'request catering',
      'order',
      'visit',
      'try signature platter',
      'leave review'
    ],
    whyItBelongs:
      'Smokehouse, grill, and full-service restaurants often need catering inquiry or signature-item campaigns — one hero dish, one inquiry/order action.',
    defaultDeliverables: [
      'signature dish copy',
      'catering inquiry page copy',
      'Google Business update',
      'Facebook post',
      'Instagram caption',
      'local office lunch email',
      'flyer / counter-card',
      'quote-request CTA bank',
      'review request',
      'follow-up / reorder prompt',
      'campaign calendar'
    ],
    exampleAngle: 'Holiday catering deadline or signature family platter push.',
    qaFocus: [
      'Catering minimums and lead times in ledger',
      'Signature dish name and description verified',
      'No fabricated catering testimonials',
      'Clear inquiry path on every asset'
    ],
    isPublicSample: false
  },
  {
    id: 'brewery-taproom-event',
    title: 'Brewery / Taproom Event Campaign',
    family: 'local-acquisition',
    audience: [
      'local regulars',
      'craft beer fans',
      'couples and friend groups',
      'event-driven visitors',
      'mailing list subscribers'
    ],
    primaryActions: ['visit', 'attend event', 'bring a friend', 'try a release', 'join mailing list'],
    whyItBelongs:
      'Taprooms need reasons to show up on specific nights — release, trivia, food truck — not vague brand awareness.',
    defaultDeliverables: [
      'taproom event announcement',
      'Google Business event post',
      'Facebook event copy',
      'Instagram caption',
      'local group version',
      'table tent / counter sign',
      'email to regulars',
      'day-of reminder',
      'review request',
      'next-event follow-up',
      'campaign calendar'
    ],
    exampleAngle: 'New beer release night or slow-weekday taproom special.',
    qaFocus: [
      'Event date, tap list, and food partner details verified',
      'Age/responsible messaging where required',
      'No invented attendance or awards',
      'Community, local, inviting tone'
    ],
    isPublicSample: false
  },
  {
    id: 'hobby-collectibles-shop-event',
    title: 'Hobby / Collectibles Shop Event Campaign',
    family: 'local-acquisition',
    audience: [
      'local collectors',
      'hobby community members',
      'trade-night regulars',
      'parents with interested kids',
      'social followers'
    ],
    primaryActions: [
      'attend trade night',
      'visit',
      'buy',
      'join email list',
      'refer a collector friend'
    ],
    whyItBelongs:
      'Card shops and hobby retailers live on community events, drops, and repeat visits — trade night is a sharper action than generic retail marketing.',
    defaultDeliverables: [
      'trade night announcement',
      'new arrivals post',
      'local collector Facebook post',
      'Instagram product/drop caption',
      'Google Business update',
      'flyer / counter-card copy',
      'review request',
      'referral/share prompt',
      'event reminder',
      'thank-you / next event follow-up',
      'campaign calendar'
    ],
    exampleAngle: 'Monthly trade night or new product drop — build collector turnout.',
    qaFocus: [
      'Product/event details match inventory plan',
      'No hype about resale value unless verified',
      'Clear event rules and times',
      'Enthusiast-friendly, trustworthy tone'
    ],
    isPublicSample: false
  },
  {
    id: 'seasonal-booking',
    title: 'Seasonal Booking Campaign',
    family: 'booking-reservation',
    audience: [
      'existing clients',
      'first-time customers',
      'seasonal planners',
      'local neighborhood customers'
    ],
    primaryActions: ['book', 'reserve', 'schedule', 'rebook'],
    whyItBelongs:
      'Service businesses with calendars (groomers, salons, spas) need seasonal slot-filling — one booking action, capacity-aware urgency.',
    defaultDeliverables: [
      'booking offer sheet',
      'Google Business Profile post',
      'email announcement',
      'Facebook post',
      'Instagram caption',
      'booking page copy',
      'confirmation message',
      'appointment reminder',
      'review request',
      'rebook prompt',
      'counter-card copy',
      'campaign calendar'
    ],
    exampleAngle: 'Holiday grooming rush or back-to-school haircut booking window.',
    qaFocus: [
      'Availability and pricing not invented',
      'Booking link or phone verified',
      'Seasonal urgency without false scarcity',
      'Practical, local service tone'
    ],
    isPublicSample: false,
    variants: ['Pet groomer holiday booking', 'Salon / barber back-to-school haircut']
  }
];

export function getCampaignTemplate(id: string): CampaignTemplate | undefined {
  return campaignTemplates.find((t) => t.id === id);
}

export function getTemplatesByFamily(family: CampaignFamilyId): CampaignTemplate[] {
  return campaignTemplates.filter((t) => t.family === family);
}

export function getTemplatesForIntakeFamily(intakeFamily: string): CampaignTemplate[] {
  const familyId = INTAKE_FAMILY_TO_TEMPLATE_FAMILY[intakeFamily];
  if (!familyId) return campaignTemplates;
  return getTemplatesByFamily(familyId);
}

export function getPublicSampleTemplates(): CampaignTemplate[] {
  return campaignTemplates.filter((t) => t.isPublicSample);
}

export const PUBLIC_SAMPLE_SLUGS = getPublicSampleTemplates()
  .map((t) => t.sampleSlug)
  .filter((slug): slug is string => Boolean(slug));
