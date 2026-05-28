import type { PolicyGovernmentPageData } from '@/types/what-we-do'
import { GoldDotList } from '@/components/what-we-do/BulletList'

type Props = {
  data: PolicyGovernmentPageData
}

export function PolicyGovernmentSection({ data }: Props) {
  return (
    <>
      <div className="rounded-xl bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] sm:p-8">
        <p className="text-base leading-relaxed text-slate-700">{data.introText}</p>
      </div>

      <div className="rounded-xl bg-white px-6 py-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
        <h2 className="text-2xl font-semibold text-black">{data.offerSectionTitle}</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.offers.map((offer) => (
          <article
            key={offer.title}
            className="rounded-xl bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]"
          >
            <h3 className="mb-3 text-lg font-semibold text-black">{offer.title}</h3>
            <p className="mb-3 text-base leading-relaxed text-slate-700">{offer.description}</p>
            <GoldDotList items={offer.features} />
          </article>
        ))}
      </div>
    </>
  )
}
