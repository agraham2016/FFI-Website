# Foundation for Independence (FFI) — Website

A modern, accessible marketing site for Foundation for Independence, an Arizona-based provider of Supported Living and Employment Services for individuals with developmental disabilities.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with a calm, professional palette and WCAG 2.1 AA accessibility commitments.

## Quick start

```bash
npm install
npm run dev
```

The site is available at http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint with `eslint-config-next` |
| `npm run typecheck` | Type-check the project without emitting |

## Project structure

```
src/
  app/                      App Router pages + layouts
    page.tsx                Home
    about/page.tsx
    services/
      page.tsx              Services overview
      supported-living/page.tsx
      employment/page.tsx
    resources/page.tsx      Articles index
    stories/page.tsx        Testimonials
    faq/page.tsx
    contact/page.tsx
    api/
      contact/route.ts      POST stub for the contact form
      newsletter/route.ts   POST stub for the newsletter signup
  components/
    layout/                 Header, Footer, SkipLink, Container
    sections/               Reusable page sections (Hero, CTA, etc.)
    ui/                     Buttons, Inputs, Cards, FormField, etc.
    forms/                  ContactForm, NewsletterForm
  content/                  Static content (services, faq, stories, articles)
  lib/                      Utilities (cn helper, validators, metadata)
  styles/                   Globals
```

## Forms

Both `/api/contact` and `/api/newsletter` are functional **stubs** that validate the payload with Zod and log it to the server console. Wire them up to your provider (e.g. Resend, SendGrid, Mailchimp) in `src/app/api/*/route.ts`. Copy `.env.example` to `.env.local` and fill in your keys.

## Accessibility

- Semantic HTML and proper heading hierarchy throughout
- Visible focus rings, keyboard-navigable everywhere
- Skip-to-content link
- 4.5:1 contrast minimum
- `prefers-reduced-motion` honored
- Forms include labels, descriptions, and live validation messaging

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add environment variables from `.env.example` in the Vercel dashboard.
4. Done — Vercel will detect Next.js automatically.

## To-do (placeholders to replace before launch)

- Replace contact info in `src/components/layout/Footer.tsx` and `src/app/contact/page.tsx`
- Replace founder photo & headshot URLs
- Wire `/api/contact` and `/api/newsletter` to your email provider
- Add real testimonials in `src/content/stories.ts`
- Add real articles to `src/content/articles.ts`
