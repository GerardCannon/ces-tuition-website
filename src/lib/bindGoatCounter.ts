declare global {
  interface Window {
    goatcounter?: {
      count?: (vars: { path: string; title: string; event: boolean }) => void
      bind_events?: () => void
    }
  }
}

// count.js only binds elements already in the document. Call this again after
// the mobile menu mounts its link.
export function bindGoatCounterClicks() {
  try {
    window.goatcounter?.bind_events?.()
  } catch {
    // A blocked script must not break the page.
  }
}

export function countWhatsappHomeForm() {
  try {
    window.goatcounter?.count?.({
      path: 'whatsapp-home-form',
      title: 'WhatsApp click: home form',
      event: true,
    })
  } catch {
    // A blocked script must not stop WhatsApp from opening.
  }
}
