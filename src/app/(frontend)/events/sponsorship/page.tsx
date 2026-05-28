import { SponsorshipPageSection } from '@/components/events/sponsorship/SponsorshipPageSection'
import { defaultSponsorshipPage } from '@/lib/sponsorship-defaults'

export const metadata = {
  title: 'Sponsorship Opportunities',
  description:
    'ATC sponsorship packages for the Africa Trade Summit and Chamber programs — tiers, benefits, and partnership contact.',
}

export default function SponsorshipPage() {
  return <SponsorshipPageSection data={defaultSponsorshipPage} />
}
