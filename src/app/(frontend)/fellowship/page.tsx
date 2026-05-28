import { FellowshipPageSection } from '@/components/fellowship/FellowshipPageSection'
import { getFellowshipPage } from '@/lib/cms-fellowship'
import { defaultFellowshipPage } from '@/lib/fellowship-defaults'

export const metadata = {
  title: 'Future Trade Leaders Fellowship',
  description: defaultFellowshipPage.introText.slice(0, 160),
}

export default async function FellowshipPage() {
  const data = await getFellowshipPage()
  return <FellowshipPageSection data={data} />
}
