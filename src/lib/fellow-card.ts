/** Match WordPress wp_trim_words: first N words, then ellipsis. */
export function trimWords(text: string, wordCount: number): string {
  const words = text.trim().split(/\s+/).filter(Boolean)
  if (words.length <= wordCount) return words.join(' ')
  return `${words.slice(0, wordCount).join(' ')}...`
}

/** Strip HTML and build the excerpt shown under each fellow card (TeamPress default: 10 words). */
export function fellowBioExcerpt(name: string, bio?: string, wordCount = 10): string {
  const plain = (bio || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  if (!plain) {
    return trimWords(
      `${name} is a 2025 Future Trade Leaders Fellow at the African Trade Chamber.`,
      wordCount,
    )
  }

  return trimWords(plain, wordCount)
}

/** Lightbox meta line matching TeamPress extp_cat display. */
export function fellowCategoriesLabel(country?: string): string {
  const parts: string[] = []
  if (country?.trim()) parts.push(country.trim())
  parts.push('Fellows')
  return `Categories: ${parts.join(', ')}`
}
