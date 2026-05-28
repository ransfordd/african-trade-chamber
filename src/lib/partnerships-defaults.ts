import type { PartnershipsPageData } from '@/types/partnerships-page'

export const defaultPartnershipsPage: PartnershipsPageData = {
  headerTitle: 'Partnerships',
  introText:
    'The African Trade Chamber collaborates with public and private sector institutions to promote trade, investment, and economic transformation across Africa. Our partnerships amplify impact, strengthen networks, and unlock new opportunities for business and policy engagement.',
  listCards: [
    {
      id: 'why-partner',
      title: 'Why Partner with ATC',
      imageUrl:
        'https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      imageAlt: 'Why Partner with ATC',
      items: [
        'Expand your reach across key African markets',
        'Support enterprise development and trade facilitation',
        'Engage with a high-level network of governments, DFIs, and private sector actors',
        'Co-create programs, forums, or initiatives with regional relevance',
        "Demonstrate leadership in Africa's economic growth and integration agenda",
      ],
    },
    {
      id: 'types',
      title: 'Types of Partners',
      imageUrl:
        'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      imageAlt: 'Types of Partners',
      items: [
        'Development Finance Institutions (DFIs)',
        'International Organizations and Multilateral Institutions',
        'National Government Agencies',
        'Trade Facilitation Institutions (Chambers, Associations, Councils)',
        'Corporate and Strategic Business Partners',
        'Foundations and Philanthropic Institutions',
      ],
    },
    {
      id: 'opportunities',
      title: 'Partnership Opportunities',
      imageUrl:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
      imageAlt: 'Partnership Opportunities',
      items: [
        'Trade Missions and Investment Forums',
        'Sector-Specific Collaboration and Export Campaigns',
        'Research and Policy Dialogues',
        'Capacity Building and Training Programs',
        'Sponsorship of Events and Strategic Initiatives',
      ],
    },
  ],
  getStarted: {
    id: 'get-started',
    title: 'Get Started',
    body: 'Interested institutions can submit a partnership request outlining areas of collaboration. ATC reviews proposals on a rolling basis and engages potential partners through bilateral consultations.',
    imageUrl:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Get Started',
    requestLabel: 'Submit a Partnership Request',
    requestEmail: 'partnerships@africantradechamber.org',
    guideLabel: 'Download Partnerships Guide',
    guideHref: '#',
  },
}
