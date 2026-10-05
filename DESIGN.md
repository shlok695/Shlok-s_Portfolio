---
name: Shlok Shah — Project Hub & Portfolio
description: A dark, restrained console for a DevOps engineer moving into Cloud and Platform Engineering, who runs real, live, self-hosted systems.
colors:
  void-ink: "#07060F"
  signal-white: "#F8F7FC"
  glass-surface: "#18142873"
  hairline-border: "#FFFFFF1A"
  glass-secondary: "#1C183099"
  violet-tint: "#8B5CF61F"
  muted-fill: "#FFFFFF0F"
  muted-ink: "#A8A4BC"
  live-cyan: "#22D3EE"
  deep-violet: "#A855F7"
  signal-fuchsia: "#F472B6"
  status-emerald: "#10B981"
typography:
  display:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.15em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, {colors.live-cyan}, {colors.deep-violet})"
    textColor: "{colors.void-ink}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#67E8F9"
    textColor: "{colors.void-ink}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "{colors.muted-fill}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-glass:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip-tag:
    backgroundColor: "{colors.violet-tint}"
    textColor: "{colors.live-cyan}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  status-badge:
    backgroundColor: "{colors.muted-fill}"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Design System: Shlok Shah — Project Hub & Portfolio

## 1. Overview

**Creative North Star: "The Live Terminal"**

The site presents itself as a console for real, running infrastructure, not a static resume. A near-black indigo canvas (`#07060F`) holds quiet panels with a single Live Cyan accent, small pulsing status dots signal what's actually live right now, and monospace-flavored status badges echo a terminal readout. The mood is nocturnal, technical, and quietly confident — the visual register of someone who is comfortable being judged by systems that are actually running in production, not mockups.

The stated brand reference is the Apple mobile website: restraint and precision reading as competence. The September 2026 refresh (see "Refresh log" below) moved the site most of the way there: one accent, asymmetric layouts, and motion that respects reduced-motion settings.

