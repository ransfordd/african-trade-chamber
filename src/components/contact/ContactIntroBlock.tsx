import { AtcCardImage } from '@/components/shared/AtcCardImage'
import type { ContactPageData } from '@/types/contact-page'

type Props = Pick<ContactPageData, 'introTitle' | 'introBody' | 'introImageUrl' | 'introImageAlt'>

export function ContactIntroBlock({ introTitle, introBody, introImageUrl, introImageAlt }: Props) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)]">
      <AtcCardImage src={introImageUrl} alt={introImageAlt} variant="fullWidth" />
      <div className="p-6 md:p-[25px]">
        <h2 className="mb-4 text-2xl font-bold text-[#002740]">{introTitle}</h2>
        <p className="text-base leading-relaxed text-[#4a4a4a]">{introBody}</p>
      </div>
    </article>
  )
}
