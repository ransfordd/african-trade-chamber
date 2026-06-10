import Image from 'next/image'
import type { WhatWeDoPageData } from '@/types/what-we-do'
import { BulletList } from '@/components/what-we-do/BulletList'
import { ViewMoreLink } from '@/components/what-we-do/ViewMoreLink'
import { WhatWeDoHubCard } from '@/components/what-we-do/WhatWeDoHubCard'
import { isLocalImage } from '@/lib/image-url'

type Props = {
  data: WhatWeDoPageData
}

export function WhatWeDoPageSection({ data }: Props) {
  const { intro, serviceCards, capacityBuilding, capacityCards } = data

  return (
    <section className="bg-[#f8f9fa] py-10 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)] lg:col-span-3">
            <div className="group relative h-[220px] overflow-hidden sm:h-[260px]">
              <Image
                src={intro.imageUrl}
                alt={intro.imageAlt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="100vw"
                priority
                unoptimized={!isLocalImage(intro.imageUrl)}
              />
            </div>
            <div className="p-6 sm:p-8">
              <h1 className="mb-4 text-2xl font-bold text-atc-navy sm:text-[28px]">{intro.title}</h1>
              <p className="mb-5 text-lg font-medium italic text-atc-navy sm:text-xl">{intro.tagline}</p>
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mb-4 text-base leading-relaxed text-[#4a4a4a] last:mb-0 sm:text-lg sm:leading-[1.7]">
                  {p}
                </p>
              ))}
            </div>
          </article>

          {serviceCards.map((card) => (
            <WhatWeDoHubCard key={card.title} card={card} />
          ))}

          <article
            id="capacity-building"
            className="scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)] lg:col-span-3"
          >
            <div className="group relative h-[200px] overflow-hidden">
              <Image
                src={capacityBuilding.imageUrl}
                alt={capacityBuilding.imageAlt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="100vw"
                unoptimized={!isLocalImage(capacityBuilding.imageUrl)}
              />
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="mb-4 text-xl font-bold text-atc-navy">{capacityBuilding.title}</h2>
              <p className="text-base leading-relaxed text-[#4a4a4a]">{capacityBuilding.description}</p>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-6 md:col-span-2 md:grid-cols-2 lg:col-span-3">
            {capacityCards.map((card) => (
              <article
                key={card.subtitle}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)]"
              >
                <div className="group relative h-[200px] overflow-hidden">
                  <Image
                    src={card.imageUrl}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized={!isLocalImage(card.imageUrl)}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-3 text-lg font-semibold text-atc-navy">{card.subtitle}</h3>
                  {card.paragraphs.map((p, i) => (
                    <p key={i} className="mb-3 text-base leading-relaxed text-[#4a4a4a]">
                      {p}
                    </p>
                  ))}
                  {card.bullets?.length ? <BulletList items={card.bullets} className="mb-4" /> : null}
                  {card.ctas?.length ? (
                    <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                      {card.ctas.map((cta) => (
                        <ViewMoreLink key={cta.label} href={cta.href} label={cta.label} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
