import Image from 'next/image'
import Link from 'next/link'
import { isLocalImage } from '@/lib/image-url'
import type { FellowshipCohort } from '@/types/fellowship'

type Props = {
  cohort: FellowshipCohort
}

export function FellowshipCohortCard({ cohort }: Props) {
  const localImage = isLocalImage(cohort.imageUrl)

  const exploreLink = (
    <>
      Explore the Cohort
      <span className="text-[1.1em] leading-none" aria-hidden>
        {' '}
        →
      </span>
    </>
  )

  const linkClass =
    'inline-flex items-center gap-1.5 self-start border-b-2 border-transparent pb-0.5 text-[15px] font-bold text-[#002740] transition hover:border-[#e6b422] hover:text-[#004a6e]'

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0_24px_48px_rgba(2,6,23,0.1)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_56px_rgba(2,6,23,0.12)]">
      <div className="relative h-[clamp(200px,28vw,260px)] overflow-hidden">
        {localImage ? (
          <Image
            src={cohort.imageUrl}
            alt={cohort.imageAlt}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cohort.imageUrl}
            alt={cohort.imageAlt}
            className="h-full w-full scale-[1.03] object-cover transition duration-300 group-hover:scale-[1.06]"
            loading="lazy"
            decoding="async"
          />
        )}
        <span className="absolute left-3.5 top-3.5 z-[1] rounded-lg bg-[rgba(0,39,64,0.72)] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {cohort.yearLabel}
        </span>
        <div
          className="absolute bottom-0 left-0 right-0 z-[1] h-1 bg-gradient-to-r from-[#e6b422] via-[#f5d76a] to-[#e6b422]"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col px-7 py-6 pb-7">
        <h3 className="mb-3 text-[19px] font-bold leading-snug tracking-tight text-[#002740]">
          {cohort.title}
        </h3>
        <p className="mb-5 flex-1 text-[15px] leading-[1.7] text-slate-600">{cohort.description}</p>
        {cohort.exploreExternal ? (
          <a
            href={cohort.exploreUrl}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            {exploreLink}
          </a>
        ) : (
          <Link href={cohort.exploreUrl} className={linkClass}>
            {exploreLink}
          </Link>
        )}
      </div>
    </article>
  )
}
