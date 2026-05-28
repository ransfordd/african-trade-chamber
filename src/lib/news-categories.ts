import type { NewsCategory } from '@/types/news-article'

export const NEWS_CATEGORIES: { value: NewsCategory; label: string }[] = [
  { value: 'chamber', label: 'Chamber News' },
  { value: 'member', label: 'Member News' },
  { value: 'press', label: 'Press Releases' },
]

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  chamber: 'Chamber News',
  member: 'Member News',
  press: 'Press Releases',
}

const VALID = new Set<string>(['chamber', 'member', 'press'])

export function parseNewsCategory(value?: string | null): NewsCategory | undefined {
  if (!value || !VALID.has(value)) return undefined
  return value as NewsCategory
}
