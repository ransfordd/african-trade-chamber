import type { CollectionConfig } from 'payload'

export const HeroFeatureCards: CollectionConfig = {
  slug: 'hero-feature-cards',
  labels: { singular: 'Hero feature card', plural: 'Hero feature cards' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'enabled', 'updatedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'linkText', type: 'text', defaultValue: 'Learn more' },
    { name: 'linkUrl', type: 'text', required: true },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
    {
      name: 'enabled',
      type: 'checkbox',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
  ],
}
