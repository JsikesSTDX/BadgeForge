# Standex Design System

The design guide and manifest for **Standex International Corporation** (NYSE: SXI) — a
global industrial manufacturer founded in 1955 and headquartered at 23 Keewaydin Drive,
Salem, New Hampshire. Standex operates twelve business units aggregated into four
reporting segments: **Electronics**, **Aerospace & Defense**, **Scientific**, and
**Engraving & Hydraulics**.

Standex is not a consumer brand. Its audiences are OEM design engineers, procurement
teams, investors, and prospective employees. Everything in this system is built for that:
sober, legible, engineered, and dominated by one colour — Standex Blue.

---

## Sources this system was built from

**Supplied by the user**
- `uploads/Standex Brand Experience Guide - 07-16-2026.pdf` — "Brand Standards BXG9.0",
  22 pages. This is the authoritative source for colour, type, logo rules, button styles,
  brand pillars, values, email signature, business cards, and signage. Full extracted text
  is kept at `research/brand-guide.txt`.
- Logo artwork: `standex-logo-{blue,gray,white}-FINAL.svg` (full wordmark) and
  `standex-s-block-{blue,gray,white}-FINAL.svg` (the "S block" mark). Copied to `assets/`.

**Public sources read (July 2026)** — no codebase or Figma file was provided, so the UI
kits were reconstructed from the live marketing sites:
- <https://standex.com/> — corporate site
- <https://standexelectronics.com/> — Electronics divisional site (rebranded Oct 2025)
- <https://standexdetect.com/products/reed-switches/> — a Standex Detect product surface

Page structures, nav labels, headlines and body copy captured from those pages are
recorded in `research/source-notes.md`, including the URLs of the real hero, banner, and
product photography that should replace this system's placeholders.

**Brand architecture.** Enterprise → Segment → Business Unit → Product Line. Wholly-owned
operating companies that keep distinct names use the endorsement **"A Standex Company"**.
Named business units: Narayan, Amran, Spincraft, McStarlite, GS Engineering, Standex
Detect, Standex Edge, Standex Grid, Corepoint, ABS, CBS, LRP, Cryosafe, Federal
Industries, Custom Hoists. Within Electronics, the three product brands are **Standex
Detect** (reed switches, sensors, relays), **Standex Edge** (custom magnetics), and
**Standex Grid** (instrument and high-voltage transformers).

---

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | The single stylesheet consumers link. `@import` lines only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `semantic.css`, `theme-dark.css`, `base.css` |
| `assets/` | Logo SVGs — enterprise wordmark and S block (blue / gray / white), Electronics / Edge / Grid lockups (full colour + reversed), Electronics S mark, and the "A Standex Company" trustmark |
| `components/core/` | Button, IconButton, Icon, Logo, Badge, Tag, ThemeToggle |
| `components/forms/` | FormField, Input, Textarea, Select, Checkbox, Radio, Switch |
| `components/layout/` | Card, SectionHeading, StatBlock, Breadcrumb, Tabs, Accordion |
| `components/feedback/` | Dialog, Toast, Tooltip |
| `ui_kits/corporate-website/` | standex.com recreation — home, businesses, contact |
| `ui_kits/electronics-website/` | standexelectronics.com + Standex Detect recreation — home, product category, parametric search |
| `templates/email-signature/` | Email signature block, Brand Standards p.13 |
| `templates/business-card/` | 3.5″ × 2″ business card front and back, p.16 |
| `guidelines/` | 27 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `research/` | `brand-guide.txt` (extracted PDF text), `source-notes.md` (what was read where) |
| `SKILL.md` | Agent Skills front-matter so this folder works in Claude Code |

### Components

Core: **Button**, **IconButton**, **Icon**, **Logo**, **Badge**, **Tag**, **ThemeToggle**.
Forms: **FormField**, **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**.
Layout: **Card**, **SectionHeading**, **StatBlock**, **Breadcrumb**, **Tabs**, **Accordion**.
Feedback: **Dialog**, **Toast**, **Tooltip**.

Each directory carries `<Name>.jsx`, `<Name>.d.ts` (props contract) and
`<Name>.prompt.md` (one-line "what & when", a usage example, and the variants).

**Intentional additions.** The Brand Standards define only one interface component —
the web button. Everything else here was authored to cover what the live Standex sites
actually use, so consumers can rebuild a real page rather than a button on a white field.
Three additions deserve a note:
- **Icon** — a wrapper over the substituted Material Symbols Sharp font, so nobody
  hand-draws an SVG icon in Standex work.
