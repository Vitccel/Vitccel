# DESIGN.md — Vitccel Design System

This document describes the visual language and component patterns used across the Vitccel website.

---

## Color Palette

### Brand Colors
| Role | Value | Usage |
|---|---|---|
| Primary Cyan | `#06A3DA` | Buttons, links, accents, active states, icon highlights |
| Primary Cyan (hover) | `#0582ab` | Button/link hover state |
| Dark Navy | `#091E3E` | Dark section backgrounds, hero overlays, CTA blocks, testimonial cards |
| Dark Teal | `#0D486B` | Footer background, headings, section backgrounds |
| Success Green | `#34AD54` | Checkmark icons, positive indicators |

### Background Colors
| Value | Usage |
|---|---|
| `#EEF9FF` | Light-tinted section backgrounds |
| `#FFFFFF` | Default white backgrounds |
| `#091E3E` at `opacity-70` | Hero image overlay |
| `black` at `opacity-60` | Page banner overlay |

### Text Colors (Tailwind)
| Class | Usage |
|---|---|
| `text-gray-800` | Primary body text |
| `text-gray-700` | Labels, form text |
| `text-gray-600` | Secondary/description text |
| `text-gray-400` | Footer copyright |
| `text-gray-300` | Footer body text, light content on dark backgrounds |
| `text-gray-200` | Testimonial quote text |
| `text-white` | Text on dark/colored backgrounds |

---

## Typography

