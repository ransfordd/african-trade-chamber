import { AtcArrowLink } from '@/components/shared/AtcArrowLink'
import { AtcCardImage } from '@/components/shared/AtcCardImage'
import type { EventHubCardData } from '@/types/events-page'

type Props = EventHubCardData

export function EventHubCard({
  id,
  title,
  body,
  imageUrl,
  imageAlt,
  ctaLabel,
  ctaHref,
  external,
  linked = true,
}: Props) {
  return (
    <article
      id={id}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)] scroll-mt-24"
    >
      <AtcCardImage
        src={imageUrl}
        alt={imageAlt}
        variant="action"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-grow flex-col justify-between p-[25px]">
        <div>
          <p className="mb-[15px] text-xl font-bold text-black">{title}</p>
          <p className="text-base leading-[1.6] text-black">{body}</p>
        </div>
        {linked && ctaHref ? (
          <AtcArrowLink href={ctaHref} external={external} className="mt-auto">
            {ctaLabel}
          </AtcArrowLink>
        ) : (
          <span className="mt-auto inline-flex w-fit items-center pt-3 text-base font-semibold text-[#002740]">
            {ctaLabel}
            <svg
              className="ml-2 shrink-0 fill-[#002740]"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H16.1893L13.4697 8.53033Z" />
            </svg>
          </span>
        )}
      </div>
    </article>
  )
}
