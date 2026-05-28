'use client'

import { ServicesRequestForm } from '@/components/what-we-do/ServicesRequestForm'

type Props = {
  officeLabel: string
  targetCountriesPlaceholder?: string
  phoneHint?: string
}

export function CountryServicesRequestForm({
  officeLabel,
  targetCountriesPlaceholder,
  phoneHint,
}: Props) {
  return (
    <ServicesRequestForm
      contextLabel={officeLabel}
      targetCountriesPlaceholder={targetCountriesPlaceholder}
      phoneHint={phoneHint}
    />
  )
}
