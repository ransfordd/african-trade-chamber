import type { PolicyGovernmentPageData, ServiceDetailPageData } from '@/types/what-we-do'

const u = (path: string) => `/uploads/${path}`

export const marketSupportPage: ServiceDetailPageData = {
  slug: 'market-support',
  pageTitle: 'Market Support',
  tagline: 'Comprehensive Market Entry Support for African Expansion',
  introParagraphs: [
    'At the African Trade Chamber (ATC), we provide comprehensive market entry support to help businesses expand into new African markets with clarity, speed, and strategic foresight. Whether you\'re an investor, exporter, or company seeking regional growth, our on-the-ground presence and partnerships enable us to guide you through the complexities of doing business in diverse African economies.',
    'Our services are tailored to reduce entry risk, accelerate setup, and connect you to trusted local networks.',
  ],
  introHighlight: 'market entry support',
  offerSectionTitle: 'What We Offer',
  columns: 4,
  offers: [
    {
      title: 'Country Trade Briefings & Business Environment Overviews',
      imageUrl: u('2025/11/45583.jpg'),
      imageAlt: 'Country Trade Briefings',
      description:
        'Gain insights into trade policies, consumer behavior, sectoral trends, and macroeconomic outlooks in your target country.',
      features: [
        'Market demand assessments',
        'Trade performance data and projections',
        'Competitive landscape analysis',
        'Priority sectors and emerging opportunities',
      ],
    },
    {
      title: 'Regulatory & Legal Navigation',
      imageUrl: u('2025/11/14612.jpg'),
      imageAlt: 'Regulatory & Legal Navigation',
      description:
        'Understand and comply with local laws, regulations, and business procedures. We help you avoid costly missteps and delays.',
      features: [
        'Business registration and licensing procedures',
        'Import/export regulations and customs clearance',
        'Tax and incentive frameworks',
        'Sector-specific compliance (e.g., agriculture, manufacturing, logistics)',
      ],
    },
    {
      title: 'Strategic Advisory for Regional Expansion',
      imageUrl: u('2025/11/2149894717.jpg'),
      imageAlt: 'Strategic Advisory',
      description:
        'Leverage our continental footprint to build a multi-country growth strategy aligned with AfCFTA frameworks.',
      features: [
        'Go-to-market strategy development',
        'Market prioritization and entry roadmap',
        'Risk analysis and mitigation planning',
        'Cross-border operations and distribution advice',
      ],
    },
    {
      title: 'Access to Local Networks & Service Providers',
      imageUrl: u('2025/11/2150167401.jpg'),
      imageAlt: 'Local Networks',
      description:
        'Tap into a trusted network of partners, facilitators, and institutions that can support your business entry and scale.',
      features: [
        'Introductions to vetted legal, financial, logistics, and HR service providers',
        'B2B matchmaking with potential clients, buyers, and distributors',
        'Connections with affiliated chambers of commerce, trade associations, and export councils',
        'Facilitation of B2G meetings with government stakeholders and agencies',
      ],
    },
  ],
  footerBlock: {
    title: 'Why Choose ATC for Market Entry?',
    imageUrl: u('2025/07/Market-Briefs-2.jpg'),
    imageAlt: 'Why Choose ATC for Market Entry',
    items: [
      'Deep knowledge of African trade dynamics',
      'Government and private sector relationships',
      'On-the-ground teams and local language support',
      'Commitment to Africa-led trade development',
    ],
  },
}

