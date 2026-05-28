import type { GlobalConfig } from 'payload'

const cardFields = [
  { name: 'title', type: 'text' as const, required: true },
  { name: 'body', type: 'textarea' as const, required: true },
  { name: 'imageUrl', type: 'text' as const, required: true },
  { name: 'imageAlt', type: 'text' as const, required: true },
  { name: 'ctaLabel', type: 'text' as const },
  { name: 'ctaHref', type: 'text' as const },
]

export const GetInvolvedPage: GlobalConfig = {
  slug: 'get-involved-page',
  label: 'Get Involved Page',
  fields: [
    { name: 'intro', type: 'group', fields: cardFields },
    { name: 'cards', type: 'array', fields: cardFields },
  ],
}