**Font:** [Sen](https://fonts.google.com/specimen/Sen) — weights 400, 500, 700
**Tailwind class:** `font-sen`
**Fallback:** `sans-serif`

### Size Scale
| Usage | Classes |
|---|---|
| Hero / page titles | `text-4xl md:text-6xl` |
| Page banner titles | `text-5xl` |
| Section headings | `text-3xl md:text-4xl` |
| Card / sub-headings | `text-2xl` |
| Card titles | `text-xl` |
| Body / descriptions | `text-lg` |
| Footer headings | `text-lg` |
| Labels, small text | `text-sm` |

### Weights & Modifiers
- Headings: `font-bold` (700)
- Labels / UI elements: `font-medium` (500)
- Hero title: `tracking-wider`
- Quote text: `leading-relaxed`

---

## Spacing

### Section Vertical Padding
All top-level sections use `py-20`.

### Container Horizontal Padding
`px-4 md:px-40` — tight on mobile, generous on desktop.

### Card Padding
- Standard card: `p-8`
- Large/CTA card: `p-12`

### Button Padding
- Default: `py-3 px-8`
- Large CTA: `py-4 px-10`

### Form Inputs
`px-4 py-3`

### Gap & Spacing Utilities
- Grid cards: `gap-8`
- Footer columns: `gap-12`
- List items: `space-y-3` / `space-y-4`
- Inline items: `gap-4` / `gap-6`

---

## Border Radius

- Buttons, icon containers: `rounded-full`
- Cards, images, form sections: `rounded-lg`
- Form inputs: `rounded-md`

---

## Shadows

| Class | Usage |
|---|---|
| `shadow-md` | Subtle depth (feature cards) |
| `shadow-lg` | Standard cards, buttons |
| `shadow-xl` | Prominent cards, CTA blocks, forms |
| `shadow-2xl` | Card hover state |
| `hover:shadow-cyan-400/50` | Colored glow on CTA buttons |

---

## Animations & Transitions

### Custom Keyframe Animations (tailwind.config.cjs)

**`animate-pan-up`** — Ken Burns effect for hero backgrounds
Scale `1.1 → 1.2` + vertical drift `translateY(1rem → -0.8rem)`
Duration: `20s infinite alternate ease-in-out`

**`animate-fade-in-up`** — Entrance animation for text
`opacity: 0 → 1` + `translateY(2rem → 0)`
Duration: `1s ease-out forwards`

**`animate-infinite-scroll`** — Partners carousel
`translateX(0 → -50%)`
Duration: `40s linear infinite`

### Transition Utilities
| Class | Usage |
|---|---|
| `transition-colors duration-300` | Hover color changes |
| `transition-all duration-300` | Multi-property (card hover) |
| `transition-all duration-500` | FAQ accordion |
| `transition-transform duration-300` | Rotation, scale |
| `transition-[max-height] duration-300` | Header social bar collapse |

### Transform Patterns
- Card lift on hover: `hover:-translate-y-2`
- Accordion icon rotation: `rotate-180` (open state)

---

## Buttons

### Primary Button
```
bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold
py-3 px-8 rounded-full transition-colors duration-300
```

### Large CTA Button
```
bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold
py-4 px-10 rounded-full transition-colors duration-300
text-lg shadow-lg hover:shadow-cyan-400/50
```

### Navigation / Ghost Button
```
bg-[#06A3DA]/60 hover:bg-[#06A3DA]
rounded-full p-3 shadow-lg transition-colors
```

### Disabled State
`disabled:bg-gray-400`

### Text Link
```
text-[#06A3DA] hover:text-[#0582ab] font-bold transition-colors inline-block
```

### Social Icon Button
```
bg-white/10 hover:bg-[#06A3DA] transition-colors p-2 rounded-full
```

---

## Cards

### Service Card
```
bg-white p-8 rounded-lg shadow-lg
hover:shadow-2xl hover:-translate-y-2
transition-all duration-300 flex flex-col
```

### Feature / Benefit Card
```
bg-white p-8 rounded-lg shadow-md
hover:shadow-xl transition-shadow duration-300
flex flex-col text-center items-center
```

### Testimonial Card
```
bg-[#091E3E] rounded-lg shadow-xl p-8 md:p-12
mx-auto max-w-4xl relative border-t-4 border-[#06A3DA]
```

### CTA Block
```
bg-[#091E3E] text-white p-12 rounded-lg shadow-xl
text-center flex flex-col items-center
```

### Form Container
```
bg-white p-8 rounded-lg shadow-xl
```

---

## Section Layouts

### Standard White Section
```jsx
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 md:px-40">
    ...
  </div>
</section>
```

### Dark / Colored Section
```jsx
<section className="py-20 bg-[#0D486B] text-white">
  // or bg-[#EEF9FF]
```

### Hero Section
```
relative h-screen with:
├── background image: animate-pan-up
├── overlay: absolute inset-0 bg-[#091E3E] opacity-70
└── content: relative z-10, centered, text-white, animate-fade-in-up
```

### Page Banner
```
relative h-80 md:h-[400px] with:
├── background image
├── overlay: absolute inset-0 bg-black opacity-60
└── content: z-10, centered, text-white
    Breadcrumb with current page in text-[#06A3DA]
```

---

## Grid Patterns

| Layout | Classes |
|---|---|
| 3-col service cards | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8` |
| 2-col (content + image) | `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center` |
| 4-col footer | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12` |
| 2-col form | `grid grid-cols-1 md:grid-cols-2 gap-8` |

---

## Recurring Component Patterns

### Section Header
```jsx
<div className="text-center">
  <h2 className="text-3xl md:text-4xl font-bold font-sen text-[#0D486B]">
    Title
  </h2>
  <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
    Subtitle
  </p>
</div>
```

### Feature List Item
```jsx
<li className="flex items-start">
  <Icon className="text-[#06A3DA] flex-shrink-0 mt-1" />
  <div className="ml-4">
    <h4 className="font-bold font-sen text-[#0D486B]">Title</h4>
    <p className="text-gray-600">Description</p>
  </div>
</li>
```

### FAQ Accordion Item
```
border-b border-gray-200
Button: flex justify-between py-4 px-2, ExpandMoreIcon rotates on open
Answer: max-h-0 opacity-0 → max-h-screen opacity-100 py-4 px-2
Transition: transition-all duration-500
```

### Form Input
```
px-4 py-3 border border-gray-300 rounded-md w-full
focus:ring-[#06A3DA] focus:border-[#06A3DA]
```

### Icon Watermark (decorative)
```
text-[#06A3DA] opacity-10 (large icon as background accent)
```

---

## Overlay Patterns

| Context | Classes |
|---|---|
| Hero sections | `absolute inset-0 bg-[#091E3E] opacity-70` |
| Page banners | `absolute inset-0 bg-black opacity-60` |
| Glass buttons | `bg-[#06A3DA]/60` |
| Dividers | `border-t border-white/10` |

---

## Responsive Conventions

Mobile-first with three main breakpoints:
- Default → mobile
- `md:` → 768px+ (tablet)
- `lg:` → 1024px+ (desktop)

Common responsive patterns:
- `text-4xl md:text-6xl` — scale up headings
- `px-4 md:px-40` — scale up container padding
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — progressive grid
- `flex-col lg:flex-row` — stack on mobile, side-by-side on desktop
- `order-last lg:order-first` — reorder image/text on desktop

---

## Accessibility

- Focus rings: `focus:ring-[#06A3DA] focus:border-[#06A3DA]`
- Icon-only buttons: `aria-label` attribute
- Hidden H1 (screen reader): `sr-only` class
- Proper heading hierarchy and semantic HTML throughout
