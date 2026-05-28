'use client'

import React from 'react'

const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

const quickLinks = [
  { href: '/', label: 'View live site' },
  { href: '/admin/globals/site-settings', label: 'Site settings' },
  { href: '/admin/account', label: 'My account' },
]

export function AtcAdminTopBar() {
  return (
    <div className="atc-admin-top-bar" role="banner">
      <div className="atc-admin-top-bar__utility">
        <span className="atc-admin-top-bar__brand">African Trade Chamber — Content Admin</span>
        <a className="atc-admin-top-bar__utility-link" href={siteUrl} target="_blank" rel="noopener noreferrer">
          Open website ↗
        </a>
      </div>
      <nav className="atc-admin-top-bar__nav" aria-label="Admin quick links">
        {quickLinks.map((link) => (
          <a key={link.href} className="atc-admin-top-bar__nav-link" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
