---
name: Technical Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006243'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d57'
  on-tertiary-container: '#bdffdc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  tech-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
The design system embodies a modern, precise, and technologically sophisticated ethos tailored for high-intensity technical education and hard-skill tracking. It reflects the focus and rigour required in software engineering, data science, DevOps, and cloud architecture.

### Target Audience
Engineering students, technology professionals upskilling in high-complexity disciplines, corporate technical leads, and engineering mentors requiring data-dense tracking, code-adjacent readability, and cognitive clarity.

### Emotional Response
- **Clarity & Focus:** Interfaces minimize cognitive load, allowing dense curricula and metrics to feel digestible.
- **Competence & Credibility:** Unwavering, dependable design cues inspired by modern IDEs, developer documentation, and enterprise analytics suites.
- **Achievement & Progression:** Progress visualizers and milestone markers deliver tangible, earned momentum without superfluous gamification noise.

### Design Movement & Aesthetic
A synthesis of **Corporate Modern** structural balance and **Developer-First Minimalism**. The interface employs high-contrast structural framing—contrasting deep slate structural shells (sidebars and persistent command surfaces) against pristine, accessible content canvases. High data density is kept breathable through systematic rhythm and precise typography.

## Colors
The color architecture relies on precise roles that separate navigational architecture, primary interactive targets, progress indicators, and surface canvases.

### Palette Strategy
- **Primary (`#2563EB` - Tech Blue):** Primary actions, active navigation states, primary focus rings, and high-priority interactive controls.
- **Secondary / Surface Contrast (`#0F172A` - Deep Slate):** Anchors persistent shell architecture (sidebar, terminal rails, top utility header, code contexts). Creates structural framing that grounds the application.
- **Tertiary / Proficiency (`#059669` - Emerald):** Used strictly for verified competencies, course completions, passing tests, and skill-velocity metrics. Paired with Cyan (`#0891B2`) for intermediate in-progress badges.
- **Neutral Core (`#64748B` - Slate Neutral):** Structural borders (`#E2E8F0`), secondary muted typography (`#64748B`), and subtle canvas fills (`#F8FAFC`).

### Dark Frame & Light Canvas Dynamics
The primary interface mode is `light`, using `#F8FAFC` for base viewports and `#FFFFFF` for content cards. Navigation sidebars and technical toolbars utilize inverted deep slate tones (`#0F172A` and `#1E293B`), establishing an IDE-like working environment that isolates global commands from active learning workspaces.

### Accessibility Standards
Every interactive pair adheres to WCAG 2.1 AA standards (minimum 4.5:1 for body copy and 3:1 for large display elements and structural controls). Primary blue on white delivers a 7.1:1 contrast ratio; technical copy on deep slate maintains 11:1 or higher.

## Typography
Typography is split into two specialized engines:
1. **Primary Interface (`Inter`):** Powers all headlines, body copy, and UI controls. Chosen for its neutral, highly legible metrics at small body sizes, explicit character differentiation, and robust tabular numeric styling for track records and skill metrics.
2. **Technical Accent (`JetBrains Mono`):** Applied exclusively to badges, syntax elements, code snippets, progress metadata, version tags, and performance analytics. This conveys an immediate developer-native aesthetic while reinforcing numerical precision.

### Scaling and Responsive Rules
- Display titles larger than `32px` step down systematically on mobile viewports to prevent line-wrapping of technical terms and camelCase keywords.
- Body sizes are locked to strict 4px baseline increments to maintain alignment across multi-column data views.

## Layout & Spacing
The layout relies on a structured, fluid grid paired with an 8-point spatial system.

### Grid & Canvas Structure
- **Desktop (1280px+):** 12-column layout with a fixed, collapsible 260px Slate-900 navigation sidebar. Gutters are fixed at `1.5rem` (24px) with canvas margins at `2rem` (32px).
- **Tablet (768px - 1279px):** 8-column layout. Sidebar collapses to an 80px icon rail. Gutters step down to `1.25rem` (20px).
- **Mobile (< 767px):** 4-column layout with bottom tab navigation. Gutter and margin both normalize to `1rem` (16px) to maximize card viewports.

### Spacing Philosophy
Spacing tokens are used strictly for distance between elements, card internals, and list compositions:
- `space-xs` (4px): Chip padding, inline icon-to-text separation.
- `space-sm` (8px): Stacked input field labels, tight metadata rows, pill gaps.
- `space-md` (16px): Card internal padding, form row spacing, list item separations.
- `space-lg` (24px): Card-to-card module gaps, segmented module clusters.
- `space-xl` (32px): Major layout section gaps, dashboard header bottom separations.

