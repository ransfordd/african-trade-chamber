import type { AfricaTradeSummitData } from '@/types/africa-trade-summit'

const u = (path: string) => `/uploads/${path}`

export const defaultAfricaTradeSummit: AfricaTradeSummitData = {
  hero: {
    title: 'Africa Trade Summit',
    themeLabel: 'Theme',
    themeText:
      'Advancing a Private Sector-Led Agenda for Intra-African Trade and Economic Transformation',
    whenLabel: 'When',
    whenValue: 'January 28-29',
    whenSubtext: '2026',
    whereLabel: 'Where',
    whereValue: 'Kempinski Hotel Gold Coast City',
    whereSubtext: 'Accra - Ghana',
    backgroundImage: u('2025/11/e898bc4f2390-74604983_4K.avif'),
    eventDateIso: '2026-01-28T09:00:00',
  },
  content: {
    introParagraphs: [
      "The Africa Trade Summit is the African Trade Chamber's flagship annual convening, focused on driving private sector-led growth across the continent. The 2026 edition will bring together government leaders, CEOs, trade experts, and global institutions.",
      'Organized by the African Trade Chamber, the Africa Trade Summit 2026 will serve as a catalytic platform for mobilizing investment, forging policy alignment, and accelerating intra-African trade under the AfCFTA. It also marks the official launch of the Chamber, positioning it as a key private sector institution for trade development across the continent.',
    ],
    sectorsHighlight:
      "With the private sector driving over 80% of Africa's trade activity, the summit prioritizes business-focused dialogue, actionable policy proposals, and deal facilitation. The 2026 edition will focus on seven key sectors: manufacturing, mining, energy, agriculture, health, logistics, and infrastructure—with an emphasis on value chains, regional integration, and industrial growth.",
    keyFeatures: [
      'Speaker Sessions with heads of state, trade ministers, and CEOs',
      'Ministerial Roundtables on trade cooperation, food security, and health resilience',
      'B2B and B2G Matchmaking for real-time business and investment opportunities',
      'Sector Panels and Breakout Forums in mining, logistics, energy, pharma, and more',
      'Exhibition and Investment Pavilions spotlighting African goods, services, and markets',
      'Africa Trade Awards Gala celebrating excellence in trade transformation',
    ],
    focusAreas: [
      'Minerals beneficiation and downstream processing in mining',
      'Petrochemical industrialization and gas-to-power solutions in the energy sector',
      'Power generation and grid integration to support industrial corridors',
      "Transformation of Africa's agricultural produce and other raw materials through strategic alignment of industrial policies",
      "Development of Africa's pharmaceutical and health logistics ecosystem through investment in API production, trade zones, and regulatory harmonization",
      'Integrated logistics and infrastructure development along trade corridors',
    ],
    outcomes: [
      { title: '100+', description: 'Actionable B2B and B2G connections' },
      { title: 'Deal Rooms', description: 'Tangible trade and investment deals' },
      {
        title: 'Partnerships',
        description: 'New investment partnerships and agreements across high-impact sectors',
      },
      {
        title: 'Communique',
        description: 'Summit communique with strategic policy recommendations',
      },
    ],
    contact: {
      heading: 'For Registration / More Information',
      websiteLabel: 'www.africatradesummit.com',
      websiteUrl: 'https://www.africatradesummit.com',
      email: 'secretariat@africatradesummit.com',
      phone: '+233505366251',
    },
  },
}
