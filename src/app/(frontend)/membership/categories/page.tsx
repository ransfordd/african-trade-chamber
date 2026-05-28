import { CategoriesSection } from '@/components/membership/CategoriesSection'
import { MembershipSubPageLayout } from '@/components/membership/MembershipSubPageLayout'
import { getMembershipPageData } from '@/lib/cms-membership-page'
import { defaultMembershipPage } from '@/lib/membership-page-defaults'

export const metadata = {
  title: 'Membership Categories & Fees',
  description: defaultMembershipPage.categoriesIntro.subtitle.slice(0, 160),
}

export default async function MembershipCategoriesPage() {
  const data = await getMembershipPageData()

  return (
    <MembershipSubPageLayout
      title={data.categoriesIntro.title}
      subtitle={data.categoriesIntro.subtitle}
    >
      <CategoriesSection
        introTitle={data.categoriesIntro.title}
        introSubtitle={data.categoriesIntro.subtitle}
        categories={data.categories}
        applyLabel={data.footerCtas.applyLabel}
        applyHref={data.footerCtas.applyHref}
        guideLabel={data.footerCtas.guideLabel}
        guideHref={data.footerCtas.guideHref}
        standalone
      />
    </MembershipSubPageLayout>
  )
}
