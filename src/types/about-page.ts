export type AboutPageData = {
  sectionTitle: string
  mainContent: string
  visionContent: string
  missionContent: string
}

export type TeamMemberCategory = 'advisory' | 'board' | 'secretariat'

export type TeamMember = {
  id: string
  name: string
  slug: string
  position?: string
  category: TeamMemberCategory
  categoryLabel: string
  bio?: string
  imageUrl?: string
  imageAlt?: string
  sortOrder: number
}
