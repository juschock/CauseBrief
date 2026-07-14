import { z } from 'zod';
import { campaignFamilies, campaignTypes, channelOptions, organizationTypes, toneOptions } from '@/lib/intake';

const requiredText = z.string().trim().min(1).max(5000);
const optionalText = z.string().trim().max(5000).default('');

export const briefCheckoutSchema = z.object({
  organizationType: z.enum(organizationTypes),
  campaignFamily: z.enum(campaignFamilies),
  primaryAction: requiredText,
  organizationName: requiredText,
  campaignName: requiredText,
  campaignType: z.enum(campaignTypes),
  campaignTypeOther: optionalText,
  dateTime: requiredText,
  locationOrLink: requiredText,
  audience: requiredText,
  mainGoal: requiredText,
  offerAsk: requiredText,
  keyDetails: requiredText,
  tone: z.enum(toneOptions),
  toneOther: optionalText,
  channels: z.array(z.enum(channelOptions)).min(1),
  websiteSocial: optionalText,
  phrasesInclude: optionalText,
  phrasesAvoid: optionalText,
  deliveryEmail: z.string().trim().email().max(320),
  additionalNotes: optionalText
}).superRefine((brief, context) => {
  if (brief.campaignType === 'Other' && !brief.campaignTypeOther) {
    context.addIssue({ code: 'custom', path: ['campaignTypeOther'], message: 'Describe the campaign type.' });
  }
  if (brief.tone === 'Other' && !brief.toneOther) {
    context.addIssue({ code: 'custom', path: ['toneOther'], message: 'Describe the desired tone.' });
  }
});

export type CheckoutBrief = z.infer<typeof briefCheckoutSchema>;
