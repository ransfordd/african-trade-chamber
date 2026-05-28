import Link from 'next/link'
import type { CareerJob } from '@/types/career-job'

type Props = { job: CareerJob }

function Section({ title, html }: { title: string; html?: string }) {
  if (!html) return null
  return (
    <section className="border-b border-slate-200 px-6 py-8 last:border-b-0 md:px-10">
      <h2 className="mb-4 inline-block border-b-[3px] border-[#fbbf24] pb-2 text-sm font-bold uppercase tracking-wider text-[#002740]">
        {title}
      </h2>
      <div className="prose prose-sm max-w-none text-slate-800" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}

export function CareerJobDetail({ job }: Props) {
  return (
    <article className="mx-auto max-w-[920px] px-4 py-8">
      <Link href="/careers" className="mb-6 inline-flex text-sm font-semibold text-[#002740] hover:text-[#fbbf24]">
        ← Back to Job Postings
      </Link>

      <header className="relative mb-7 overflow-hidden rounded-2xl bg-gradient-to-br from-[#002740] to-[#003a5c] px-8 py-10 text-white shadow-lg">
        <h1 className="mb-1 text-3xl font-extrabold md:text-4xl">{job.title}</h1>
        <p className="text-xs font-semibold uppercase tracking-widest opacity-85">{job.jobId}</p>
        <div className="mt-6 flex flex-wrap gap-6 border-t border-white/20 pt-5 text-sm">
          <span>
            <span className="opacity-80">Location</span> {job.location}
          </span>
          <span>
            <span className="opacity-80">Type</span> {job.jobType}
          </span>
          {job.deadline ? (
            <span>
              <span className="opacity-80">Deadline</span> {job.deadline}
            </span>
          ) : null}
        </div>
        <a
          href={job.applyUrl}
          className="mt-5 inline-flex rounded-xl bg-[#fbbf24] px-4 py-3 font-bold text-slate-900 no-underline hover:bg-amber-400"
        >
          Apply
        </a>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
        <div className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white px-6 py-8 md:px-10">
          <p className="text-lg leading-relaxed">{job.summary}</p>
        </div>
        <Section title="Role" html={job.roleHtml} />
        <Section title="Key Responsibilities" html={job.responsibilitiesHtml} />
        <Section title="About the African Trade Chamber" html={job.aboutHtml} />
        <Section title="Qualifications and Experience" html={job.qualificationsHtml} />
        <Section title="Core Competencies" html={job.competenciesHtml} />
        {job.locationScope ? <Section title="Location and Scope" html={job.locationScope} /> : null}
        {job.appointment ? <Section title="Nature of Appointment" html={job.appointment} /> : null}
        <Section title="Application Requirements" html={job.requirementsHtml} />
        <Section title="Selection Process" html={job.processHtml} />
        {job.deadline ? (
          <section className="px-6 py-8 md:px-10">
            <h2 className="mb-4 inline-block border-b-[3px] border-[#fbbf24] pb-2 text-sm font-bold uppercase tracking-wider text-[#002740]">
              Application Deadline
            </h2>
            <div className="rounded-xl border border-[#fbbf24] bg-amber-50 px-6 py-4">
              <p className="m-0 text-lg font-bold text-[#002740]">{job.deadline}</p>
            </div>
          </section>
        ) : null}
      </div>
    </article>
  )
}
