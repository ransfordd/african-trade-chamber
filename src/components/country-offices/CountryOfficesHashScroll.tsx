'use client'

import { useEffect } from 'react'

function scrollToCountryHash(hash: string) {
  const id = hash.replace(/^#/, '')
  if (!id) return
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/** Scrolls to a country office card when the URL hash matches its id (e.g. from About menu). */
export function CountryOfficesHashScroll() {
  useEffect(() => {
    const run = () => scrollToCountryHash(window.location.hash)
    run()
    const t = window.setTimeout(run, 100)
    window.addEventListener('hashchange', run)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('hashchange', run)
    }
  }, [])

  return null
}
