import { AtcCardImage } from '@/components/shared/AtcCardImage'

type Props = {
  title: string
  intro: string
  imageUrl: string
  imageAlt: string
  items: string[]
  standalone?: boolean
}

export function BenefitsCard({
  title,
  intro,
  imageUrl,
  imageAlt,
  items,
  standalone = false,
}: Props) {
  return (
    <article
      id="membership-benefits"
      className={`group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)] ${
        standalone ? '' : 'md:col-span-2 lg:col-span-2'
      }`}
    >
      <AtcCardImage
        src={imageUrl}
        alt={imageAlt}
        variant="action"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-grow flex-col p-[25px]">
        <p className="mb-[15px] text-2xl font-semibold text-black">{title}</p>
        <p className="text-base leading-[1.7] text-black">{intro}</p>
        <ul className="my-[18px] grid list-none gap-x-5 gap-y-3 p-0 md:grid-cols-2 max-md:grid-cols-1">
          {items.map((item) => (
            <li key={item} className="relative pl-6 text-[15px] leading-snug">
              <span
                className="absolute left-2 top-0 text-lg font-bold text-[#e6b14a]"
                aria-hidden
              >
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
