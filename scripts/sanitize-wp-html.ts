/**
 * Strip WordPress block markup that often breaks Payload Lexical validation.
 */
export function sanitizeWpHtmlForLexical(html: string): string {
  let out = html

  // Gutenberg block comments
  out = out.replace(/<!--[\s\S]*?-->/g, '')

  // Underline is not supported by default Lexical features
  out = out.replace(/<\/?u\b[^>]*>/gi, '')

  // Embeds: keep URL as a paragraph link
  out = out.replace(
    /<figure class="wp-block-embed[^"]*">[\s\S]*?<div class="wp-block-embed__wrapper">\s*([\s\S]*?)\s*<\/div>[\s\S]*?<\/figure>/gi,
    (_, raw: string) => {
      const url = raw.trim()
      if (!url) return ''
      const safe = url.replace(/"/g, '&quot;')
      return `<p><a href="${safe}">${safe}</a></p>`
    },
  )

  // Inline images: caption as alt text when present, otherwise drop figure wrapper
  out = out.replace(
    /<figure class="wp-block-image[^"]*">[\s\S]*?<img[^>]*\ssrc="([^"]+)"[^>]*\salt="([^"]*)"[^>]*\/?>[\s\S]*?<\/figure>/gi,
    (_, src: string, alt: string) => {
      const label = alt?.trim() || 'Image'
      const safeSrc = src.replace(/"/g, '&quot;')
      return `<p><em>${label}</em> — <a href="${safeSrc}">${safeSrc}</a></p>`
    },
  )

  // Standalone img tags
  out = out.replace(/<img[^>]*\ssrc="([^"]+)"[^>]*\/?>/gi, (_, src: string) => {
    const safeSrc = src.replace(/"/g, '&quot;')
    return `<p><a href="${safeSrc}">${safeSrc}</a></p>`
  })

  // Empty paragraphs left after stripping
  out = out.replace(/<p>\s*<\/p>/gi, '')

  return out.trim()
}
