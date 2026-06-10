'use client'

import Link from 'next/link'
import React from 'react'

export function AtcCreateFirstUserBlocked() {
  return (
    <div className="atc-create-first-user-blocked">
      <h1 className="atc-create-first-user-blocked__title">Admin access is restricted</h1>
      <p className="atc-create-first-user-blocked__body">
        CMS accounts are created by an administrator or automatically during deployment. Public
        registration is not available.
      </p>
      <p className="atc-create-first-user-blocked__body">
        If you are setting up this site, ensure <code>SEED_ADMIN_EMAIL</code> and{' '}
        <code>SEED_ADMIN_PASSWORD</code> are configured in the server environment and redeploy.
      </p>
      <Link className="atc-create-first-user-blocked__link" href="/">
        Return to website
      </Link>
    </div>
  )
}
