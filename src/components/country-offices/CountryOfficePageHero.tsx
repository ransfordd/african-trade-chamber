import type { CountryOfficePageContent } from '@/types/country-office-page'
import { COUNTRY_PAGE_HERO_STYLES } from '@/components/country-offices/country-hero-styles'

type Props = {
  content: CountryOfficePageContent
}

export function CountryOfficePageHero({ content }: Props) {
  const { gradient, overlay, text } = COUNTRY_PAGE_HERO_STYLES[content.heroStyle]
  const textClass = text === 'dark' ? 'text-black' : 'text-white'

  return (
    <header
      className={`relative overflow-hidden rounded-2xl px-6 py-8 text-center shadow-lg sm:px-10 sm:py-10 ${gradient}`}
    >
      {overlay ? <div className={`absolute inset-0 ${overlay}`} aria-hidden /> : null}
      <div className={`relative z-10 ${textClass}`}>
        <h1
          className={`text-2xl font-bold sm:text-3xl ${text === 'light' ? 'drop-shadow' : ''}`}
        >
          {content.heroTitle}
        </h1>
        <p className={`mt-3 text-lg font-medium ${text === 'light' ? 'opacity-90' : ''}`}>
          {content.heroCountryLabel}
        </p>
        <p
          className={`mx-auto mt-2 max-w-xl text-base ${text === 'light' ? 'opacity-80' : 'opacity-90'}`}
        >
          {content.heroTagline}
        </p>
      </div>
    </header>
  )
}
