import { AboutIntroSection } from '@/components/about/AboutIntroSection'
import { AboutTeamSection } from '@/components/about/AboutTeamSection'
import type { AboutPageData, TeamMember } from '@/types/about-page'

type Props = {
  about: AboutPageData
  members: TeamMember[]
}

export function AboutPageSection({ about, members }: Props) {
  return (
    <>
      <AboutIntroSection
        sectionTitle={about.sectionTitle}
        mainContent={about.mainContent}
        visionContent={about.visionContent}
        missionContent={about.missionContent}
      />
      <AboutTeamSection members={members} />
    </>
  )
}
