export type GetInvolvedCard = {
  title: string
  body: string
  imageUrl: string
  imageAlt: string
  ctaLabel?: string
  ctaHref?: string
}

export type GetInvolvedPageData = {
  intro: GetInvolvedCard
  cards: GetInvolvedCard[]
}
