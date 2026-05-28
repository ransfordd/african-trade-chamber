import { HEADER_GRADIENTS } from '@/components/country-offices/country-header-gradients'
import type { CountryPageHeroStyle } from '@/types/country-office-page'

type HeroStyleConfig = {
  gradient: string
  overlay?: string
  text: 'light' | 'dark'
}

export const COUNTRY_PAGE_HERO_STYLES: Record<CountryPageHeroStyle, HeroStyleConfig> = {
  ghana: { gradient: HEADER_GRADIENTS.ghana, text: 'light' },
  kenya: { gradient: HEADER_GRADIENTS.kenya, text: 'light' },
  nigeria: { gradient: HEADER_GRADIENTS.nigeria, text: 'light' },
  'south-africa': { gradient: HEADER_GRADIENTS['south-africa'], text: 'light' },
  drc: { gradient: HEADER_GRADIENTS.drc, text: 'light' },
  liberia: { gradient: HEADER_GRADIENTS.liberia, text: 'light' },
  'sao-tome': { gradient: HEADER_GRADIENTS['sao-tome'], text: 'light' },
  morocco: { gradient: HEADER_GRADIENTS.morocco, text: 'light' },
  ethiopia: { gradient: HEADER_GRADIENTS.ethiopia, text: 'light' },
  egypt: { gradient: HEADER_GRADIENTS.egypt, text: 'light' },
  'ghana-flag': {
    gradient: 'bg-gradient-to-br from-red-600 via-amber-400 to-green-600',
    text: 'light',
  },
  'kenya-flag': {
    gradient: 'bg-gradient-to-br from-black via-red-600 to-green-600',
    overlay: 'bg-black/60',
    text: 'light',
  },
  'nigeria-flag': {
    gradient: 'bg-gradient-to-br from-green-600 via-white to-green-600',
    text: 'dark',
  },
  'south-africa-flag': {
    gradient:
      'bg-[linear-gradient(135deg,#16a34a_0%,#fbbf24_25%,#dc2626_50%,#1d4ed8_75%,#000000_100%)]',
    overlay: 'bg-black/60',
    text: 'light',
  },
  'liberia-flag': {
    gradient: 'bg-gradient-to-br from-red-600 via-white to-red-600',
    overlay: 'bg-red-600/70',
    text: 'light',
  },
  'sao-tome-flag': {
    gradient: 'bg-gradient-to-br from-green-600 via-amber-400 to-red-600',
    overlay: 'bg-green-600/70',
    text: 'light',
  },
}
