import Link from 'next/link'

export const metadata = {
  title: '2026 Cohort | Future Trade Leaders Fellowship',
  description:
    'When the 2026 Future Trade Leaders Fellowship cohort is confirmed, the full roster will be published here.',
}

export default function Fellowship2026CohortPage() {
  return (
    <div className="bg-[#f4f6f9] py-8 text-slate-900">
      <div className="mx-auto max-w-[1180px] px-6 pb-14">
        <Link
          href="/fellowship"
          className="text-[15px] font-semibold text-[#002740] no-underline hover:underline"
        >
          ← Future Trade Leaders Fellowship
        </Link>
        <h1 className="mt-4 text-[clamp(26px,3vw,34px)] font-bold text-[#002740]">
          2026 cohort — full list
        </h1>
        <p className="mt-2 max-w-[65ch] text-[17px] text-slate-600">
          When the 2026 cohort is confirmed, publish the full roster on this page. Until then, use
          this page as the destination for the fellowship card link.
        </p>
        <div className="mt-7 rounded-2xl border border-slate-200 bg-white px-8 py-7 shadow-[0_8px_28px_rgba(2,6,23,0.06)]">
          <h2 className="mb-4 inline-block border-b-[3px] border-[#e6b422] pb-2.5 text-sm font-bold uppercase tracking-wider text-[#002740]">
            Cohort roster
          </h2>
          <p className="m-0 text-base text-slate-600">
            No public list has been added yet. Paste your HTML list or connect your data source in
            this section.
          </p>
        </div>
      </div>
    </div>
  )
}
