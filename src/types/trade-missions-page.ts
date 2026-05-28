export type UpcomingMission = {
  title: string
  schedule: string
  imageUrl: string
  imageAlt: string
}

export type CountryMissionLink = {
  name: string
  subtitle: string
  href: string
  flagUrl: string
}

export type TradeMissionsPageData = {
  headerTitle: string
  headerSubtitle: string
  heroImageUrl: string
  heroImageAlt: string
  lead: string
  missionsIntro: string
  missionsChecklist: string[]
  missionsFootnote: string
  upcomingTitle: string
  upcomingMissions: UpcomingMission[]
  investmentTitle: string
  investmentIntro: string
  investmentImageUrl: string
  investmentImageAlt: string
  investmentList: string[]
  countries: CountryMissionLink[]
  whyTitle: string
  whyItems: string[]
  getInvolvedTitle: string
  getInvolvedBody: string
  ctaSignUpHref: string
  ctaPartnerHref: string
  ctaContactHref: string
}
