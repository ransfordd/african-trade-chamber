import type { WhatWeDoPageData } from '@/types/what-we-do'

const u = (path: string) => `/uploads/${path}`

export const defaultWhatWeDoPage: WhatWeDoPageData = {
  intro: {
    title: 'What We Do',
    tagline: 'Unlocking Trade. Enabling Growth. Connecting businesses to Key Markets.',
    paragraphs: [
      'ATC provides a suite of trade facilitation, business support, and policy engagement services that help companies navigate markets, expand operations, and connect with strategic partners across Africa and beyond. We also undertake strategic capacity building initiatives and fellowships to support business leaders and professional.',
      'Our work is built around six (6) core service areas:',
    ],
    imageUrl: u('2026/05/5I2A4648.jpg'),
    imageAlt: 'African Trade',
  },
  serviceCards: [
    {
      title: 'Market Entry Support',
      imageUrl: u('2025/04/Market-Entry-Support.webp'),
      imageAlt: 'Market Entry Support',
      description:
        'We help businesses access new markets, understand local regulations, and set up operations across Africa. Our support includes:',
      bullets: [
        'Country trade briefings and business environment overviews',
        'Regulatory and legal navigation',
        'Strategic advisory for regional expansion',
        'Access to local networks and service providers',
      ],
      viewMoreUrl: '/market-support',
    },
    {
      title: 'Trade Facilitation & Expansion',
      imageUrl: u('2026/05/ATS_4758-scaled.jpg'),
      imageAlt: 'Trade Facilitation',
      description:
        'We support the seamless movement of goods and services across borders through:',
      bullets: [
        'Coordination of trade missions and business delegations',
        'Logistics support',
        'Export promotion strategies and sector showcases',
        'Connections with trade authorities and facilitation agencies',
      ],
      viewMoreUrl: '/trade-facilitation-expansion',
    },
    {
      title: 'B2B & B2G Matchmaking',
      imageUrl: u('2025/04/B2b-Matchmaking.png'),
      imageAlt: 'B2B Matchmaking',
      description: 'ATC facilitates curated introductions and deal-making opportunities between:',
      bullets: [
        'African and global companies across value chains',
        'Businesses and government institutions',
        'Buyers, suppliers, distributors, and service providers',
        'Public-private sector stakeholders for collaboration',
      ],
      viewMoreUrl: '/b2b-b2g-matchmaking',
    },
    {
      title: 'Investment Promotion',
      imageUrl: u('2026/05/ATS_4800-scaled.jpg'),
      imageAlt: 'Investment Promotion',
      description:
        'We work with companies and investors to promote and mobilize investment across the continent by:',
      bullets: [
        'Organizing investor roundtables and business showcases',
        'Supporting investment readiness for growth-oriented firms',
        'Connecting businesses to capital, joint ventures, and Public-private partnerships',
        'Promoting high-potential sectors and regional opportunities',
      ],
      viewMoreUrl: '/investment-promotion',
    },
    {
      title: 'Policy & Government Engagement',
      imageUrl: u('2026/05/5I2A4159.jpg'),
      imageAlt: 'Policy Engagement',
      description:
        'We engage with policymakers and regional bodies to shape a more enabling business environment through:',
      bullets: [
        'Evidence-based policy research and analysis',
        'Multi-stakeholder dialogues and trade policy forums',
        'Regulatory reform advocacy and implementation support',
        'Partnerships with national and continental institutions',
      ],
      viewMoreUrl: '/policy-government-engagement',
    },
  ],
  capacityBuilding: {
    title: 'Fellowships & Capacity Building',
    imageUrl: u('2025/04/sfs-visual-corporate-lending.webp'),
    imageAlt: 'Fellowships & Capacity Building',
    description:
      "ATC is committed to building capacity across Africa's trade ecosystem through targeted training programs and strategic fellowships that empower the next generation of trade leaders, entrepreneurs, and policy influencers.",
  },
  capacityCards: [
    {
      subtitle: 'Executive Training & Capacity Building',
      imageUrl: u('2025/04/Capacity-buildinig-2.jpg'),
      imageAlt: 'Executive Training & Capacity Building',
      paragraphs: [
        'ATC in collaboration with its strategic partners offer executive short courses and certification programs in areas such as trade negotiation, regional integration, supply chain management, and economic diplomacy, tailored for senior executives, government officials, and development actors.',
        'ATC offers executive trainings, webinars, and workshops on:',
        "These programs are delivered through ATC's country offices and online platforms in collaboration with strategic partners.",
      ],
      bullets: [
        'Export readiness and cross-border trade compliance',
        'Trade finance, logistics, and digital platforms',
        'Public-private partnerships and investment facilitation',
        'Policy engagement and trade instruments',
        'Enterprise and Business Development',
      ],
      ctas: [
        { label: 'Past Executive Trainings' },
        { label: 'See Upcoming Executive Trainings' },
      ],
    },
    {
      subtitle: 'Future Trade Leaders Fellowship',
      imageUrl: u('2025/04/Future-Leaders-Fellowship.jpg'),
      imageAlt: 'Future Trade Leaders Fellowship',
      paragraphs: [
        'The Future Trade Leaders Fellowship is a flagship program that selects exceptional professionals from across the continent and the Caribbean region to undergo immersive training in AfCFTA, international trade principles, and enterprise development. Fellows engage with top CEOs, policymakers, and institutions during the tenure of the Fellowship Programs.',
      ],
      ctas: [
        { label: 'Explore the Future Trade Leaders Fellowship', href: '/fellowship' },
      ],
    },
  ],
}
