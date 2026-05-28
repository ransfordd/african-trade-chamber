import { notFound } from 'next/navigation'
import { ServiceDetailContent } from '@/components/what-we-do/ServiceDetailContent'
import { ServicePageLayout } from '@/components/what-we-do/ServicePageLayout'
import { getServicePage } from '@/lib/service-pages-defaults'

export const metadata = {
  title: 'Investment Promotion',
  description:
    'Positioning Africa as a premier investment destination — African Trade Chamber.',
}

export default function InvestmentPromotionPage() {
  const data = getServicePage('investment-promotion')
  if (!data) notFound()

  return (
    <ServicePageLayout
      pageTitle={data.pageTitle}
      tagline={data.tagline}
      formContextLabel={data.pageTitle}
    >
      <ServiceDetailContent data={data} />
    </ServicePageLayout>
  )
}
