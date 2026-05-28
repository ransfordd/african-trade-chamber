import { PartnershipsPageSection } from '@/components/partnerships/PartnershipsPageSection'
import { getPartnershipsPage } from '@/lib/cms-partnerships'
import { defaultPartnershipsPage } from '@/lib/partnerships-defaults'

export const metadata = {
  title: 'Partnerships',
  description: defaultPartnershipsPage.introText.slice(0, 160),
}

export default async function PartnershipsPage() {
  const data = await getPartnershipsPage()
  return <PartnershipsPageSection data={data} />
}
