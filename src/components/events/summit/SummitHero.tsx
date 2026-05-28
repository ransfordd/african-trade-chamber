'use client'

import { useEffect, useState } from 'react'
import type { SummitHeroData } from '@/types/africa-trade-summit'

type Props = { data: SummitHeroData }

type Countdown = {
  days: string
  hours: string
  minutes: string
  seconds: string
  ended: boolean
}

function computeCountdown(eventTime: number): Countdown {
  const now = Date.now()
  const timeLeft = eventTime - now

  if (timeLeft < 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', ended: true }
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    ended: false,
  }
}

export function SummitHero({ data }: Props) {
  const eventTime = new Date(data.eventDateIso).getTime()
  const [countdown, setCountdown] = useState<Countdown>(() => computeCountdown(eventTime))

  useEffect(() => {
    const tick = () => setCountdown(computeCountdown(eventTime))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [eventTime])

  return (
    <section
      className="relative flex min-h-[500px] max-h-[650px] w-full items-center justify-center overflow-hidden py-5 md:min-h-[500px] md:max-h-[650px]"
      style={{
        backgroundImage: `linear-gradient(rgba(10,22,40,0.85), rgba(26,35,50,0.8), rgba(45,55,72,0.85), rgba(26,54,93,0.9)), url('${data.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-black/30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(218,165,32,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-5 py-8 text-center text-white md:px-8">
        <h1 className="mb-4 font-serif text-[clamp(1.8rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-white drop-shadow-lg">
          {data.title}
        </h1>

        <div className="mb-6">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-[#DAA520]">
            {data.themeLabel}
          </p>
          <div className="mx-auto mb-3 h-px w-10 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent" />
          <p className="mx-auto max-w-[600px] text-[clamp(0.9rem,2vw,1.1rem)] font-medium leading-snug text-white/90">
            {data.themeText}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-5 md:gap-6">
          <InfoCard label={data.whenLabel} value={data.whenValue} sub={data.whenSubtext} />
          <InfoCard label={data.whereLabel} value={data.whereValue} sub={data.whereSubtext} />
        </div>

        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[#DAA520]">
            Event Countdown
          </p>
          {countdown.ended ? (
            <div className="inline-block rounded-[10px] border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl">
              <span className="text-2xl font-extrabold text-[#DAA520]">Event Started!</span>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {(
                [
                  ['Days', countdown.days],
                  ['Hours', countdown.hours],
                  ['Minutes', countdown.minutes],
                  ['Seconds', countdown.seconds],
                ] as const
              ).map(([label, value]) => (
                <div
                  key={label}
                  className="min-w-[70px] rounded-[10px] border border-white/20 bg-white/[0.12] px-2.5 py-3 text-center shadow-lg backdrop-blur-xl transition-transform hover:scale-105"
                >
                  <span className="block text-2xl font-extrabold leading-none text-[#DAA520]">
                    {value}
                  </span>
                  <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-wide text-white/80">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="group relative min-w-[160px] overflow-hidden rounded-[14px] border border-white/20 bg-white/10 px-5 py-4 shadow-lg backdrop-blur-xl transition-all hover:-translate-y-2 hover:bg-white/[0.15]">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[#DAA520]">{label}</p>
      <p className="text-base font-semibold leading-tight text-white">{value}</p>
      <p className="mt-1 text-[13px] text-white/70">{sub}</p>
    </div>
  )
}
