export type FellowSocialLinks = {
  instagram?: string
  x?: string
  tiktok?: string
  facebook?: string
  linkedin?: string
}

export type Fellow = {
  id: string
  name: string
  slug: string
  position?: string
  country?: string
  memberCode?: string
  cohortYear?: number
  bio?: string
  imageUrl?: string
  imageAlt?: string
  socialLinks?: FellowSocialLinks
  postDate?: string
  sortOrder: number
}
