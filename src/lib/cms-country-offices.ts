import { defaultCountryOfficesPage } from '@/lib/country-offices-defaults'
import { getPayloadClient } from '@/lib/cms'
import type {
  CountryOffice,
  CountryOfficeContact,
  CountryOfficeEvent,
  CountryOfficesPageData,
  CountryHeaderTheme,
  ContactItemType,
  EventStatusType,
  OfficeStatusType,
} from '@/types/country-offices'

const THEMES: CountryHeaderTheme[] = [
  'ghana',
  'kenya',
  'nigeria',
  'south-africa',
  'drc',
  'liberia',
  'sao-tome',
  'morocco',
  'ethiopia',
  'egypt',
]

function asOfficeStatus(v: unknown, fallback: OfficeStatusType): OfficeStatusType {
  if (v === 'headquarters' || v === 'active' || v === 'development' || v === 'planning') return v
  return fallback
}

function asHeaderTheme(v: unknown, fallback: CountryHeaderTheme): CountryHeaderTheme {
  if (typeof v === 'string' && THEMES.includes(v as CountryHeaderTheme)) return v as CountryHeaderTheme
  return fallback
}

function asContactType(v: unknown, fallback: ContactItemType): ContactItemType {
  if (v === 'location' || v === 'phone' || v === 'email' || v === 'note') return v
  return fallback
}

function asEventStatus(v: unknown, fallback: EventStatusType): EventStatusType {
  if (v === 'confirmed' || v === 'planning' || v === 'development') return v
  return fallback
}

function mapOffice(row: Record<string, unknown>, fallback?: CountryOffice): CountryOffice {
  const contactsRaw = (row.contacts as Array<Record<string, unknown>> | undefined) || []
  const eventsRaw = (row.events as Array<Record<string, unknown>> | undefined) || []

  const contacts: CountryOfficeContact[] = contactsRaw.map((c, i) => ({
    type: asContactType(c.type, fallback?.contacts[i]?.type || 'note'),
    value: String(c.value ?? fallback?.contacts[i]?.value ?? ''),
  }))

  const events: CountryOfficeEvent[] = eventsRaw.map((e, i) => ({
    title: String(e.title ?? fallback?.events[i]?.title ?? ''),
    status: asEventStatus(e.status, fallback?.events[i]?.status || 'planning'),
    statusLabel: String(e.statusLabel ?? fallback?.events[i]?.statusLabel ?? ''),
  }))

  return {
    slug: String(row.slug ?? fallback?.slug ?? ''),
    flag: String(row.flag ?? fallback?.flag ?? ''),
    countryName: String(row.countryName ?? fallback?.countryName ?? ''),
    regionLabel: String(row.regionLabel ?? fallback?.regionLabel ?? ''),
    headerTheme: asHeaderTheme(row.headerTheme, fallback?.headerTheme || 'ghana'),
    officeStatus: asOfficeStatus(row.officeStatus, fallback?.officeStatus || 'planning'),
    officeStatusLabel: String(row.officeStatusLabel ?? fallback?.officeStatusLabel ?? ''),
    contacts: contacts.length ? contacts : fallback?.contacts || [],
    events: events.length ? events : fallback?.events || [],
    learnMoreUrl: row.learnMoreUrl
      ? String(row.learnMoreUrl)
      : fallback?.learnMoreUrl,
  }
}

export async function getCountryOfficesPage(): Promise<CountryOfficesPageData> {
  try {
    const payload = await getPayloadClient()
    if (!payload) return defaultCountryOfficesPage
    const global = await payload.findGlobal({ slug: 'country-offices-page' })
    if (!global) return defaultCountryOfficesPage

    const fallback = defaultCountryOfficesPage
    const officesRaw = (global.offices as Array<Record<string, unknown>> | undefined) || []
    const offices = officesRaw.map((row, i) =>
      mapOffice(row, fallback.offices[i]),
    )

    return {
      pageTitle: (global.pageTitle as string) || fallback.pageTitle,
      pageSubtitle: (global.pageSubtitle as string) || fallback.pageSubtitle,
      offices: offices.length ? offices : fallback.offices,
    }
  } catch {
    return defaultCountryOfficesPage
  }
}
