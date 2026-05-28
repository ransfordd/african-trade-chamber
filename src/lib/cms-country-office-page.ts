import { countryOfficePageDefaults } from '@/lib/country-office-page-defaults'
import type { CountryOfficePageContent } from '@/types/country-office-page'

export function getCountryOfficePage(slug: string): CountryOfficePageContent | null {
  return countryOfficePageDefaults[slug] ?? null
}

export function getAllCountryOfficePageSlugs(): string[] {
  return Object.keys(countryOfficePageDefaults)
}
