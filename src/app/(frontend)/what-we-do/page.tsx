import { WhatWeDoHashScroll } from '@/components/what-we-do/WhatWeDoHashScroll'
import { WhatWeDoPageSection } from '@/components/what-we-do/WhatWeDoPageSection'
import { defaultWhatWeDoPage } from '@/lib/what-we-do-defaults'

export const metadata = {
  title: 'What We Do',
  description:
    'ATC trade facilitation, market entry, investment promotion, policy engagement, and capacity building across Africa.',
}

export default function WhatWeDoPage() {
  return (
    <>
      <WhatWeDoHashScroll />
      <WhatWeDoPageSection data={defaultWhatWeDoPage} />
    </>
  )
}
