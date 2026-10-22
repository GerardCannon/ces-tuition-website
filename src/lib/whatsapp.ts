export const WHATSAPP_NUMBER = '971585041916'
export const WHATSAPP_DISPLAY = '+971 58 504 1916'
export const WHATSAPP_GREETING = "Hi Gerard, I'd like to ask about tuition for my child."

export function whatsappUrl(details?: string) {
  const text = details ? `${WHATSAPP_GREETING}\n\n${details}` : WHATSAPP_GREETING
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
