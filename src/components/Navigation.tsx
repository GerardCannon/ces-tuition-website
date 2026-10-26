import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { List, WhatsappLogo, X } from '@phosphor-icons/react'
import { Logo } from '@/components/Logo'
import { bindGoatCounterClicks, useAnalyticsPage, whatsappClick } from '@/lib/goatcounter'
import { useWhatsappLink } from '@/lib/whatsapp'

const navLinks = [
  { label: 'Curricula', href: '#services' },
  { label: 'Why us', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
]

export function Navigation({ sectionBase = '' }: { sectionBase?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const whatsappHref = useWhatsappLink()
  const page = useAnalyticsPage()

  useEffect(() => {
    if (!isMobileMenuOpen) return
    bindGoatCounterClicks()
  }, [isMobileMenuOpen])

  function closeMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-primary hover:opacity-80 transition-opacity" aria-label="CES Tuition home">
              <Logo />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`${sectionBase}${link.href}`}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://app.cestuition.com"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portal Log in
            </a>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a href={whatsappHref()} {...whatsappClick(page, 'header')} className="flex items-center gap-2">
                <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-foreground p-2 -mr-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <List size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`${sectionBase}${link.href}`}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-3"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref()}
              {...whatsappClick(page, 'menu')}
              className="flex items-center justify-center gap-2 mt-3 min-h-12 rounded-lg bg-accent text-accent-foreground font-semibold"
              onClick={closeMenu}
            >
              <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="https://app.cestuition.com"
              className="block text-center text-sm font-medium text-muted-foreground hover:text-foreground py-3"
              onClick={closeMenu}
            >
              Portal Log in
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
