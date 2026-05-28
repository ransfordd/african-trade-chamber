import { AboutPageSection } from '@/components/about/AboutPageSection'
import { getAboutPage } from '@/lib/cms-about-page'
import { getTeamMembers } from '@/lib/cms-team-members'
import { defaultAboutPage } from '@/lib/about-defaults'

export const metadata = {
  title: 'About Us',
  description: defaultAboutPage.mainContent.replace(/<[^>]+>/g, '').slice(0, 160),
}

export default async function AboutPage() {
  const [about, members] = await Promise.all([getAboutPage(), getTeamMembers()])

  return <AboutPageSection about={about} members={members} />
}
