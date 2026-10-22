import { WhatsappLogo } from '@phosphor-icons/react'
import { whatsappUrl } from '@/lib/whatsapp'

export function WhatsAppBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-accent text-accent-foreground shadow-[0_-8px_24px_rgba(0,0,0,0.12)] pb-[env(safe-area-inset-bottom)]">
      <a
        href={whatsappUrl()}
        className="flex items-center justify-center gap-2 min-h-14 px-4 py-3 font-semibold"
      >
        <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
        WhatsApp us
      </a>
    </div>
  )
}
