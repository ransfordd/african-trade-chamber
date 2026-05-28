import type { MembershipPageData } from '@/types/membership-page'
import { defaultMembershipCategories } from '@/lib/defaults'

const u = (path: string) => `/uploads/${path}`

export const defaultMembershipPage: MembershipPageData = {
  headerTitle: 'Membership',
  headerSubtitle:
    'Joining the African Trade Chamber connects your business to a powerful ecosystem of enterprises, institutions, and decision-makers committed to advancing trade and investment across Africa and global markets.',
  whyJoin: {
    title: 'Why Join',
    body: 'ATC membership gives you strategic access to trade support services, partnership opportunities, and cross-border networks. We help you identify new markets, connect with potential partners, promote your business, and engage with policymakers.',
    imageUrl: u('2026/05/5I2A5455-scaled.jpg'),
    imageAlt: 'Why Join ATC',
    ctaLabel: 'Join Membership',
    ctaHref: '/membership/apply',
  },
  benefits: {
    title: 'Membership Benefits',
    intro: 'Members of ATC enjoy a variety of benefits, depending on their category:',
    imageUrl: u('2026/05/ATS-2026-848-scaled.jpg'),
    imageAlt: 'Membership Benefits',
    items: [
      'Access to cross-border trade facilitation and market entry services',
      'Participation in trade missions, exhibitions, and summits',
      'Business matchmaking (B2B and B2G)',
      'Investment promotion platforms and deal facilitation',
      'Strategic policy dialogues and working groups',
      'Visibility and branding opportunities',
      'Training, knowledge products, and advisory services',
      'Recognition and representation in sectoral councils',
      "Participation in ATC's Industry Councils",
      "Access to ATC's Country Offices for localized support",
      'Eligibility for nomination at the Africa Trade Awards',
    ],
  },
  categoriesIntro: {
    title: 'Membership Categories & Fees',
    subtitle:
      'ATC offers six main membership categories, each linked to a benefits matrix that defines entitlements, voting rights, and access levels across ATC platforms.',
  },
  footerCtas: {
    applyLabel: 'Apply for Membership',
    applyHref: '/membership/apply',
    guideLabel: 'Download Membership Guide',
    guideHref: '#',
  },
  testimonialsHeaderTitle: 'Member Testimonials',
  testimonialsHeaderSubtitle:
    'Hear from our valued members about how ATC membership has transformed their businesses and enabled growth across African markets.',
  categories: defaultMembershipCategories,
  testimonials: [
    {
      id: 'sarah-mensah',
      name: 'Sarah Mensah',
      position: 'CEO, GreenTech Solutions',
      quote:
        'ATC membership has transformed our approach to African markets. Through their trade facilitation services, we secured three major export contracts in East Africa within six months of joining. The business matchmaking events were game-changers for our expansion strategy.',
      sortOrder: 0,
    },
    {
      id: 'david-okafor',
      name: 'David Okafor',
      position: 'Managing Director, Continent Technologies',
      quote:
        "ATC provides opportunities that simply weren't available to us before. Their investment promotion platforms connected us with strategic investors who understood our vision. As a corporate member, the specialized industry councils have been particularly valuable for building sector-specific partnerships.",
      sortOrder: 1,
    },
    {
      id: 'amina-diallo',
      name: 'Amina Diallo',
      position: 'Director, Pan-African Logistics Ltd',
      quote:
        "The policy dialogues organized by ATC gave us direct access to decision-makers across multiple markets. We've participated in three trade missions that opened doors previously inaccessible to us. Their country office support in Nigeria was instrumental in establishing our West African headquarters.",
      sortOrder: 2,
    },
    {
      id: 'jean-paul-mbeki',
      name: 'Jean-Paul Mbeki',
      position: 'Founder, Artisanal Exports Co.',
      quote:
        "As an SME, the visibility and credibility we've gained through ATC membership has been invaluable. Their regulatory advisory services helped us navigate complex export requirements confidently. The networking opportunities alone have justified our membership investment multiple times over.",
      sortOrder: 3,
    },
  ],
}
