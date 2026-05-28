import { VolunteerPageSection } from '@/components/volunteer/VolunteerPageSection'
import { getVolunteerPage } from '@/lib/cms-volunteer-page'
import { defaultVolunteerPage } from '@/lib/volunteer-defaults'

export const metadata = {
  title: 'Volunteer',
  description: defaultVolunteerPage.headerTagline,
}

export default async function VolunteerPage() {
  const data = await getVolunteerPage()
  return <VolunteerPageSection data={data} />
}
