import Link from 'next/link'
import { formatNewsDisplayDate } from '@/lib/news-display-utils'
import type { NewsArticle } from '@/types/news-article'

type Props = { article: NewsArticle; hidden?: boolean }

export function NewsCard({ article, hidden }: Props) {
  const dateLabel = formatNewsDisplayDate(article)

  return (
    <article
      data-category={article.category}
      className={`relative flex h-full flex-col overflow-hidden rounded-lg border border-[#e0e0e0] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] ${
        article.featured
          ? 'border-l-4 border-l-[#002740] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]'
          : ''
      } ${hidden ? 'hidden' : ''}`}
    >
      {article.featured ? (
        <span
          className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#002740] text-xs text-white"
          aria-hidden
        >
          ★
        </span>
      ) : null}

      {article.imageUrl ? (
        <div className="mb-4 overflow-hidden rounded-md">
          <Link href={`/news/${article.slug}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              className="h-[180px] w-full object-cover transition duration-300 hover:scale-105"
            />
          </Link>
        </div>
      ) : null}

      <div className="flex min-h-0 flex-1 flex-col">
        <h2 className="mb-2.5 line-clamp-2 text-sm font-semibold leading-snug">
          <Link href={`/news/${article.slug}`} className="text-[#002740] hover:text-[#005a87]">
            {article.title}
          </Link>
        </h2>

        <div className="mb-4 flex flex-wrap gap-3 border-b border-[#f0f0f0] pb-2.5 text-[11px]">
          {article.newsSource ? (
            <span className="inline-flex items-center gap-1 rounded-xl bg-[#e3f2fd] px-2 py-1 font-medium text-[#1976d2]">
              {article.newsSource}
            </span>
          ) : null}
          {article.newsAuthor ? (
            <span className="inline-flex items-center gap-1 rounded-xl bg-[#f3e5f5] px-2 py-1 text-[#7b1fa2]">
              {article.newsAuthor}
            </span>
          ) : null}
          {dateLabel ? (
            <span className="inline-flex items-center gap-1 rounded-xl bg-[#e8f5e8] px-2 py-1 text-[#388e3c]">
              {dateLabel}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1 rounded-xl bg-[#fff3e0] px-2 py-1 text-[#f57c00]">
            {article.categoryLabel}
          </span>
        </div>

        {article.excerpt ? (
          <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-[#333]">{article.excerpt}</p>
        ) : (
          <div className="flex-1" />
        )}

        <div className="mt-auto pb-1">
          <Link
            href={`/news/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#002740] hover:text-[#005a87]"
          >
            Read More
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
