import type { GetInvolvedPageData } from '@/types/get-involved-page'

const WP = 'https://africantradechamber.org/wp-content/uploads'

export const defaultGetInvolvedPage: GetInvolvedPageData = {
  intro: {
    title: 'Get Involved',
    body: "Join the African Trade Chamber and play an active role in strengthening Africa's private sector. Whether through membership, partnership, volunteering, or contributing to our initiatives, your involvement helps drive sustainable trade and industrial growth across the continent.",
    imageUrl: `${WP}/2025/11/photo-1531482615713-2afd69097998.avif`,
    imageAlt: 'Africa business collaboration',
  },
  cards: [
    {
      title: 'Join the Chamber',
      body: 'ATC membership gives you strategic access to trade support services, partnership opportunities, and cross-border networks. We help you identify new markets, connect with potential partners, promote your business, and engage with policymakers',
      imageUrl: `${WP}/2025/07/Screen-Shot-2025-07-02-at-3.43.13-PM.png`,
      imageAlt: 'Chamber membership',
      ctaLabel: 'Join Now',
      ctaHref: '/membership',
    },
    {
      title: 'Partner or Sponsor',
      body: 'Collaborate with ATC on projects, programs, or events. Institutional and corporate partners benefit from visibility, strategic alignment, and access to our continental network.',
      imageUrl: `${WP}/2025/07/Partner-or-Sponsor-3.png`,
      imageAlt: 'Partnership handshake',
      ctaLabel: 'Explore Partnership Opportunities',
      ctaHref: '/partnerships',
    },
    {
      title: 'Donate',
      body: 'Support our work in facilitating trade and empowering African businesses by making a one-time or recurring donation. Your contribution helps scale our programs and deepen our impact.',
      imageUrl: `${WP}/2025/04/XXL_height-2.webp`,
      imageAlt: 'Donation and support',
      ctaLabel: 'Donate Now',
      ctaHref: '/donate',
    },
    {
      title: 'Volunteer Opportunities',
      body: 'ATC welcomes skilled professionals and students who want to volunteer their time and expertise to support our mission. Volunteers contribute to programs, events, research, and operations.',
      imageUrl: `${WP}/2025/04/skynews-jobs-employment-america_5262377.webp`,
      imageAlt: 'Volunteer opportunities',
      ctaLabel: 'Apply to Volunteer',
      ctaHref: '/volunteer',
    },
    {
      title: 'Careers & Open Calls',
      body: "Interested in joining our dynamic team? Explore current vacancies and consultancy opportunities at ATC. We look for passionate individuals committed to Africa's economic transformation.",
      imageUrl: `${WP}/2025/04/cf786bc8ec3eb87dca9e02e928ea8fdd.jpg`,
      imageAlt: 'Careers and job opportunities',
      ctaLabel: 'See Open Positions',
      ctaHref: '/careers',
    },
  ],
}
