import { MembershipHeader } from '@/components/membership/MembershipHeader'
import { WhyJoinCard } from '@/components/membership/WhyJoinCard'
import { BenefitsCard } from '@/components/membership/BenefitsCard'
import { CategoriesSection } from '@/components/membership/CategoriesSection'
import { MembershipTestimonials } from '@/components/membership/MembershipTestimonials'
import type { MembershipPageData } from '@/types/membership-page'

type Props = {
  data: MembershipPageData
}

export function MembershipPageSection({ data }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-6 text-black">
      <div className="mx-auto max-w-[1200px] px-5 py-6">
        <MembershipHeader title={data.headerTitle} subtitle={data.headerSubtitle} />

        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
          <WhyJoinCard
            title={data.whyJoin.title}
            body={data.whyJoin.body}
            imageUrl={data.whyJoin.imageUrl}
            imageAlt={data.whyJoin.imageAlt}
            ctaLabel={data.whyJoin.ctaLabel}
            ctaHref={data.whyJoin.ctaHref}
          />
          <BenefitsCard
            title={data.benefits.title}
            intro={data.benefits.intro}
            imageUrl={data.benefits.imageUrl}
            imageAlt={data.benefits.imageAlt}
            items={data.benefits.items}
          />
          <CategoriesSection
            introTitle={data.categoriesIntro.title}
            introSubtitle={data.categoriesIntro.subtitle}
            categories={data.categories}
            applyLabel={data.footerCtas.applyLabel}
            applyHref={data.footerCtas.applyHref}
            guideLabel={data.footerCtas.guideLabel}
            guideHref={data.footerCtas.guideHref}
          />
        </div>

        <MembershipTestimonials
          title={data.testimonialsHeaderTitle}
          subtitle={data.testimonialsHeaderSubtitle}
          testimonials={data.testimonials}
        />
      </div>
    </div>
  )
}
