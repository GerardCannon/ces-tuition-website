import { createContext, useContext, type ReactNode } from 'react'
import { WHATSAPP_GREETING, whatsappUrl } from './whatsappUrl.ts'

export { WHATSAPP_DISPLAY, WHATSAPP_GREETING, WHATSAPP_NUMBER, whatsappUrl } from './whatsappUrl.ts'

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

export function useWhatsappLink() {
  const message = useContext(WhatsAppMessageContext)
  return (details?: string) => whatsappUrl(message, details)
}
