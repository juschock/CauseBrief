import { PRODUCT_NAME } from './site';

export type SampleEmail = {
  label: string;
  subject: string;
  preview: string;
  timing: string;
  body: string;
  cta: string;
};

export type SampleSocialPost = {
  platform: 'Facebook' | 'Instagram' | 'LinkedIn' | 'X' | 'TikTok';
  label: string;
  copy: string;
};

export type SampleKit = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  campaignType: string;
  goal: string;
  audience: string[];
  primaryCta: string;
  secondaryCta: string;
  tone: string[];
  emails: SampleEmail[];
  socialPosts: SampleSocialPost[];
  landingPageCopy: {
    headline: string;
    subhead: string;
    body: string;
    details: string[];
    faq: { q: string; a: string }[];
  };
  ctas: string[];
  postingSchedule: { timing: string; asset: string; purpose: string }[];
  followUpCopy: string;
  usageNotes: string[];
};

export const sampleKits: SampleKit[] = [
  {
    slug: 'adoption-event',
    title: 'Animal Rescue Adoption Event',
    eyebrow: 'Sample campaign package',
    campaignType: 'Adoption event',
    summary:
      'A fictional sample package for a local animal rescue hosting a weekend adoption event and asking the community to attend, share, foster, or donate.',
    goal: 'Drive event attendance, increase pet visibility, and create secondary support from people who cannot adopt right now.',
    audience: ['local families', 'animal lovers', 'past adopters', 'foster volunteers', 'rescue supporters'],
    primaryCta: 'Attend the adoption event',
    secondaryCta: 'Share, foster, or donate if you cannot attend',
    tone: ['warm', 'hopeful', 'community-centered', 'specific', 'not guilt-heavy'],
    emails: [
      {
        label: 'Announcement',
        subject: 'Meet your next best friend this Saturday',
        preview: 'Join us for an adoption event full of second chances.',
        timing: 'Send 7–10 days before the event',
        body:
          'This Saturday, Green Valley Animal Rescue is bringing adoptable pets, foster volunteers, and future families together for one hopeful afternoon. If you have been thinking about adopting — or know someone who has — this is a simple way to meet animals who are ready for a safe, loving home. Stop by, ask questions, meet the team, and help one more pet get seen by the right person.',
        cta: 'Reserve your visit'
      },
      {
        label: 'Story / Reason to Care',
        subject: 'Daisy is ready for a quiet couch and a fresh start',
        preview: 'She has done the hard part. Now she needs someone to say yes.',
        timing: 'Send 3–5 days before the event',
        body:
          'Daisy arrived unsure of every new sound and every new face. Now she leans into gentle hands, watches the door for familiar volunteers, and lights up when someone kneels down to say hello. She is exactly why this adoption event matters. One visit can become one introduction, and one introduction can become the start of a new life.',
        cta: 'Meet Daisy and other adoptable pets'
      },
      {
        label: 'Last Call',
        subject: "Last call for Saturday's adoption event",
        preview: 'We would love to see you — and so would the pets still waiting.',
        timing: 'Send 24–48 hours before the event',
        body:
          'Our adoption event is almost here. If you are planning to stop by, now is the time to save the details, invite a friend, and come ready to meet animals who are waiting for their next chapter. Not adopting right now? You can still help by sharing the event or making a small gift to support food, transport, and care.',
        cta: 'Attend or support the event'
      }
    ],
    socialPosts: [
      {
        platform: 'Facebook',
        label: 'Launch post',
        copy:
          'We are hosting an adoption event this Saturday, and we would love to introduce you to some incredible pets looking for a fresh start. Come meet adoptable dogs and cats, talk with our team, and help one more animal find home.'
      },
      {
        platform: 'Facebook',
        label: 'Share ask',
        copy:
          'Not adopting right now? You can still help. Share our adoption event with a friend, neighbor, coworker, or family member who has been thinking about adding a pet to the family.'
      },
      {
        platform: 'Instagram',
        label: 'Countdown caption',
        copy:
          'New beginnings start here. Join us this Saturday to meet adoptable pets and help us turn "still waiting" into "finally home."'
      },
      {
        platform: 'Instagram',
        label: 'Featured pet caption',
        copy:
          'Daisy update: soft eyes, a wagging tail, and a heart that is ready to trust again. She will be at our adoption event this weekend.'
      },
      {
        platform: 'LinkedIn',
        label: 'Community frame',
        copy:
          'This weekend, Green Valley Animal Rescue is hosting an adoption event to connect local families with animals ready for permanent homes. Community turnout matters: every share, visit, and introduction increases the odds that an animal is seen by the right person.'
      },
      {
        platform: 'LinkedIn',
        label: 'Volunteer appreciation',
        copy:
          'Adoption events are built by volunteers, fosters, donors, and neighbors who decide that local animal welfare is worth showing up for. We are grateful to everyone helping make this weekend possible.'
      },
      {
        platform: 'X',
        label: 'Short launch',
        copy: 'Adoption event this Saturday. Come meet pets looking for home — and help us spread the word.'
      },
      {
        platform: 'X',
        label: 'Day-before reminder',
        copy:
          'Tomorrow is adoption day. Save the details, invite a friend, and come meet animals waiting for a fresh start.'
      },
      {
        platform: 'TikTok',
        label: 'Video prompt',
        copy:
          'Prompt: "If you have been thinking about adopting, here are five pets you can meet this Saturday…" Show quick clips, names, and one gentle detail about each animal.'
      },
      {
        platform: 'TikTok',
        label: 'Behind-the-scenes prompt',
        copy:
          'Prompt: "Here is what it takes to get ready for one adoption event." Show crates, treats, paperwork, volunteers, transport, and setup.'
      }
    ],
    landingPageCopy: {
      headline: 'Meet adoptable pets this Saturday',
      subhead: 'Join Green Valley Animal Rescue for a community adoption event full of second chances.',
      body:
        'If you have been thinking about adopting, fostering, volunteering, or simply helping local rescue animals get seen, this event is for you. You will be able to meet adoptable pets, talk with volunteers, learn about the adoption process, and support the care that makes each placement possible.',
      details: [
        'Date: Saturday, October 15',
        'Time: 11:00 AM – 4:00 PM',
        'Location: Green Valley Park Pavilion',
        'Primary action: Reserve a visit or attend during event hours',
        'Secondary action: Share the event or donate to support adoption-day care'
      ],
      faq: [
        {
          q: 'Do I need to be ready to adopt that day?',
          a: 'No. You are welcome to attend, ask questions, meet the team, and learn more about the process.'
        },
        {
          q: 'Can I help if I cannot adopt?',
          a: 'Yes. Sharing the event, fostering, volunteering, or donating all help pets get closer to home.'
        }
      ]
    },
    ctas: [
      'Reserve your visit',
      'Meet adoptable pets',
      'Help a pet get seen',
      'Share the event',
      'Support adoption-day care',
      'Come meet your match',
      "Can't attend? Donate today",
      'Invite a friend who loves animals'
    ],
    postingSchedule: [
      { timing: '10 days before', asset: 'Announcement email + Facebook launch post', purpose: 'Start awareness' },
      { timing: '7 days before', asset: 'Featured pet story', purpose: 'Create emotional connection' },
      { timing: '5 days before', asset: 'Instagram countdown + LinkedIn community post', purpose: 'Broaden reach' },
      { timing: '2 days before', asset: 'Reminder email + share ask', purpose: 'Prompt action' },
      { timing: 'Day of', asset: 'Today post + short X updates', purpose: 'Drive final turnout' },
      { timing: 'Day after', asset: 'Thank-you post/email', purpose: 'Steward supporters and invite next action' }
    ],
    followUpCopy:
      'Thank you for showing up for the animals this weekend. Whether you attended, adopted, shared the event, donated, or encouraged a friend to stop by, you helped more pets get seen. If you are still looking for a way to help, fostering, volunteering, and monthly support all keep this work moving after adoption day ends.',
    usageNotes: [
      'Replace all fictional organization, date, time, and location details before use.',
      'Use pet stories only when they are verified and approved by the organization.',
      'Avoid extreme sadness or guilt-heavy language; keep the tone hopeful and community-centered.'
    ]
  },
  {
    slug: 'year-end-appeal',
    title: 'Nonprofit Year-End Appeal',
    eyebrow: 'Sample campaign package',
    campaignType: 'Year-end fundraising appeal',
    summary:
      'A fictional sample package for a small nonprofit asking supporters to make a year-end gift before December 31.',
    goal: 'Raise year-end donations, remind existing supporters why the work matters, and invite recurring support.',
    audience: ['past donors', 'newsletter subscribers', 'volunteers', 'lapsed supporters', 'community partners'],
    primaryCta: 'Make a year-end gift',
    secondaryCta: 'Become a monthly donor',
    tone: ['grateful', 'mission-centered', 'specific', 'donor-respecting', 'deadline-aware'],
    emails: [
      {
        label: 'Launch',
        subject: 'Before the year ends, help us keep this work going',
        preview: 'A year-end gift today helps us begin January ready, not behind.',
        timing: 'Send 3–4 weeks before December 31',
        body:
          'As the year comes to a close, we are asking our community to help carry this mission into the next one. This year, your support helped neighbors receive practical care, timely help, and steady encouragement. A year-end gift today helps make sure we can begin January ready to keep going.',
        cta: 'Make your year-end gift'
      },
      {
        label: 'Story / Impact',
        subject: 'What one gift can do before we turn the calendar',
        preview: 'Your support helps real people receive help at the right moment.',
        timing: 'Send 10–14 days before December 31',
        body:
          'Behind every number is a person who needed help at the right moment. One family found support when they had nowhere else to turn. One student stayed connected. One senior received a meal and a call. That is the work your year-end gift sustains.',
        cta: 'Give before December 31'
      },
      {
        label: 'Final Days',
        subject: 'We are in the final days of the year',
        preview: 'If you have been meaning to give, now is the moment.',
        timing: 'Send in the final 3–5 days of the year',
        body:
          'We are now in the final stretch of the year-end campaign. If this mission matters to you, please make your gift before the calendar turns. If you would rather support this work month after month, you can also become a recurring donor and help us start the year with dependable momentum.',
        cta: 'Give now or become a monthly donor'
      }
    ],
    socialPosts: [
      {
        platform: 'Facebook',
        label: 'Launch post',
        copy:
          'The final weeks of the year are here, and we are asking our community to help us finish strong. Your year-end gift supports work that continues long after the holidays are over.'
      },
      {
        platform: 'Facebook',
        label: 'Impact post',
        copy:
          'Behind every year-end donation is a real person, family, or neighbor who receives help at the right moment. That is why this campaign matters.'
      },
      {
        platform: 'Instagram',
        label: 'Mission caption',
        copy:
          'Year-end giving is here. If this mission has mattered to you this year, this is the moment to help carry it into the next one.'
      },
      {
        platform: 'Instagram',
        label: 'Countdown caption',
        copy:
          'We are in the final days of the year-end campaign. If you have been meaning to give, we would be grateful for your support today.'
      },
      {
        platform: 'LinkedIn',
        label: 'Professional frame',
        copy:
          'Year-end giving is a crucial moment for many nonprofits because it helps determine how strongly they enter the new year. We are inviting our community to help us start January ready to serve.'
      },
      {
        platform: 'LinkedIn',
        label: 'Recurring donor frame',
        copy:
          'Recurring donors provide something every nonprofit values: predictability. If a one-time gift is not the best fit, monthly support can be even more useful over time.'
      },
      {
        platform: 'X',
        label: 'Short launch',
        copy:
          'Our year-end campaign is underway. If this mission matters to you, now is the time to help carry it into next year.'
      },
      {
        platform: 'X',
        label: 'Final reminder',
        copy: 'Final days before year-end. Help us finish strong and begin the new year ready to serve.'
      },
      {
        platform: 'TikTok',
        label: 'Impact video prompt',
        copy:
          'Prompt: "If you have ever wondered what a year-end gift really does, here are three ways it helps us start January ready…"'
      },
      {
        platform: 'TikTok',
        label: 'Staff reflection prompt',
        copy:
          'Prompt: "Here is what this community made possible this year — and why year-end support matters for what comes next."'
      }
    ],
    landingPageCopy: {
      headline: 'Help us start the new year ready to serve',
      subhead: 'Your year-end gift helps sustain practical care, steady support, and community-centered service.',
      body:
        "At Hope Harbor Community Services, we work to make sure people facing difficult moments are met with care, dignity, and practical help. Right now, your year-end gift helps us close the gap between this year's needs and next year's work.",
      details: [
        '$25 helps provide immediate supplies for a neighbor in need',
        '$50 helps support outreach and follow-up',
        '$100 helps sustain program services into the new year',
        'Monthly gifts help the organization plan with confidence'
      ],
      faq: [
        {
          q: 'Can I give after December 31?',
          a: 'Yes, but gifts made before year-end help us close the current campaign and begin January with more clarity.'
        },
        {
          q: 'Can I become a monthly donor?',
          a: 'Yes. Monthly support helps provide dependable momentum throughout the year.'
        }
      ]
    },
    ctas: [
      'Give before December 31',
      'Make your year-end gift',
      'Help us start strong',
      'Fuel this work for the months ahead',
      'Become a monthly supporter',
      'Help close the gap before year-end',
      'Give today so this work continues tomorrow',
      'Turn one gift into year-round momentum'
    ],
    postingSchedule: [
      {
        timing: '4 weeks before Dec. 31',
        asset: 'Launch email + Facebook/Instagram post',
        purpose: 'Open the campaign'
      },
      { timing: '2 weeks before Dec. 31', asset: 'Story/impact email', purpose: 'Deepen emotional connection' },
      { timing: '1 week before Dec. 31', asset: 'Reminder email + social countdown', purpose: 'Drive action' },
      { timing: 'Final 3 days', asset: 'Final-days email + short social posts', purpose: 'Create real deadline urgency' },
      { timing: 'After campaign closes', asset: 'Thank-you email + recap post', purpose: 'Steward donors and supporters' }
    ],
    followUpCopy:
      'Thank you for being part of this year-end campaign. Your support helps us begin the new year with momentum, clarity, and the ability to keep showing up for the people who count on this work. We are grateful for every gift, every share, and every person who chose to stand with this mission.',
    usageNotes: [
      'Replace fictional organization details with verified facts before use.',
      'Only include impact amounts if the organization can substantiate them.',
      'Avoid guilt-based framing; the tone should be grateful, specific, and donor-respecting.'
    ]
  },
  {
    slug: 'pet-groomer-holiday-booking',
    title: 'Pet Groomer Holiday Booking Campaign',
    eyebrow: 'Sample campaign package',
    campaignType: 'Holiday booking campaign',
    summary:
      'A fictional sample package for a local pet grooming salon filling December appointment slots and encouraging first-time and returning customers to book before the holiday rush.',
    goal: 'Increase holiday-season bookings, fill open appointment slots, and make it easy for pet owners to reserve grooming before travel and gatherings.',
    audience: [
      'existing clients',
      'first-time pet owners',
      'busy holiday planners',
      'families traveling with pets',
      'local neighborhood pet owners'
    ],
    primaryCta: 'Book a holiday grooming appointment',
    secondaryCta: 'Call to reserve or ask about availability',
    tone: ['friendly', 'local', 'practical', 'seasonal', 'service-focused'],
    emails: [
      {
        label: 'Launch',
        subject: 'Book your pet’s holiday groom before slots fill up',
        preview: 'December fills fast — reserve your appointment now.',
        timing: 'Send 3–4 weeks before peak holiday weeks',
        body:
          'The holidays are almost here, and so is grooming season at Paws & Polish Pet Spa. Whether your dog needs a fresh bath before guests arrive or your cat could use a tidy-up before travel, now is the time to book. December appointments go quickly, and we would love to help your pet look and feel their best before the busy weeks ahead.',
        cta: 'Book your holiday appointment'
      },
      {
        label: 'Reminder',
        subject: 'Still need a holiday groom? A few spots are left',
        preview: 'Reserve your appointment before the calendar gets tight.',
        timing: 'Send 10–14 days before peak holiday weeks',
        body:
          'If you have been meaning to schedule a holiday groom, this is your reminder. We still have appointment times available, but they are starting to fill. Book online, reply to this email, or call us to reserve a spot for your pet before the rush.',
        cta: 'Reserve your spot today'
      },
      {
        label: 'Last Call',
        subject: 'Last call for December grooming appointments',
        preview: 'A few final openings remain before the holiday rush.',
        timing: 'Send in the final week before peak demand',
        body:
          'We are down to our final December openings. If your pet still needs a bath, trim, nail care, or full groom before the holidays, book now while we still have room on the calendar. Not sure what service to choose? Call us — we are happy to help you pick the right appointment.',
        cta: 'Book before slots are gone'
      }
    ],
    socialPosts: [
      {
        platform: 'Facebook',
        label: 'Launch post',
        copy:
          'Holiday plans? Do not forget your pet. Book a grooming appointment at Paws & Polish Pet Spa before December fills up. Fresh, clean, and ready for guests, travel, and family photos.'
      },
      {
        platform: 'Facebook',
        label: 'Service reminder',
        copy:
          'Bath, trim, nails, and full grooms — we help local pets look their best before the holidays. Call or book online to reserve your appointment.'
      },
      {
        platform: 'Instagram',
        label: 'Seasonal caption',
        copy:
          'December grooming slots are open. Book now so your pet is holiday-ready before the calendar gets tight.'
      },
      {
        platform: 'Instagram',
        label: 'First-time client caption',
        copy:
          'New to Paws & Polish? We would love to meet your pet. Book a holiday groom and let us help you get on the calendar before the rush.'
      },
      {
        platform: 'LinkedIn',
        label: 'Local business frame',
        copy:
          'Local businesses plan for seasonal demand too. If you are a pet owner preparing for holiday travel, gatherings, or family visits, booking grooming early helps avoid last-minute stress.'
      },
      {
        platform: 'LinkedIn',
        label: 'Community note',
        copy:
          'Paws & Polish Pet Spa is booking December appointments now for local pet owners who want dependable grooming before the holiday season gets busy.'
      },
      {
        platform: 'X',
        label: 'Short launch',
        copy: 'Holiday grooming appointments are open at Paws & Polish Pet Spa. Book before December fills up.'
      },
      {
        platform: 'X',
        label: 'Urgency reminder',
        copy: 'Final December grooming spots are going fast. Reserve your pet’s appointment today.'
      },
      {
        platform: 'TikTok',
        label: 'Before-and-after prompt',
        copy:
          'Prompt: "Holiday grooming season is here — here is what a fresh groom looks like before guests arrive." Show a quick before/after with appointment booking info.'
      },
      {
        platform: 'TikTok',
        label: 'Booking reminder prompt',
        copy:
          'Prompt: "If you wait until the last week of December, grooming spots disappear fast. Here is how to book early."'
      }
    ],
    landingPageCopy: {
      headline: 'Book your pet’s holiday groom before December fills up',
      subhead: 'Fresh baths, trims, and full grooms for local pets getting ready for the holidays.',
      body:
        'At Paws & Polish Pet Spa, we help pet owners get ahead of the holiday rush with dependable grooming appointments in a calm, local setting. Whether your pet needs a bath, nail trim, or full groom, booking early makes it easier to get the time that works for you.',
      details: [
        'Services: bath, trim, nail care, and full groom appointments',
        'Best for: pets needing a refresh before travel, guests, or holiday photos',
        'Primary action: Book online or call to reserve',
        'Location: Paws & Polish Pet Spa, Maple Street Shopping Center',
        'Hours: Tuesday–Saturday, 9:00 AM – 5:00 PM'
      ],
      faq: [
        {
          q: 'How far in advance should I book?',
          a: 'We recommend booking at least two weeks ahead during the holiday season.'
        },
        {
          q: 'Are you taking new clients?',
          a: 'Yes. First-time clients are welcome — call us if you need help choosing the right service.'
        }
      ]
    },
    ctas: [
      'Book your holiday appointment',
      'Reserve your spot today',
      'Call to book',
      'Schedule before slots fill up',
      'Get your pet holiday-ready',
      'Book online now',
      'Save your December appointment',
      'Call for availability'
    ],
    postingSchedule: [
      { timing: '4 weeks before peak weeks', asset: 'Launch email + Facebook/Instagram post', purpose: 'Open booking season' },
      { timing: '2 weeks before peak weeks', asset: 'Reminder email + service post', purpose: 'Drive reservations' },
      { timing: '1 week before peak weeks', asset: 'Instagram countdown + short X post', purpose: 'Create urgency' },
      { timing: 'Final week', asset: 'Last-call email + social reminder', purpose: 'Fill remaining slots' },
      { timing: 'After appointments', asset: 'Thank-you post', purpose: 'Encourage rebooking and referrals' }
    ],
    followUpCopy:
      'Thank you for trusting Paws & Polish with your pet’s holiday groom. We hope your pet feels fresh and ready for the season ahead. If you loved your visit, we would appreciate a review — and if you know another pet owner who needs to get on the calendar, send them our way.',
    usageNotes: [
      'Replace fictional business name, location, hours, and service details with verified facts.',
      'Do not invent pricing, discounts, or availability unless confirmed in the fact ledger.',
      'Keep the tone practical and local — this is a booking campaign, not a generic marketing blast.'
    ]
  }
];

export function getSampleKit(slug: string): SampleKit | undefined {
  return sampleKits.find((kit) => kit.slug === slug);
}

export function sampleKitTitle(slug: string): string {
  return getSampleKit(slug)?.title ?? `${PRODUCT_NAME} sample`;
}
