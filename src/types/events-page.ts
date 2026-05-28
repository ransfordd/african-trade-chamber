export type EventHubCardData = {
  id: string
  title: string
  body: string
  imageUrl: string
  imageAlt: string
  ctaLabel: string
  ctaHref?: string
  external?: boolean
  linked?: boolean
}

export type EventsPageData = {
  headerTitle: string
  headerSubtitle: string
  cards: EventHubCardData[]
}
