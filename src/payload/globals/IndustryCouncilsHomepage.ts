import type { GlobalConfig } from 'payload'
import { homepageCardFields } from '../fields/homepageCardFields'

export const IndustryCouncilsHomepage: GlobalConfig = {
  slug: 'industry-councils-homepage',
  label: 'Homepage — Industry Councils',
  fields: [
    { name: 'headerTitle', type: 'text', required: true },
    { name: 'headerDescription', type: 'textarea' },
    { name: 'headerButtonText', type: 'text' },
    { name: 'headerButtonUrl', type: 'text' },
    {
      type: 'group',
      name: 'intro',
      fields: [
        { name: 'imageUrl', type: 'text' },
        { name: 'title', type: 'text' },
        { name: 'text', type: 'textarea' },
        { name: 'buttonText', type: 'text' },
        { name: 'buttonUrl', type: 'text' },
      ],
    },
    {
      name: 'councils',
      type: 'array',
      fields: homepageCardFields,
    },
  ],
}
