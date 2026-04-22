# Milen.ia — Design System

> **IA acessível para PMEs.** Dark-tech, glassmorphism, bento grid, pink acento.

---

## About Milen.ia

Milen.ia is an AI consultancy/platform whose site is `https://milen-ia.com`. The product promises **IA acessível para PMEs** (accessible AI for small and mid-sized businesses) via **Mila**, a branded conversational agent, plus a family of automation agents for sales, support, and ops.

This design system was built from the brand's public `/design-system` page (the user pasted the token spec directly). The live site is JavaScript-rendered — our fetch tooling only returned the `<title>` — so this system reflects the **declared tokens**, not reverse-engineered HTML/CSS.

## Sources

- `https://milen-ia.com` — public homepage (JS-rendered, inaccessible to fetch)
- `https://milen-ia.com/design-system` — canonical token spec (user-supplied copy in chat)

No Figma, codebase, or logo files were attached.

---

## Index

```
Milen.ia Design System/
├─ README.md              this file
├─ SKILL.md               packaged skill entrypoint (for Claude Code)
├─ colors_and_type.css    all tokens + utilities (Inter, glass, glow, animations, btn)
├─ preview/               design-system preview cards
│  ├─ brand-*.html
│  ├─ colors-*.html
│  ├─ type-*.html
│  ├─ spacing-*.html
│  └─ components-*.html
└─ ui_kits/
   └─ website/            hi-fi marketing site recreation (React + JSX)
      ├─ index.html
      ├─ Navbar.jsx · Hero.jsx · Bento.jsx · ChatWidget.jsx · Footer.jsx · Icon.jsx
      └─ README.md
```

---

## Content fundamentals

**Language.** Portuguese (Brazil). Copy examples: "IA acessível para PMEs.", "Dark-tech, próximo, sem jargão", "Conte sobre o seu desafio...".

**Tone.** *Dark-tech, próximo, sem jargão* — confident and modern but warm. Brazilian-casual second person: `seu negócio`, `o seu desafio`. Never overly formal; never corporate-stiff.

**Casing.** Sentence case headlines with strategic gradient emphasis (e.g. "IA **acessível** para PMEs."). Token names + labels in lowercase-hyphenated (`bg-primary`, `text-foreground`). UI labels: Title Case for buttons and nav ("Agendar com especialista", "Falar com Mila").

**Pronouns.** "você" implicit. Agents refer to themselves in first person — Mila says *"Sou a Mila"*, not "Somos".

**Emoji.** Used sparingly as accents in chat copy (💜 for Mila, 🇧🇷 for footer). Never in headings. Never as icon replacements.

**Punctuation.** Ends full sentences with periods, including headlines. Uses em-dashes and `·` separators.

**Vibe.** Calm, confident, product-forward. Focus on **outcome** over tech ("responde em segundos", "setup em 3 dias") rather than listing models or frameworks.

---

## Visual foundations

**Canonical surface: dark.** Near-black `hsl(240 10% 4%)` with a violet undertone. The light theme exists but the brand lives in the dark.

**Color.**
- **Primary pink** `#FF0080` / `hsl(330 100% 50%)` — the single acento, always on dark.
- **Hero triad** `#00E0FF` cyan → `#6B46C1` purple → `#FF0099` pink — used for `hero-gradient-text` and the hero mesh backdrop.
- **Accents** `#A855F7` purple, `#4ADE80` green, `#00E6B8` teal (agente-theme).
- Semantic tokens all live in HSL; always reference via `hsl(var(--primary))`, never raw hex in components.

**Type.** **Inter** throughout (400 / 500 / 600 / 700 / 800). Tight tracking on display (`-0.02em`), generous on body (`line-height: 1.6`). Gradient fills reserved for hero-level headlines.

**Spacing.** Tailwind scale (`1 · 2 · 4 · 6 · 8 · 12 · 16 · 24`). Generous section padding (80–120px vertical on hero/bento). Component internal padding averages 20–28px.

