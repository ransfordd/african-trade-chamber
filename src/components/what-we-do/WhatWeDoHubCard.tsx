import Image from 'next/image'
import type { WhatWeDoHubCard } from '@/types/what-we-do'
import { BulletList } from '@/components/what-we-do/BulletList'
import { ViewMoreLink } from '@/components/what-we-do/ViewMoreLink'

type Props = {
  card: WhatWeDoHubCard
  className?: string
}

export function WhatWeDoHubCard({ card, className = '' }: Props) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)] transition hover:scale-[1.01] ${className}`}
    >
      <div className="group relative h-[200px] overflow-hidden">
        <Image
          src={card.imageUrl}
          alt={card.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-3 text-xl font-bold text-atc-navy">{card.title}</h3>
        {card.description ? (
          <p className="mb-3 text-base leading-relaxed text-[#4a4a4a]">{card.description}</p>
        ) : null}
        {card.bullets?.length ? <BulletList items={card.bullets} className="mb-2" /> : null}
        {card.viewMoreUrl ? <ViewMoreLink href={card.viewMoreUrl} label="View More" /> : null}
      </div>
    </article>
  )
}
