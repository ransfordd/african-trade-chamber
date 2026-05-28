import { PolicyGovernmentSection } from '@/components/what-we-do/PolicyGovernmentSection'
import { ServicePageLayout } from '@/components/what-we-do/ServicePageLayout'
import { policyGovernmentPage } from '@/lib/service-pages-defaults'

export const metadata = {
  title: 'Policy & Government Engagement',
  description:
    'Bridging private sector and government for trade enhancement — African Trade Chamber.',
}

export default function PolicyGovernmentEngagementPage() {
  const data = policyGovernmentPage

  return (
    <ServicePageLayout
      pageTitle={data.pageTitle}
      tagline={data.tagline}
      formContextLabel={data.pageTitle}
    >
      <PolicyGovernmentSection data={data} />
    </ServicePageLayout>
  )
}
