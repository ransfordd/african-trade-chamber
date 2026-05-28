import type { CollectionConfig } from 'payload'

export const HeroSlides: CollectionConfig = {
  slug: 'hero-slides',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'enabled'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'ctaLabel', type: 'text' },
    { name: 'ctaUrl', type: 'text' },
    { name: 'backgroundImageUrl', type: 'text' },
    { name: 'sideImageUrl', type: 'text' },
    { name: 'sideVideoUrl', type: 'text', admin: { description: 'MP4 URL for right-side video (slide 3)' } },
    { name: 'showSideImage', type: 'checkbox', defaultValue: true },
    { name: 'showApplyOnly', type: 'checkbox', defaultValue: false },
    { name: 'order', type: 'number', defaultValue: 0 },
    { name: 'enabled', type: 'checkbox', defaultValue: true },
  ],
}
