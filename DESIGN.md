---
name: Alain Pereida Prado
description: A developer portfolio set as a printed component datasheet; paper, black ink, one signal green.
colors:
  signal: "#00db82"
  signal-ink: "#007444"
  on-signal: "#04140c"
  paper: "#eef0ec"
  sheet: "#f8f9f6"
  ink: "#0c120f"
  muted: "#4a544f"
  paper-dark: "#080f0c"
  sheet-dark: "#0d1612"
  ink-dark: "#e2e9e4"
  muted-dark: "#96a69e"
  signal-ink-dark: "#2bfda7"
typography:
  display:
    fontFamily: "Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.625
    fontFeature: "tnum"
  label:
    fontFamily: "Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 300
    lineHeight: 1.25
    fontFeature: "tnum"
rounded:
  none: "0px"
  drawn-circle: "999px"
spacing:
  row: "12px"
  row-lg: "20px"
  gutter: "16px"
  gutter-sm: "24px"
  gap: "32px"
  gap-lg: "48px"
  section: "56px"
  section-md: "80px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-ink-dark}"
    textColor: "{colors.on-signal}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  part-number-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  status-tag:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0 14px"
  nav-link-active:
    textColor: "{colors.ink}"
---

# Design System: Alain Pereida Prado

## Overview

**Creative North Star: "The Component Datasheet"**

The person is documented the way an electronic part is documented: a part number, a revision, spec tables, a package drawing, a pin configuration, a revision history and ordering information. Every surface reads as a printed technical sheet. In light mode it is cool off-white paper with black ink; in dark mode the same sheet sits under a lightbox as a deep green-black blueprint. Nothing is decorative unless a datasheet would carry it: rules, ticks, dimension lines, figure captions, an engineering grid behind drawings.

Density is that of a reference document, not a marketing page. Content lives in tables and ruled lists separated by 1px hairlines; heavier rules close sections. A single signal green does the work a highlighter does on a printout: it marks traces, pins, the active state and the one primary action, and it is never a background wash. Type is one grotesque in two weights, with tabular numerals throughout, so the page has the evenness of a typeset spec.

The confirmed rejection is the stock developer portfolio: split hero with floating card grid, rounded cards, and pill clouds of technologies.

**Key Characteristics:**
- Printed-sheet frame: header strip with part number and revision, footer with "sheet" pagination.
- Akzidenz-Grotesk only, weights 300 and 700, tabular numerals.
- Hairline (18% ink) and strong (90% ink) 1px rules carry all structure.
- One signal green for traces, pins, markers, active states and the primary action.
- Square corners everywhere; circles only where a drawn part is circular.
- Drafting grid (48px major, 12px minor) behind every figure.

## Colors

Two neutrals of ink on paper and one electrical green; the dark theme is the same sheet inverted into a blueprint, not a new palette.

