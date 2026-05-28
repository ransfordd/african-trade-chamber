/** Build a WhatsApp chat URL from a phone string (e.g. +233 505 366 200). */
export function toWhatsAppUrl(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (!digits) return 'https://wa.me/'
  return `https://wa.me/${digits}`
}