export const tradeFacilitationPage: ServiceDetailPageData = {
  slug: 'trade-facilitation-expansion',
  pageTitle: 'Trade Facilitation & Expansion',
  tagline: "Efficient Trade Processes to Unlock Africa's Economic Potential",
  introHighlight: 'Trade Facilitation & Expansion',
  introParagraphs: [
    "At the African Trade Chamber (ATC), we recognize that efficient trade processes are vital to unlocking Africa's economic potential. Our Trade Facilitation & Expansion service is designed to help businesses, governments, and institutions overcome logistical, regulatory, and operational barriers to regional and global trade.",
    "Whether you're looking to export, import, or expand your distribution footprint across borders, ATC provides hands-on support to help you navigate complex trade systems and seize emerging market opportunities.",
  ],
  offerSectionTitle: 'What We Offer',
  columns: 4,
  offers: [
    {
      title: 'Customs & Border Procedure Support',
      imageUrl: u('2025/11/63893.jpg'),
      imageAlt: 'Customs and Border Procedures',
      description:
        'We help you understand and comply with customs procedures and requirements in different African markets.',
      features: [
        'Pre-clearance and documentation guidance',
        'HS codes and valuation support',
        'Engagement with customs authorities',
        'AfCFTA rules of origin advisory',
      ],
    },
    {
      title: 'Trade Logistics Advisory',
      imageUrl: u('2025/11/photo-1494412574643-ff11b0a5c1c3.jpg'),
      imageAlt: 'Trade Logistics',
      description: "Navigate Africa's diverse logistics landscape with confidence.",
      features: [
        'Route optimization and freight coordination',
        'Port access and inland connectivity',
        'Warehousing and cold chain support',
        'Cross-border transport compliance',
      ],
    },
    {
      title: 'Regional Trade Expansion Strategy',
      imageUrl: u('2025/11/2152005448.jpg'),
      imageAlt: 'Regional Trade Expansion',
      description: 'Expand your trade footprint into new African markets with tailored strategies.',
      features: [
        'Trade corridor entry planning',
        'Inter-country supply chain development',
        'Distributor and logistics partner identification',
        'Market-specific risk assessments',
      ],
    },
    {
      title: 'AfCFTA & Trade Agreement Guidance',
      imageUrl: u('2025/11/1256-1.jpg'),
      imageAlt: 'AfCFTA Trade Agreements',
      description:
        'Maximize benefits under the African Continental Free Trade Area (AfCFTA) and other trade agreements.',
      features: [
        'Support with certificate of origin and trade documents',
        'AfCFTA trade protocol interpretation',
        'Intra-African tariff mapping and analysis',
        'Regional integration and trade bloc navigation (ECOWAS, EAC, SADC, etc.)',
      ],
    },
  ],
  footerBlock: {
    title: 'Who We Work With',
    imageUrl: u('2025/11/126815.jpg'),
    imageAlt: 'Business Collaboration',
    items: [
      'Exporters & importers',
      'Trade ministries & government agencies',
      'Transport & logistics providers',
      'Regional trade associations',
      'Small and medium enterprises (SMEs)',
      'Multinational corporations expanding across Africa',
    ],
  },
}

export const b2bMatchmakingPage: ServiceDetailPageData = {
  slug: 'b2b-b2g-matchmaking',
  pageTitle: 'B2B & B2G Matchmaking',
  tagline: 'Connecting Businesses and Government for Strategic Growth',
  introHighlight: 'B2B (Business-to-Business) and B2G (Business-to-Government) Matchmaking',
  introParagraphs: [
    'At the African Trade Chamber (ATC), we believe that strong business and government relationships are key to driving growth. Our B2B (Business-to-Business) and B2G (Business-to-Government) Matchmaking service helps you meet the right partners, buyers, suppliers, or government stakeholders who can support your trade and investment goals across Africa.',
  ],
  offerSectionTitle: 'What We Offer',
  columns: 3,
  offers: [
    {
      title: 'Curated B2B Introductions',
      imageUrl: u('2025/10/Innovation-Entrepreneurship.webp'),
      imageAlt: 'Curated B2B Introductions',
      description: 'Connect with potential partners aligned with your industry, goals, and values.',
      features: [
        'Buyer-supplier matchmaking',
        'Distributor and reseller linkages',
        'SME partnerships and value chain development',
      ],
    },
    {
      title: 'B2G Engagement Platforms',
      imageUrl: u('2025/11/122699.jpg'),
      imageAlt: 'B2G Engagement Platforms',
      description: 'Facilitated access to government institutions and public-sector decision-makers.',
      features: [
        'Policy roundtables and trade forums',
        'Sector-specific government briefings',
        'Support for public-private partnership dialogues',
      ],
    },
    {
      title: 'Networking at Trade Missions & Forums',
      imageUrl: u('2025/11/4066-1.jpg'),
      imageAlt: 'Networking at Trade Missions',
      description: 'Meet high-level business and government actors through ATC events.',
      features: [
        'Business matchmaking during trade missions',
        'One-on-one sessions during investment roadshows',
        'Delegate support for international business delegations',
      ],
    },
  ],
  footerBlock: {
    title: 'Who Benefits',
    imageUrl: u('2025/11/2150690161.jpg'),
    imageAlt: 'Who Benefits',
    items: [
      'Exporters and importers',
      'Local and international investors',
      'Ministries, departments & agencies',
      'Trade associations and chambers',
      'Project developers and PPP seekers',
    ],
  },
}

