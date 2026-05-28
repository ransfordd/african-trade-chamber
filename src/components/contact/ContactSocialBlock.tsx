import { IconShare } from '@/components/contact/ContactIcons'
import type { ContactPageData } from '@/types/contact-page'

type Props = Pick<ContactPageData, 'socialTitle' | 'socialIntro' | 'socialLinks'>

export function ContactSocialBlock({ socialTitle, socialIntro, socialLinks }: Props) {
  return (
    <article
      id="social"
      className="scroll-mt-24 overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)]"
    >
      <div className="bg-[#002740] px-5 py-4 md:px-6">
        <h2 className="text-lg font-bold text-white">{socialTitle}</h2>
      </div>
      <div className="p-5 text-center md:p-6">
        <div className="mb-4 flex items-center justify-center gap-2 text-base font-semibold text-[#002740]">
          <IconShare className="h-[18px] w-[18px] text-[#e6b14a]" />
          Social Media Channels
        </div>
        <p className="mb-4 text-[15px] text-[#4a4a4a]">{socialIntro}</p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[rgba(0,39,64,0.1)] px-4 py-2 text-sm font-medium text-[#002740] transition hover:bg-[#002740] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
