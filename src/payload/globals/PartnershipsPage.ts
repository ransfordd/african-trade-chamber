import type { GlobalConfig } from 'payload'

const listItemFields = [{ name: 'text', type: 'text' as const, required: true }]

export const PartnershipsPage: GlobalConfig = {
  slug: 'partnerships-page',
  label: 'Partnerships Page',
  fields: [
    { name: 'headerTitle', type: 'text', required: true },
    { name: 'introText', type: 'textarea', required: true },
    {
      name: 'listCards',
      type: 'array',
      fields: [
        { name: 'id', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'imageUrl', type: 'text', required: true },
        { name: 'imageAlt', type: 'text', required: true },
        { name: 'items', type: 'array', fields: listItemFields },
      ],
    },
    {
      name: 'getStarted',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
        { name: 'imageUrl', type: 'text', required: true },
        { name: 'imageAlt', type: 'text', required: true },
        { name: 'requestLabel', type: 'text', required: true },
        { name: 'requestEmail', type: 'text', required: true },
        { name: 'guideLabel', type: 'text', required: true },
        { name: 'guideHref', type: 'text', required: true },
      ],
    },
  ],
}
