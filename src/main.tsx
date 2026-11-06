import './main.css'
import { startIslands } from './islands.ts'

// The published pages are already prerendered. Shipping React to hydrate them
// pulled every page, icon weight and tailwind-merge into one bundle, and most
// of that JavaScript never ran. Production only wires the mobile menu and the
// enquiry form. Dev still renders with React because index.html's #root is empty.
if (import.meta.env.DEV) {
  void import('./devApp.tsx')
} else {
  startIslands()
}