**Radius.** `--radius: 0.75rem` (12px) default. Hero surfaces use `2.5rem` (40px). Buttons are **full pill** by default. Cards `xl` (12px) to `2xl` (20px).

**Backgrounds.** The signature hero treatment is a **multi-blob radial mesh** (purple + pink + cyan clouds on near-black), animated with `animate-hero-bg`. Secondary sections are flat dark. No photography. No patterns. No hand-drawn illustration.

**Glass.** Two levels — `.glass` (strong: `backdrop-filter: blur(20px) saturate(140%)`) and `.glass-card` (subtle, for inner surfaces). Borders `hsla(0,0%,100%,.06–.08)` for faint edge definition.

**Animation.**
- Entrance: `fade-up` (14px translate, 600ms, custom easing) is the default.
- Ambient: `float` (4s), `pulse-dot` (1.4s for typing indicators), `scroll-logos` (30s linear), `hero-bg` (12s ease-in-out).
- Easing: `cubic-bezier(.2, .7, .2, 1)` — an overshoot-free, confident ease-out.
- No bounces. No elastic. Nothing playful.

**Hover states.** Buttons: shadow deepens (glow expands). Nav links: translucent white `hsla(0,0%,100%,.06)` background fill. Cards: no hover lift on this brand — they glow passively.

**Press states.** Universal `active: translateY(1px) scale(.99)` on buttons. No color change on press.

**Borders.** `hsl(var(--border))` default (very low contrast on dark: `hsl(240 6% 18%)`). Gradient borders (`.gradient-bg` wrapper) reserved for featured CTAs/cards.

**Shadows & glows.** Color-matched glows rather than neutral grey shadows — `shadow-primary` (soft pink halo under primary buttons), `agente-glow-pink`, `agente-glow-teal`. No Material-style drop shadows.

**Transparency & blur.** Heavy use behind nav (`blur(16px) saturate(140%)` @ 60% opacity) and chat panels. Always paired with a thin border to preserve edge.

**Imagery vibe.** N/A — no photography or illustration in the system. Visual interest comes from gradients + glow + glass, not pictures. If imagery is needed, it should be dark, tech-leaning, with violet/pink ambient lighting.

**Card anatomy.** `background: hsl(var(--card))` · `border: 1px solid hsl(var(--border))` · `radius: xl` · optional colored glow shadow. No drop shadow by default.

**Fixed elements.** Sticky glass navbar, floating ChatWidget bottom-right.

---

## Iconography

**Chosen approach.** Stroke-based inline SVG, Lucide-derived, **1.75 stroke weight**, round caps/joins. Bundled in `ui_kits/website/Icon.jsx` as a tiny named set: `sparkles · arrowRight · check · bot · zap · shield · chart · message · send · menu · close · user · calendar · phone`.

**Substitution notice.** The brand did not attach a production icon set. We substituted **Lucide Icons** (lucide.dev) as the closest match to the stroke-based dark-tech aesthetic. If Milen.ia has an official icon library, please share it and we'll swap in place.

**CDN option.** If a richer set is needed:
```html
<script src="https://unpkg.com/lucide@latest"></script>
```

**Emoji.** Used intentionally in chat copy only (💜). Not used as UI icons anywhere else.

**Unicode chars.** Middle-dot (`·`) as a separator and `✦` in the agente-badge are the only unicode icon-like characters used.

**No raster icons.** No PNG icon usage anywhere in the system.

---

## Caveats

See root message on delivery. The main gap: **no logo file was provided** — the wordmark is typeset in Inter with a gradient `.ia` suffix and a procedurally-drawn `M` mark. If there's an official SVG, swap it in at `assets/logo.svg`.

---

## Using the system

```html
<link rel="stylesheet" href="colors_and_type.css">
<!-- then -->
<button class="btn btn-default btn-lg">Falar com a Mila</button>
<div class="glass-card"> ... </div>
<h1 class="hero-gradient-text">IA acessível</h1>
```

All utilities and tokens are documented inline in `colors_and_type.css`.
