# Stripe Integration Guide

This document explains how to connect your Lifetime Auto Sales website to Stripe so visitors can pay the **$100 setup / concierge deposit** on the `/payment` page.

## Overview

The site uses **Stripe Checkout** (a hosted payment page) for the $100 setup deposit:

- The `/payment` page calls a backend API route to create a Stripe Checkout Session.
- The visitor is redirected to Stripe’s secure payment page to complete payment.
- After a successful payment, the visitor is sent back to `/payment/success`, where:
  - Stripe is checked server‑side to confirm the session is **paid**.
  - The existing GoHighLevel integration is called to log the payment.

## 1. Get Your Stripe API Keys

1. Sign in to your Stripe Dashboard.
2. Go to **Developers → API keys**.
3. Copy your **Secret key** (starts with `sk_live_...` or `sk_test_...`).
4. (Optional) Copy your **Publishable key** (starts with `pk_live_...` or `pk_test_...`) if you want to use it elsewhere later.

For local testing, you can use Stripe **test mode** keys (`sk_test_...`, `pk_test_...`).

## 2. Configure Environment Variables

Create (or update) a `.env.local` file in the project root with the following variables:

```env
# Required: your Stripe secret key
STRIPE_SECRET_KEY=sk_test_your_test_key_here

# Optional: publishable key for future client-side Stripe usage
STRIPE_PUBLISHABLE_KEY=pk_test_your_test_key_here

# Optional: Stripe Price ID if you manage the $100 price in Stripe
# If set, the backend will use this price instead of hard-coding 100.00 USD
STRIPE_SETUP_DEPOSIT_PRICE_ID=
```

> **Note:** Do **not** commit `.env.local` to source control. It should stay local / private.

## 3. How the Stripe Flow Works in the App

### 3.1 Entry Point – `/payment`

When a visitor lands on `/payment` and clicks **“Pay $100 & Start Sourcing”**:

- The page calls `POST /api/stripe/create-checkout-session`.
- The backend creates a Stripe Checkout Session for **$100 USD** and returns the `url`.
- The browser redirects the visitor to the Stripe Checkout `url`.

If the visitor cancels on Stripe, they are sent back to `/payment?canceled=1`, where you can show a small “payment canceled” notice.

### 3.2 Success – `/payment/success`

Stripe is configured with a `success_url`:

- `https://your-domain.com/payment/success?session_id={CHECKOUT_SESSION_ID}`

On `/payment/success`:

1. The page reads `session_id` from the URL.
2. It calls `GET /api/stripe/confirm-session?session_id=...`, which:
   - Uses the **Stripe secret key** to retrieve the Checkout Session.
   - Confirms the session’s `payment_status` is `paid`.
3. If paid:
   - The page loads the saved intake data (`lib/intake-types.ts`) and attribution data (`lib/attribution.ts`) from the browser.
   - It calls the existing `POST /api/gohighlevel/payment` endpoint with:
     - `amount: 100`
     - `paymentMethod: "setup_deposit_stripe"`
     - `transactionId`: the Stripe Payment Intent ID or Session ID
   - The user sees a confirmation message and can continue on the site.

If Stripe has not marked the session as paid, the page shows an error and a path back to `/payment`.

## 4. Relevant Files

- **Stripe API routes**
  - `app/api/stripe/create-checkout-session/route.ts` – creates Checkout Sessions.
  - `app/api/stripe/confirm-session/route.ts` – verifies a session is paid.
- **Pages**
  - `app/payment/page.tsx` – displays the $100 setup deposit info and starts Checkout.
  - `app/payment/success/page.tsx` – handles post-payment confirmation and triggers GoHighLevel.
- **GoHighLevel integration**
  - `lib/gohighlevel.ts`
  - `app/api/gohighlevel/payment/route.ts`

## 5. Testing the Integration

### 5.1 Local (Test Mode)

1. Set `STRIPE_SECRET_KEY` to your **test** secret key in `.env.local`.
2. Run the dev server:

   ```bash
   npm install
   npm run dev
   ```

3. In the browser, go through the funnel:
   - Attribution → Intake → Results → Payment.
4. On `/payment`, click **“Pay $100 & Start Sourcing”**.
5. You should be redirected to a Stripe **test** Checkout page.
6. Use a Stripe test card (e.g. `4242 4242 4242 4242` with any future expiry and CVC) to complete payment.
7. After payment, you should land on `/payment/success` and see a success message.
8. Check:
   - Stripe Dashboard → Payments: the charge should appear.
   - GoHighLevel: a contact/opportunity/note for the payment should appear, driven by `app/api/gohighlevel/payment/route.ts`.

### 5.2 Production

1. Replace the test keys in `.env.local` (or your hosting provider’s env settings) with **live** Stripe keys.
2. Deploy the app.
3. Run a small real payment (e.g. $1–$100) through the live site.
4. Confirm:
   - Stripe Dashboard shows the live payment.
   - GoHighLevel shows the corresponding payment record.

## 6. Troubleshooting

- **“Stripe secret key not configured” errors**  
  Ensure `STRIPE_SECRET_KEY` is set in your environment and that the app has been restarted after changes.

- **Redirect loop or missing `session_id`**  
  Confirm that your Stripe Dashboard Checkout settings are using the correct `success_url` pattern:
  `https://YOUR_DOMAIN/payment/success?session_id={CHECKOUT_SESSION_ID}`.

- **Payment not appearing in GoHighLevel**  
  - Check server logs for `/api/gohighlevel/payment` errors.
  - Confirm your GoHighLevel credentials in `.env.local` (see `docs/GOHIGHLEVEL-INTEGRATION.md`).
  - Make sure the success page is actually calling the GoHighLevel endpoint (and that browser storage still has intake/attribution data).

