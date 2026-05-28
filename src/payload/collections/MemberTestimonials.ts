import type { CollectionConfig } from 'payload'

export const MemberTestimonials: CollectionConfig = {
  slug: 'member-testimonials',
  labels: {
    singular: 'Member Testimonial',
    plural: 'Member Testimonials',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'position', 'sortOrder'],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'position', type: 'text', required: true },
    { name: 'quote', type: 'textarea', required: true },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
  ],
}
