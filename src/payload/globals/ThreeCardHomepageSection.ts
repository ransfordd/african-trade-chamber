import type { GlobalConfig } from 'payload'
import { homepageCardFields, homepageSectionHeaderFields } from '../fields/homepageCardFields'

export function threeCardHomepageGlobal(slug: string, label: string): GlobalConfig {
  return {
    slug,
    label,
    fields: [
      ...homepageSectionHeaderFields,
      {
        name: 'cards',
        type: 'array',
        minRows: 1,
        maxRows: 4,
        fields: homepageCardFields,
      },
    ],
  }
}

export const MembershipHomepage = threeCardHomepageGlobal(
  'membership-homepage',
  'Homepage — Membership',
)
export const InsightsHomepage = threeCardHomepageGlobal('insights-homepage', 'Homepage — Insights')
export const EventHomepage = threeCardHomepageGlobal('event-homepage', 'Homepage — Events')
export const GetInvolvedHomepage = threeCardHomepageGlobal(
  'get-involved-homepage',
  'Homepage — Get Involved',
)
export const NewsHomepage = threeCardHomepageGlobal('news-homepage', 'Homepage — News')