### Primary
- **Signal Green** (#00db82): the identity color (a PRODUCT.md brand commitment). Fills the primary button, revision trace and nodes, lit pins and bus swatches, the active-nav underline, hero corner brackets, list markers, the "current" status tag, text selection and the focus outline. Identical in both themes.
- **Trace Ink Green** (#007444 light / #2bfda7 dark): the legible version of the signal for text and line-art on paper: dimension lines and their labels, link hover color, the contact email, external-link arrows, lit pin numbers.
- **Signal Ground** (#04140c): text on any signal-green fill.

### Neutral
- **Datasheet Paper** (#eef0ec light / #080f0c dark): page background and header backdrop (at 90% with blur).
- **Drawing Sheet** (#f8f9f6 light / #0d1612 dark): the slightly lifted ground of figures, under the drafting grid.
- **Print Ink** (#0c120f light / #e2e9e4 dark): all primary text, the part-number tag, the IC body, and the color of every rule (at 18% or 90%).
- **Annotation Grey** (#4a544f light / #96a69e dark): secondary text: spec-table keys, intros, captions, dates, inactive nav, sheet header and footer.

The drafting grid lines are ink at 7% and 3.5% on light paper and switch to signal green at the same opacities in dark, which is what makes the dark theme read as a blueprint.

### Named Rules
**The One Signal Rule.** Green is the only hue. It marks something live (a trace, a pin, an active state, the action to take) and never fills a section, card or large background.

**The Legible Green Rule.** Signal Green (#00db82) is never used as text or thin line-art on light paper; anything that must be read uses Trace Ink Green.

## Typography

**Display Font:** Grotesk, self-hosted Akzidenz-Grotesk (with Helvetica Neue, Arial)
**Body Font:** the same Grotesk
**Label/Mono Font:** none distinct; labels are the same face at small size with tabular numerals.

**Character:** One Swiss grotesque at two weights, light for reading and bold for naming. The contrast between 300 and 700 does all hierarchy work that color and extra families would otherwise do.

### Hierarchy
- **Display** (700, clamp(3rem, 9vw, 6rem), 0.92): the part name in the hero only, balanced wrap.
- **Headline** (700, clamp(2.25rem, 4.5vw, 3.25rem), 1.0): section titles ("Features", "Pin configuration" and their equivalents).
- **Title** (700, clamp(1.6rem, 3vw, 2.25rem), 1.25): project names; the contact lead runs slightly larger (clamp(1.75rem, 3.6vw, 2.75rem)). Experience entries use 1.25rem to 1.5rem bold.
- **Body** (300, 1.125rem, 1.625): paragraphs, capped near 38 to 40rem (roughly 70ch), pretty wrap. Table values and dense list rows drop to 1rem.
- **Label** (300, 0.875rem): captions, sheet header and footer, dates, nav, table headers (bold when they head a column). The part-number tag is 0.7rem bold with wider tracking.

### Named Rules
**The Two Weights Rule.** Only 300 and 700 exist. Light is the default for everything; bold names things (part name, titles, spec values, active nav, buttons).

**The Tight Display Rule.** Tracking tightens as size grows: -0.035em at display, -0.03em at headline, -0.02em at title, none at body.

## Layout

The page is a single sheet: a centered 76rem column with 16px gutters (24px from 640px), every section closed by a strong rule across the full viewport. Sections use a 12-column grid at 1024px and above: the title and intro take 4 columns and stick 6rem below the top while the content takes 8. Wide sections (projects) drop the split and stack a max-width title block over full-width content. Section padding is 56px vertical, 80px from 768px.

Inside sections, rhythm comes from ruled rows rather than spacing alone: list and table rows are 12px vertical (20px for service rows, 32 to 40px for project rows), each closed by a hairline, and every list or table opens on a strong rule. Gaps between columns are 32px, 40px or 48px. The hero splits 7/5: text and spec table left, package drawing right.

Below 1024px the desktop nav is replaced by a horizontally scrolling section rail under the header bar, with edge fades that appear only on the side that still has links. Service and spec tables collapse into stacked rows; column headers hide. At 480px and below the pin diagram shrinks its pin height, legs and chip body.

### Named Rules
**The Ruled Row Rule.** Lists and tables open on a strong rule and separate rows with hairlines. A new grouping is a new rule, not a new card.

## Elevation & Depth

The system is paper-flat. Depth is expressed by rule weight (hairline vs strong), by the Drawing Sheet ground under the drafting grid, and by the sticky header's translucent paper with backdrop blur. Shadows appear only beneath drawn objects that sit on the sheet (project screenshots, the IC body) and as a hover glow on the primary button.

### Shadow Vocabulary
- **Drawing lift** (`box-shadow: 0 12px 28px -16px rgb(0 0 0 / 0.55)`): project screenshots on their drafting-grid figure.
- **Part lift** (`box-shadow: 0 10px 24px -14px rgb(0 0 0 / 0.6)`): the IC body in the pin diagram.
- **Signal glow** (`box-shadow: 0 6px 18px -8px rgb(var(--signal) / 0.8)`): primary button hover only.

### Named Rules
**The Paper-Flat Rule.** Containers, sections, tables and buttons at rest carry no shadow. A shadow means "an object placed on the drawing", never "a card".

## Shapes

Corners are square (0px) on every container, button, tag, image, figure and swatch. Borders are 1px, in two weights of ink; framed portraits and screenshots take a 2px or 1px strong border. Circles appear only where the drawn object is circular in reality: the revision-history nodes, the pin-1 dot on the IC, and the IC notch (all 999px). Recurring geometry is technical drawing: dimension lines with 12px end ticks, L-shaped corner brackets (18px, 2px signal) at the portrait's corners, square list markers (8 to 12px).

### Named Rules
**The Square Corner Rule.** No radius on any UI surface. A circle is allowed only when it depicts a circular part on a drawing.

## Components

### Buttons
Blunt, printed, full-weight labels with a leading stroke icon.
- **Shape:** square corners (0px), 14px by 24px padding, 10px icon gap, bold label.
- **Primary:** Signal Green fill with Signal Ground text. One primary per region (CV download in the hero, inquiry in services).
- **Hover / Focus:** primary shifts to the signal-hover token (#00c273 on light paper, #2bfda7 on the blueprint) and gains the signal glow; presses down 1px on active. All focus is a 2px Signal Green outline at 3px offset.
- **Secondary:** transparent with a 1px strong ink border; inverts to ink fill with paper text on hover. A compact 8px by 16px small-text variant serves inline utilities (copy email).

### Tags
- **Part-number tag:** ink fill, paper text, 0.7rem bold, wider tracking, square. Identifies the part (APP-2021) in the header.
- **Status tag:** Signal Green fill, Signal Ground text, 0.75rem bold, square. Marks the current revision only.

### Spec Tables
- **Style:** opens on a strong rule; each row closed by a hairline; key column at 25 to 38% width in light Annotation Grey; values in ink, bold when they are the spec itself (years, stack).

### Navigation
- **Style:** sticky 56px header on translucent paper with a strong bottom rule; the part-number tag and name sit left behind a hairline divider, links center, language and theme controls right, each in its own hairline-bounded cell.
- **States:** links are 0.95rem Annotation Grey, ink on hover; the in-view section turns bold ink and grows a 3px Signal Green underline from the left (300ms, cubic-bezier(0.16, 1, 0.3, 1)). The current language is an ink-filled square; the theme button inverts on hover.
- **Mobile:** a horizontal scroll rail under the bar, separated by a hairline, keeps the active link centered and fades only the overflowing edge.

### Links
- **Inline / row links:** ink with an invisible underline that turns Trace Ink Green, color and underline together, on hover. External links carry a 22px arrow that nudges up-right on hover.

### Figures
- **Drafting figure:** Drawing Sheet ground with the 48/12px drafting grid, hairline border, a "Fig. N — title" caption below in Annotation Grey. Mobile screenshots are cropped from the top at 62% width inside a 16:10 frame; desktop screenshots are contained.

### Revision Trace (signature)
A vertical 3px Signal Green trace connects 17px ring nodes (3px green border on paper; the current node is filled). Each segment draws itself downward when the list scrolls into view (700ms, cubic-bezier(0.16, 1, 0.3, 1), 450ms stagger per segment), drawn by default without JS or under reduced motion. Each entry pairs a bold "Rev N.0" label column with the role, company, date and description.

### Pin Configuration (signature)
The stack drawn as a DIP chip on a drafting figure: an ink body with a vertical part label, notch and pin-1 dot, numbered pins either side with outlined legs. Hovering or pressing a bus in the adjacent ruled list lights its pins (green legs, green pin numbers, bold labels) and dims the rest to 35%; a click locks the selection (aria-pressed).

## Do's and Don'ts

### Do:
- **Do** build every new grouping as a ruled list or spec table: strong rule on top, hairline between rows.
- **Do** use Signal Green (#00db82) only for something live: a trace, pin, marker, active state or the single primary action.
- **Do** set any green text or thin green line on light paper in Trace Ink Green (#007444).
- **Do** keep type to Grotesk at 300 and 700 with tabular numerals, tightening tracking as size grows.
- **Do** put screenshots and drawings on a drafting-grid figure with a "Fig. N" caption.
- **Do** keep the 76rem sheet column and the 4/8 sticky-title split for standard sections.
- **Do** honor reduced motion: the trace is drawn, hover lifts are removed.

### Don't:
- **Don't** use rounded cards or pill chips; corners are 0px and technologies are listed as text or pins.
- **Don't** introduce a second accent hue or a green background wash.
- **Don't** add shadows to containers, sections or buttons at rest.
- **Don't** add a third font weight or a second family.
- **Don't** place small uppercase eyebrow labels above section titles; the headline stands alone with its intro.
