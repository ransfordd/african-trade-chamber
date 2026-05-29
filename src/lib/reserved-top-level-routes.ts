/** Top-level Next.js routes — static pages take precedence over CMS /[slug]. */
export const RESERVED_TOP_LEVEL_ROUTES = new Set([
  'about',
  'b2b-b2g-matchmaking',
  'capacity-building',
  'careers',
  'contact-us',
  'councils',
  'country-offices',
  'donate',
  'events',
  'fellowship',
  'get-involved',
  'insights',
  'investment-promotion',
  'market-support',
  'media-coverage',
  'membership',
  'news',
  'newsletter-archive',
  'partnerships',
  'policy-government-engagement',
  'search',
  'trade-facilitation-expansion',
  'volunteer',
  'what-we-do',
])

export function isReservedTopLevelRoute(slug: string): boolean {
  return RESERVED_TOP_LEVEL_ROUTES.has(slug.toLowerCase())
}
