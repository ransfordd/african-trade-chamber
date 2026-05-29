import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { CmsPageDetail as CmsPageDetailType } from '@/types/cms-page'

type Props = { page: CmsPageDetailType }

function hasLexicalContent(content: CmsPageDetailType['content']): boolean {
  if (!content || typeof content !== 'object') return false
  const root = content.root as { children?: unknown[] } | undefined
  return Boolean(root?.children && root.children.length > 0)
}

export function CmsPageDetail({ page }: Props) {
  const heroStyle = page.heroImageUrl
    ? {
        backgroundImage: `linear-gradient(rgba(0,39,64,0.75), rgba(0,39,64,0.75)), url(${page.heroImageUrl})`,
      }
    : undefined

  return (
    <div className="cms-page-detail">
      <section
        className="bg-[#002740] bg-cover bg-center px-4 py-10 text-white md:py-14"
        style={heroStyle}
      >
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-6 inline-block text-sm font-medium text-white/90 hover:text-white"
          >
            ← Back to Home
          </Link>
          <h1 className="text-2xl font-bold leading-tight md:text-4xl">{page.title}</h1>
          {page.excerpt ? (
            <p className="mt-4 text-base leading-relaxed text-white/90">{page.excerpt}</p>
          ) : null}
        </div>
      </section>

      <nav className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="hover:text-[#002740]">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#002740]">{page.title}</span>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-4 py-10 lg:px-8">
        <div className="cms-page-content space-y-4 text-base leading-relaxed text-slate-700 [&_a]:text-[#005a87] [&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#002740] [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#002740] [&_img]:my-4 [&_img]:max-w-full [&_img]:rounded-lg [&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-4 [&_ul]:list-disc">
          {hasLexicalContent(page.content) ? (
            <RichText data={page.content as never} />
          ) : page.excerptFull ? (
            <p className="text-lg leading-relaxed text-slate-700">{page.excerptFull}</p>
          ) : (
            <p className="text-slate-600">This page has no body content yet.</p>
          )}
        </div>
      </article>
    </div>
  )
}
