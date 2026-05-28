import { MembershipApplicationForm } from '@/components/membership/apply/MembershipApplicationForm'
import { APPLY_INTRO } from '@/lib/membership-apply-data'

export function MembershipApplyPageSection() {
  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-8 sm:py-10">
      <div className="mx-auto max-w-[920px] px-4 sm:px-6">
        <article className="overflow-hidden rounded-2xl bg-white shadow-[0_15px_40px_rgba(0,39,64,0.1)]">
          <header className="border-b border-slate-100 bg-[#002740] px-6 py-8 text-center text-white sm:px-10 sm:py-9">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e6b14a]">
              African Trade Chamber
            </p>
            <h1 className="text-2xl font-bold leading-tight sm:text-[1.75rem]">{APPLY_INTRO.title}</h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-[15px]">
              {APPLY_INTRO.tagline}
            </p>
            <p className="mx-auto mt-3 max-w-lg text-xs italic text-white/70 sm:text-sm">
              {APPLY_INTRO.note}
            </p>
          </header>

          <MembershipApplicationForm />
        </article>
      </div>
    </div>
  )
}
