export type SponsorTier = {
  id: string
  title: string
  price: string
  limit?: string
  benefits: string
  exclusive?: boolean
  variant?: 'platinum' | 'gold' | 'silver' | 'bronze' | 'default'
}

export type SponsorshipOpportunity = {
  id: string
  title: string
  price: string
  benefits: string
}

export type SponsorshipDeadline = {
  activity: string
  deadline: string
}

export type SponsorshipPageData = {
  headerTitle: string
  headerTagline: string
  aboutTitle: string
  aboutContent: string
  tiers: SponsorTier[]
  additionalOpportunities: SponsorshipOpportunity[]
  guidelinesTitle: string
  guidelinesIntro: string
  guidelinesContent: string
  deadlines: SponsorshipDeadline[]
  contactTitle: string
  contactIntro: string
  contactEmail: string
  contactWebsite: string
  contactPhone: string
  acknowledgmentTitle: string
  acknowledgmentContent: string
}
