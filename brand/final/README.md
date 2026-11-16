# CES Tuition - final logo pack (draft, nothing published or uploaded)

Logo = bold [ ] bracket with a tick whose long arm ends in a pencil tip (option 1 icon) + "CES Tuition" / "CANNON EDUCATION SOLUTIONS" wordmark (option 5), in the Instagram green / orange / blue palette (confirmed by Gerard).
All artwork is hand-built vector; text is converted to outlines, so the SVGs need no fonts. SVG/PNG logos have transparent backgrounds and a small safety margin.

## Colours (exact)
| Name | Hex | Where |
|---|---|---|
| Green | `#00B065` | Bracket |
| Orange | `#FF5B38` | Tick |
| Blue | `#015A9D` | Pencil tip and "CES Tuition" on white |
| Deep green | `#00924F` | "CANNON EDUCATION SOLUTIONS" line on white (4.0:1 on white; a bit darker than the bracket green so the small text stays legible) |
| Light green | `#5FD39B` | Descriptor line on navy (reversed version) |
| Navy | `#0B2545` | Dark background; single-colour dark version |
| White | `#FFFFFF` | Backgrounds, reversed/white versions |
Contrast on white: blue 7.1:1, navy 15:1, orange 3.1:1, green 2.8:1 (graphics only, never small text).

## Fonts
Poppins Bold ("CES"), Poppins Light ("Tuition"), Poppins SemiBold (descriptor, letter-spaced to the width of "CES Tuition"). Google Fonts, SIL OFL. Outlined in all files; install Poppins only if you want to set matching text elsewhere.

## Files
**Lockups** (SVG + PNG; horizontal PNG 2000 px wide, stacked PNG 1200 px wide)
- `logo-horizontal-color` / `logo-stacked-color`: full colour, for white or light backgrounds
- `logo-horizontal-reversed` / `logo-stacked-reversed`: white bracket and wordmark, orange tick, green pencil tip; for NAVY / dark backgrounds only
- `logo-horizontal-white` / `logo-stacked-white`: single-colour white, for orange, green, blue or photo backgrounds
- `logo-horizontal-mono-dark` / `logo-stacked-mono-dark`: single-colour navy `#0B2545`, for one-colour print, stamps, light backgrounds

**Icon only** (SVG + PNG 1024): `icon-color`, `icon-reversed`, `icon-white`, `icon-mono-dark` (same rules as above)

**Favicons** (white rounded tile with the icon, so it reads on light and dark browser tabs)
- `favicon.ico` (16, 32 and 48 px inside), `favicon.svg`, `favicon-16.png`, `favicon-32.png`, `favicon-48.png`
- `apple-touch-icon-180.png` (opaque, full-bleed; iOS rounds the corners itself)
- `icon-192.png`, `icon-512.png` (opaque, icon kept inside the centre 64%, so Android "maskable" cropping is safe)

**Avatars** (square files; the platform crops to a circle; the icon is centred and the whole mark stays well inside the circle)
- `avatar-instagram-320.png` - 320x320, Instagram (@cannoneducationsolutions)
- `avatar-whatsapp-640.png` - 640x640, WhatsApp (extra-safe margin: mark fills 56% of the width)
- `avatar-tes-400.png` - 400x400, Tes shop; looks right square and circular
- `preview-sheet.png` - one sheet showing everything above, including circle crops and real-size favicons

## Usage notes
- Use the stacked lockup in square or narrow spaces (badges on post tiles, footers); horizontal in headers.
- On the orange testimonial tiles and green/blue promo tiles use the **colour logo on a white rounded plate** (as in week 1 v5) or the **white** version. Do not place the colour or "reversed" version straight on orange or green: the orange tick disappears on orange and the green pencil tip on green.
- Keep clear space around the logo of at least 40% of the icon height (about 4 bracket-stroke widths). Minimum sizes: horizontal lockup 160 px wide, stacked 110 px wide, icon 16 px (favicon).
- The descriptor line is the smallest text; below the minimum sizes drop to the icon alone.
- Do not recolour, stretch, add shadows, or re-set the wordmark in another font.
- Source generator scripts: `/workspace/social/logo/` (`options.py`, `combined.py`, `final.py`).
