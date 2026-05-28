import type { NewsPageData } from '@/types/news-article'

type Props = { data: NewsPageData }

export function NewsIntroSection({ data }: Props) {
  return (
    <section
      className="mb-8 max-w-full rounded-2xl bg-[#002740] px-8 py-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
      aria-labelledby="news-intro-title"
    >
      <h2
        id="news-intro-title"
        className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-white"
      >
        {data.introTitle}
      </h2>
      <p className="mx-auto max-w-[720px] text-base font-normal leading-relaxed text-white">
        {data.introBody}
      </p>
    </section>
  )
}
