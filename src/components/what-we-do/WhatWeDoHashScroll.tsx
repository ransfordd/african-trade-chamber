'use client'

import { useEffect } from 'react'

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, '')
  if (!id) return
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function WhatWeDoHashScroll() {
  useEffect(() => {
    const run = () => scrollToHash(window.location.hash)
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
