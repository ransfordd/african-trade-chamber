import type { MembershipCategory } from '@/types/content'

type Props = {
  category: MembershipCategory
}

export function MembershipCategoryCard({ category }: Props) {
  return (
    <article className="rounded-lg border border-atc-navy/10 bg-white p-6 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-atc-navy/10 pb-4">
        <h2 className="text-xl font-bold text-atc-navy">{category.title}</h2>
        <div className="text-right">
          <p className="text-2xl font-bold text-atc-navy">{category.annualFee}</p>
          <p className="text-xs uppercase tracking-wide text-atc-navy/60">{category.feePeriod}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-atc-navy/80">{category.description}</p>
      <div className="mt-4">
        <h3 className="text-sm font-semibold uppercase text-atc-navy">Benefits</h3>
        <p className="mt-2 text-sm leading-relaxed text-atc-navy/80">{category.benefits}</p>
      </div>
    </article>
  )
}
