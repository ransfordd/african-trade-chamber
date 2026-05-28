import { AtcArrowLink } from '@/components/shared/AtcArrowLink'
import { AtcCardImage } from '@/components/shared/AtcCardImage'
import type { PartnershipsPageData } from '@/types/partnerships-page'

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2.5 p-0">
      {items.map((item) => (
        <li key={item} className="relative pl-5 text-base leading-snug text-[#4a4a4a]">
          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-[#002740]" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  )
}

type Props = { data: PartnershipsPageData }

export function PartnershipsPageSection({ data }: Props) {
  const gs = data.getStarted
  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-10">
      <div className="mx-auto max-w-[1200px] px-5">
        <header className="mb-10 rounded-xl bg-[#002740] px-8 py-8 text-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
          <h1 className="text-[2rem] font-semibold tracking-tight text-white">{data.headerTitle}</h1>
        </header>

        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm md:col-span-2 lg:col-span-3">
            <p className="text-center text-lg leading-[1.7] text-[#4a4a4a]">{data.introText}</p>
          </article>

          {data.listCards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm scroll-mt-24"
            >
              <AtcCardImage src={card.imageUrl} alt={card.imageAlt} variant="action" />
              <div className="flex flex-grow flex-col p-6">
                <h2 className="mb-4 text-xl font-bold text-[#002740]">{card.title}</h2>
                <BulletList items={card.items} />
              </div>
            </article>
          ))}

          <article
            id={gs.id}
            className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:col-span-2 lg:col-span-3 scroll-mt-24"
          >
            <AtcCardImage src={gs.imageUrl} alt={gs.imageAlt} variant="fullWidth" />
            <div className="p-6">
              <h2 className="mb-4 text-xl font-bold text-[#002740]">{gs.title}</h2>
              <p className="mb-4 text-base leading-relaxed text-[#4a4a4a]">{gs.body}</p>
              <div className="flex flex-wrap gap-5">
                <AtcArrowLink href={`mailto:${gs.requestEmail}`} external>
                  {gs.requestLabel}
                </AtcArrowLink>
                <AtcArrowLink href={gs.guideHref}>{gs.guideLabel}</AtcArrowLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
