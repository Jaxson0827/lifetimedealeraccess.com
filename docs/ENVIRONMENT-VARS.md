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

- `GOHIGHLEVEL_API_KEY`
- `GOHIGHLEVEL_LOCATION_ID`

Optional:

- `GOHIGHLEVEL_PIPELINE_ID`
- `GOHIGHLEVEL_STAGE_ID`

Example:

```env
GOHIGHLEVEL_API_KEY=REPLACE_ME
GOHIGHLEVEL_LOCATION_ID=REPLACE_ME
GOHIGHLEVEL_PIPELINE_ID=
GOHIGHLEVEL_STAGE_ID=
```

