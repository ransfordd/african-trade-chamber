import type { GlobalConfig } from 'payload'

export const NewsListingPage: GlobalConfig = {
  slug: 'news-listing-page',
  label: 'News Listing Page',
  fields: [
    { name: 'introTitle', type: 'text', required: true },
    { name: 'introBody', type: 'textarea', required: true },
  ],
}