**Key Characteristics:**
- Near-black indigo base with glass-panel surfaces, not pure black or neutral gray.
- One accent, Live Cyan, for active and interactive elements. Emerald only for live status. No gradients on buttons, borders or text.
- Motion-forward: blur-in reveals, scroll parallax, staggered card entrances, magnetic buttons — all riding Apple's own `[0.16, 1, 0.3, 1]` ease-out curve (named `appleEase` in code).
- Status as proof, not decoration: the pulsing dot appears only where something is actually live (project badges, the hero's live server-status terminal).

## 2. Colors

A near-monochrome dark base carries almost all surface area; color is spent entirely on signaling status and drawing the eye to live/interactive elements.

### Primary
- **Live Cyan** (`#22D3EE`): the system's only accent. Used for the primary CTA fill, active nav underline, focus rings, icon accents and links. Hover state: `#67E8F9`.

### Retired
- **Deep Violet** (`#A855F7`) and **Signal Fuchsia** (`#F472B6`) were retired in the September 2026 refresh. Violet remains only inside the Education section, which is intentionally left as-is. Do not use either in new UI. `GlowCard`'s `tone: "violet" | "emerald"` props now render neutral.

### Tertiary
- **Status Emerald** (`#10B981`): reserved exclusively for "live" / "online" signals — the pulsing dot on live project badges and the tag-list status marker. Never used decoratively.

### Neutral
- **Void Ink** (`#07060F`): the page background. A deep indigo-black, not a flat neutral — carries a deliberate blue-violet undertone rather than true gray.
- **Signal White** (`#F8F7FC`): primary text and headline color; a warm-neutral off-white, not pure `#FFFFFF`.
- **Glass Surface** (`#18142873`, 45% opacity over Void Ink): the fill for cards and panels (`.glass-card`, `.premium-glass`).
- **Glass Secondary** (`#1C183099`, 60% opacity): a slightly lighter glass fill used for secondary surfaces and pill backgrounds.
- **Hairline Border** (`#FFFFFF1A`, 10% opacity): the border on every glass panel, chip, and nav divider.
- **Muted Fill** (`#FFFFFF0F`, 6% opacity): ghost-button and tag backgrounds where no color signal is needed.
- **Muted Ink** (`#A8A4BC`): secondary text — status badge labels, meta text, "gray-400"-equivalent body copy.

### Named Rules
**The Signal Color Rule.** Cyan means active or interactive; emerald means live. Nothing else gets color. If a new element needs color and isn't one of those two meanings, it stays neutral (white at 5-10% fill, hairline border, gray text).

## 3. Typography

**Display/Body Font:** Geist Sans, loaded via the `geist` package (`GeistSans.variable`), with `system-ui` fallback. Geist Mono for terminal and route-map readouts.
**Label Font:** same family, uppercase, wide-tracked

**Character:** A single geometric-humanist sans carries the whole system — no serif or mono pairing. Weight and size do the differentiating work, from bold 700 display headlines down to 400-weight relaxed body copy.

Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty` (set globally in `globals.css`). Display headlines use `tracking-tighter` and `leading-[1.02]`.

### Hierarchy
- **Display** (700, `3rem`–`4.5rem` across the `md:` breakpoint, line-height 1.05, tracking `-0.025em`): hero `<h1>` only, e.g. "Secure. Reliable. Supportable."
- **Headline** (700, `1.875rem`, line-height 1.2): section titles ("What I Do", "Featured Applications", "Infrastructure").
- **Title** (700, `1.25rem`, tracking `-0.01em`): card and panel headings (project card titles, GlowCard headings).
- **Body** (400, `1rem`–`1.125rem`, line-height 1.7, color Muted Ink or Signal White at 80% depending on emphasis): paragraph copy; capped informally around 65–75ch by the `max-w-2xl`/`max-w-3xl` containers already in use.
- **Label** (600, `0.625rem`, tracking `0.15em`, uppercase): status badges, tag pills, section eyebrows.

### Named Rules
**The One-Family Rule.** Every weight from hero to fine print comes from Geist; introducing a second typeface would compete with the glow/gradient system for attention that should stay on color and motion.

## 4. Elevation

Depth comes from translucency and blur, not drop shadows. Panels are `backdrop-filter: blur(16–24px)` glass sitting over the animated background, edged with a 1px hairline border and a faint inset highlight — never a hard drop shadow implying a panel floating above the page. The one exception is the primary CTA, which gets a soft cyan shadow to read as the most interactive element on the page.

### Shadow Vocabulary
- **Glass Ambient** (`box-shadow: 0 4px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)`): the default on every `.premium-glass` panel — diffuse, low-contrast, mostly about the inset highlight reading as glass edge.
- **Cyan Glow** (`box-shadow: 0 8px 28px -12px rgba(34,211,238,0.6)`, slightly stronger on hover): reserved for `.btn-gradient`, the primary CTA (the class name is historical; it is a solid fill now). This is the only shadow in the system meant to be noticed rather than felt.
- **Nav Scroll Shadow** (`box-shadow: 0 4px 30px rgba(0,0,0,0.2)`): appears on the nav bar only once the page has scrolled past 24px, reinforcing that it's now floating above content.

### Named Rules
**The Glow-Is-Earned Rule.** Colored glow shadows are reserved for the single primary action per screen. Everything else gets the neutral Glass Ambient shadow or no shadow at all.

## 5. Components

### Buttons
- **Shape:** `rounded-xl` (12px).
- **Primary (`.btn-gradient`):** solid Live Cyan fill, Void Ink text, `px-6 py-3`, Cyan Glow. One per screen.
- **Secondary (`.btn-quiet`):** 4% white fill, 12% white border, Signal White text; border turns cyan on hover.
- **Hover / Active / Focus:** lighter cyan on hover, `translateY(1px)` on press, 2px Live Cyan focus ring (`:focus-visible`, global). `MagneticButton` offsets toward the pointer using motion values, never React state.
- **Card actions** (e.g. "View Live App" on project cards) use a cyan-tinted outline button, not the primary fill, so each screen still has a single primary.
- **Labels:** one label per intent across the site ("View Portfolio", "Contact Me", "Explore Projects").

### Chips / Tags
- **Style:** `rounded-md` (6px), Muted Fill background, Hairline border, gray-300 text. No colored chips and no decorative dots.
- **State:** static (no selected/unselected toggle state exists yet — every tag renders identically).

### Cards / Containers
- **Corner Style:** `rounded-2xl` (16px) for feature cards (`GlowCard`), `rounded-xl` (12px) for smaller panels.
- **Background:** Glass Surface, with a faint cyan spotlight that follows the cursor on hover (`.spotlight-card`) and a 1px border (`.cyber-border`) fading from cyan to transparent.
- **Hover lift:** only when the whole card is a link (`GlowCard interactive`). Static cards never move on hover.
- **Use cards sparingly:** lists of similar items (roles, skills, certifications, project challenges) use divided rows (`divide-y`) inside one container instead of a grid of identical cards.
- **Shadow Strategy:** Glass Ambient at rest; the spotlight and border-glow intensify on hover instead of the shadow changing.
- **Border:** Hairline Border (`#FFFFFF1A`) by default.
- **Internal Padding:** `p-6` (24px) to `p-8` (32px).

