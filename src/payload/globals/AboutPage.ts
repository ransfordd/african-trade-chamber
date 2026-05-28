import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: 'About Page',
  fields: [
    { name: 'sectionTitle', type: 'text', required: true },
    { name: 'mainContent', type: 'textarea', required: true },
    { name: 'visionContent', type: 'textarea', required: true },
    { name: 'missionContent', type: 'textarea', required: true },
  ],
}
