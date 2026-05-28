import type { CountryHeaderTheme } from '@/types/country-offices'

export type CountryPageHeroStyle =
  | CountryHeaderTheme
  | 'ghana-flag'
  | 'kenya-flag'
  | 'nigeria-flag'
  | 'south-africa-flag'
  | 'liberia-flag'
  | 'sao-tome-flag'

export type CountryOfficePageContent = {
  slug: string
  countryName: string
  heroCountryLabel: string
  heroTitle: string
  heroTagline: string
  heroStyle: CountryPageHeroStyle
  stakeholderIntro: string
  stakeholders: string[]
  services: string[]
  highlightNote?: string
  closingNote?: string
  formTargetCountriesPlaceholder?: string
  formPhoneHint?: string
}
