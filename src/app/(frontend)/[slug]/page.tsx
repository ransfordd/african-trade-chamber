import { notFound } from 'next/navigation'
import { CmsPageDetail } from '@/components/pages/CmsPageDetail'
import { getCmsPageBySlug, getCmsPageSlugs } from '@/lib/cms-pages'
import { isReservedTopLevelRoute } from '@/lib/reserved-top-level-routes'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await getCmsPageSlugs()
  return slugs
    .filter((slug) => !isReservedTopLevelRoute(slug))
    .map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  if (isReservedTopLevelRoute(slug)) return { title: 'Page' }
  const page = await getCmsPageBySlug(slug)
  if (!page) return { title: 'Page' }
  const description = (page.seoDescription || page.excerpt || '').slice(0, 160) || undefined
  return {
    title: page.seoTitle || page.title,
    description,
  }
}

export default async function CmsPageRoute({ params }: Props) {
  const { slug } = await params
  if (isReservedTopLevelRoute(slug)) notFound()

  const page = await getCmsPageBySlug(slug)
  if (!page) notFound()

  return <CmsPageDetail page={page} />
}
