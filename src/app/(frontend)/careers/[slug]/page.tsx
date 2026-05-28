import { notFound } from 'next/navigation'
import { CareerJobDetail } from '@/components/careers/CareerJobDetail'
import { getCareerJobBySlug } from '@/lib/cms-jobs'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const job = await getCareerJobBySlug(slug)
  if (!job) return { title: 'Careers' }
  return { title: `${job.title} – ${job.jobId}` }
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params
  const job = await getCareerJobBySlug(slug)
  if (!job) notFound()
  return <CareerJobDetail job={job} />
}
