import { MembershipSubPageLayout } from '@/components/membership/MembershipSubPageLayout'
import { MembershipTestimonials } from '@/components/membership/MembershipTestimonials'
import { getMembershipPageData } from '@/lib/cms-membership-page'
import { defaultMembershipPage } from '@/lib/membership-page-defaults'

export const metadata = {
  title: 'Member Testimonials — Membership',
  description: defaultMembershipPage.testimonialsHeaderSubtitle.slice(0, 160),
}

export default async function MembershipTestimonialsPage() {
  const data = await getMembershipPageData()

  return (
    <MembershipSubPageLayout
      title={data.testimonialsHeaderTitle}
      subtitle={data.testimonialsHeaderSubtitle}
    >
      <MembershipTestimonials
        title={data.testimonialsHeaderTitle}
        subtitle={data.testimonialsHeaderSubtitle}
        testimonials={data.testimonials}
        standalone
      />
    </MembershipSubPageLayout>
  )
}
