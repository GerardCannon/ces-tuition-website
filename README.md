# CES Tuition

Marketing site for [CES Tuition](https://www.cestuition.com/), online tuition for families in the UAE. UK-trained subject specialists teach GCSE, IGCSE, A-level, IB and American curricula.

The site is a static React app. `npm run build` prerenders every route to HTML, so the published page contains the rendered text. Enquiry buttons open WhatsApp with a pre-filled message. There is no form backend.

## Develop

```bash
npm install
npm run dev
```

`npm run dev` renders the page for the URL you open. The document head in dev stays the home page head from `index.html`. Titles and meta tags for each route are written by the production build.

## Publish

GitHub Actions deploys this site to GitHub Pages when `main` is updated. Merging to `main` publishes www.cestuition.com. The workflow runs `npm install` and `npm run build`, which prerenders `dist/`. Preview changes on a pull request before merging.

## Add a page

Routes live in `src/routes.ts`. That list is the source for the prerendered HTML, the `<head>`, and `sitemap.xml`.

1. Add a component under `src/pages/`. Use `Navigation`, `Footer`, and `WhatsAppBar`. Pass `sectionBase="/"` so the section links still point at the home page.
2. Import it in `src/routes.ts` and append a route. `socialHead` fills the canonical URL, Open Graph tags, and Twitter tags from the title and description. `path` must start and end with `/`.

```tsx
{
  id: 'british-curriculum',
  path: '/curricula/british/',
  sitemap: true,
  head: socialHead({
    title: 'Page title | CES Tuition',
    description: 'The description that should appear in search results.',
    path: '/curricula/british/',
  }),
  Page: BritishCurriculum,
}
```

3. Run `npm run build`. The route is written to `dist/curricula/british/index.html` with the rendered page inside `#root`, and the URL is added to `dist/sitemap.xml` with a `lastmod` of the build date (UTC). `public/robots.txt` already points at `https://www.cestuition.com/sitemap.xml`.

Do not add a second HTML entry for Vite. One client bundle hydrates every page. The prerender stamps `data-route` on `<html>` so the 404 document, which GitHub Pages serves at whatever URL was missing, still hydrates as the not-found page.

The home page `<head>` is the block already in `index.html`, including its JSON-LD. The build copies those tags through unchanged and fails if they disagree with the `head` object on the `home` route. Change `index.html` and that object together. Set `robots: 'noindex'` and `sitemap: false` for a page that should not be indexed. Leave `path` off `socialHead` when the page should not declare a canonical URL, which is what the 404 page does.

`lastmod` is the UTC date of the build, not a hand-edited date. A page is omitted from the sitemap when `sitemap` is false.

## Not in this repo

Tutor photos, the trade licence number, an `@cestuition.com` email address, analytics IDs, and separate curriculum pages are still to be added. Privacy Policy and Terms of Service link to the existing pages on [app.cestuition.com](https://app.cestuition.com).
