import { MembershipPageSection } from '@/components/membership/MembershipPageSection'
import { getMembershipPageData } from '@/lib/cms-membership-page'
import { defaultMembershipPage } from '@/lib/membership-page-defaults'

export const metadata = {
  title: 'Membership',
  description: defaultMembershipPage.headerSubtitle.slice(0, 160),
}

export default async function MembershipPage() {
  const data = await getMembershipPageData()
  return <MembershipPageSection data={data} />
}
