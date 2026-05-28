import type { SponsorshipPageData } from '@/types/sponsorship-page'

export const defaultSponsorshipPage: SponsorshipPageData = {
  headerTitle: 'ATC 2025 Sponsorship Package',
  headerTagline: 'For the Africa Trade Summit & Chamber Programs',
  aboutTitle: 'About the African Trade Chamber (ATC)',
  aboutContent:
    'The African Trade Chamber (ATC) is a pan-African, private sector-led institution committed to unlocking Africa\'s economic potential through trade, investment, and enterprise development. ATC facilitates trade missions, policy dialogues, industry councils, and flagship events — including the annual Africa Trade Summit — aimed at promoting intra-African trade and private sector leadership.',
  tiers: [
    {
      id: 'platinum',
      title: 'PLATINUM SPONSOR',
      price: '$50,000+',
      limit: 'Limited to 1 Sponsor',
      exclusive: true,
      variant: 'platinum',
      benefits: `Exclusive event naming rights: "Africa Trade Summit presented by [Your Organization]"
Keynote speaking opportunity at the Opening Ceremony
Prime logo placement on:
    Event banners, stage backdrops, and signage
    All print and digital promotional materials
    Summit website and registration platform
Full-page ad in the Summit program (print & digital)
Customized exhibition booth in premium location
Inclusion in all press releases and media briefings
10 VIP passes to all sessions and high-level networking events
One-on-one meetings arranged with political leaders, trade ministers, and global CEOs`,
    },
    {
      id: 'gold',
      title: 'GOLD SPONSOR',
      price: '$30,000',
      limit: 'Limited to 3 Sponsors',
      variant: 'gold',
      benefits: `Co-branding on all event promotional materials
Logo featured prominently on signage, screens, and website
Opportunity to speak as a panelist in a main Summit session
Half-page ad in the Summit program
Branded exhibition booth
Mention in media and press coverage
5 VIP passes`,
    },
    {
      id: 'silver',
      title: 'SILVER SPONSOR',
      price: '$20,000',
      variant: 'silver',
      benefits: `Logo on selected Summit materials and signage
Sponsorship of one workshop or breakout session
Quarter-page ad in the Summit program
Branded exhibition booth
3 VIP passes`,
    },
    {
      id: 'bronze',
      title: 'BRONZE SPONSOR',
      price: '$10,000',
      variant: 'bronze',
      benefits: `Logo on selected digital and print materials
Shared exhibition space access
2 VIP passes`,
    },
    {
      id: 'supporting',
      title: 'SUPPORTING SPONSOR',
      price: '(TBA)',
      limit: 'Flexible',
      variant: 'default',
      benefits: `Logo listed as a supporting sponsor on the Summit website
2 delegate passes to attend the event
Recognition in event communications and select materials`,
    },
  ],
  additionalOpportunities: [
    {
      id: 'gala',
      title: 'Gala Dinner or Reception Sponsor',
      price: '$30,000',
      benefits: `Exclusive branding rights for the official dinner/reception
Speaking opportunity during the event
Branded table placements, banners, and VIP engagement`,
    },
    {
      id: 'media',
      title: 'Media Centre Sponsor',
      price: '$20,000',
      benefits: `Brand presence in all media spaces
Visibility in interviews, press releases, and broadcast coverage`,
    },
    {
      id: 'workshop',
      title: 'Workshop/Breakout Session Sponsor',
      price: '$15,000',
      benefits: `Branding within one specialized session (onsite and online)
Opportunity to co-host or moderate the session`,
    },
  ],
  guidelinesTitle: 'Branding Guidelines for Sponsors',
  guidelinesIntro:
    'To ensure consistent and professional exposure across all platforms, all sponsor branding materials must adhere to the following:',
  guidelinesContent: `Logos must be submitted in high-resolution vector format (AI, EPS, or SVG)
All branding placements are subject to ATC approval
Advertisements for Summit program must be submitted no later than October 11, 2025
Exhibit booth materials and designs must be approved by October 21, 2025
Customized activations must align with ATC's core themes and event design standards`,
  deadlines: [
    { activity: 'Sponsorship Confirmation', deadline: 'September 30, 2025' },
    { activity: 'Payment Completion', deadline: 'October 10, 2025' },
    { activity: 'Logo Submission & Ad Artwork', deadline: 'October 11, 2025' },
    { activity: 'Booth Design Approval (if applicable)', deadline: 'October 21, 2025' },
    { activity: 'Delegate Information Submission', deadline: 'November 1, 2025' },
  ],
  contactTitle: 'Sponsorship Confirmation & Contact',
  contactIntro:
    'To confirm your sponsorship package, request a custom proposal, or arrange a call with our partnerships team:',
  contactEmail: 'partnerships@africantradechamber.org',
  contactWebsite: 'www.africantradechamber.org/sponsorship',
  contactPhone: '+233 50 536 6200',
  acknowledgmentTitle: 'Acknowledgment',
  acknowledgmentContent:
    "Your support as a sponsor is a powerful step toward achieving shared prosperity, deeper integration, and sustainable development across the African continent. We are honored to partner with organizations and individuals committed to Africa's transformation through trade.",
}
