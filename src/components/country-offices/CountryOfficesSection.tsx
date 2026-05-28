import { CountryOfficeCard } from '@/components/country-offices/CountryOfficeCard'
import type { CountryOfficesPageData } from '@/types/country-offices'

type Props = {
  data: CountryOfficesPageData
}

export function CountryOfficesSection({ data }: Props) {
  return (
    <section
      className="bg-gradient-to-br from-slate-50 to-slate-200 py-16 sm:py-20"
      aria-labelledby="country-offices-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <header className="mb-8 rounded-2xl bg-atc-navy px-6 py-8 text-center text-white shadow-lg sm:mb-10 sm:px-10">
          <h1 id="country-offices-heading" className="text-2xl font-bold sm:text-3xl">
            {data.pageTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-relaxed opacity-90">
            {data.pageSubtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.offices.map((office) => (
            <CountryOfficeCard key={office.slug} office={office} />
          ))}
        </div>
      </div>
    </section>
  )
}
