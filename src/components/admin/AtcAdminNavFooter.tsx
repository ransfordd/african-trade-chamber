'use client'

import React from 'react'

const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export function AtcAdminNavFooter() {
  return (
    <footer className="atc-admin-nav-footer">
      <p className="atc-admin-nav-footer__title">African Trade Chamber</p>
      <p className="atc-admin-nav-footer__hint">
        Tip: use the <strong>☰</strong> button if the menu is hidden on a small screen.
      </p>
      <a className="atc-admin-nav-footer__link" href={siteUrl} target="_blank" rel="noopener noreferrer">
        View public website
      </a>
      <p className="atc-admin-nav-footer__copy">© {new Date().getFullYear()} African Trade Chamber</p>
    </footer>
  )
}
