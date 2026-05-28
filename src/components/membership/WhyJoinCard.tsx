import Link from 'next/link'
import { AtcCardImage } from '@/components/shared/AtcCardImage'

type Props = {
  title: string
  body: string
  imageUrl: string
  imageAlt: string
  ctaLabel: string
  ctaHref: string
  standalone?: boolean
}

export function WhyJoinCard({
  title,
  body,
  imageUrl,
  imageAlt,
  ctaLabel,
  ctaHref,
  standalone = false,
}: Props) {
  return (
    <article
      id={standalone ? 'why-join' : undefined}
      className={`group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)] ${
        standalone ? '' : 'md:col-span-1 lg:col-span-1'
      }`}
    >
      <AtcCardImage
        src={imageUrl}
        alt={imageAlt}
        variant="action"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-grow flex-col justify-between p-[25px]">
        <div>
          <p className="mb-[15px] text-2xl font-semibold text-black">{title}</p>
          <p className="text-base leading-[1.7] text-black">{body}</p>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-[15px]">
          <Link
            href={ctaHref}
            className="inline-block rounded-[10px] border-2 border-[#002740] bg-[#002740] px-6 py-3 text-center font-bold text-white no-underline transition-colors hover:bg-white hover:text-[#002740] focus:outline focus:outline-2 focus:outline-[#002740] focus:outline-offset-2 max-md:w-full"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  )
}
