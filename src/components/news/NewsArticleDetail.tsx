import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { formatNewsDisplayDate } from '@/lib/news-display-utils'
import type { NewsArticleDetail } from '@/types/news-article'

type Props = { article: NewsArticleDetail }

function heroDateParts(article: NewsArticleDetail) {
  const raw = article.newsDate || article.publishedAt
  if (!raw) return null
  const dateOnly = raw.slice(0, 10)
  const d = new Date(raw.includes('T') ? raw : `${dateOnly}T12:00:00`)
  if (Number.isNaN(d.getTime())) return null
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    year: d.getFullYear().toString(),
    line: d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  }
}

function hasLexicalContent(content: NewsArticleDetail['content']): boolean {
  if (!content || typeof content !== 'object') return false
  const root = content.root as { children?: unknown[] } | undefined
  return Boolean(root?.children && root.children.length > 0)
}

export function NewsArticleDetail({ article }: Props) {
  const dates = heroDateParts(article)
  const displayDate = formatNewsDisplayDate(article)
  const heroStyle = article.imageUrl
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${article.imageUrl})`,
      }
    : undefined

  const byline = [
    dates?.line || displayDate,
    article.newsAuthor ? article.newsAuthor : null,
  ]
    .filter(Boolean)
    .join(' / ')

  return (
    <div className="news-article-detail">
      <section
        className="relative mb-0 min-h-[280px] bg-[#1a1a1a] bg-cover bg-center px-4 py-12 text-white md:min-h-[320px] md:px-8"
        style={heroStyle}
      >
        <Link
          href="/news"
          className="relative z-10 mb-8 inline-block text-sm font-medium text-white/90 hover:text-white"
        >
          ← Back to News
        </Link>
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-end">
          {dates ? (
            <div className="flex shrink-0 flex-col border-r border-white/30 pr-6 text-center md:pr-8">
              <span className="text-4xl font-bold leading-none">{dates.day}</span>
              <span className="text-sm font-semibold tracking-wider">{dates.month}</span>
              <span className="text-lg">{dates.year}</span>
            </div>
          ) : null}
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold leading-tight md:text-4xl">{article.title}</h1>
            {byline ? (
              <p className="mt-3 text-sm uppercase tracking-wide text-white/90">{byline}</p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {article.newsSource ? (
                <span className="rounded-full bg-white/20 px-3 py-1">{article.newsSource}</span>
              ) : null}
              <span className="rounded-full bg-white/20 px-3 py-1">{article.categoryLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <nav className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="hover:text-[#002740]">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="/news" className="hover:text-[#002740]">
            News
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#002740]">{article.title}</span>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-4 py-10 lg:px-8">
        {article.imageUrl ? (
          <div className="mb-8 overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              className="w-full object-cover"
            />
          </div>
        ) : null}

        <div className="news-content space-y-4 text-base leading-relaxed text-slate-700 [&_a]:text-[#005a87] [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#002740] [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#002740] [&_img]:my-4 [&_img]:max-w-full [&_img]:rounded-lg [&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-4 [&_ul]:list-disc">
          {hasLexicalContent(article.content) ? (
            <RichText data={article.content as never} />
          ) : article.excerptFull || article.excerpt ? (
            <p className="text-lg leading-relaxed text-slate-700">
              {article.excerptFull || article.excerpt}
            </p>
          ) : null}
        </div>

        {!hasLexicalContent(article.content) && article.originalUrl ? (
          <p className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
            <a
              href={article.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#002740] underline"
            >
              View original article
            </a>
          </p>
        ) : null}
      </article>
    </div>
  )
}
