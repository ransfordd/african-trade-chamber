export type WhatWeDoHubCard = {
  title: string
  imageUrl: string
  imageAlt: string
  description?: string
  bullets?: string[]
  viewMoreUrl?: string
}

export type WhatWeDoHubIntro = {
  title: string
  tagline: string
  paragraphs: string[]
  imageUrl: string
  imageAlt: string
}

export type WhatWeDoCapacityCard = {
  subtitle: string
  imageUrl: string
  imageAlt: string
  paragraphs: string[]
  bullets?: string[]
  ctas?: { label: string; href?: string }[]
}

export type WhatWeDoPageData = {
  intro: WhatWeDoHubIntro
  serviceCards: WhatWeDoHubCard[]
  capacityBuilding: {
    title: string
    imageUrl: string
    imageAlt: string
    description: string
  }
  capacityCards: WhatWeDoCapacityCard[]
}

export type ServiceOfferBlock = {
  title: string
  imageUrl?: string
  imageAlt?: string
  description: string
  features: string[]
}

export type ServiceFooterBlock = {
  title: string
  imageUrl?: string
  imageAlt?: string
  items: string[]
}

export type ServiceDetailPageData = {
  slug: string
  pageTitle: string
  tagline: string
  introParagraphs: string[]
  introHighlight?: string
  offerSectionTitle?: string
  offers: ServiceOfferBlock[]
  footerBlock?: ServiceFooterBlock
  columns?: 3 | 4
}

export type PolicyGovernmentPageData = {
  pageTitle: string
  tagline: string
  introText: string
  offerSectionTitle: string
  offers: ServiceOfferBlock[]
}
