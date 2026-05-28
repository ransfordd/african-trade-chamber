import { GetInvolvedPageSection } from '@/components/get-involved/GetInvolvedPageSection'
import { getGetInvolvedPage } from '@/lib/cms-get-involved'
import { defaultGetInvolvedPage } from '@/lib/get-involved-defaults'

export const metadata = {
  title: 'Get Involved',
  description: defaultGetInvolvedPage.intro.body.slice(0, 160),
}

export default async function GetInvolvedPage() {
  const data = await getGetInvolvedPage()
  return <GetInvolvedPageSection data={data} />
}
