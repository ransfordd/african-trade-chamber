import React from 'react'

import { LOGO_PATH, SITE_NAME } from '@/components/SiteLogo'

export function AtcAdminLogo() {
  return (
    <div className="atc-admin-logo">
      <img
        src={LOGO_PATH}
        alt={SITE_NAME}
        width={260}
        height={72}
        style={{ display: 'block', height: 'auto', maxWidth: '260px', width: '100%' }}
      />
    </div>
  )
}
