export type OfficeStatusType = 'headquarters' | 'active' | 'development' | 'planning'

export type CountryHeaderTheme =
  | 'ghana'
  | 'kenya'
  | 'nigeria'
  | 'south-africa'
  | 'drc'
  | 'liberia'
  | 'sao-tome'
  | 'morocco'
  | 'ethiopia'
  | 'egypt'

export type ContactItemType = 'location' | 'phone' | 'email' | 'note'

export type EventStatusType = 'confirmed' | 'planning' | 'development'

export type CountryOfficeContact = {
  type: ContactItemType
  value: string
}

export type CountryOfficeEvent = {
  title: string
  status: EventStatusType
  statusLabel: string
}

export type CountryOffice = {
  slug: string
  flag: string
  countryName: string
  regionLabel: string
  headerTheme: CountryHeaderTheme
  officeStatus: OfficeStatusType
  officeStatusLabel: string
  contacts: CountryOfficeContact[]
  events: CountryOfficeEvent[]
  learnMoreUrl?: string
}

export type CountryOfficesPageData = {
  pageTitle: string
  pageSubtitle: string
  offices: CountryOffice[]
}
