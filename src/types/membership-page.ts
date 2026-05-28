import type { MembershipCategory } from '@/types/content'

export type MemberTestimonial = {
  id: string
  name: string
  position: string
  quote: string
  sortOrder: number
}

export type MembershipPageData = {
  headerTitle: string
  headerSubtitle: string
  whyJoin: {
    title: string
    body: string
    imageUrl: string
    imageAlt: string
    ctaLabel: string
    ctaHref: string
  }
  benefits: {
    title: string
    intro: string
    imageUrl: string
    imageAlt: string
    items: string[]
  }
  categoriesIntro: {
    title: string
    subtitle: string
  }
  footerCtas: {
    applyLabel: string
    applyHref: string
    guideLabel: string
    guideHref: string
  }
  testimonialsHeaderTitle: string
  testimonialsHeaderSubtitle: string
  categories: MembershipCategory[]
  testimonials: MemberTestimonial[]
}
