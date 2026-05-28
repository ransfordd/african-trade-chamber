import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CountryOfficePageContent } from '@/components/country-offices/CountryOfficePageContent'
import { CountryOfficePageHero } from '@/components/country-offices/CountryOfficePageHero'
import { CountryServicesRequestForm } from '@/components/country-offices/CountryServicesRequestForm'
import {
  getAllCountryOfficePageSlugs,
  getCountryOfficePage,
} from '@/lib/cms-country-office-page'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCountryOfficePageSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const content = getCountryOfficePage(slug)
  if (!content) return { title: 'Country Office' }

  return {
    title: `${content.heroCountryLabel} Trade Support Services`,
    description: content.heroTagline,
  }
}

export default async function CountryOfficeDetailPage({ params }: Props) {
  const { slug } = await params
  const content = getCountryOfficePage(slug)
  if (!content) notFound()

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-slate-200 py-10 sm:py-14">
        <div className="mx-auto max-w-5xl space-y-8 px-4 lg:px-8">
          <nav className="text-sm text-atc-navy/70">
            <Link href="/country-offices" className="hover:text-atc-navy hover:underline">
              ← Country Offices
            </Link>
          </nav>
          <CountryOfficePageHero content={content} />
          <CountryOfficePageContent content={content} />
        </div>
      </section>

      <CountryServicesRequestForm
        officeLabel={content.heroCountryLabel}
        targetCountriesPlaceholder={content.formTargetCountriesPlaceholder}
        phoneHint={content.formPhoneHint}
      />
    </>
  )
}
