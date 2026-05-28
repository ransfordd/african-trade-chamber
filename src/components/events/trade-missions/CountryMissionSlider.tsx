'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import type { CountryMissionLink } from '@/types/trade-missions-page'

type Props = { countries: CountryMissionLink[] }

export function CountryMissionSlider({ countries }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    const slider = sliderRef.current
    if (!track || !slider) return

    const stepSize = () => {
      const card = track.querySelector<HTMLElement>('[data-country-card]')
      const cardWidth = card ? card.getBoundingClientRect().width : 240
      const gap = parseFloat(getComputedStyle(track).gap) || 16
      const visible = slider.getBoundingClientRect().width
      return Math.max(cardWidth + gap, Math.floor(visible - gap))
    }

    const slideNext = () => {
      const maxScroll = track.scrollWidth - track.clientWidth
      const nextLeft = track.scrollLeft + stepSize()
      if (nextLeft >= maxScroll - 4) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollTo({ left: nextLeft, behavior: 'smooth' })
      }
    }

    let timer = setInterval(slideNext, 5000)
    const pause = () => clearInterval(timer)
    const resume = () => {
      timer = setInterval(slideNext, 5000)
    }
    slider.addEventListener('mouseenter', pause)
    slider.addEventListener('mouseleave', resume)
    return () => {
      clearInterval(timer)
      slider.removeEventListener('mouseenter', pause)
      slider.removeEventListener('mouseleave', resume)
    }
  }, [countries])

  return (
    <div ref={sliderRef} className="relative mt-3 overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-1.5 scroll-smooth [scrollbar-width:thin]"
      >
        {countries.map((c) => (
          <Link
            key={c.name}
            href={c.href}
            data-country-card
            className="relative block h-[220px] w-[240px] shrink-0 snap-start overflow-hidden rounded-xl bg-cover bg-center shadow-[0_12px_24px_rgba(0,39,64,0.1)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(0,0,0,0.18)]"
            style={{ backgroundImage: `url('${c.flagUrl}')` }}
          >
            <span
              className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/45"
              aria-hidden
            />
            <span className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
              <span className="block text-[1.05rem] font-bold leading-tight">{c.name}</span>
              <span className="block text-sm opacity-90">{c.subtitle}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