### Inputs / Fields
- No text input components exist yet in the current codebase (no forms). If one is added, it should inherit the Glass Surface + Hairline Border treatment and gain a Live Cyan focus ring to stay consistent with the "active = cyan" rule.

### Navigation
- **Style:** fixed, full-width glass bar (`backdrop-filter: blur(24px)`), transparent at the top of the page and gaining a background tint + Nav Scroll Shadow past 24px of scroll.
- **Typography:** Label-adjacent weight (medium, `text-sm`), Muted Ink at rest, Signal White active/hover.
- **Active state:** a `layoutId`-animated 2px cyan underline (no glow) slides between links, with `aria-current`. The active section is tracked with an IntersectionObserver and the scrolled state with Motion's `useScroll`, never a raw scroll listener.
- **Mobile:** collapses to a hamburger; the expanded menu is a full-width glass panel with divided rows.

### Status Badge (signature component)
A small pill combining a pulsing colored dot (`animate-pulse`, Status Emerald when live) with uppercase Label-scale, monospace-leaning text ("Live" / "Case Study"). Appears on project cards and the hero's terminal-style status widget. This is the component that most directly earns "The Live Terminal" name — it's the one piece of UI whose entire job is proving something is real and running right now.

## 6. Do's and Don'ts

Per PRODUCT.md's anti-references (the generic AI-portfolio template look, judged against the Apple-mobile-site reference), several current patterns are flagged for removal rather than reuse going forward.

### Do:
- **Do** keep color meaning-bound: cyan = active/interactive, emerald = live status. Everything else is neutral.
- **Do** keep depth glass-and-blur based (Glass Ambient shadow), reserving the Cyan Glow for the single primary CTA per screen.
- **Do** keep the Apple-ease `[0.16, 1, 0.3, 1]` curve as the one motion signature across reveals, hovers, and page transitions.
- **Do** honor `prefers-reduced-motion`: `MotionProvider` sets `reducedMotion="user"` for all Motion animations, scroll-linked hero effects check `useReducedMotion()`, and a global CSS rule stops looping animations.
- **Do** use asymmetric, left-aligned layouts for heroes and section headers (split hero with a real proof element on the right).
- **Do** keep a visible focus ring and the skip link on every page.
- **Do** keep the status-badge pattern (pulsing dot + label) — it's the system's most on-brand, least generic component.

### Don't:
- **Don't** use gradient-clipped headline text (`.animated-gradient-text`, currently on the hero's "Supportable."). PRODUCT.md names this explicitly as an anti-reference; replace with a solid Live Cyan or Signal White treatment and let weight/size carry emphasis instead.
- **Don't** add more tiny uppercase tracked eyebrow labels above sections (the hero's "Self-hosted Project Hub · Cybersecurity · Application Support" pill is the current instance). One is already a lot; don't propagate the pattern to new sections.
- **Don't** lean on glassmorphism as pure decoration. Where a `.premium-glass` panel doesn't need to signal "floating console surface" specifically, a flat Glass Secondary fill or no panel at all reads closer to the Apple-sleek target than reflexive blur-everywhere.
- **Don't** repeat the identical icon-plus-heading card grid (the "What I Do" / infrastructure-traits rows) without varying size or layout — same-sized repeated cards are the SaaS-template tell PRODUCT.md is steering away from.
- **Don't** use `border-t-2` colored top-stripes on cards (`border-t-cyan-500/20`, `border-t-indigo-500/20`, etc. across the challenges and skills sections) as the accent mechanism — this is the side/top-stripe-border anti-pattern; prefer a full border, background tint, or an icon/number lead-in instead.


## 7. Refresh log

**September 2026 (design refresh, targeted evolution):**
- Single accent: violet/fuchsia retired everywhere except the untouched Education section; gradients removed from buttons, scroll bar, selection, card borders and spotlight.
- Hub: split hero (pitch left, live server-status terminal right), "What I Do" as a still divided list with the tool chips, projects in a 2x2 grid, "Real Challenges" as linked rows.
- Portfolio: split hero with an "at a glance" facts panel, two-column About, full-width Experience cards on a single rail, Skills as grouped rows, Certifications as a compact list, wrapping "Connects" chain.
- Motion and a11y: reduced-motion support site-wide, skip link, global focus ring, `color-scheme`/`theme-color`, no `transition: all`, pointer and scroll effects moved to motion values and IntersectionObserver.
- Retired: looping icon animations in "What I Do", hover lift on static cards, glow under the nav underline, the gradient sweep on project cards.
