import { defaultAboutPage } from '@/lib/about-defaults'
import { getPayloadClient } from '@/lib/cms'
import type { AboutPageData } from '@/types/about-page'

export function aboutPageToSeedData(data: AboutPageData) {
  return { ...data }
}

export async function getAboutPage(): Promise<AboutPageData> {
  const fallback = defaultAboutPage
  try {
    const payload = await getPayloadClient()
    if (!payload) return fallback
    const global = await payload.findGlobal({ slug: 'about-page' })
    if (!global) return fallback
    const raw = global as unknown as Record<string, unknown>
    return {
      sectionTitle: String(raw.sectionTitle ?? fallback.sectionTitle),
      mainContent: String(raw.mainContent ?? fallback.mainContent),
      visionContent: String(raw.visionContent ?? fallback.visionContent),
      missionContent: String(raw.missionContent ?? fallback.missionContent),
    }
  } catch {
    return fallback
  }
}
