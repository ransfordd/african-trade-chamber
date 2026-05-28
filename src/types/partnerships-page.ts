export type PartnershipListCard = {
  id: string
  title: string
  items: string[]
  imageUrl: string
  imageAlt: string
}

export type PartnershipsPageData = {
  headerTitle: string
  introText: string
  listCards: PartnershipListCard[]
  getStarted: {
    id: string
    title: string
    body: string
    imageUrl: string
    imageAlt: string
    requestLabel: string
    requestEmail: string
    guideLabel: string
    guideHref: string
  }
}
