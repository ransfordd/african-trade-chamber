import { SponsorshipBenefitsList } from '@/components/events/sponsorship/SponsorshipBenefitsList'
import type { SponsorTier } from '@/types/sponsorship-page'

type Props = { tier: SponsorTier }

export function SponsorTierCard({ tier }: Props) {
  const isPlatinum = tier.variant === 'platinum'

  return (
    <article
      className={`rounded-xl bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] ${
        isPlatinum ? 'bg-gradient-to-br from-[#f9fafb] to-white' : ''
      }`}
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-[1.1rem] font-semibold text-black">{tier.title}</p>
          <p className="mt-2 text-base text-black">
            Investment:{' '}
            {tier.id === 'supporting' && tier.limit ? (
              <>
                {tier.limit}{' '}
                <span className="inline-block rounded-full border-2 border-[#fbbf24] bg-[#002740] px-2.5 py-0.5 text-sm font-bold text-[#fbbf24] shadow-sm">
                  {tier.price}
                </span>
              </>
            ) : (
              <>
                <span className="inline-block rounded-full border-2 border-[#fbbf24] bg-[#002740] px-2.5 py-0.5 text-sm font-bold text-[#fbbf24] shadow-sm">
                  {tier.price}
                </span>
                {tier.limit ? <span className="ml-1">| {tier.limit}</span> : null}
              </>
            )}
          </p>
        </div>
        {tier.exclusive ? (
          <span className="rounded-full bg-[#fbbf24] px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase text-[#002740]">
            Exclusive
          </span>
        ) : null}
      </div>
      <SponsorshipBenefitsList benefits={tier.benefits} />
    </article>
  )
}
