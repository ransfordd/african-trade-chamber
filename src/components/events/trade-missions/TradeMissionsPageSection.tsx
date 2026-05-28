import Link from 'next/link'
import { CountryMissionSlider } from '@/components/events/trade-missions/CountryMissionSlider'
import type { TradeMissionsPageData } from '@/types/trade-missions-page'

type Props = { data: TradeMissionsPageData }

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="my-3 list-none space-y-2 p-0">
      {items.map((item) => (
        <li key={item} className="relative pl-7 text-base">
          <span className="absolute left-0 font-bold text-[#002740]" aria-hidden>
            ✔
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function SectionCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`mb-6 rounded-xl bg-white p-7 shadow-[0_15px_30px_rgba(0,39,64,0.1)] ${className}`}
    >
      {children}
    </section>
  )
}

function TmiBtn({
  href,
  children,
  outline,
}: {
  href: string
  children: React.ReactNode
  outline?: boolean
}) {
  return (
    <Link
      href={href}
      className={`inline-flex w-fit items-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold no-underline transition-all ${
        outline
          ? 'border-[#002740] bg-transparent text-[#002740] hover:bg-[#002740] hover:text-white'
          : 'border-[#002740] bg-[#002740] text-white hover:bg-transparent hover:text-[#002740]'
      }`}
    >
      {children}
    </Link>
  )
}

export function TradeMissionsPageSection({ data }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] text-black">
      <div className="mx-auto max-w-[1100px] px-5 py-10">
        <header className="mb-6 rounded-[15px] bg-[#002740] px-8 py-8 text-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
          <p className="text-[2rem] font-bold leading-tight tracking-tight">{data.headerTitle}</p>
          <p className="mx-auto mt-2 max-w-[860px] text-[1.05rem] opacity-90">
            {data.headerSubtitle}
          </p>
        </header>

        <figure className="mb-6 overflow-hidden rounded-xl shadow-[0_12px_24px_rgba(0,39,64,0.1)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.heroImageUrl}
            alt={data.heroImageAlt}
            className="block h-[280px] w-full object-cover"
          />
        </figure>

        <SectionCard>
          <p className="text-[1.05rem] leading-relaxed text-[#111827]">{data.lead}</p>
        </SectionCard>

        <SectionCard>
          <h2 className="mb-3 text-[1.35rem] font-bold text-[#002740]">Trade Missions Across Borders</h2>
          <p className="mb-3">{data.missionsIntro}</p>
          <CheckList items={data.missionsChecklist} />
          <p className="text-[#6b7280]">{data.missionsFootnote}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <TmiBtn href={data.ctaSignUpHref}>Sign up for Trade Missions</TmiBtn>
          </div>
        </SectionCard>

        <SectionCard>
          <h2 className="mb-4 text-[1.35rem] font-bold text-[#002740]">{data.upcomingTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.upcomingMissions.map((m) => (
              <article
                key={m.title}
                className="overflow-hidden rounded-lg border border-[#e5e7eb] bg-white p-4 shadow-[0_10px_22px_rgba(0,39,64,0.1)]"
              >
                <div className="mb-2.5 h-[140px] overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.imageUrl} alt={m.imageAlt} className="h-full w-full object-cover" />
                </div>
                <h3 className="mb-1 text-base font-semibold text-[#0f172a]">{m.title}</h3>
                <p className="text-[0.95rem] text-[#111827]">{m.schedule}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-[#6b7280]">
            Join our mailing list to receive updates on upcoming missions and registration details.
          </p>
        </SectionCard>

        <SectionCard>
          <h2 className="mb-3 text-[1.35rem] font-bold text-[#002740]">{data.investmentTitle}</h2>
          <p className="mb-3">{data.investmentIntro}</p>
          <figure className="my-3 overflow-hidden rounded-xl shadow-[0_12px_24px_rgba(0,39,64,0.1)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.investmentImageUrl}
              alt={data.investmentImageAlt}
              className="block h-[280px] w-full object-cover"
            />
          </figure>
          <ul className="my-3 list-disc space-y-1.5 pl-5">
            {data.investmentList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <CountryMissionSlider countries={data.countries} />
        </SectionCard>

        <SectionCard>
          <h2 className="mb-3 text-[1.35rem] font-bold text-[#002740]">{data.whyTitle}</h2>
          <CheckList items={data.whyItems} />
        </SectionCard>

        <SectionCard>
          <h2 className="mb-3 text-[1.35rem] font-bold text-[#002740]">{data.getInvolvedTitle}</h2>
          <p className="mb-4">{data.getInvolvedBody}</p>
          <div className="flex flex-wrap gap-3">
            <TmiBtn href={data.ctaSignUpHref}>Sign up for Trade Missions</TmiBtn>
            <TmiBtn href={data.ctaPartnerHref} outline>
              Partner with Us on Investment Projects
            </TmiBtn>
            <TmiBtn href={data.ctaContactHref} outline>
              Contact us
            </TmiBtn>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
