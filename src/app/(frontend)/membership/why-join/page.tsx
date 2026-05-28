import { BenefitsCard } from '@/components/membership/BenefitsCard'
import { MembershipSubPageLayout } from '@/components/membership/MembershipSubPageLayout'
import { WhyJoinCard } from '@/components/membership/WhyJoinCard'
import { getMembershipPageData } from '@/lib/cms-membership-page'
import { defaultMembershipPage } from '@/lib/membership-page-defaults'

export const metadata = {
  title: 'Why Join — Membership',
  description: defaultMembershipPage.whyJoin.body.slice(0, 160),
}

export default async function MembershipWhyJoinPage() {
  const data = await getMembershipPageData()

  return (
    <MembershipSubPageLayout title="Why Join" subtitle={data.headerSubtitle}>
      <div className="space-y-6">
        <WhyJoinCard
          title={data.whyJoin.title}
          body={data.whyJoin.body}
          imageUrl={data.whyJoin.imageUrl}
          imageAlt={data.whyJoin.imageAlt}
          ctaLabel={data.whyJoin.ctaLabel}
          ctaHref={data.whyJoin.ctaHref}
          standalone
        />
        <BenefitsCard
          title={data.benefits.title}
          intro={data.benefits.intro}
          imageUrl={data.benefits.imageUrl}
          imageAlt={data.benefits.imageAlt}
          items={data.benefits.items}
          standalone
        />
      </div>
    </MembershipSubPageLayout>
  )
}
