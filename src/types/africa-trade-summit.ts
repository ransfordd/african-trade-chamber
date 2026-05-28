export type SummitHeroData = {
  title: string
  themeLabel: string
  themeText: string
  whenLabel: string
  whenValue: string
  whenSubtext: string
  whereLabel: string
  whereValue: string
  whereSubtext: string
  backgroundImage: string
  eventDateIso: string
}

export type SummitContentData = {
  introParagraphs: string[]
  sectorsHighlight: string
  keyFeatures: string[]
  focusAreas: string[]
  outcomes: { title: string; description: string }[]
  contact: {
    heading: string
    websiteLabel: string
    websiteUrl: string
    email: string
    phone: string
  }
}

export type AfricaTradeSummitData = {
  hero: SummitHeroData
  content: SummitContentData
}
