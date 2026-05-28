import { notFound } from 'next/navigation'
import { ServiceDetailContent } from '@/components/what-we-do/ServiceDetailContent'
import { ServicePageLayout } from '@/components/what-we-do/ServicePageLayout'
import { getServicePage } from '@/lib/service-pages-defaults'

export const metadata = {
  title: 'Trade Facilitation & Expansion',
  description:
    'Efficient trade processes to unlock Africa\'s economic potential — African Trade Chamber.',
}

export default function TradeFacilitationPage() {
  const data = getServicePage('trade-facilitation-expansion')
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