- **Logo** — wraps the supplied SVGs and the segment-descriptor lockup so the artwork is
  never recoloured or restretched by hand.
- **StatBlock** — the fact rows on standex.com and standexelectronics.com are a distinct,
  repeated pattern with no other home.
- **ThemeToggle** — dark mode is not in the Brand Standards; this is the switch for the
  `[data-theme="dark"]` scope described under Visual Foundations. Review before shipping it
  on a public Standex surface.

---

## CONTENT FUNDAMENTALS

**Voice.** First-person plural, always. Standex says "we" and addresses the reader as
"you" or "our customers". Sentences are declarative and complete; there is no marketing
banter, no rhetorical questions except in explicit contact prompts ("Have a question?"),
and no exclamation marks anywhere in the source material.

**The three pillars are the spine of every message: Partner. Solve. Grow.** Written as
three sentence-case words with full stops. The human-side tagline is **"Together, we get
it right."** The Electronics positioning line is **"The Right Design, at the Right Time,
at the Optimal Cost."** — set in italic Semibold, title-cased, with the full stop.

**Sentence patterns.** The corpus is built from "We [verb] …" constructions:

> We partner with deep customer understanding.
> We solve complex problems.
> We grow through innovation.
> We collaborate to solve problems and support growth.
> We work with our customers to advance progress through innovation.

Positioning copy leans on a "from X to Y" construction that grounds abstractions in
physical products:

> From powering the pour of your morning coffee to running your washing machine and
> improving the efficiency of your car parts, our electronic components empower daily
> activities.
> From inventing and producing parts for next-generation space vehicles, to evolving
> vaccine refrigeration … we are focused on making what's next possible.
> From reed switches to sensors and relays, Standex Detect delivers precision-engineered
> solutions trusted across automotive, industrial, and test applications.

**Casing.** Headlines are Title Case on the divisional site ("For When It Matters",
"Powering Progress Through Custom Magnetics", "Products and Components") and mixed on the
corporate site ("Partners in Progress", "Meet Standex", "Invest With Us", "Grow With Us").
Follow whichever surface you're on. Eyebrows and micro-labels are ALL CAPS with 0.14em
tracking. Body copy is sentence case. Never use ALL CAPS for a headline or a sentence.

**Nouns and jargon.** Use the real engineering vocabulary — reed switch, reed relay,
Photo-MOSFET relay, optocoupler, planar transformer, ampere-turns, hermetically sealed,
Form A / Form C. The audience is design engineers; precision reads as credibility.
Never soften a spec into a superlative.

**Adjectives that are on-brand:** precision-engineered, hermetically sealed, rugged,
manufacturable, dependable, disciplined, high-reliability, contactless.
**Off-brand:** revolutionary, game-changing, seamless (unless describing integration),
best-in-class, cutting-edge (used once on the corporate site; do not multiply it).

**Length.** Section intros run one to three sentences. Card bodies run one sentence, two
at most. Headlines are four to eight words. Buttons are two or three words in Title Case
and describe the destination: "Request a Quote", "Check Stock", "Browse Products",
"Explore Solutions", "Explore Standex Detect", "Investors Portal", "Learn More".

**Forms.** Required fields are marked with a red asterisk and preceded by the exact line
`"*" indicates required fields`. Select placeholders read "Please Select Your Industry",
"Please Select Your Product", "Select a Country". Consent copy is legalistic and
unabridged — do not paraphrase it.

**Numbers.** Segment counts, employee counts, and financials come from investor material
only (10-K, ir.standex.com). Never invent a statistic to fill a stat row.

**Emoji: never.** Not in UI, not in decks, not in email. The brand package contains none,
and the audience is industrial procurement and engineering. Unicode symbols are limited to
the typographic ones already in use: `»` after "Watch now", `·` and `&middot;` as
separators, `×` as a close glyph in plain-text contexts, `–` and `—` for ranges and asides.
`™` / `®` follow legal guidance, and Pantone® always carries its mark — though note the
brand book states Standex does **not** use the Pantone Matching System for print.

---

## VISUAL FOUNDATIONS

### Colour
Five exact brand colours, with recommended usage shares from the Brand Standards:

| Colour | Hex | Pantone C | RAL | Share |
| --- | --- | --- | --- | --- |
| Standex Blue | `#254061` | 534 C | 5008 | 60% |
| Standex Off White | `#F4F6FA` | 663 C | 9003 | 15% |
| Standex Gray | `#53565A` | Cool Gray 11 C | 7015 | 10% |
| Standex Green | `#77933C` | 576 C | 6011 | 10% |
| Standex Aqua | `#215968` | 7699 C | 5021 | 5% |

