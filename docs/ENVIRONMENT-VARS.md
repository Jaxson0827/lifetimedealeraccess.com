# Environment Variables

This repo uses environment variables for third-party integrations. Create a local `.env.local` in the project root and set values there (do not commit secrets).

## Stripe (Option 1: fixed $100 checkout)

Required:

- `STRIPE_SECRET_KEY`

Optional:

- `STRIPE_PUBLISHABLE_KEY` (not required for the current flow)
- `STRIPE_SETUP_DEPOSIT_PRICE_ID` (leave blank for option 1; the app will use a hard-coded $100.00 USD line item)

Example:

```env
STRIPE_SECRET_KEY=sk_live_REPLACE_ME
STRIPE_PUBLISHABLE_KEY=pk_live_REPLACE_ME
STRIPE_SETUP_DEPOSIT_PRICE_ID=
```

## GoHighLevel (to log payments/leads)

Required:

- `GOHIGHLEVEL_WEBHOOK_URL`

Optional:

- `GOHIGHLEVEL_API_KEY` (legacy REST API integration; no longer required)
- `GOHIGHLEVEL_LOCATION_ID` (legacy REST API integration; no longer required)
- `GOHIGHLEVEL_PIPELINE_ID`
- `GOHIGHLEVEL_STAGE_ID`

Example:

```env
GOHIGHLEVEL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/REPLACE_ME/webhook-trigger/REPLACE_ME
GOHIGHLEVEL_API_KEY=
GOHIGHLEVEL_LOCATION_ID=
GOHIGHLEVEL_PIPELINE_ID=
GOHIGHLEVEL_STAGE_ID=
```

## Email (Resend) (to deliver contact messages)

Required:

- `RESEND_API_KEY`
- `EMAIL_FROM` (must be a verified sender in Resend; can include a display name)

Optional:

- `CONTACT_TO_EMAIL` (defaults to `Kevin.lifetimeauto@gmail.com`)

Example:

```env
RESEND_API_KEY=re_REPLACE_ME
EMAIL_FROM=Lifetime Auto <no-reply@lifetimedealeraccess.com>
CONTACT_TO_EMAIL=Kevin.lifetimeauto@gmail.com
```

