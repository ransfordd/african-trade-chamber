import { defaultDonatePage } from '@/lib/donate-defaults'
import { getPayloadClient } from '@/lib/cms'
import type { DonatePageData } from '@/types/donate-page'

export function donatePageToSeedData(data: DonatePageData) {
  return {
    ...data,
    heroParagraphs: data.heroParagraphs.map((text) => ({ text })),
    whyBenefits: data.whyBenefits.map((text) => ({ text })),
    donorCategories: data.donorCategories,
  }
}

export async function getDonatePage(): Promise<DonatePageData> {
  const fallback = defaultDonatePage
  try {
    const payload = await getPayloadClient()
    if (!payload) return fallback
    const global = await payload.findGlobal({ slug: 'donate-page' })
    if (!global) return fallback
    const raw = global as unknown as Record<string, unknown>
    const heroRaw = (raw.heroParagraphs as Array<{ text?: string }>) || []
    const benefitsRaw = (raw.whyBenefits as Array<{ text?: string }>) || []
    const donorsRaw = (raw.donorCategories as DonatePageData['donorCategories']) || []
    return {
      headerTitle: String(raw.headerTitle ?? fallback.headerTitle),
      headerTagline: String(raw.headerTagline ?? fallback.headerTagline),
      heroTitle: String(raw.heroTitle ?? fallback.heroTitle),
      heroParagraphs: heroRaw.length
        ? heroRaw.map((p, i) => p.text || fallback.heroParagraphs[i] || '')
        : fallback.heroParagraphs,
      whyTitle: String(raw.whyTitle ?? fallback.whyTitle),
      whyIntro: String(raw.whyIntro ?? fallback.whyIntro),
      whyBenefits: benefitsRaw.length
        ? benefitsRaw.map((b, i) => b.text || fallback.whyBenefits[i] || '')
        : fallback.whyBenefits,
      whoTitle: String(raw.whoTitle ?? fallback.whoTitle),
      whoIntro: String(raw.whoIntro ?? fallback.whoIntro),
      donorCategories: donorsRaw.length ? donorsRaw : fallback.donorCategories,
      transparencyTitle: String(raw.transparencyTitle ?? fallback.transparencyTitle),
      transparencyText: String(raw.transparencyText ?? fallback.transparencyText),
      ctaTitle: String(raw.ctaTitle ?? fallback.ctaTitle),
      ctaText: String(raw.ctaText ?? fallback.ctaText),
      financeEmail: String(raw.financeEmail ?? fallback.financeEmail),
      financePhone: String(raw.financePhone ?? fallback.financePhone),
      thankYouTitle: String(raw.thankYouTitle ?? fallback.thankYouTitle),
      thankYouText: String(raw.thankYouText ?? fallback.thankYouText),
      formTitle: String(raw.formTitle ?? fallback.formTitle),
    }
  } catch {
    return fallback
  }
}
