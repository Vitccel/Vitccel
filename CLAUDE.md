# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run preview   # Preview production build
```

No lint or test scripts are configured.

## Environment Setup

Copy `.env.example` to `.env` and set `VITE_SANITY_PROJECT_ID` (find it at sanity.io/manage). The app throws on startup if this variable is missing.

## Architecture

**Vitccel** is a React 19 SPA for a Colombian IT services company. Built with Vite + React Router 7 + Tailwind CSS.

### Routing (src/App.jsx)
All routes are wrapped in a `Layout` component (Header + Footer). Blog pages (`/blog`, `/blog/:slug`, `/blog/categoria/:slug`) are lazy-loaded with Suspense.

### Content (Sanity CMS)
Blog content is fetched from Sanity.io via `src/apis/sanityClient.js`. The client exports:
- `default` — configured Sanity client for GROQ queries
- `urlFor(source)` — image URL builder helper

Blog pages use `@portabletext/react` to render rich text content from Sanity.

### Styling
- **Tailwind CSS** with a custom `Sen` font family and three custom animations: `pan-up` (Ken Burns hero effect), `infinite-scroll` (partner carousel), `fade-in-up` (text entrance)
- **Material-UI** is used in `Header.jsx` specifically for `useScrollTrigger` — the header transitions from transparent to white on scroll
- **Swiper** for hero slider and testimonials; **React Slick** for partner logos carousel
- Custom Swiper pagination styles are in `src/index.css`

### SEO
Pages use `react-helmet-async` (HelmetProvider wraps the app in `src/main.jsx`) for dynamic `<head>` management including Schema.org structured data (LocalBusiness, Service, Article, FAQPage).

### Contact Form
The contact page uses Formspree (no backend required).
