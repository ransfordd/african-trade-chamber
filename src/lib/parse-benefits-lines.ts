export type BenefitItem = {
  text: string
  nested?: string[]
}

/** Parse newline benefits text; lines starting with 4 spaces are nested under the previous item. */
export function parseBenefitsLines(benefitsText: string): BenefitItem[] {
  const lines = benefitsText.split('\n')
  const items: BenefitItem[] = []

  for (const raw of lines) {
    const line = raw.trimEnd()
    if (!line.trim()) continue

    if (line.startsWith('    ') || line.startsWith('\t')) {
      const nestedText = line.trim()
      const last = items[items.length - 1]
      if (last) {
        last.nested = last.nested ?? []
        last.nested.push(nestedText)
      } else {
        items.push({ text: nestedText })
      }
    } else {
      items.push({ text: line.trim() })
    }
  }

  return items
}
