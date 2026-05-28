export type HomepageCard = {
  title: string
  description?: string
  imageUrl?: string
  buttonText?: string
  buttonUrl?: string
}

export type HeroFeatureCard = {
  id: string
  title: string
  description: string
  linkText: string
  linkUrl: string
}

export type WwdHomepageData = {
  headerTitle: string
  headerContent: string
  intro: HomepageCard
  services: HomepageCard[]
}

export type IndustryCouncilsHomepageData = {
  headerTitle: string
  headerDescription: string
  headerButtonText: string
  headerButtonUrl: string
  intro: {
    imageUrl?: string
    title?: string
    text?: string
    buttonText?: string
    buttonUrl?: string
  }
  councils: HomepageCard[]
}

export type CrossSectorHomepageData = {
  intro: HomepageCard
  councils: HomepageCard[]
}

export type ThreeCardSectionData = {
  sectionTitle: string
  sectionDescription: string
  sectionCtaText?: string
  sectionCtaUrl?: string
  cards: HomepageCard[]
}

export type HomepageSectionsData = {
  featureCards: HeroFeatureCard[]
  wwd: WwdHomepageData
  industryCouncils: IndustryCouncilsHomepageData
  crossSector: CrossSectorHomepageData
  membership: ThreeCardSectionData
  insights: ThreeCardSectionData
  events: ThreeCardSectionData
  getInvolved: ThreeCardSectionData
  news: ThreeCardSectionData
}
