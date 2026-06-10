import Image from 'next/image'
import type { ServiceOfferBlock } from '@/types/what-we-do'
import { GoldDotList } from '@/components/what-we-do/BulletList'
import { isLocalImage } from '@/lib/image-url'

type Props = {
  offers: ServiceOfferBlock[]
  columns?: 3 | 4
}

export function ServiceOfferGrid({ offers, columns = 4 }: Props) {
  const gridClass =
    columns === 4
      ? 'grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'
      : 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={gridClass}>
      {offers.map((offer) => (
        <article
          key={offer.title}
          className="overflow-hidden rounded-xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]"
        >
          {offer.imageUrl ? (
            <div className="relative h-[180px] w-full border-b-[3px] border-atc-navy">
              <Image
                src={offer.imageUrl}
                alt={offer.imageAlt || offer.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                unoptimized={!isLocalImage(offer.imageUrl)}
              />
            </div>
          ) : null}
          <div className="p-6">
            <h3 className="mb-3 text-lg font-semibold leading-snug text-black">{offer.title}</h3>
            <p className="mb-3 text-base leading-relaxed text-slate-700">{offer.description}</p>
            <GoldDotList items={offer.features} />
          </div>
        </article>
      ))}
    </div>
  )
}
