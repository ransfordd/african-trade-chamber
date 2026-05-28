/** Build a public URL for a file in public/images/homepage/ (supports spaces and & in names). */
export function localHomepageImage(filename: string): string {
  return `/images/homepage/${encodeURIComponent(filename)}`
}
