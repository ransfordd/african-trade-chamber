import { notFound } from 'next/navigation'
import { ServiceDetailContent } from '@/components/what-we-do/ServiceDetailContent'
import { ServicePageLayout } from '@/components/what-we-do/ServicePageLayout'
import { getServicePage } from '@/lib/service-pages-defaults'

export const metadata = {
  title: 'B2B & B2G Matchmaking',
  description:
    'Connecting businesses and government for strategic growth across Africa — African Trade Chamber.',
}

export default function B2bMatchmakingPage() {
  const data = getServicePage('b2b-b2g-matchmaking')
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
