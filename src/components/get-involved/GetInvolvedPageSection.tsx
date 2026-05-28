import { GetInvolvedActionCard } from '@/components/get-involved/GetInvolvedActionCard'
import { GetInvolvedIntroCard } from '@/components/get-involved/GetInvolvedIntroCard'
import type { GetInvolvedPageData } from '@/types/get-involved-page'

type Props = { data: GetInvolvedPageData }

export function GetInvolvedPageSection({ data }: Props) {
  return (
    <div className="bg-[#f8f9fa] px-5 py-[30px] text-[#4a4a4a] md:px-10 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
          <GetInvolvedIntroCard card={data.intro} />
          {data.cards.map((card) => (
            <GetInvolvedActionCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}
