import type { CountryOfficePageContent } from '@/types/country-office-page'

export const countryOfficePageDefaults: Record<string, CountryOfficePageContent> = {
  ghana: {
    slug: 'ghana',
    countryName: 'Ghana',
    heroCountryLabel: 'Ghana (Headquarters)',
    heroTitle: 'Local Engagement and Trade Support',
    heroTagline: 'Engaging Local Stakeholders for Impact',
    heroStyle: 'ghana-flag',
    stakeholderIntro:
      'As the headquarters of the African Trade Chamber, our Ghana Office leads strategic coordination across the continent. Nationally, we work closely with but not limited to:',
    stakeholders: [
      'AfCFTA Secretariat & Ministry of Trade and Industry',
      'Ghana Export Promotion Authority (GEPA)',
      'Ghana Investment Promotion Centre & Standards Authority',
      'Ghana National Chamber of Commerce (GNCCI)',
    ],
    services: [
      'AfCFTA Market Entry Support',
      'Flagship Events and Forums',
      'National AfCFTA Campaigns',
      'Investment and Diaspora Linkages',
    ],
    highlightNote:
      "From Accra, we lead ATC's continent-wide efforts to strengthen Africa's private sector voice in trade and industrial development.",
    closingNote:
      'We also regularly convene industry council sessions with industry stakeholders to identify trade bottlenecks and co-create practical solutions.',
    formTargetCountriesPlaceholder: 'e.g., Ghana, Kenya, Nigeria',
    formPhoneHint: 'Include country code (e.g., +233 for Ghana)',
  },
  kenya: {
    slug: 'kenya',
    countryName: 'Kenya',
    heroCountryLabel: 'Kenya',
    heroTitle: 'Local Engagement and Trade Support',
    heroTagline: 'Engaging Local Stakeholders for Impact',
    heroStyle: 'kenya-flag',
    stakeholderIntro:
      'The ATC Kenya Office is actively engaged in fostering public-private collaboration to enhance trade efficiency and regional integration. We work closely with but not limited to:',
    stakeholders: [
      'Ministry of Investments, Trade and Industry (MITI)',
      'Kenya National Chamber of Commerce and Industry (KNCCI)',
      'Kenya Ports Authority (KPA)',
      'Kenya Revenue Authority (KRA)',
    ],
    services: [
      'AfCFTA Awareness and Training',
      'Business Matchmaking',
      'Sector-Specific Support',
      'Trade Compliance Advisory',
    ],
    closingNote:
      'We also regularly convene industry council sessions with industry stakeholders to identify trade bottlenecks and co-create practical solutions.',
    formTargetCountriesPlaceholder: 'e.g., Kenya, Tanzania, Uganda',
    formPhoneHint: 'Include country code (e.g., +254 for Kenya)',
  },
  nigeria: {
    slug: 'nigeria',
    countryName: 'Nigeria',
    heroCountryLabel: 'Nigeria',
    heroTitle: 'Local Engagement and Trade Support',
    heroTagline: 'Engaging Local Stakeholders for Impact',
    heroStyle: 'nigeria-flag',
    stakeholderIntro:
      "As Africa's largest economy, the ATC Nigeria Office plays a strategic role in advancing regional trade. Our partnerships include but not limited to:",
    stakeholders: [
      'Federal Ministry of Industry, Trade and Investment',
      'Nigeria Export Promotion Council (NEPC)',
      'Nigerian Association of Chambers of Commerce (NACCIMA)',
      'Nigeria Customs Service and Logistics Firms',
    ],
    services: [
      'Sector-Specific Export Support',
      'Market Intelligence and Certification',
      'Strategic Business Missions',
      'MSME Development Advisory',
    ],
    closingNote:
      'We also regularly convene industry council sessions with industry stakeholders to identify trade bottlenecks and co-create practical solutions.',
    formTargetCountriesPlaceholder: 'e.g., Nigeria, Ghana, Senegal',
    formPhoneHint: 'Include country code (e.g., +234 for Nigeria)',
  },
  'south-africa': {
    slug: 'south-africa',
    countryName: 'South Africa',
    heroCountryLabel: 'South Africa',
    heroTitle: 'Local Engagement and Trade Support',
    heroTagline: 'Engaging Local Stakeholders for Impact',
    heroStyle: 'south-africa-flag',
    stakeholderIntro:
      "The ATC South Africa Office works at the heart of Southern Africa's trade hub. We collaborate with but not limited to:",
    stakeholders: [
      'Department of Trade, Industry and Competition (DTIC)',
      'SA Revenue Service (SARS)',
      'Business Unity South Africa (BUSA)',
      'Transnet and Port Operators',
    ],
    services: [
      'Export Market Development',
      'Industry and Sectoral Dialogues',
      'Investor Facilitation',
      'Inclusive Enterprise Training',
    ],
    closingNote:
      'We also regularly convene industry council sessions with industry stakeholders to identify trade bottlenecks and co-create practical solutions.',
    formTargetCountriesPlaceholder: 'e.g., South Africa, Botswana, Namibia',
    formPhoneHint: 'Include country code (e.g., +27 for South Africa)',
  },
  liberia: {
    slug: 'liberia',
    countryName: 'Liberia',
    heroCountryLabel: 'Liberia',
    heroTitle: 'Local Engagement and Trade Support',
    heroTagline: 'Engaging Local Stakeholders for Impact',
    heroStyle: 'liberia-flag',
    stakeholderIntro:
      'The ATC Liberia Office is building strong foundations for inclusive trade by working closely with but not limited to:',
    stakeholders: [
      'Ministry of Commerce and Industry',
      'Liberia Revenue Authority',
      'National Port Authority',
      'Liberia Business Association (LIBA)',
    ],
    services: [
      'Trade Readiness Assessments',
      'Capacity Building Programs',
      'Logistics Partnerships',
      'Market Promotion',
    ],
    closingNote:
      'We also regularly convene industry council sessions with industry stakeholders to identify trade bottlenecks and co-create practical solutions.',
    formTargetCountriesPlaceholder: 'e.g., Liberia, Sierra Leone, Guinea',
    formPhoneHint: 'Include country code (e.g., +231 for Liberia)',
  },
  'sao-tome': {
    slug: 'sao-tome',
    countryName: 'São Tomé and Príncipe',
    heroCountryLabel: 'São Tomé and Príncipe',
    heroTitle: 'Local Engagement and Trade Support',
    heroTagline: 'Engaging Local Stakeholders for Impact',
    heroStyle: 'sao-tome-flag',
    stakeholderIntro:
      'The ATC office in São Tomé and Príncipe focuses on unlocking the trade potential of small island economies. Engagement includes but not limited to:',
    stakeholders: [
      'Ministry of Commerce and Tourism',
      'Agribusiness Cooperatives',
      'Cocoa Exporters and Artisanal Producers',
      'Port Authorities and Maritime Logistics',
    ],
    services: [
      'Technical Assistance for Small Producers',
      'Regional Market Linkages',
      'Product Branding and Certification',
      'Youth and Women Enterprise Development',
    ],
    closingNote:
      'We also regularly convene industry council sessions with industry stakeholders to identify trade bottlenecks and co-create practical solutions.',
    formTargetCountriesPlaceholder: 'e.g., São Tomé, Angola, Cape Verde',
    formPhoneHint: 'Include country code (e.g., +239 for São Tomé)',
  },
}

export const countryOfficePageSlugs = Object.keys(countryOfficePageDefaults)