The shares are guidance for overall visual balance, not a rule. The governing sentence is
**"When in doubt, use more Blue and less accent colour."** Green and Aqua are reserved for
emphasis, never decoration: a green eyebrow, a green rule, one green button per view at
most. Signage is strictly Blue `#254061` and White.

Ramps (`--blue-*`, `--green-*`, `--aqua-*`, `--gray-*`) are tints and shades derived from
those five values for interface states; the base values stay exact.

**Text contrast.** On white, `--text-body` #53565A gives 7.38:1 and `--text-muted` #71757A
gives 4.64:1 — both clear WCAG AA. `--text-subtle` #9A9EA3 is **2.69:1 and is not a text
colour**: use it only for disabled labels, placeholder glyphs, hairline icons and decorative
rules, never for readable copy and never at or below 14px. Small type — captions, eyebrows,
table meta, specimen labels — bottoms out at `--text-muted`. This is the same rule the brand
book applies to the logo ("do not use low contrast placements"); it holds for type too, and
opacity is never the way to soften text. Status colours
(`--status-warning` `#B4801F`, `--status-danger` `#9E2C24`) are **derived, not in the brand
book** — success deliberately reuses Standex Green. Flag them if a brand owner reviews.

Never introduce a purple, a magenta, a warm orange, or a bluish-purple gradient.

### Typography
**Source Sans Pro**, self-hosted from `fonts/`, for everything — ExtraLight 200 through
Black 900 with matching italics. Division descriptors and headlines use **Semibold
(600)**; body is Regular (400); Bold (700) is for emphasis and the email-signature name.
Where the licensed font is unavailable — Microsoft Office, plain HTML — the brand book
mandates **Arial** as the substitute.

Display 72 / 56, H1 44, H2 34, H3 26, H4 21, H5 18; body 19 / 17 / 15, caption 13, micro 11.
Display leading 1.05 with −2% tracking; headings 1.16 at −1%; body 1.6 at 0. Eyebrows are
13px uppercase Semibold at +0.14em. There is no serif and no display face in this brand —
resist adding one.

### Layout
1280px content container, 32px page padding, 24px gutter, 4px spacing grid.
Sections breathe: 96px vertical padding standard, 64px compact. Content columns cap at
~760–860px for readability. Grids are 3-up and 4-up; asymmetric 1.1fr/1fr splits carry
image-and-copy bands. The header is sticky; nothing else is fixed except toasts (bottom
right) and modals. Full-bleed is reserved for hero and brand bands — content sections stay
inside the container.

### Light and dark modes
Light is the Standex default and the only mode the Brand Standards describe. Dark mode is
an accommodation for engineers working in low light and for embedded/product UI, authored
here as a **theme scope, not a second brand**: `tokens/theme-dark.css` overrides the
semantic aliases under `[data-theme="dark"]`, so nothing about the base palette changes.

Activate with `<html data-theme="dark">`, or drop a `<ThemeToggle />` into a header — it
persists the choice and honours the OS preference on first load.

The dark field is built **downward from Standex Blue**, never toward neutral black:
page `--blue-900` `#111e2e`, panels `--blue-800`, subtle surfaces `#16283c`. Body copy is
Standex Off White `#F4F6FA` stepping down to `#C7D2E0` and `#9FAEC1`. Green and Aqua keep
their emphasis role one stop lighter (`--green-400`, `--aqua-500`) so they clear AA on navy,
and links shift to `#9EC2E6` because Standex Blue cannot carry a link on a navy field.

The brand's signature button inversion **flips**: in dark mode the static button is Off
White with a navy label, and hover empties it to an outline. Shadows become depth pools
(`rgba(4,9,16,α)`) rather than lifts. The logo switches to the white artwork — use
`<Logo color="auto">` and it handles itself.

**Rule for component authors:** consume the semantic aliases (`--surface-*`, `--text-*`,
`--field-*`, `--button-*`, `--control-*`, `--tooltip-*`, `--border-*`). A component that
reaches for `--standex-blue` or `--standex-white` directly will not re-theme. The one
sanctioned exception is a section deliberately painted brand navy in both modes — the
footer and hero bands do this.