export const investmentPromotionPage: ServiceDetailPageData = {
  slug: 'investment-promotion',
  pageTitle: 'Investment Promotion',
  tagline: 'Positioning Africa as a Premier Investment Destination',
  introParagraphs: [
    'ATC plays a vital role in attracting, mobilizing, and facilitating both domestic and international investment. We work closely with governments, private sector players, and development partners to position Africa as a premier destination for value-added, inclusive investment.',
  ],
  offerSectionTitle: 'What We Offer',
  columns: 3,
  offers: [
    {
      title: 'Investment Opportunity Packaging',
      imageUrl: u('2025/11/40566.jpg'),
      imageAlt: 'Investment Opportunity Packaging',
      description: 'We identify and structure investment-ready projects in key sectors.',
      features: [
        'Sector scoping and project profiling',
        'Investment teasers and pitch decks',
        'Feasibility and business model support',
      ],
    },
    {
      title: 'Investor Engagement & Roadshows',
      imageUrl: u('2025/11/4066-1.jpg'),
      imageAlt: 'Investor Engagement',
      description: 'We connect investors to credible opportunities across Africa.',
      features: [
        'Local and international investor matchmaking',
        'Country and sectoral investment forums',
        'Investment missions and pitching platforms',
      ],
    },
    {
      title: 'Public-Private Partnership Facilitation',
      imageUrl: u('2025/11/2148920581.jpg'),
      imageAlt: 'PPP Facilitation',
      description:
        'We help unlock capital through partnerships between public institutions and private entities.',
      features: [
        'PPP identification and deal structuring',
        'Government liaison and advocacy',
        'Investor-government roundtables',
      ],
    },
  ],
}

export const capacityBuildingPage: ServiceDetailPageData = {
  slug: 'capacity-building',
  pageTitle: 'Capacity Building',
  tagline: "Equipping Africa's Trade Professionals for Success",
  introHighlight: 'Capacity Building',
  introParagraphs: [
    "ATC's Capacity Building programs are designed to equip businesses, government officials, and trade professionals with the tools, skills, and knowledge needed to navigate and thrive in Africa's trade landscape.",
  ],
  offerSectionTitle: 'What We Offer',
  columns: 3,
  offers: [
    {
      title: 'Training Programs & Workshops',
      imageUrl: u('2025/11/2150950181.jpg'),
      imageAlt: 'Training Programs & Workshops',
      description:
        'We deliver sector-specific and practical training programs to strengthen institutional and enterprise capacity.',
      features: [
        'Export readiness and trade compliance training',
        'AfCFTA implementation workshops',
        'SME skills development',
      ],
    },
    {
      title: 'Trade Tools & Resources',
      imageUrl: u('2025/11/pexels-karola-g-4386373.jpg'),
      imageAlt: 'Trade Tools & Resources',
      description: 'We produce and distribute guides, toolkits, and e-learning resources.',
      features: [
        'Market entry guides and handbooks',
        'Online learning modules',
        'Sector insights and data dashboards',
      ],
    },
    {
      title: 'Technical Assistance & Advisory',
      imageUrl: u('2025/11/120545.jpg'),
      imageAlt: 'Technical Assistance & Advisory',
      description: 'We offer targeted support to institutions and trade agencies to improve performance.',
      features: [
        'Institutional audits and capability assessments',
        'Program design and implementation',
        'Staff development and coaching',
      ],
    },
  ],
  footerBlock: {
    title: 'Who Can Benefit',
    imageUrl: u('2025/11/63893.jpg'),
    imageAlt: 'Who Can Benefit',
    items: [
      'SMEs and exporters',
      'Government trade and investment agencies',
      'Trade promotion organizations',
      'Sector associations',
      'Business incubators and hubs',
    ],
  },
}

export const policyGovernmentPage: PolicyGovernmentPageData = {
  pageTitle: 'Policy & Government Engagement',
  tagline: 'Bridging Private Sector and Government for Trade Enhancement',
  introText:
    'The African Trade Chamber advocates for enabling trade environments by engaging policymakers and regulatory institutions. We serve as a bridge between the private sector and government, facilitating evidence-based policy dialogues and regulatory reform to enhance intra-African trade and competitiveness.',
  offerSectionTitle: 'What We Offer',
  offers: [
    {
      title: 'Policy Research & Position Papers',
      description: 'We develop sector insights and policy recommendations to inform reform.',
      features: [
        'Regulatory analysis and policy benchmarking',
        'Sector-specific policy position papers',
        'Trade impact assessments',
      ],
    },
    {
      title: 'High-Level Stakeholder Engagement',
      description:
        'We create platforms for constructive dialogue between the private sector and public institutions.',
      features: [
        'National and regional policy dialogues',
        'Legislative briefings and whitepaper presentations',
        'Representation at policy formulation roundtables',
      ],
    },
    {
      title: 'Monitoring & Advocacy Support',
      description: 'We monitor trade policies and regulatory developments affecting businesses.',
      features: [
        'Real-time trade policy tracking',
        'Trade barrier reporting and resolution',
        'Regulatory reform advocacy',
      ],
    },
  ],
}

const servicePages: Record<string, ServiceDetailPageData> = {
  'market-support': marketSupportPage,
  'trade-facilitation-expansion': tradeFacilitationPage,
  'b2b-b2g-matchmaking': b2bMatchmakingPage,
  'investment-promotion': investmentPromotionPage,
  'capacity-building': capacityBuildingPage,
}

export function getServicePage(slug: string): ServiceDetailPageData | null {
  return servicePages[slug] ?? null
}

export function getAllServicePageSlugs(): string[] {
  return Object.keys(servicePages)
}
