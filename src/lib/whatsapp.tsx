import { createContext, useContext, type ReactNode } from 'react'

export const WHATSAPP_NUMBER = '971585041916'
export const WHATSAPP_DISPLAY = '+971 58 504 1916'
export const WHATSAPP_GREETING = "Hi Gerard, I'd like to ask about tuition for my child."

const WhatsAppMessageContext = createContext(WHATSAPP_GREETING)

export function WhatsAppMessageProvider({
  message,
  children,
}: {
  message: string
  children: ReactNode
}) {
  return <WhatsAppMessageContext.Provider value={message}>{children}</WhatsAppMessageContext.Provider>
}

export function whatsappUrl(message: string = WHATSAPP_GREETING, details?: string) {
  const text = details ? `${message}\n\n${details}` : message
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function useWhatsappLink() {
  const message = useContext(WhatsAppMessageContext)
  return (details?: string) => whatsappUrl(message, details)
}
