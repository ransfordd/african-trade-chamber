import { SummitContentSection } from '@/components/events/summit/SummitContentSection'
import { SummitHero } from '@/components/events/summit/SummitHero'
import { defaultAfricaTradeSummit } from '@/lib/africa-trade-summit-defaults'

export const metadata = {
  title: 'Africa Trade Summit',
  description:
    "The African Trade Chamber's flagship annual convening focused on private sector-led growth across the continent.",
}

export default function AfricaTradeSummitPage() {
  const { hero, content } = defaultAfricaTradeSummit
  return (
    <>
      <SummitHero data={hero} />
      <SummitContentSection data={content} />
    </>
  )
}
