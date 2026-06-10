import Image from 'next/image'
import type { ServiceFooterBlock as FooterData } from '@/types/what-we-do'
import { GoldDotList } from '@/components/what-we-do/BulletList'
import { isLocalImage } from '@/lib/image-url'

type Props = {
  block: FooterData
}

export function ServiceFooterBlock({ block }: Props) {
  return (
    <section className="overflow-hidden rounded-xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
      {block.imageUrl ? (
        <div className="relative h-[200px] w-full border-b-[3px] border-atc-navy sm:h-[200px]">
          <Image
            src={block.imageUrl}
            alt={block.imageAlt || block.title}
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            unoptimized={!isLocalImage(block.imageUrl)}
          />
        </div>
      ) : null}
      <div className="p-6 sm:p-8">
        <h2 className="mb-5 text-2xl font-semibold text-black">{block.title}</h2>
        <GoldDotList items={block.items} className="[&_li]:text-base" />
      </div>
    </section>
  )
}
