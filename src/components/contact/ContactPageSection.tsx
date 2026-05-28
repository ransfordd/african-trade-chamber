import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInquiriesBlock } from '@/components/contact/ContactInquiriesBlock'
import { ContactIntroBlock } from '@/components/contact/ContactIntroBlock'
import { ContactLocationBlock } from '@/components/contact/ContactLocationBlock'
import { ContactSocialBlock } from '@/components/contact/ContactSocialBlock'
import type { ContactPageData } from '@/types/contact-page'

type Props = { data: ContactPageData }

export function ContactPageSection({ data }: Props) {
  return (
    <div className="bg-[#f8f9fa] px-5 py-8 md:px-10 md:py-[60px]">
      <div className="mx-auto max-w-[1200px] space-y-6">
        <ContactIntroBlock
          introTitle={data.introTitle}
          introBody={data.introBody}
          introImageUrl={data.introImageUrl}
          introImageAlt={data.introImageAlt}
        />
        <ContactInquiriesBlock
          email={data.email}
          phone={data.phone}
          address={data.address}
          officeHours={data.officeHours}
          formBlurbTitle={data.formBlurbTitle}
          formBlurbText={data.formBlurbText}
        />
        <ContactForm
          formTitle={data.formTitle}
          formSubtitle={data.formSubtitle}
          formEmail={data.formEmail}
          submitButtonText={data.submitButtonText}
          subjectOptions={data.subjectOptions}
        />
        <ContactLocationBlock
          locationTitle={data.locationTitle}
          locationIntro={data.locationIntro}
          mapEmbedUrl={data.mapEmbedUrl}
        />
        <ContactSocialBlock
          socialTitle={data.socialTitle}
          socialIntro={data.socialIntro}
          socialLinks={data.socialLinks}
        />
      </div>
    </div>
  )
}
