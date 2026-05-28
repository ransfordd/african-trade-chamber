export type FellowshipCohort = {
  yearLabel: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  exploreUrl: string
  exploreExternal: boolean
}

export type FellowshipCtaListItem =
  | string
  | {
      title: string
      body?: string
    }

export type FellowshipCtaBlock = {
  heading: string
  paragraphs?: string[]
  labeledParagraphs?: Array<{ label: string; text: string }>
  listItems?: FellowshipCtaListItem[]
}

export type FellowshipCtaData = {
  eyebrow: string
  title: string
  tagline: string
  sections: FellowshipCtaBlock[]
  footerParagraphs: string[]
  applyUrl: string
  contactPhone: string
  contactEmail: string
}

export type FellowshipPageData = {
  heroImageUrl: string
  introText: string
  cohorts: FellowshipCohort[]
  cta: FellowshipCtaData
}
