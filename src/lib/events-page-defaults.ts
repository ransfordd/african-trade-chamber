import type { EventsPageData } from '@/types/events-page'

const u = (path: string) => `/uploads/${path}`

export const defaultEventsPage: EventsPageData = {
  headerTitle: 'Events',
  headerSubtitle:
    'ATC events bring together business leaders, policymakers, investors, and experts to exchange knowledge, build partnerships, and unlock trade and investment opportunities across the continent and globally.',
  cards: [
    {
      id: 'africa-trade-summit',
      title: 'Africa Trade Summit',
      body: "The Africa Trade Summit is the African Trade Chamber's flagship annual convening, focused on driving private sector-led growth across the continent. The 2026 edition will bring together government leaders, CEOs, trade experts, and global institutions.",
      imageUrl: u('2025/11/ATS-LOGO-FINALRECTANGLE.png'),
      imageAlt: 'African delegates at Africa Trade Summit',
      ctaLabel: 'Learn More',
      ctaHref: '/events/africa-trade-summit',
      linked: true,
    },
    {
      id: 'africa-trade-awards',
      title: 'Africa Trade Awards',
      body: "An annual recognition program honoring outstanding achievements in trade, export excellence, innovation, logistics, and business leadership. The awards celebrate institutions and companies making a tangible impact on Africa's trade landscape.",
      imageUrl: u('2025/12/ATA-Logo.jpg'),
      imageAlt: 'Africa Trade Awards ceremony',
      ctaLabel: 'Visit Awards Website',
      ctaHref: 'https://www.africatradeawards.com/',
      external: true,
      linked: true,
    },
    {
      id: 'trade-missions',
      title: 'Trade Missions & Investment Events',
      body: 'We organize multi-country trade missions, targeted investment forums, and sectoral expos to support business expansion, partnership building, and capital access. These events connect exporters, importers, service providers, and investors with real opportunities across borders.',
      imageUrl: u('2025/04/605a47a7882e41616529319.webp'),
      imageAlt: 'African entrepreneurs at trade mission',
      ctaLabel: 'Explore Missions',
      ctaHref: '/events/trade-missions',
      linked: true,
    },
    {
      id: 'calendar',
      title: 'Calendar of Events',
      body: 'Explore upcoming ATC programs and partner events across Africa and internationally. Our dynamic calendar includes summits, forums, missions, and networking receptions.',
      imageUrl: u('2025/04/ilustrasi-kalender-1_169.jpeg'),
      imageAlt: 'African business calendar and planning',
      ctaLabel: 'View Full Calendar',
      ctaHref: '/events/calendar',
      linked: true,
    },
    {
      id: 'sponsorship',
      title: 'Exhibition & Sponsorship Opportunities',
      body: 'ATC events offer premium visibility and strategic positioning opportunities for sponsors and exhibitors. Engage with a targeted audience of decision-makers, entrepreneurs, and development partners.',
      imageUrl: u('2025/04/Global-Steel-Manufacturer-Activating-Future-Leaders-01.jpeg'),
      imageAlt: 'African trade exhibition booth',
      ctaLabel: 'View Sponsorship Packages',
      ctaHref: '/events/sponsorship',
      linked: true,
    },
  ],
}
