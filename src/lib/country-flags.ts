/** Map TeamPress country category labels to ISO 3166-1 alpha-2 for flagcdn.com */
const COUNTRY_ISO: Record<string, string> = {
  ethiopia: 'et',
  ghana: 'gh',
  nigeria: 'ng',
  kenya: 'ke',
  zimbabwe: 'zw',
  togo: 'tg',
  jamaica: 'jm',
  'sao tome': 'st',
  'sao tome & principe': 'st',
  'south africa': 'za',
  uganda: 'ug',
  tanzania: 'tz',
  rwanda: 'rw',
  senegal: 'sn',
  cameroon: 'cm',
  'democratic republic of congo': 'cd',
  congo: 'cg',
  zambia: 'zm',
  mozambique: 'mz',
  malawi: 'mw',
  botswana: 'bw',
  namibia: 'na',
  liberia: 'lr',
  sierra: 'sl',
  'sierra leone': 'sl',
  gambia: 'gm',
  guinea: 'gn',
  mali: 'ml',
  niger: 'ne',
  chad: 'td',
  sudan: 'sd',
  egypt: 'eg',
  morocco: 'ma',
  tunisia: 'tn',
  algeria: 'dz',
  libya: 'ly',
  mauritius: 'mu',
  seychelles: 'sc',
  madagascar: 'mg',
  angola: 'ao',
  gabon: 'ga',
  'burkina faso': 'bf',
  benin: 'bj',
  'cote d': 'ci',
  "cote d'ivoire": 'ci',
  'ivory coast': 'ci',
  eswatini: 'sz',
  lesotho: 'ls',
  somalia: 'so',
  eritrea: 'er',
  djibouti: 'dj',
  comoros: 'km',
  'cape verde': 'cv',
  'st lucia': 'lc',
  'saint lucia': 'lc',
  barbados: 'bb',
  trinidad: 'tt',
  haiti: 'ht',
  bahamas: 'bs',
}

export function countryToFlagIso(country?: string): string | undefined {
  if (!country) return undefined
  const key = country.trim().toLowerCase()
  if (COUNTRY_ISO[key]) return COUNTRY_ISO[key]
  for (const [name, iso] of Object.entries(COUNTRY_ISO)) {
    if (key.includes(name) || name.includes(key)) return iso
  }
  return undefined
}

export function flagUrl(iso: string, size = 80): string {
  return `https://flagcdn.com/w${size}/${iso}.png`
}
