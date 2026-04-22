# Milen.ia — Website UI Kit

A hi-fi recreation of the `milen-ia.com` marketing surface, built from the public `/design-system` spec.

## Components

| File | Role |
|---|---|
| `Icon.jsx` | Stroke-based inline icon set (Lucide-flavoured, 1.75 weight) |
| `Navbar.jsx` | Sticky dark glass nav with brand mark, links, pink CTA |
| `Hero.jsx` | Animated mesh backdrop + `hero-gradient-text` headline + dual CTA |
| `Bento.jsx` | 4-col glassmorphism bento grid (atendimento, automação, analytics, LGPD) |
| `ChatWidget.jsx` | Floating Mila chatbot with live send/receive mock |
| `Footer.jsx` | Dark footer with brand mark + sitemap columns |

## How to view

Open `index.html` — it wires all components into a one-page landing experience.

## Notes
- Site is JS-rendered; the kit is built from the design-system token spec the user provided, not the live HTML.
- Icons inlined as SVG. For a fuller set, swap to Lucide CDN (documented in root `README.md` → Iconography).
