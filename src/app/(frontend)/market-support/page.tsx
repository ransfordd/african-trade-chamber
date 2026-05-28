import { notFound } from 'next/navigation'
import { ServiceDetailContent } from '@/components/what-we-do/ServiceDetailContent'
import { ServicePageLayout } from '@/components/what-we-do/ServicePageLayout'
import { getServicePage } from '@/lib/service-pages-defaults'

export const metadata = {
  title: 'Market Support',
  description: 'Comprehensive market entry support for African expansion — African Trade Chamber.',
}

export default function MarketSupportPage() {
  const data = getServicePage('market-support')
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
