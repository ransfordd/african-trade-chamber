import { AtcCardImage } from '@/components/shared/AtcCardImage'
import type { GetInvolvedCard } from '@/types/get-involved-page'

type Props = { card: GetInvolvedCard }

export function GetInvolvedIntroCard({ card }: Props) {
  return (
    <article className="group col-span-1 flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)] md:col-span-2 lg:col-span-3">
      <AtcCardImage
        src={card.imageUrl}
        alt={card.imageAlt}
        variant="intro"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-grow flex-col justify-between p-6 lg:p-[30px]">
        <div>
          <p className="mb-[18px] text-[28px] font-bold text-[#002740]">{card.title}</p>
          <p className="text-lg leading-[1.7] text-[#4a4a4a]">{card.body}</p>
        </div>
      </div>
    </article>
  )
}
