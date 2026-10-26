import { Envelope, MapPin, Phone, WhatsappLogo } from '@phosphor-icons/react'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/Logo'
import { WHATSAPP_DISPLAY, useWhatsappLink } from '@/lib/whatsapp'

const quickLinks = [
  { label: 'Curricula', href: '#services' },
  { label: 'Why us', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Enquire', href: '#enquire' },
]

export function Footer({ sectionBase = '' }: { sectionBase?: string }) {
  const whatsappHref = useWhatsappLink()
  return (
    <footer className="bg-primary text-primary-foreground pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo className="text-primary-foreground mb-4" />
            <p className="text-primary-foreground leading-relaxed">
              CES Tuition is online tuition for families across the UAE, taught by UK-trained subject specialists.
            </p>
          </div>

          <div>
            <p className="font-bold text-lg mb-4">Quick links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={`${sectionBase}${link.href}`} className="text-primary-foreground hover:underline underline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-4">Curricula</p>
            <ul className="space-y-3 text-primary-foreground">
              <li>GCSE and IGCSE</li>
              <li>A-level</li>
              <li>IB</li>
              <li>American curriculum</li>
              <li>One-to-one lessons</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-4">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Envelope size={20} className="flex-shrink-0 mt-1" aria-hidden="true" />
                <a href="mailto:Gerard@CannonEducationSolutions.com" className="text-primary-foreground hover:underline underline-offset-4 break-all">
                  Gerard@CannonEducationSolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" aria-hidden="true" />
                <a href="tel:+971585041916" className="text-primary-foreground hover:underline underline-offset-4">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <WhatsappLogo size={20} className="flex-shrink-0 mt-1" aria-hidden="true" />
                <a href={whatsappHref()} className="text-primary-foreground hover:underline underline-offset-4">
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" aria-hidden="true" />
                <span className="text-primary-foreground">
                  Registered office: Sharjah Media City (Shams), Sharjah. Lessons are live online across all emirates.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/30 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground text-sm">
          <p>© {new Date().getFullYear()} CES Tuition. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="https://app.cestuition.com/privacy-policy" className="hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="https://app.cestuition.com/eula" className="hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="https://app.cestuition.com" className="hover:underline underline-offset-4 font-medium">
              Portal Log in
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
