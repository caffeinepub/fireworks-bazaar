# Design Brief

## Direction

Diwali Firecrackers Marketplace — celebratory pyrotechnics e-commerce with festive warmth, safety-conscious design, and premium artisanal positioning.

## Tone

Festive celebration meets responsible retail: deep crimson-red headers, warm golden accents, cream backgrounds—sophisticated celebration with safety front-and-center. Age warnings and legal disclaimers integrated seamlessly via dark mode sections.

## Differentiation

Product cards with bold hero imagery, warm drop shadows, and gold festive badges for product type (sparklers, rockets, flower pots) and safety tier; alternating card backgrounds build rhythm. Dark-themed safety cards establish trust and legal compliance.

## Color Palette

| Token      | OKLCH           | Role                              |
| ---------- | --------------- | --------------------------------- |
| background | 0.96 0.015 75   | Warm cream, primary surface       |
| foreground | 0.2 0.03 50     | Deep brown, maximum contrast text |
| card       | 0.98 0.01 75    | Elevated card surfaces            |
| primary    | 0.45 0.17 20    | Deep festive red, primary actions |
| accent     | 0.62 0.22 60    | Festive gold, celebration highlights |
| muted      | 0.93 0.015 75   | Soft warm cream, section dividers  |

## Typography

- Display: Lora (serif) — elegant, editorial headings and product names
- Body: DM Sans (sans-serif) — clear, legible product descriptions, safety labels, age warnings
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Warm drop shadows (`shadow-warm-sm` to `shadow-warm-lg`) create subtle layering; festive gold glow (`glow-festive-sm/md`) on accent elements signal celebration; card backgrounds alternate between cream and soft warm taupe to establish depth without borders.

## Structural Zones

| Zone    | Background      | Border          | Notes                                    |
| ------- | --------------- | --------------- | ---------------------------------------- |
| Header  | primary (0.45)  | accent (0.62)   | Deep red background, gold accent         |
| Content | background      | muted (0.93)    | Alternating card backgrounds (cream)    |
| Safety  | dark muted      | dark border     | Dark mode section for age/legal warnings |
| Footer  | muted (0.93)    | border          | Warm cream, visible border-top          |

## Spacing & Rhythm

Spacious, card-based grid (3–4 columns desktop, 2 mobile) with 1.5rem gaps; product cards use 1rem internal padding, safety sections 2rem padding, section headings 2rem above content, footer 2rem top padding—breathing room reinforces premium positioning.

## Component Patterns

- Buttons: deep red primary with cream text, hover darkens to `0.4 0.18 22`; secondary uses muted backgrounds
- Product cards: `rounded-lg`, warm shadows, alternating bg-card/bg-muted, festive gold category badges
- Safety badges: gold background, deep red text, `rounded-full`, used for age tier (5+, 10+, 16+), product type
- Alert cards: dark background with gold border for age/legal warnings

## Motion

- Entrance: cards fade in with slight scale-up on page load (`opacity 0 → 1`, `scale 0.95 → 1` over 0.3s)
- Hover: product cards lift on hover with enhanced shadow (`shadow-warm-lg`), accent badges pulse gently
- Decorative: subtle pulse on accent badges creates "celebratory" feel without distraction

## Constraints

- No gradients (maintain color integrity)
- Max 3 colors in any section (primary, accent, muted)
- Shadows use warm brown tones (no black/grey); glow only on accent elements
- Typography hierarchy strictly enforced: display font for h1/product names only, body font for all descriptive text
- Safety messaging uses dark mode contrast for legal compliance

## Signature Detail

Festive gold badges on product cards (`accent` color) signal product type (sparkler, rocket, flower pot) and safety tier (5+, 10+, 16+)—double duty as visual hook and legal/age differentiation. Dark-themed safety sections establish trust and regulatory compliance.
