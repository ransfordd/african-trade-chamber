import { SponsorTierCard } from '@/components/events/sponsorship/SponsorTierCard'
import { SponsorshipBenefitsList } from '@/components/events/sponsorship/SponsorshipBenefitsList'
import type { SponsorshipPageData } from '@/types/sponsorship-page'

type Props = { data: SponsorshipPageData }

function SectionCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`rounded-xl bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:p-7 ${className}`}
    >
      {children}
    </section>
  )
}

export function SponsorshipPageSection({ data }: Props) {
  const aboutParts = data.aboutContent.split('Africa Trade Summit')

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-6 text-black">
      <div className="mx-auto max-w-[1200px] px-5 py-6">
        <header className="mb-7 rounded-[15px] bg-[#002740] px-8 py-8 text-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
          <h1 className="mb-3 text-[2rem] font-bold leading-tight text-white">{data.headerTitle}</h1>
          <p className="mx-auto max-w-[600px] text-[1.1rem] font-normal opacity-80">
            {data.headerTagline}
          </p>
        </header>

        <SectionCard className="mb-7">
          <h2 className="mb-4 text-[1.4rem] font-semibold text-black">{data.aboutTitle}</h2>
          <p className="text-base leading-relaxed text-black">
            {aboutParts[0]}
            <span className="font-semibold text-[#002740]">Africa Trade Summit</span>
            {aboutParts[1] ?? ''}
          </p>
        </SectionCard>

        <SectionCard className="mb-6 text-center">
          <h2 className="text-[1.4rem] font-semibold text-black">
            Sponsorship Levels & Benefits
          </h2>
        </SectionCard>

        <div className="mb-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.tiers.map((tier) => (
            <SponsorTierCard key={tier.id} tier={tier} />
          ))}
        </div>

        <SectionCard className="mb-6 text-center">
          <h2 className="text-[1.4rem] font-semibold text-black">
            Additional Sponsorship Opportunities
          </h2>
        </SectionCard>

        <div className="mb-7 grid gap-5 md:grid-cols-3">
          {data.additionalOpportunities.map((opp) => (
            <article
              key={opp.id}
              className="rounded-xl bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]"
            >
              <p className="mb-2 text-[1.1rem] font-semibold text-black">{opp.title}</p>
              <p className="mb-3">
                <span className="inline-block rounded-full border-2 border-[#fbbf24] bg-[#002740] px-2.5 py-0.5 text-base font-bold text-[#fbbf24]">
                  {opp.price}
                </span>
              </p>
              <SponsorshipBenefitsList benefits={opp.benefits} />
            </article>
          ))}
        </div>

        <SectionCard className="mb-6">
          <h2 className="mb-4 text-[1.4rem] font-semibold text-black">{data.guidelinesTitle}</h2>
          <p className="mb-4 text-base leading-relaxed text-black">{data.guidelinesIntro}</p>
          <SponsorshipBenefitsList benefits={data.guidelinesContent} />
        </SectionCard>

        <SectionCard className="mb-6 overflow-x-auto">
          <h2 className="mb-4 text-[1.4rem] font-semibold text-black">Key Deadlines</h2>
          <table className="mt-4 w-full border-collapse">
            <thead>
              <tr className="border-b border-[#e5e7eb] bg-[#f8f9fa]">
                <th className="px-4 py-3 text-left font-semibold text-black">Activity</th>
                <th className="px-4 py-3 text-left font-semibold text-black">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {data.deadlines.map((row) => (
                <tr key={row.activity} className="border-b border-[#e5e7eb]">
                  <td className="px-4 py-3 text-black">{row.activity}</td>
                  <td className="px-4 py-3 text-black">{row.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionCard>

        <SectionCard className="mb-6 text-center">
          <h2 className="mb-4 text-[1.4rem] font-semibold text-black">{data.contactTitle}</h2>
          <p className="mb-5 text-base text-black">{data.contactIntro}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${data.contactEmail}`}
              className="rounded-lg bg-[rgba(251,191,36,0.1)] px-5 py-2.5 font-semibold text-[#002740] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(251,191,36,0.2)]"
            >
              {data.contactEmail}
            </a>
            <a
              href={`https://${data.contactWebsite.replace(/^https?:\/\//, '')}`}
              className="rounded-lg bg-[rgba(251,191,36,0.1)] px-5 py-2.5 font-semibold text-[#002740] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(251,191,36,0.2)]"
            >
              {data.contactWebsite}
            </a>
            <a
              href={`tel:${data.contactPhone.replace(/\s/g, '')}`}
              className="rounded-lg bg-[rgba(251,191,36,0.1)] px-5 py-2.5 font-semibold text-[#002740] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(251,191,36,0.2)]"
            >
              {data.contactPhone}
            </a>
          </div>
        </SectionCard>

        <section className="rounded-xl border-2 border-[#fbbf24] bg-white p-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.08)] md:p-7">
          <h2 className="mb-4 text-[1.4rem] font-semibold text-black">{data.acknowledgmentTitle}</h2>
          <p className="text-base leading-relaxed text-black">{data.acknowledgmentContent}</p>
        </section>
      </div>
    </div>
  )
}
