import type { CollectionConfig } from 'payload'

export const MembershipCategories: CollectionConfig = {
  slug: 'membership-categories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'annualFee', 'order'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea', required: true },
    { name: 'benefits', type: 'textarea', required: true },
    { name: 'annualFee', type: 'text', required: true },
    { name: 'feePeriod', type: 'text', defaultValue: 'per year' },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