### Backgrounds
Three, and only three, section backgrounds: **white**, **Standex Off White** `#F4F6FA`,
and **Standex Blue**. No more than two background colours in a single deck or page beyond
white. There are no repeating patterns, no textures, no grain, no hand-drawn
illustrations, and no decorative gradients in this brand. Where the live sites run a hero
video or a photographic collage, this system substitutes a navy→aqua brand gradient with a
scrim and labels it as a placeholder — that gradient is a stand-in for missing photography,
not a brand motif.

### Imagery
Cool, technical, factual. Product shots are isolated components on pure white with no
shadow — engineering-catalogue style. Environmental photography is industrial and daylit
(cleanrooms, wound coils, substations, spacecraft hardware), skewing cool blue-grey.
Never warm, never filtered, never black-and-white, never grainy. People appear in
context of work, not staged.

### Type over imagery: scrims, not capsules
Legibility comes from a navy gradient scrim over the image (`--scrim-bottom`,
`--scrim-left`), never from a translucent rounded capsule behind the text and never from a
text shadow. Scrims fade from `rgba(17,30,46,.86)` to transparent.

### Corners
The brand book specifies **33px** corner radius for web buttons — effectively a pill on a
52px control. Everything else is square or near-square: panels and inputs 4px, badges 2px,
image frames 0. This split is the single most recognisable shape signature of the system:
**round buttons, square everything else.** Chips and switches are pills because they are
controls, not containers.

### Cards
White (or Off White) fill, 1px `#DCDFE2` hairline border, 4px corners, 24px padding,
**no resting shadow**. Interactive cards lift 2px and take `--shadow-md` on hover, with the
border warming to `--blue-200` and any image scaling 1.03. The sanctioned emphasis
treatment is a 4px Standex Green rule across the **top** edge (`accentRule`). A coloured
**left** border appears in exactly one component — `Toast` — and must not be copied onto
cards.

### Shadows
Blue-tinted, never black: `rgba(37,64,97,α)`. Four steps, xs → lg, from a 1px contact
shadow to a 16/40px overlay shadow. Inner shadows are used only as a 1px bottom hairline
(`--shadow-inset-hairline`). Focus is a 3px `rgba(37,64,97,.28)` ring, or 3px white at 55%
on navy.

### Borders and rules
1px hairline for structure, 2px for an active tab underline, 4px for an emphasis rule
(green on cards, navy on Dialog and process steps). On navy, borders are
`rgba(255,255,255,.28)`.

### Transparency and blur
Sparingly, and only on navy: `rgba(255,255,255,.06)` panel fills, `.14` hover fills,
`.72` secondary text. There is **no backdrop blur** anywhere in this system — modal scrims
are a flat `rgba(17,30,46,.62)`. Glassmorphism is off-brand.

### Motion
Functional and short. 80ms press feedback, 150ms colour and hover, 220ms card lift and
accordion, 400ms image zoom, 700ms scroll reveals (fade plus a 16px rise). Easing is
`cubic-bezier(.4,0,.2,1)` throughout. **No bounce, no spring, no overshoot, no parallax,
no autoplaying carousels.** Nothing loops.

### Interaction states
- **Hover, primary button:** inverts — navy fill becomes white fill with a navy label and
  a navy hairline. This inversion is prescribed by the brand book and is the system's
  signature hover.
- **Hover, secondary button:** fills navy, label goes white.
- **Hover, link:** colour shifts navy → Standex Aqua, underline appears at 3px offset.
- **Hover, nav item:** label goes navy and a 2px Standex Green rule appears beneath.
- **Hover, card:** 2px lift, `--shadow-md`, arrow nudges 3px right.
- **Press:** 1px downward translate. Buttons do not shrink or scale.
- **Focus:** 3px navy ring at 28%, never removed.
- **Disabled:** 40% opacity, `not-allowed` cursor. No greyed-out recolouring.

---

## ICONOGRAPHY

**No icon set was supplied**, and the brand book does not mention iconography at all. The
live Standex sites use small PNG glyphs in their About stat rows plus the theme's own
chevrons and arrows — none of that artwork is in the package.

**Substitution (please review):** this system standardises on **Material Symbols Sharp**,
loaded from Google Fonts in `tokens/fonts.css` and wrapped by the `Icon` component. Sharp
was chosen because its square terminals and orthogonal construction match the brand's
square panels and engineered feel; Rounded and Outlined both read softer than Standex.
Default is 20–24px at weight 400, unfilled, inheriting `currentColor`. Filled (`fill={1}`)
is used only for Toast status glyphs.

