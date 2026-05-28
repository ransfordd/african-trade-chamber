import type { TradeMissionsPageData } from '@/types/trade-missions-page'

const u = (path: string) => `/uploads/${path}`

export const defaultTradeMissionsPage: TradeMissionsPageData = {
  headerTitle: 'Trade Missions & Investment',
  headerSubtitle: 'Driving Business Expansion, Partnerships & Capital Access Across Africa',
  heroImageUrl: u('2025/11/40566.jpg'),
  heroImageAlt: 'Trade missions across Africa',
  lead: "The African Trade Chamber (ATC) facilitates growth across Africa's trade and investment landscape by organizing high-impact trade missions, investment forums, and sector-specific expos. These platforms are designed to connect businesses with the right opportunities, markets, and partners across borders — helping unlock the full potential of intra-African trade and regional integration.",
  missionsIntro:
    "ATC's Country and Regional Trade Missions are strategic engagements aimed at opening up markets, connecting enterprises, and facilitating B2B and B2G partnerships. We work with government agencies, industry associations, and private sector stakeholders to deliver curated, on-the-ground experiences in key African trade hubs.",
  missionsChecklist: [
    'Tailored market access opportunities',
    'Sector-specific meetings and policy briefings',
    'B2B and B2G matchmaking',
    'Regulatory and local market insights',
    'Participation in trade fairs, expos, and deal rooms',
  ],
  missionsFootnote:
    'These missions serve as a gateway to explore viable trade corridors, discover emerging markets, and form lasting connections that drive continental economic integration.',
  upcomingTitle: 'Upcoming Trade Missions – 2025/2026',
  upcomingMissions: [
    {
      title: 'East Africa Trade Mission',
      schedule: 'Kenya, Uganda, Rwanda • Q4 2025',
      imageUrl: u('2025/11/119174.jpg'),
      imageAlt: 'East Africa trade mission imagery',
    },
    {
      title: 'Francophone Africa Investment Roadshow',
      schedule: "Côte d'Ivoire, Senegal, Togo • Q1 2026",
      imageUrl: u('2025/11/2149891363.jpg'),
      imageAlt: 'Francophone Africa roadshow imagery',
    },
    {
      title: 'North Africa Business Expansion Tour',
      schedule: 'Egypt, Morocco, Tunisia • Mid 2026',
      imageUrl: u('2025/04/Global-Steel-Manufacturer-Activating-Future-Leaders-01.jpeg'),
      imageAlt: 'North Africa business tour imagery',
    },
  ],
  investmentTitle: 'Investment Facilitation & Partnerships',
  investmentIntro:
    'Beyond trade, ATC plays a proactive role in investment promotion by connecting African enterprises with investment bodies, financial institutions, and global capital.',
  investmentImageUrl: u('2025/04/B2b-Matchmaking-2.png'),
  investmentImageAlt: 'Investment facilitation and partnerships',
  investmentList: [
    'Promote bankable projects in infrastructure, manufacturing, agriculture, and health',
    'Match investors with credible businesses and high-growth sectors',
    'Support investment forums and business delegations',
    'Provide investment-readiness support and pitch preparation',
    'Advocate for enabling policies and incentives in collaboration with public institutions',
  ],
  countries: [
    { name: 'Ghana', subtitle: 'West Africa Hub', href: '/country-offices/ghana', flagUrl: 'https://flagcdn.com/w320/gh.png' },
    { name: 'DRC', subtitle: 'Central Africa', href: '/country-offices/drc', flagUrl: 'https://flagcdn.com/w320/cd.png' },
    { name: 'Kenya', subtitle: 'East Africa Gateway', href: '/country-offices/kenya', flagUrl: 'https://flagcdn.com/w320/ke.png' },
    { name: 'Nigeria', subtitle: 'Economic Powerhouse', href: '/country-offices/nigeria', flagUrl: 'https://flagcdn.com/w320/ng.png' },
    { name: 'Egypt', subtitle: 'North Africa', href: '/country-offices/egypt', flagUrl: 'https://flagcdn.com/w320/eg.png' },
    { name: 'Morocco', subtitle: 'Northwest Africa', href: '/country-offices/morocco', flagUrl: 'https://flagcdn.com/w320/ma.png' },
    { name: 'Senegal', subtitle: 'West Africa', href: '/country-offices', flagUrl: 'https://flagcdn.com/w320/sn.png' },
    { name: 'Rwanda', subtitle: 'East Africa', href: '/country-offices', flagUrl: 'https://flagcdn.com/w320/rw.png' },
    { name: 'South Africa', subtitle: 'Southern Africa', href: '/country-offices/south-africa', flagUrl: 'https://flagcdn.com/w320/za.png' },
    { name: 'Ethiopia', subtitle: 'Horn of Africa', href: '/country-offices/ethiopia', flagUrl: 'https://flagcdn.com/w320/et.png' },
  ],
  whyTitle: 'Why Engage with ATC?',
  whyItems: [
    'Access curated trade and investment missions',
    'Expand your regional business footprint',
    'Connect with policy influencers and industry leaders',
    'Discover and enter emerging African markets',
    'Tap into strategic investment and partnership opportunities',
  ],
  getInvolvedTitle: 'Get Involved',
  getInvolvedBody:
    "Whether you're an entrepreneur, exporter, investor, or government agency—ATC's Trade Missions & Investment platform is your gateway to real opportunity.",
  ctaSignUpHref: '/membership/apply',
  ctaPartnerHref: '/partnerships',
  ctaContactHref: '/contact-us',
}
