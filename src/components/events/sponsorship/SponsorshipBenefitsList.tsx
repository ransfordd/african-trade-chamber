import { parseBenefitsLines } from '@/lib/parse-benefits-lines'

type Props = {
  benefits: string
  className?: string
}

export function SponsorshipBenefitsList({ benefits, className = '' }: Props) {
  const items = parseBenefitsLines(benefits)

  return (
    <ul className={`list-none space-y-1.5 p-0 ${className}`}>
      {items.map((item, i) => (
        <li key={`${i}-${item.text.slice(0, 24)}`} className="relative pl-5 text-sm leading-snug text-black">
          <span className="absolute left-0 text-lg font-bold text-[#fbbf24]" aria-hidden>
            ·
          </span>
          <span>{item.text}</span>
          {item.nested?.length ? (
            <ul className="ml-4 mt-2 list-none space-y-0.5 p-0">
              {item.nested.map((nested) => (
                <li key={nested} className="relative pl-4 text-[13px] text-black">
                  <span className="absolute left-0 text-[#fbbf24]" aria-hidden>
                    ·
                  </span>
                  {nested}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
