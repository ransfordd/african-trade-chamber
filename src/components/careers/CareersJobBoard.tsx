'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { getRelativePostedLabel } from '@/lib/careers-utils'
import type { CareerJob } from '@/types/career-job'

type Props = { jobs: CareerJob[] }

function HtmlBlock({ html }: { html?: string }) {
  if (!html) return null
  return <div className="text-sm leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ __html: html }} />
}

function CareersPromoSidebar() {
  return (
    <div className="sticky top-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md">
      <div className="mb-4 rounded-xl bg-[#08304e] px-4 py-4 text-center text-lg font-extrabold text-white">
        Join the Team!
      </div>
      <h3 className="mb-2 font-bold">About ATC</h3>
      <p className="mb-2 text-sm text-slate-600">
        At ATC, we&apos;re dedicated to changing the trajectory of trade and industry across Africa. We bring
        together businesses, institutions, and partners to unlock growth, create jobs, and strengthen regional
        value chains.
      </p>
      <div className="mt-4 border-t border-dashed border-slate-200 pt-3 text-sm text-slate-600">
        <p className="font-bold">Questions?</p>
        <p>If you still have questions around hiring at ATC, please email:</p>
        <a href="mailto:jobs@africantradechamber.org" className="font-semibold text-[#002740] hover:text-[#fbbf24]">
          jobs@africantradechamber.org
        </a>
      </div>
    </div>
  )
}

export function CareersJobBoard({ jobs }: Props) {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [timeType, setTimeType] = useState('')
  const [category, setCategory] = useState('')
  const [selected, setSelected] = useState<CareerJob | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return jobs.filter((job) => {
      if (location && job.location !== location) return false
      if (timeType && job.jobType !== timeType) return false
      if (category && job.category !== category) return false
      if (!q) return true
      const hay = `${job.title} ${job.summary} ${job.jobId}`.toLowerCase()
      return hay.includes(q)
    })
  }, [jobs, query, location, timeType, category])

  useEffect(() => {
    if (selected && !filtered.some((j) => j.slug === selected.slug)) {
      setSelected(null)
    }
  }, [filtered, selected])

  const selectJob = useCallback((job: CareerJob) => {
    setSelected(job)
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches) {
      window.setTimeout(() => {
        document.getElementById('job-detail-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [])

  const locations = useMemo(() => [...new Set(jobs.map((j) => j.location))], [jobs])
  const categories = useMemo(() => [...new Set(jobs.map((j) => j.category))], [jobs])

  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-6">
      <div className="mx-auto max-w-[1200px] px-3">
        <div className="mb-4 flex min-h-[180px] flex-wrap items-center justify-between gap-6 overflow-hidden rounded-2xl bg-[#002740] px-8 py-12 text-white shadow-lg">
          <div className="flex min-w-0 items-center gap-6">
            <div className="flex gap-3 opacity-50">
              {[0, 1, 2].map((i) => (
                <span key={i} className="inline-block h-11 w-11 skew-x-[-20deg] rounded-lg bg-white/20" />
              ))}
            </div>
            <h1 className="m-0 text-4xl font-extrabold tracking-tight md:text-5xl">Make it a Career</h1>
          </div>
        </div>

        <div className="mb-4 grid gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-md md:grid-cols-[1fr_auto] md:items-start">
          <input
            type="text"
            placeholder="Search for jobs or keywords"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-3 text-sm"
          />
          <div className="flex flex-wrap gap-2">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm"
            >
              <option value="">Location</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <select
              value={timeType}
              onChange={(e) => setTimeType(e.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm"
            >
              <option value="">Time Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm"
            >
              <option value="">Job Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="rounded-lg bg-[#002740] px-4 py-2.5 text-sm font-bold text-white"
              onClick={() => {}}
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[5fr_4fr]">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              {filtered.length} job{filtered.length === 1 ? '' : 's'} found
            </p>
            {filtered.map((job) => (
              <button
                key={job.slug}
                type="button"
                onClick={() => selectJob(job)}
                className={`mb-3 w-full rounded-lg border bg-white p-4 text-left shadow-sm transition hover:border-slate-300 ${
                  selected?.slug === job.slug ? 'border-slate-400 ring-2 ring-slate-900/10' : 'border-slate-200'
                }`}
              >
                <p className="mb-1 text-base font-bold text-[#002740]">{job.title}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span>📍 {job.location}</span>
                  <span>🕒 {getRelativePostedLabel(job.postedAt)}</span>
                  <span>{job.category}</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{job.jobId}</p>
              </button>
            ))}
            <p className="py-4 text-center text-sm text-slate-500">That&apos;s all for now</p>
          </div>

          <aside>
            {selected ? (
              <div
                id="job-detail-panel"
                className="sticky top-3 rounded-lg border border-slate-200 bg-white p-5 shadow-md"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h2 className="m-0 min-w-0 flex-1 text-2xl font-bold leading-tight">{selected.title}</h2>
                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href={selected.applyUrl}
                      className="rounded-lg bg-[#002740] px-3 py-2 text-sm font-semibold text-white"
                    >
                      Apply
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="rounded-lg px-2 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100"
                      aria-label="Close job details"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-2 rounded-lg border border-dashed border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
                  <span>📍 {selected.location}</span>
                  <span>🕒 {getRelativePostedLabel(selected.postedAt)}</span>
                  <span>{selected.jobType}</span>
                  <span>{selected.jobId}</span>
                </div>
                <div className="max-h-[400px] space-y-4 overflow-y-auto pr-2">
                  <p className="text-sm text-slate-600">{selected.summary}</p>
                  {selected.roleHtml ? (
                    <div>
                      <h3 className="mb-2 font-bold">Role</h3>
                      <HtmlBlock html={selected.roleHtml} />
                    </div>
                  ) : null}
                  {selected.responsibilitiesHtml ? (
                    <div>
                      <h3 className="mb-2 font-bold">Key Responsibilities</h3>
                      <HtmlBlock html={selected.responsibilitiesHtml} />
                    </div>
                  ) : null}
                  {selected.aboutHtml ? (
                    <div>
                      <h3 className="mb-2 font-bold">About ATC</h3>
                      <HtmlBlock html={selected.aboutHtml} />
                    </div>
                  ) : null}
                  {selected.qualificationsHtml ? (
                    <div>
                      <h3 className="mb-2 font-bold">Qualifications</h3>
                      <HtmlBlock html={selected.qualificationsHtml} />
                    </div>
                  ) : null}
                  {selected.deadline ? (
                    <p className="text-sm">
                      <strong>Deadline:</strong> {selected.deadline}
                    </p>
                  ) : null}
                  <Link href={`/careers/${selected.slug}`} className="font-semibold text-[#002740] hover:text-[#fbbf24]">
                    Read more →
                  </Link>
                </div>
              </div>
            ) : (
              <CareersPromoSidebar />
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
