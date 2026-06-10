'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import './hero-slides-list-banner.scss'

type PinnedNews = {
  id: number | string
  title: string
  heroSideImage?: unknown
}

function hasHeroSideImage(heroSideImage: unknown): boolean {
  if (heroSideImage == null || heroSideImage === '') return false
  if (typeof heroSideImage === 'number') return true
  if (typeof heroSideImage === 'object') return true
  return false
}

export function HeroSlidesListBanner() {
  const [pinned, setPinned] = useState<PinnedNews | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const params = new URLSearchParams({
          limit: '1',
          depth: '1',
          'where[showInHomeHero][equals]': 'true',
        })
        const res = await fetch(`/api/news?${params.toString()}`, { credentials: 'include' })
        if (!res.ok) return
        const json = (await res.json()) as { docs?: PinnedNews[] }
        if (!cancelled) {
          setPinned(json.docs?.[0] ?? null)
        }
      } finally {
        if (!cancelled) setLoaded(true)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  if (!loaded) {
    return null
  }

  const sideImageSet = pinned ? hasHeroSideImage(pinned.heroSideImage) : false

  return (
    <div className="hero-slides-list-banner">
      <p className="hero-slides-list-banner__title">Homepage hero — slide 1</p>
      {pinned ? (
        <>
          <p className="hero-slides-list-banner__body">
            Currently showing news story:{' '}
            <Link
              className="hero-slides-list-banner__link"
              href={`/admin/collections/news/${pinned.id}`}
            >
              {pinned.title}
            </Link>
            . Uncheck &quot;Display in homepage hero&quot; on that post to use the fallback slide
            (order&nbsp;0) below.
          </p>
          {sideImageSet ? (
            <p className="hero-slides-list-banner__body">Hero side image: set.</p>
          ) : (
            <p className="hero-slides-list-banner__body hero-slides-list-banner__body--warn">
              No hero side image — the right thumbnail will not appear until you upload one on the{' '}
              <Link
                className="hero-slides-list-banner__link"
                href={`/admin/collections/news/${pinned.id}`}
              >
                news post
              </Link>
              .
            </p>
          )}
        </>
      ) : (
        <p className="hero-slides-list-banner__body">
          No news story is pinned. Slide&nbsp;1 uses the <strong>fallback slide</strong> (order
          &nbsp;0). Pin a story from <Link href="/admin/collections/news">News</Link> to replace it.
        </p>
      )}
      <p className="hero-slides-list-banner__hint">
        Order <strong>0</strong> = fallback slide&nbsp;1. Order <strong>1+</strong> = carousel
        slides&nbsp;2, 3, …
      </p>
    </div>
  )
}
