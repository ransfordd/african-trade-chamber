import type { ServiceDetailPageData } from '@/types/what-we-do'
import { ServiceFooterBlock } from '@/components/what-we-do/ServiceFooterBlock'
import { ServiceOfferGrid } from '@/components/what-we-do/ServiceOfferGrid'

function IntroParagraph({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) {
    return <p className="mb-4 text-base leading-relaxed text-slate-700 last:mb-0">{text}</p>
  }
  const parts = text.split(highlight)
  return (
    <p className="mb-4 text-base leading-relaxed text-slate-700 last:mb-0">
      {parts[0]}
      <span className="font-semibold text-atc-navy">{highlight}</span>
      {parts.slice(1).join(highlight)}
    </p>
  )
}

type Props = {
  data: ServiceDetailPageData
}

export function ServiceDetailContent({ data }: Props) {
  return (
    <>
      <div className="rounded-xl bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:p-8">
        {data.introParagraphs.map((p, i) => (
          <IntroParagraph key={i} text={p} highlight={i === 0 ? data.introHighlight : undefined} />
        ))}
      </div>

      {data.offerSectionTitle ? (
        <div className="rounded-xl bg-white px-6 py-6 text-center shadow-[0_6px_20px_rgba(0,0,0,0.08)] sm:px-8">
          <h2 className="text-2xl font-semibold text-black">{data.offerSectionTitle}</h2>
        </div>
      ) : null}

      <ServiceOfferGrid offers={data.offers} columns={data.columns} />

      {data.footerBlock ? <ServiceFooterBlock block={data.footerBlock} /> : null}
    </>
  )
}
