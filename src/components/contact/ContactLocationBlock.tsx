import type { ContactPageData } from '@/types/contact-page'

type Props = Pick<ContactPageData, 'locationTitle' | 'locationIntro' | 'mapEmbedUrl'>

export function ContactLocationBlock({ locationTitle, locationIntro, mapEmbedUrl }: Props) {
  return (
    <article
      id="office-locations"
      className="scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)]"
    >
      <div className="bg-[#002740] px-5 py-4 md:px-6">
        <h2 className="text-lg font-bold text-white">{locationTitle}</h2>
      </div>
      <div className="bg-[rgba(0,39,64,0.1)] px-5 py-4 md:px-6">
        <p className="text-base font-medium leading-relaxed text-[#001a2e]">{locationIntro}</p>
      </div>
      <div className="h-[250px] overflow-hidden sm:h-[300px] md:h-[350px]">
        <iframe
          src={mapEmbedUrl}
          title="ATC office location map"
          className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </article>
  )
}
