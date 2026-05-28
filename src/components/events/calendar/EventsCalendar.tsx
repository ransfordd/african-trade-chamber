'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { CalendarEvent } from '@/types/events-calendar'

type Props = {
  headerTitle: string
  headerSubtitle: string
  events: CalendarEvent[]
}

type Cell = {
  day: number
  outside: boolean
  date: Date
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function formatMonthYear(d: Date) {
  return d.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
}

function getMonthMatrix(year: number, month: number): Cell[] {
  const first = new Date(year, month, 1)
  const startDay = first.getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()
  const cells: Cell[] = []
  const prevMonthLast = new Date(year, month, 0).getDate()

  for (let i = 0; i < startDay; i++) {
    cells.push({
      day: prevMonthLast - (startDay - 1 - i),
      outside: true,
      date: new Date(year, month - 1, prevMonthLast - (startDay - 1 - i)),
    })
  }
  for (let d = 1; d <= totalDays; d++) {
    cells.push({ day: d, outside: false, date: new Date(year, month, d) })
  }
  while (cells.length % 7 !== 0) {
    const nextDay = cells.length - (startDay + totalDays) + 1
    cells.push({ day: nextDay, outside: true, date: new Date(year, month + 1, nextDay) })
  }
  return cells
}

export function EventsCalendar({ headerTitle, headerSubtitle, events }: Props) {
  const [current, setCurrent] = useState(() => new Date())

  const eventMap = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {}
    for (const e of events) {
      if (!map[e.date]) map[e.date] = []
      map[e.date].push(e)
    }
    return map
  }, [events])

  const cells = getMonthMatrix(current.getFullYear(), current.getMonth())
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] text-black">
      <div className="mx-auto max-w-[1200px] px-5 py-10">
        <header className="rounded-xl bg-[#002740] px-5 py-7 text-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
          <h1 className="text-[2rem] font-bold tracking-tight">{headerTitle}</h1>
          <p className="mt-2 font-normal opacity-90">{headerSubtitle}</p>
        </header>

        <div className="my-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
          <div className="order-2 flex gap-2 sm:order-1">
            <button
              type="button"
              className="flex-1 rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 text-sm font-semibold text-[#002740] shadow-sm transition hover:-translate-y-px sm:flex-none"
              onClick={() =>
                setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1))
              }
            >
              ◀ Prev
            </button>
            <button
              type="button"
              className="flex-1 rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 text-sm font-semibold text-[#002740] shadow-sm transition hover:-translate-y-px sm:flex-none"
              onClick={() => setCurrent(new Date())}
            >
              Today
            </button>
            <button
              type="button"
              className="flex-1 rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 text-sm font-semibold text-[#002740] shadow-sm transition hover:-translate-y-px sm:flex-none"
              onClick={() =>
                setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1))
              }
            >
              Next ▶
            </button>
          </div>
          <p className="order-1 text-center text-xl font-semibold text-[#002740] sm:order-2">
            {formatMonthYear(current)}
          </p>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-[0_15px_30px_rgba(0,39,64,0.1)]">
          <div className="grid grid-cols-7 border-b border-[#eee] bg-[#fafafa]">
            {dayNames.map((d) => (
              <div
                key={d}
                className="px-2 py-3 text-right text-sm font-semibold text-[#334155] max-[700px]:text-center"
              >
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {cells.map((c, idx) => {
              const key = `${c.date.getFullYear()}-${pad(c.date.getMonth() + 1)}-${pad(c.date.getDate())}`
              const dayEvents = eventMap[key] || []
              const imgEv = dayEvents.find((e) => e.image)
              const cellLink = imgEv?.url || dayEvents[0]?.url

              return (
                <div
                  key={`${key}-${idx}`}
                  className={`relative aspect-square min-h-[100px] border-b border-r border-[#f1f5f9] p-2.5 max-[600px]:min-h-0 ${
                    c.outside ? 'bg-white/60' : 'bg-white'
                  } ${imgEv ? 'bg-cover bg-center bg-no-repeat p-0' : ''}`}
                  style={imgEv?.image ? { backgroundImage: `url('${imgEv.image}')` } : undefined}
                >
                  {imgEv && cellLink ? (
                    <Link
                      href={cellLink}
                      className="absolute inset-0 z-[5] overflow-hidden indent-[-9999px]"
                      aria-label={imgEv.title}
                    >
                      {imgEv.title}
                    </Link>
                  ) : null}
                  {imgEv ? (
                    <span
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 to-black/25"
                      aria-hidden
                    />
                  ) : null}
                  <span
                    className={`absolute right-2.5 top-2.5 z-[3] text-sm font-semibold ${
                      c.outside ? 'text-[#cbd5e1]' : imgEv ? 'rounded-md bg-black/45 px-1.5 py-0.5 text-white' : 'text-[#0f172a]'
                    } max-[600px]:right-1.5 max-[600px]:top-1.5`}
                  >
                    {c.day}
                  </span>
                  {dayEvents.length > 0 ? (
                    <div
                      className={`z-[3] flex flex-col gap-1.5 ${
                        imgEv
                          ? 'absolute bottom-2 left-2 right-2 m-0'
                          : 'mt-7'
                      }`}
                    >
                      {dayEvents.map((ev) =>
                        imgEv ? (
                          <span
                            key={ev.title}
                            className="block truncate text-xs text-white hover:text-[#ffcc00]"
                          >
                            {ev.title}
                          </span>
                        ) : (
                          <Link
                            key={ev.title}
                            href={ev.url}
                            className="flex items-center gap-2 rounded-lg border-l-4 border-[#ffcc00] bg-[rgba(255,249,219,0.94)] px-2.5 py-1.5 text-xs leading-snug text-[#0f172a] no-underline hover:text-[#a16207]"
                          >
                            <span className="h-2 w-2 shrink-0 rounded-full bg-[#ffcc00]" aria-hidden />
                            <span className="line-clamp-2">{ev.title}</span>
                          </Link>
                        ),
                      )}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3.5 text-sm text-[#475569]">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm border-l-4 border-[#ffcc00] bg-[#fff9db]" />
            ATC Event
          </span>
        </div>
      </div>
    </div>
  )
}
