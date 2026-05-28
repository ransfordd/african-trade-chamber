import { MembershipApplyPageSection } from '@/components/membership/apply/MembershipApplyPageSection'
import { APPLY_INTRO } from '@/lib/membership-apply-data'

export const metadata = {
  title: 'Membership Application Form',
  description: APPLY_INTRO.tagline,
}

export default function MembershipApplyPage() {
  return <MembershipApplyPageSection />
}
