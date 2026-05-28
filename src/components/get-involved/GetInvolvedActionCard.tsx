import { AtcArrowLink } from '@/components/shared/AtcArrowLink'
import { AtcCardImage } from '@/components/shared/AtcCardImage'
import type { GetInvolvedCard } from '@/types/get-involved-page'

type Props = { card: GetInvolvedCard }

export function GetInvolvedActionCard({ card }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)]">
      <AtcCardImage
        src={card.imageUrl}
        alt={card.imageAlt}
        variant="action"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          <p className="mb-[15px] text-xl font-bold text-[#002740]">{card.title}</p>
          <p className="text-base leading-relaxed text-[#4a4a4a]">{card.body}</p>
        </div>
        {card.ctaLabel && card.ctaHref ? (
          <AtcArrowLink href={card.ctaHref}>{card.ctaLabel}</AtcArrowLink>
        ) : null}
      </div>
    </article>
  )
}
