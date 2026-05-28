import { DonatePageSection } from '@/components/donate/DonatePageSection'
import { getDonatePage } from '@/lib/cms-donate-page'
import { defaultDonatePage } from '@/lib/donate-defaults'

export const metadata = {
  title: 'Donate',
  description: defaultDonatePage.headerTagline,
}

export default async function DonatePage() {
  const data = await getDonatePage()
  return <DonatePageSection data={data} />
}
