# Lifetime Auto Sales — Website (Next.js)

Marketing site + lead capture + payment setup deposit flow for Lifetime Auto Sales. Built as a Next.js 14 (App Router) application with Tailwind CSS, Stripe Checkout for payments, and GoHighLevel webhook integration for CRM logging.

## What this project is

- **Marketing website**: pages for home, about, warranty, gig drivers, turo investor, etc.
- **Lead capture**: contact/message forms and intake flow.
- **Payment flow**: $100 setup deposit via **Stripe Checkout**, with a post-payment success page.
- **CRM logging**: form + payment events posted to **GoHighLevel** via webhook.

## Tech stack

- **Framework**: Next.js `14.2.3` (App Router)
- **Language**: TypeScript
- **Styling/UI**: Tailwind CSS, Radix UI primitives
- **Payments**: Stripe (server-side API routes)
- **Forms/validation**: Zod
- **Deployment**: Vercel recommended (any Node hosting that supports Next.js also works)

## Run locally

### Prerequisites

- Node.js 20+ (recommended)
- npm (ships with Node)

### Setup

1) Install dependencies:

```bash
npm install
```

2) Create your env file:

```bash
cp .env.example .env.local
```

3) Fill in values in `.env.local` (see “Environment variables” below).

4) Run the dev server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

### Useful commands

```bash
npm run lint
npm run build
npm start
```

## Deploy

### Option A (recommended): Vercel

1) Create a new Vercel project and import this GitHub repo.
2) Configure **Environment Variables** in Vercel (Project Settings → Environment Variables).
3) Use defaults:
   - **Build command**: `npm run build`
   - **Output**: Next.js default
4) Deploy.

### Option B: Any Node hosting (self-hosted)

1) Set environment variables on the host (same keys as `.env.example`).
2) Build and start:

```bash
npm install
npm run build
npm run start
```

## Environment variables

Create `.env.local` for local development (do not commit it). Use `.env.example` as a template.

### Required

- **Stripe**
  - `STRIPE_SECRET_KEY`: Stripe secret key (`sk_test_...` or `sk_live_...`)

- **Email (Resend)**
  - `RESEND_API_KEY`: Resend API key
  - `EMAIL_FROM`: Verified Resend sender (e.g., `Lifetime Auto <no-reply@yourdomain.com>`)

- **GoHighLevel**
  - `GOHIGHLEVEL_WEBHOOK_URL`: GoHighLevel/LeadConnector webhook trigger URL used by the site to log events

### Optional

- **Stripe**
  - `STRIPE_SETUP_DEPOSIT_PRICE_ID`: If set, the backend uses your Stripe Price ID instead of a hard-coded $100 line item

- **GoHighLevel**
  - `GOHIGHLEVEL_PIPELINE_ID`: Pipeline ID (for opportunities)
  - `GOHIGHLEVEL_STAGE_ID`: Stage ID (for opportunities)

- **Email (Resend)**
  - `CONTACT_TO_EMAIL`: Overrides the destination for contact messages (defaults to `Kevin.lifetimeauto@gmail.com`)

### Where contact info lives

The site-wide phone/email/social + Calendly URL are centralized in:

- `lib/site-contact.ts`

## Key project locations

- **Pages**: `app/**`
- **API routes**
  - Stripe: `app/api/stripe/**`
  - GoHighLevel: `app/api/gohighlevel/**`
- **Shared libs**: `lib/**`
- **UI components**: `components/**`
- **Docs**: `docs/**`
  - `docs/STRIPE-INTEGRATION.md`
  - `docs/GOHIGHLEVEL-INTEGRATION.md`
  - `docs/ENVIRONMENT-VARS.md`

## Notes for client handoff

- This repo contains **code only**. You must supply/own the third-party accounts (Stripe, GoHighLevel) and set environment variables in your hosting platform.
- Never place `.env*` files in `public/` or commit them to Git. Environment variables should live in `.env.local` (local) or your hosting provider’s environment settings (production).
