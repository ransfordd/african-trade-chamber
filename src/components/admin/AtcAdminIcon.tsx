import React from 'react'

import { LOGO_PATH, SITE_NAME } from '@/components/SiteLogo'

export function AtcAdminIcon() {
  return (
    <img
      src={LOGO_PATH}
      alt={SITE_NAME}
      width={28}
      height={28}
      style={{ display: 'block', height: 28, objectFit: 'contain', width: 28 }}
    />
  )
}
