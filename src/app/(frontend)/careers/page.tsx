import { CareersJobBoard } from '@/components/careers/CareersJobBoard'
import { getCareerJobs } from '@/lib/cms-jobs'

export const metadata = {
  title: 'Careers',
  description: 'Open roles at the African Trade Chamber.',
}

export default async function CareersPage() {
  const jobs = await getCareerJobs()
  return <CareersJobBoard jobs={jobs} />
}
