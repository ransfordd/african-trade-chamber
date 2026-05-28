import { notFound } from 'next/navigation'
import { NewsArticleDetail } from '@/components/news/NewsArticleDetail'
import { getNewsArticleBySlug } from '@/lib/cms-news'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = await getNewsArticleBySlug(slug)
  if (!article) return { title: 'News' }
  return {
    title: article.title,
    description: (article.excerptFull || article.excerpt || '').slice(0, 160) || undefined,
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getNewsArticleBySlug(slug)
  if (!article) notFound()

  return <NewsArticleDetail article={article} />
}
