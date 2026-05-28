import { defaultVolunteerPage } from '@/lib/volunteer-defaults'
import { getPayloadClient } from '@/lib/cms'
import type { VolunteerPageData } from '@/types/volunteer-page'

export function volunteerPageToSeedData(data: VolunteerPageData) {
  return {
    ...data,
    whyBenefits: data.whyBenefits.map((text) => ({ text })),
    whoCanApply: data.whoCanApply.map((text) => ({ text })),
    roles: data.roles,
  }
}

export async function getVolunteerPage(): Promise<VolunteerPageData> {
  const fallback = defaultVolunteerPage
  try {
    const payload = await getPayloadClient()
    if (!payload) return fallback
    const global = await payload.findGlobal({ slug: 'volunteer-page' })
    if (!global) return fallback
    const raw = global as unknown as Record<string, unknown>
    const benefitsRaw = (raw.whyBenefits as Array<{ text?: string }>) || []
    const whoRaw = (raw.whoCanApply as Array<{ text?: string }>) || []
    const rolesRaw = (raw.roles as VolunteerPageData['roles']) || []
    return {
      headerTitle: String(raw.headerTitle ?? fallback.headerTitle),
      headerTagline: String(raw.headerTagline ?? fallback.headerTagline),
      heroTitle: String(raw.heroTitle ?? fallback.heroTitle),
      heroText: String(raw.heroText ?? fallback.heroText),
      heroText2: String(raw.heroText2 ?? fallback.heroText2),
      whyTitle: String(raw.whyTitle ?? fallback.whyTitle),
      whyIntro: String(raw.whyIntro ?? fallback.whyIntro),
      whyBenefits: benefitsRaw.length
        ? benefitsRaw.map((b, i) => b.text || fallback.whyBenefits[i] || '')
        : fallback.whyBenefits,
      rolesTitle: String(raw.rolesTitle ?? fallback.rolesTitle),
      roles: rolesRaw.length ? rolesRaw : fallback.roles,
      whoTitle: String(raw.whoTitle ?? fallback.whoTitle),
      whoIntro: String(raw.whoIntro ?? fallback.whoIntro),
      whoCanApply: whoRaw.length
        ? whoRaw.map((w, i) => w.text || fallback.whoCanApply[i] || '')
        : fallback.whoCanApply,
      commitmentTitle: String(raw.commitmentTitle ?? fallback.commitmentTitle),
      commitmentText: String(raw.commitmentText ?? fallback.commitmentText),
      formTitle: String(raw.formTitle ?? fallback.formTitle),
      formSubtitle: String(raw.formSubtitle ?? fallback.formSubtitle),
      formEmail: String(raw.formEmail ?? fallback.formEmail),
      submitButtonText: String(raw.submitButtonText ?? fallback.submitButtonText),
      thankYouTitle: String(raw.thankYouTitle ?? fallback.thankYouTitle),
      thankYouText: String(raw.thankYouText ?? fallback.thankYouText),
    }
  } catch {
    return fallback
  }
}
