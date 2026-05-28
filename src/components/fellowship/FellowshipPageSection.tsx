import { FellowshipCohortGrid } from '@/components/fellowship/FellowshipCohortGrid'
import { FellowshipCtaSection } from '@/components/fellowship/FellowshipCtaSection'
import { FellowshipHero } from '@/components/fellowship/FellowshipHero'
import { FellowshipIntro } from '@/components/fellowship/FellowshipIntro'
import type { FellowshipPageData } from '@/types/fellowship'

type Props = {
  data: FellowshipPageData
}

export function FellowshipPageSection({ data }: Props) {
  return (
    <div className="-mt-[72px] bg-[#f4f6f9] pb-16 text-base leading-[1.75] text-slate-900">
      <FellowshipHero heroImageUrl={data.heroImageUrl} />
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <FellowshipIntro introText={data.introText} />
        <FellowshipCohortGrid cohorts={data.cohorts} />
        <FellowshipCtaSection cta={data.cta} />
      </div>
    </div>
  )
}
