# GoHighLevel Integration Guide

This document explains how to integrate your Lifetime Auto Sales website with GoHighLevel CRM.

## Overview

The integration automatically sends form submissions to GoHighLevel:
- **Intake Form** (`/intake`) - Creates contacts with detailed vehicle preferences and opportunities
- **Payment Form** (`/payment`) - Creates contacts with payment information and opportunities

> Note: The **contact message form** (`/contact/message`) is configured to send an email to the business inbox (via Resend) rather than posting to GoHighLevel.

## Setup Instructions

### Step 1: Create a GoHighLevel Webhook Trigger

Create a workflow (or automation) in GoHighLevel that starts with a **Webhook Trigger**. Copy the trigger URL (LeadConnector webhook URL).

### Step 2: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)

2. Add the following environment variables to `.env.local`:
   ```env
   # Required: GoHighLevel webhook trigger URL
   GOHIGHLEVEL_WEBHOOK_URL=your_webhook_trigger_url_here
   
   # Optional: Pipeline ID for opportunities/deals
   GOHIGHLEVEL_PIPELINE_ID=
   
   # Optional: Stage ID for opportunities/deals
   GOHIGHLEVEL_STAGE_ID=
   ```

3. Fill in your actual webhook trigger URL

4. (Optional) Set up Pipeline and Stage IDs:
   - Navigate to **Pipelines** in GoHighLevel
   - Find your pipeline ID (in the URL or settings)
   - Find your stage ID (in the pipeline settings)
   - Add them to `.env.local`:
     ```env
     GOHIGHLEVEL_PIPELINE_ID=your_pipeline_id
     GOHIGHLEVEL_STAGE_ID=your_stage_id
     ```

### Step 3: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Submit a test form:
   - Go to `/payment` and complete a test payment (in Stripe test mode)
   - Check your GoHighLevel account to verify the payment/opportunity was created

3. Check the browser console and server logs for any errors

## How It Works

### Contact Form Integration

The `/contact/message` page sends an email via the site’s email endpoint (`/api/contact/email`). This is intended to notify the business inbox directly.

If you want contact messages to also be logged to GoHighLevel, you can add a GoHighLevel webhook call from:
- `app/contact/message/page.tsx`
- or implement it server-side in `app/api/contact/email/route.ts`

### Intake Form Integration

When a user completes the intake form (`/intake`):
- Creates a new contact with:
  - All intake form data in custom fields
  - Source: Attribution source or "Website Intake Form"
  - Tags: "Intake Form", "Vehicle Inquiry", "Website"
- Creates an opportunity/deal with:
  - Title: "Vehicle Inquiry: [Dream Vehicle]"
  - Custom fields: Price range, timeline, payment method
- Adds a detailed note with all form responses

### Payment Form Integration

When a user completes payment (`/payment`):
- Creates/updates a contact with:
  - Payment information in custom fields
  - Tags: "Payment", "Paid Customer", "Website"
- Creates/updates an opportunity with:
  - Title: "Payment Received - $100"
  - Monetary value: $100
  - Payment status: "completed"
- Adds a note with payment details

## Custom Fields Mapping

All form data is stored in GoHighLevel custom fields. The field names match the form field names, with nested objects flattened (e.g., `yearRange_from`, `yearRange_to`).

### Common Custom Fields

- `submissionType`: "contact_form", "intake_form", or "payment"
- `submittedAt`: ISO timestamp
- `attribution_source`: "consultant" or "online"
- `consultant_name`: Name of referring consultant (if applicable)
- `dreamVehicle`: Primary vehicle interest
- `priceRange`: Selected price range
- `paymentMethod`: Payment method selected
- `transactionId`: Payment transaction ID (for payments)

## Troubleshooting

### Contacts Not Appearing in GoHighLevel

This site currently posts **intake** and **payment** events to GoHighLevel. If those aren’t appearing:

1. **Check Webhook URL**: Verify `GOHIGHLEVEL_WEBHOOK_URL` is correct
2. **Check Workflow Trigger**: Ensure the workflow is enabled and the webhook trigger is the entry point
3. **Check Server Logs**: Look for error messages in your terminal/console
4. **Check Browser Console**: Look for client-side errors

### Common Errors

- **"invalid data: Body payload"**: The webhook was hit without a JSON body (ensure `Content-Type: application/json` and a valid body)
- **500 Server Error**: Check server logs for detailed error messages

### Testing Webhook Directly

You can test the webhook trigger directly using curl:

```bash
curl -X POST "$GOHIGHLEVEL_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"event":"test","submittedAt":"2026-01-01T00:00:00.000Z","hello":"world"}'
```

## Advanced Configuration

### Custom Tags

You can modify the tags applied to contacts by editing:
- `app/api/gohighlevel/contact/route.ts` - Contact form tags
- `app/api/gohighlevel/intake/route.ts` - Intake form tags
- `app/api/gohighlevel/payment/route.ts` - Payment tags

### Custom Fields

To add or modify custom fields, edit the `buildCustomFields` function in:
- `lib/gohighlevel.ts`

### Pipeline Automation

If you set `GOHIGHLEVEL_PIPELINE_ID` and `GOHIGHLEVEL_STAGE_ID`, opportunities will automatically be added to that pipeline and stage. You can also set up workflows in GoHighLevel to:
- Send automated emails
- Assign to team members
- Trigger SMS notifications
- Create follow-up tasks

## Support

For GoHighLevel webhook/workflow documentation, refer to GoHighLevel's workflow + webhook trigger docs in your account.

For issues with this integration, check:
- Server logs (`npm run dev` output)
- Browser console (F12)
- GoHighLevel API status page