**Rules.**
- Icons are always monochrome and always the same colour as their label. Never
  multi-colour, never in a coloured circle badge.
- Icons never appear at decorative sizes on their own. The largest sanctioned use is 34px
  in a `Card` or process step.
- Buttons take an icon on the right for forward motion (`arrow_forward`) and on the left
  for an action verb (`play_circle`, `download`, `tune`).
- Common glyphs in Standex work: `arrow_forward`, `arrow_back`, `chevron_right`,
  `expand_more`, `search`, `close`, `menu`, `download`, `description`, `place`, `mail`,
  `call`, `language`, `check`, `tune`, `sensors`, `bolt`, `memory`, `electric_meter`,
  `factory`, `engineering`, `lightbulb`, `forum`, `local_shipping`, `support_agent`,
  `request_quote`, `verified`.
- **Do not hand-draw SVG icons** for Standex work, and do not mix a second icon library
  into a page.
- **Emoji are never used as icons.** Unicode is limited to the typographic characters
  listed under Content Fundamentals.

**Logo assets in `assets/`**

*Enterprise* — `logo-standex-{blue,gray,white}.svg` (viewBox 1182.938 × 319.93),
`s-block-{blue,gray,white}.svg` (413.699 × 388.403), `s-block-reversed.svg` (298.42 × 291.91).

*Divisional lockups* — `lockup-electronics.svg`, `lockup-edge.svg`, `lockup-grid.svg`
(814.34 × 195.78 in-line) each with a `-reversed` counterpart for dark fields;
`lockup-electronics-stacked-{blue,gray,white}.svg` (816.456 × 311.065);
`s-block-electronics.svg` + `-reversed`.

*Endorsement* — `trustmark-footer.svg` (1468.7 × 225.93), the "A Standex Company" mark for
wholly-owned operating companies trading under their own name.

All of it is reachable through the `Logo` component's `variant` prop, so nobody has to
remember filenames or aspect ratios.

**Note on the artwork files.** As exported, every one of these SVGs carried its colour in an
internal `<style>` block referencing `.cls-*` classes — and that block arrived empty, so the
marks rendered **black** everywhere. Compounding it, web hosts commonly strip `<style>` from
served SVGs. Each file has therefore been rewritten with an explicit `fill` attribute on
every shape: `#254061` for blue, `#53565A` for gray, `#FFFFFF` for white and reversed. If a
new logo file is ever added, do the same — never rely on an in-file `<style>` block.

One-colour
only; preferred is Standex Blue `#254061`.

**Whenever the logo sits on a dark background that needs light contrast, use the white
artwork** — navy sections and footers, photography, anything behind a scrim, and dark mode.
In code that means `<Logo onDark>`, which forces the white files and holds in light mode
too, because a navy band is dark in both themes. `<Logo color="auto">` covers the theme
case on light surfaces. Never place the blue or gray mark on Standex Blue, and never rely
on opacity or a shadow to rescue contrast.

Clear space equals the height of the largest graphical "step" in the mark. Forbidden: compressing or stretching,
altering the structure, separating the mark from the name, recolouring, two-tone S block,
low-contrast placement, placing the logo on busy imagery, or enclosing it in a shape.
Divisional lockups exist as a stacked and an in-line variant; "Standex" is always bold and
the segment descriptor is not.

---

## Substitutions and gaps to resolve

1. ~~Font binaries were not supplied.~~ **Resolved.** The licensed Source Sans Pro files are
   self-hosted from `fonts/` with `@font-face` rules in `tokens/fonts.css` covering
   ExtraLight 200 through Black 900 plus every italic. Arial remains the brand-mandated
   fallback for Office and plain HTML.
2. **Icon set substituted** — Material Symbols Sharp, as described above.
3. **No photography, illustration, or customer logo artwork** was supplied. UI kits use
   labelled placeholders; the real image URLs are listed in `research/source-notes.md`.
4. **No slide template was supplied**, so no sample slides were authored. The brand book
   does give a PowerPoint colour balance (60% Blue, 15% White, 10% Gray, 10% Green,
   5% Teal) — send a deck and it can be built against that.
5. **Status colours are derived**, not brand-defined.
6. **Dark mode is an extension, not brand-defined.** The Brand Standards describe light
   surfaces only. The dark values in `tokens/theme-dark.css` were derived from the brand
   palette and checked for AA contrast, but a brand owner should sign them off.
7. **Video-conference backgrounds** (p.14) and **facility signage** (p.17–21) are
   referenced in the brand book but their artwork is not in this package.
