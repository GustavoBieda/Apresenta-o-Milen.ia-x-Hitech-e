---
name: milenia-design
description: Use this skill to generate well-branded interfaces and assets for Milen.ia, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — all design tokens (HSL semantic + hero palette), Inter type scale, glass/glow utilities, button + field + card components, animations
- `preview/` — design-system preview cards (one concept per file)
- `ui_kits/website/` — React/JSX components for the marketing site (Navbar, Hero, Bento, ChatWidget, Footer, Icon)

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always link `colors_and_type.css` to inherit tokens and utilities. Default to the **dark surface** (`hsl(240 10% 4%)`) — it's Milen.ia's canonical background. Use `hero-gradient-text` (cyan → purple → pink) ONLY on hero-level headlines; everywhere else, white or `hsl(var(--muted-foreground))`.

For production code, read the rules here to become an expert in designing with this brand. Key rules:
- **Pink `#FF0080` is the only acento** — use once per view, never gratuitously.
- **Rounded-full buttons by default**, with a pink glow shadow on primary.
- **Glass panels** for overlays (nav, chat, modals): blur 16–20px, 55–70% opacity, 1px faint white border.
- **Inter everywhere**, tight tracking (`-0.02em`) on display.
- **No drop shadows** — use colored glows instead.
- **No emoji as UI icons** — use the inline SVG set in `ui_kits/website/Icon.jsx`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
