import type { Field } from 'payload'

export const homepageCardFields: Field[] = [
  { name: 'title', type: 'text', required: true },
  { name: 'description', type: 'textarea' },
  { name: 'imageUrl', type: 'text', label: 'Image URL' },
  { name: 'buttonText', type: 'text', defaultValue: 'Learn more' },
  { name: 'buttonUrl', type: 'text' },
]

export const homepageSectionHeaderFields: Field[] = [
  { name: 'sectionTitle', type: 'text', required: true },
  { name: 'sectionDescription', type: 'textarea' },
  { name: 'sectionCtaText', type: 'text', label: 'Header CTA text' },
  { name: 'sectionCtaUrl', type: 'text', label: 'Header CTA URL' },
]
