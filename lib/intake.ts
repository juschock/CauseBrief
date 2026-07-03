import { KIT_PRICE, PRODUCT_NAME } from '@/lib/site';

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
    `${PRODUCT_NAME} ${KIT_PRICE} Campaign Package — New Brief`,
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
