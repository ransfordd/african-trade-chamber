import { notFound } from 'next/navigation'
import { ServiceDetailContent } from '@/components/what-we-do/ServiceDetailContent'
import { ServicePageLayout } from '@/components/what-we-do/ServicePageLayout'
import { getServicePage } from '@/lib/service-pages-defaults'

export const metadata = {
  title: 'Capacity Building',
  description:
    "Equipping Africa's trade professionals for success — training, tools, and technical assistance from the African Trade Chamber.",
}

export default function CapacityBuildingPage() {
  const data = getServicePage('capacity-building')
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
