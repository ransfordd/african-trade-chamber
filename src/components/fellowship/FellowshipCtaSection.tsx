import Link from 'next/link'
import type { FellowshipCtaData, FellowshipCtaListItem } from '@/types/fellowship'

type Props = {
  cta: FellowshipCtaData
}

function CtaList({ items }: { items: FellowshipCtaListItem[] }) {
  return (
    <ul className="m-0 mb-4 list-none p-0">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative mb-3 pl-[22px] text-slate-900 last:mb-0 before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-[#e6b422] before:content-['']"
        >
          {typeof item === 'string' ? (
            item
          ) : (
            <>
              <strong>{item.title}</strong>
              {item.body ? (
                <>
                  <br />
                  {item.body}
                </>
              ) : null}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.startsWith('233') && digits.length >= 12) {
    return `+233 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`
  }
  return phone
}

export function FellowshipCtaSection({ cta }: Props) {
  const phoneDisplay = formatPhoneDisplay(cta.contactPhone)

  return (
    <section
      className="rounded-[18px] border border-slate-200 bg-white px-6 py-9 shadow-[0_24px_48px_rgba(2,6,23,0.1)] sm:px-11 sm:py-11"
      aria-labelledby="cfa-heading"
    >
      <h2
        id="cfa-heading"
        className="m-0 mb-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#002740]"
      >
        {cta.eyebrow}
      </h2>
      <p className="m-0 mb-2 text-[clamp(24px,3vw,32px)] font-extrabold leading-tight text-[#002740]">
        {cta.title}
      </p>
      <p className="mb-7 text-[17px] font-semibold text-slate-600">{cta.tagline}</p>

      {cta.sections.map((section) => (
        <div key={section.heading}>
          <h3 className="mb-3 mt-7 inline-block border-b-[3px] border-[#e6b422] pb-2 text-sm font-bold uppercase tracking-[0.07em] text-[#002740] first:mt-0">
            {section.heading}
          </h3>
          {section.paragraphs?.map((p, i) => (
            <p key={i} className="mb-3.5 text-slate-900 last:mb-4">
              {section.heading === 'Deadline' ? (
                <>
                  Applications must be submitted by <strong>30th May, 2026</strong>
                </>
              ) : section.heading === 'Contact Information' ? (
                <>
                  For inquiries or further information about the Future Trade Leaders Fellowship
                  Program, please contact the African Trade Chamber on{' '}
                  <a href={`tel:${cta.contactPhone}`} className="font-semibold text-[#002740] hover:text-[#004a6e]">
                    {phoneDisplay}
                  </a>{' '}
                  or email us at{' '}
                  <a
                    href={`mailto:${cta.contactEmail}`}
                    className="font-semibold text-[#002740] hover:text-[#004a6e]"
                  >
                    {cta.contactEmail}
                  </a>
                  .
                </>
              ) : (
                p
              )}
            </p>
          ))}
          {section.labeledParagraphs?.map((block, i) => (
            <p key={i} className="mb-3.5 text-slate-900">
              <strong>{block.label}</strong> {block.text}
            </p>
          ))}
          {section.listItems?.length ? <CtaList items={section.listItems} /> : null}
        </div>
      ))}

      <div className="mt-8 border-t border-slate-200 pt-6">
        {cta.footerParagraphs.map((line, i) => (
          <p key={i} className="mb-3 text-[17px] font-semibold text-[#002740] last:mb-0">
            {line}
          </p>
        ))}
        <div className="mt-7 border-t border-slate-200 pt-7 text-center">
          <Link
            href={cta.applyUrl}
            className="inline-block rounded-xl bg-[#002740] px-8 py-3.5 text-base font-bold text-white shadow-[0_8px_22px_rgba(0,39,64,0.22)] transition hover:-translate-y-px hover:bg-[#003a5c] hover:shadow-[0_12px_28px_rgba(0,39,64,0.28)]"
          >
            Apply
          </Link>
        </div>
      </div>
    </section>
  )
}
