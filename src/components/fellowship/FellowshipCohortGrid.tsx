import { FellowshipCohortCard } from '@/components/fellowship/FellowshipCohortCard'
import type { FellowshipCohort } from '@/types/fellowship'

type Props = {
  cohorts: FellowshipCohort[]
}

export function FellowshipCohortGrid({ cohorts }: Props) {
  return (
    <section className="mb-12 grid grid-cols-1 gap-7 md:grid-cols-2" aria-label="Fellowship cohorts">
      {cohorts.map((cohort) => (
        <FellowshipCohortCard key={cohort.yearLabel} cohort={cohort} />
      ))}
    </section>
  )
}
