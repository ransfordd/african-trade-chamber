import { ContactPageSection } from '@/components/contact/ContactPageSection'
import { getContactPage } from '@/lib/cms-contact-page'
import { defaultContactPage } from '@/lib/contact-defaults'

export const metadata = {
  title: 'Contact Us',
  description: defaultContactPage.introBody.slice(0, 160),
}

export default async function ContactUsPage() {
  const data = await getContactPage()
  return <ContactPageSection data={data} />
}
