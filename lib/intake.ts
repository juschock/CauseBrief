import { KIT_PRICE, PACKAGE_LABEL, PRODUCT_NAME } from '@/lib/site';

export const organizationTypes = [
  'Nonprofit / Community organization',
  'Local business',
  'Service business',
  'Event organizer',
  'Other'
] as const;

export const campaignFamilies = [
  'Cause / Nonprofit campaign',
  'Local customer acquisition',
  'Booking / Reservation campaign',
  'Not sure yet'
] as const;

export const campaignTypes = [
  'Fundraiser',
  'Gala / Event',
  'Adoption / Drive',
  'Yard Sale',
  'Comedy Show',
  'Open House',
  'Class / Workshop',
  'Charity Drive',
  'Product Launch',
  'Local Promotion',
  'Volunteer Drive',
  'Seasonal Promotion',
  'Grand Opening',
  'Booking / Appointment Push',
  'Other'
] as const;

export const toneOptions = [
  'Warm & Friendly',
  'Urgent & Exciting',
  'Professional',
  'Fun & Playful',
  'Inspirational',
  'Serious',
  'Community-Focused',
  'Other'
] as const;

export const channelOptions = [
  'Email',
  'Instagram',
  'Facebook',
  'LinkedIn',
  'X / Twitter',
  'TikTok',
  'Flyer / Print',
  'Landing Page / Event Page',
  'Press Release'
] as const;

export type BriefFormData = {
  organizationType: string;
  campaignFamily: string;
  primaryAction: string;
  organizationName: string;
  campaignName: string;
  campaignType: string;
  campaignTypeOther: string;
  dateTime: string;
  locationOrLink: string;
  audience: string;
  mainGoal: string;
  offerAsk: string;
  keyDetails: string;
  tone: string;
  toneOther: string;
  channels: string[];
  websiteSocial: string;
  phrasesInclude: string;
  phrasesAvoid: string;
  deliveryEmail: string;
  additionalNotes: string;
};

export const emptyBrief: BriefFormData = {
  organizationType: organizationTypes[0],
  campaignFamily: campaignFamilies[0],
  primaryAction: '',
  organizationName: '',
  campaignName: '',
  campaignType: campaignTypes[0],
  campaignTypeOther: '',
  dateTime: '',
  locationOrLink: '',
  audience: '',
  mainGoal: '',
  offerAsk: '',
  keyDetails: '',
  tone: toneOptions[0],
  toneOther: '',
  channels: ['Email', 'Facebook', 'Instagram', 'Flyer / Print', 'Landing Page / Event Page'],
  websiteSocial: '',
  phrasesInclude: '',
  phrasesAvoid: '',
  deliveryEmail: '',
  additionalNotes: ''
};

export function formatBriefForEmail(data: BriefFormData) {
  const type = data.campaignType === 'Other' ? data.campaignTypeOther : data.campaignType;
  const tone = data.tone === 'Other' ? data.toneOther : data.tone;
  return [
    `${PRODUCT_NAME} ${KIT_PRICE} ${PACKAGE_LABEL} — New Survey`,
    '',
    `Organization Type: ${data.organizationType}`,
    `Campaign Family: ${data.campaignFamily}`,
    `Primary Action: ${data.primaryAction}`,
    '',
    `Organization: ${data.organizationName}`,
    `Campaign / Event: ${data.campaignName}`,
    `Campaign Type: ${type}`,
    `Date & Time: ${data.dateTime}`,
    `Location / Link: ${data.locationOrLink}`,
    `Audience: ${data.audience}`,
    `Main Goal: ${data.mainGoal}`,
    `Offer / Ask: ${data.offerAsk}`,
    '',
    'Key Details:',
    data.keyDetails,
    '',
    `Tone: ${tone}`,
    `Channels: ${data.channels.join(', ')}`,
    `Website / Social: ${data.websiteSocial || '—'}`,
    `Phrases to Include: ${data.phrasesInclude || '—'}`,
    `Phrases to Avoid: ${data.phrasesAvoid || '—'}`,
    `Delivery Email: ${data.deliveryEmail}`,
    '',
    'Additional Notes:',
    data.additionalNotes || '—'
  ].join('\n');
}
