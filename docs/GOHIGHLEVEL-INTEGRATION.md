# GoHighLevel Integration Guide

This document explains how to integrate your Lifetime Auto Sales website with GoHighLevel CRM.

## Overview

The integration automatically sends form submissions to GoHighLevel:
- **Contact Form** (`/contact/message`) - Creates contacts and notes
- **Intake Form** (`/intake`) - Creates contacts with detailed vehicle preferences and opportunities
- **Payment Form** (`/payment`) - Creates contacts with payment information and opportunities

## Setup Instructions

### Step 1: Get Your GoHighLevel API Credentials

1. Log in to your GoHighLevel account
2. Navigate to **Settings** > **Integrations** > **API**
3. Click **Generate API Key** (or use an existing one)
4. Copy your **API Key**
5. Navigate to **Settings** > **Locations**
6. Copy your **Location ID** (found in the URL or location settings)

### Step 2: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)

2. Add the following environment variables to `.env.local`:
   ```env
   # Required: Your GoHighLevel API Key
   GOHIGHLEVEL_API_KEY=your_actual_api_key_here
   
   # Required: Your GoHighLevel Location ID
   GOHIGHLEVEL_LOCATION_ID=your_actual_location_id_here
   
   # Optional: Pipeline ID for opportunities/deals
   GOHIGHLEVEL_PIPELINE_ID=
   
   # Optional: Stage ID for opportunities/deals
   GOHIGHLEVEL_STAGE_ID=
   ```

3. Fill in your actual API key and Location ID

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
   - Go to `/contact/message` and submit the contact form
   - Check your GoHighLevel account to verify the contact was created

3. Check the browser console and server logs for any errors

## How It Works

### Contact Form Integration

When a user submits the contact form (`/contact/message`):
- Creates a new contact in GoHighLevel with:
  - Name, email, phone
  - Source: "Website Contact Form"
  - Tags: "Contact Form", "Website"
  - Custom fields with attribution data
- Adds a note with the message content

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
- `attributionSource`: "consultant" or "online"
- `consultantName`: Name of referring consultant (if applicable)
- `dreamVehicle`: Primary vehicle interest
- `priceRange`: Selected price range
- `paymentMethod`: Payment method selected
- `transactionId`: Payment transaction ID (for payments)

## Troubleshooting

### Contacts Not Appearing in GoHighLevel

1. **Check API Key**: Verify your API key is correct and has proper permissions
2. **Check Location ID**: Ensure the Location ID matches your account
3. **Check Server Logs**: Look for error messages in your terminal/console
4. **Check Browser Console**: Look for client-side errors

### Common Errors

- **401 Unauthorized**: Invalid API key
- **404 Not Found**: Invalid Location ID
- **500 Server Error**: Check server logs for detailed error messages

### Testing API Directly

You can test the GoHighLevel API directly using curl:

```bash
curl -X POST https://rest.gohighlevel.com/v1/contacts/ \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Version: 2021-07-28" \
  -d '{
    "locationId": "YOUR_LOCATION_ID",
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com"
  }'
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

For GoHighLevel API documentation, visit:
https://highlevel.stoplight.io/docs/integrations

For issues with this integration, check:
- Server logs (`npm run dev` output)
- Browser console (F12)
- GoHighLevel API status page
