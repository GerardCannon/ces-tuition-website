import { bindGoatCounterClicks, countWhatsappHomeForm } from './lib/bindGoatCounter.ts'
import { WHATSAPP_GREETING, whatsappUrl } from './lib/whatsappUrl.ts'

// Same regular-weight Phosphor X the React menu button rendered when open.
const CLOSE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>'

function pageMessage() {
  const link = document.querySelector<HTMLAnchorElement>(
    'a[data-goatcounter-click$="-sticky"], a[data-goatcounter-click$="-hero"], a[data-goatcounter-click$="-header"]',
  )
  if (!link) return WHATSAPP_GREETING
  try {
    return new URL(link.href).searchParams.get('text') || WHATSAPP_GREETING
  } catch {
    return WHATSAPP_GREETING
  }
}

function analyticsPage() {
  const header = document.querySelector('[data-goatcounter-click$="-header"]')
  const click = header?.getAttribute('data-goatcounter-click') ?? ''
  if (!click.startsWith('whatsapp-') || !click.endsWith('-header')) return null
  return click.slice('whatsapp-'.length, -'-header'.length)
}

function wireEnquiryForm() {
  const form = document.querySelector('form')
  if (!form) return
  const message = pageMessage()
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(form)
    const details = [
      `Parent: ${String(data.get('parentName') || '').trim()}`,
      `Curriculum: ${String(data.get('curriculum') || '').trim()}`,
      `Subject: ${String(data.get('subject') || '').trim()}`,
      `Year group: ${String(data.get('yearGroup') || '').trim()}`,
    ].join('\n')
    // The homepage form records the click in script. Inner pages use the
    // data-goatcounter-click attribute on the submit button instead.
    if (document.documentElement.getAttribute('data-route') === 'home') {
      countWhatsappHomeForm()
    }
    window.location.href = whatsappUrl(message, details)
  })
}

function wireMobileMenu() {
  const button = document.querySelector<HTMLButtonElement>('nav button[aria-expanded]')
  const nav = button?.closest('nav')
  if (!button || !nav) return
  const openIcon = button.innerHTML
  const page = analyticsPage()
  const headerLink = document.querySelector<HTMLAnchorElement>('a[data-goatcounter-click$="-header"]')
  const desktopLinks = nav.querySelectorAll<HTMLAnchorElement>('a[href*="#services"], a[href*="#features"], a[href*="#pricing"], a[href*="#testimonials"]')
  let open = false
  let panel: HTMLDivElement | null = null

  function closeMenu() {
    open = false
    button.setAttribute('aria-expanded', 'false')
    button.setAttribute('aria-label', 'Open menu')
    button.innerHTML = openIcon
    panel?.remove()
    panel = null
  }

  function openMenu() {
    if (!headerLink || !page || desktopLinks.length === 0) return
    open = true
    button.setAttribute('aria-expanded', 'true')
    button.setAttribute('aria-label', 'Close menu')
    button.innerHTML = CLOSE_ICON

    panel = document.createElement('div')
    panel.className = 'md:hidden bg-card border-t border-border'
    const inner = document.createElement('div')
    inner.className = 'px-6 py-4 space-y-1'

    for (const link of desktopLinks) {
      const anchor = document.createElement('a')
      anchor.href = link.getAttribute('href') || link.href
      anchor.className = 'block text-foreground hover:text-primary transition-colors duration-200 font-medium py-3'
      anchor.textContent = link.textContent
      anchor.addEventListener('click', closeMenu)
      inner.append(anchor)
    }

    const whatsapp = document.createElement('a')
    whatsapp.href = headerLink.href
    whatsapp.setAttribute('data-goatcounter-click', `whatsapp-${page}-menu`)
    whatsapp.setAttribute('data-goatcounter-title', `WhatsApp click: ${page} menu`)
    whatsapp.className = 'flex items-center justify-center gap-2 mt-3 min-h-12 rounded-lg bg-accent text-accent-foreground font-semibold'
    const icon = headerLink.querySelector('svg')?.cloneNode(true) as SVGElement | undefined
    if (icon) {
      icon.setAttribute('width', '20')
      icon.setAttribute('height', '20')
      whatsapp.append(icon)
    }
    whatsapp.append(document.createTextNode('WhatsApp'))
    whatsapp.addEventListener('click', closeMenu)
    inner.append(whatsapp)

    const portal = document.createElement('a')
    portal.href = 'https://app.cestuition.com'
    portal.className = 'block text-center text-sm font-medium text-muted-foreground hover:text-foreground py-3'
    portal.textContent = 'Portal Log in'
    portal.addEventListener('click', closeMenu)
    inner.append(portal)

    panel.append(inner)
    nav.append(panel)
    bindGoatCounterClicks()
  }

  button.addEventListener('click', () => {
    if (open) closeMenu()
    else openMenu()
  })
}

export function startIslands() {
  bindGoatCounterClicks()
  wireEnquiryForm()
  wireMobileMenu()
}