## Elevation & Depth
Elevation conveys functional hierarchy without visual noise. The design system uses ambient, low-contrast shadows and tonal boundary borders.

### Depth Architecture
1. **Canvas Layer (Base, 0dp):** Fills the viewport using neutral slate `#F8FAFC`.
2. **Surface Layer (1dp):** Main cards and curriculum modules use `#FFFFFF` enclosed by a 1px border (`#E2E8F0`). Shadows are kept ambient: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
3. **Elevated Interactive Layer (2dp):** Card hover states and active skill-tree nodes lift slightly: `0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
4. **Overlay Layer (3dp):** Flyouts, autocomplete popovers, code inspector panels, and modals use `#FFFFFF` with `0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)` and a border in `#CBD5E1`.
5. **Persistent Architectural Shell (Inverted Depth):** Sidebars and bottom command ribbons use `#0F172A` with an inner 1px structural right/top border in `#1E293B`, relying on color contrast rather than shadows to define workspace bounds.

## Shapes
The design system operates at level 2 (`roundedness: 2`), utilizing controlled geometry that matches modern developer interfaces.

### Curvature Tokens
- **Base Elements (`rounded-md` - 8px / 0.5rem):** Form inputs, buttons, technical badges, code containers, and context menus.
- **Card Containers (`rounded-lg` - 16px / 1rem):** Skill overview cards, code editors, track summaries, and dashboard metric panels.
- **Modal & Banner Surfaces (`rounded-xl` - 24px / 1.5rem):** High-level view modals, milestone celebration cards, and feature highlights.
- **Badges & Progress Trackers:** Small tag pills, status dots, and avatar containers use full circular radius (`9999px`) to contrast against rectilinear card surfaces.

## Components

### Buttons
- **Primary:** Background `#2563EB`, text `#FFFFFF`, border-radius `8px`, font Inter Medium (14px). Hover transitions to `#1D4ED8` with a subtle translate-y offset. Focus ring displays a 2px offset in `#93C5FD`.
- **Secondary:** Surface `#FFFFFF`, border 1px solid `#E2E8F0`, text `#0F172A`. Hover: `#F1F5F9`.
- **Tertiary / Ghost:** Borderless transparent background, text `#64748B`. Hover: `#F8FAFC` and text `#0F172A`.
- **Destructive:** Background `#EF4444`, text `#FFFFFF`. Hover: `#DC2626`.

### Technological Badges & Chips
- Designed with `JetBrains Mono` at 11px font size.
- **Proficiency Verified:** Background `#ECFDF5`, border 1px solid `#A7F3D0`, text `#047857`.
- **In-Progress Track:** Background `#ECFEFF`, border 1px solid `#A5F3FC`, text `#0E7490`.
- **Prerequisite / Tech Stack Tag:** Background `#0F172A`, text `#E2E8F0`, border 1px solid `#334155`.
- **Difficulty (Beginner/Intermediate/Advanced):** Color-coded indicator dots (3px) placed leading the label.

### Form Inputs & Selectors
- **Input Fields:** Base height 40px, background `#FFFFFF`, border 1px solid `#CBD5E1`, radius 8px, text `#0F172A`. Placeholder text `#94A3B8`.
- **Focus State:** 1px border `#2563EB` coupled with a 3px ambient shadow ring in `rgba(37, 99, 235, 0.15)`.
- **Code Inputs & Terminal Prompts:** Background `#0B0F19`, text `#38BDF8`, font `JetBrains Mono` (13px), border `#1E293B`.

### Selection Controls
- **Checkboxes:** 18x18px, 4px border radius, unchecked border `#94A3B8`. Checked fills `#2563EB` with a crisp white `#FFFFFF` tick.
- **Radio Buttons:** 18x18px circle, unchecked border `#94A3B8`. Checked features a 6px central core `#2563EB` with border `#2563EB`.

### Cards & Curriculum Units
- **Module Card:** Crisp `#FFFFFF` surface, 1px `#E2E8F0` border, `16px` radius. Internal padding: `space-lg` (24px). Contains a top track metadata row with monospace tech badges, title in Inter SemiBold, and a bottom progress tracker.
- **Progress Track Component:** Segmented 6px bar. Inactive segments `#E2E8F0`; completed segments `#059669`; active in-progress segment `#2563EB` with a pulse animation.

### Skill Matrix & Radar Containers
- Clean metric grids incorporating numeric values in `JetBrains Mono`, labeled using Inter 12px Medium uppercase (`letter-spacing: 0.05em`) with muted `#64748B` values.