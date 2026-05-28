'use client'

import { useNav } from '@payloadcms/ui'
import { useEffect } from 'react'

/** Keep the collections/globals sidebar open on desktop. */
export function AtcAdminOpenNav() {
  const { hydrated, setNavOpen } = useNav()

  useEffect(() => {
    if (!hydrated) return

    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => {
      if (mq.matches) setNavOpen(true)
    }

    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [hydrated, setNavOpen])

  return null
}
