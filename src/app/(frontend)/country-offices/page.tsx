import { CountryOfficesHashScroll } from '@/components/country-offices/CountryOfficesHashScroll'
import { CountryOfficesSection } from '@/components/country-offices/CountryOfficesSection'
import { getCountryOfficesPage } from '@/lib/cms-country-offices'

export const metadata = {
  title: 'Regional Network & Country Offices',
  description:
    'ATC country offices across Africa — localized support for trade, partnerships, and market entry.',
}

export default async function CountryOfficesPage() {
  const data = await getCountryOfficesPage()

  return (
    <>
      <CountryOfficesHashScroll />
      <CountryOfficesSection data={data} />
    </>
  )
}
