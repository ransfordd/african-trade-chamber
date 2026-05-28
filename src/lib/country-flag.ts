/** ISO 3166-1 alpha-2 codes for flagcdn.com (Windows does not render flag emoji reliably). */
const SLUG_TO_ISO: Record<string, string> = {
  ghana: 'gh',
  drc: 'cd',
  kenya: 'ke',
  nigeria: 'ng',
  'south-africa': 'za',
  egypt: 'eg',
  liberia: 'lr',
  'sao-tome': 'st',
  morocco: 'ma',
  ethiopia: 'et',
}

export function getCountryFlagUrl(slug: string, width = 80): string {
  const iso = SLUG_TO_ISO[slug] ?? slug.slice(0, 2).toLowerCase()
  return `https://flagcdn.com/w${width}/${iso}.png`
}
