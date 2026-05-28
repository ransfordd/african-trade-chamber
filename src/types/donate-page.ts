export type DonateDonorCategory = { title: string; description: string }

export type DonatePageData = {
  headerTitle: string
  headerTagline: string
  heroTitle: string
  heroParagraphs: string[]
  whyTitle: string
  whyIntro: string
  whyBenefits: string[]
  whoTitle: string
  whoIntro: string
  donorCategories: DonateDonorCategory[]
  transparencyTitle: string
  transparencyText: string
  ctaTitle: string
  ctaText: string
  financeEmail: string
  financePhone: string
  thankYouTitle: string
  thankYouText: string
  formTitle: string
}
