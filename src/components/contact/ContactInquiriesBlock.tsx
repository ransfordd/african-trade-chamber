import type { ReactNode } from 'react'
import {
  IconBuilding,
  IconClock,
  IconComment,
  IconEnvelope,
  IconPhone,
} from '@/components/contact/ContactIcons'
import type { ContactPageData } from '@/types/contact-page'

type Props = Pick<
  ContactPageData,
  'email' | 'phone' | 'address' | 'officeHours' | 'formBlurbTitle' | 'formBlurbText'
>

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex h-full flex-col items-center rounded-lg bg-white px-4 py-[18px] text-center shadow-[0_5px_15px_rgba(0,39,64,0.08)] transition hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,39,64,0.12)]">
      <div className="mb-3 text-[#e6b14a]">{icon}</div>
      <div className="mb-2 text-base font-semibold text-[#002740]">{label}</div>
      <div className="text-base leading-relaxed text-[#4a4a4a]">{children}</div>
    </div>
  )
}

export function ContactInquiriesBlock({
  email,
  phone,
  address,
  officeHours,
  formBlurbTitle,
  formBlurbText,
}: Props) {
  const addressLines = address.split('\n').filter(Boolean)

  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)]">
      <div className="p-5 md:p-[25px]">
        <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <InfoCard icon={<IconEnvelope className="h-6 w-6" />} label="Email:">
            <a href={`mailto:${email}`} className="font-medium text-[#002740] hover:text-[#e6b14a]">
              {email}
            </a>
          </InfoCard>
          <InfoCard icon={<IconPhone className="h-6 w-6" />} label="Phone:">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="font-medium text-[#002740] hover:text-[#e6b14a]">
              {phone}
            </a>
          </InfoCard>
          <InfoCard icon={<IconBuilding className="h-6 w-6" />} label="Head Office:">
            <address className="not-italic">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </InfoCard>
          <InfoCard icon={<IconClock className="h-6 w-6" />} label="Office Hours:">
            {officeHours.split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </InfoCard>
        </div>

        <div className="rounded-[10px] bg-[rgba(0,39,64,0.1)] p-6 text-center md:p-[25px]">
          <div className="mb-2 flex items-center justify-center gap-2 text-lg font-semibold text-[#002740]">
            <IconComment className="h-5 w-5 text-[#e6b14a]" />
            {formBlurbTitle}
          </div>
          <p className="text-base leading-relaxed text-[#4a4a4a]">{formBlurbText}</p>
        </div>
      </div>
    </article>
  )
}
