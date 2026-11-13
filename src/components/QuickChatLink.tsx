import { quickChatClick } from '@/lib/goatcounter'
import { cn } from '@/lib/utils'
import { whatsappUrl } from '@/lib/whatsapp'

export const QUICK_CHAT_PREFILL = "Hi, I'd like a quick chat about tuition before booking a trial."

const toneClass = {
  'on-primary':
    'text-primary-foreground decoration-primary-foreground/80 hover:decoration-primary-foreground focus-visible:ring-white focus-visible:ring-offset-primary',
  'on-light':
    'text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground focus-visible:ring-ring focus-visible:ring-offset-card',
} as const

export function QuickChatLink({
  placement,
  tone,
}: {
  placement: string
  tone: keyof typeof toneClass
}) {
  return (
    <a
      href={whatsappUrl(QUICK_CHAT_PREFILL)}
      target="_blank"
      rel="noopener"
      {...quickChatClick(placement)}
      className={cn(
        'inline-block max-w-full min-h-6 rounded-sm px-1 py-1 text-center text-sm leading-snug underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        toneClass[tone],
      )}
    >
      Prefer a quick chat first? Message us on WhatsApp
    </a>
  )
}
