# Client Placeholder Content - ACTION REQUIRED

This document lists all placeholder content in the site that needs to be replaced with actual client information before launch.

---

## Critical - Must Replace Before Launch

### 1. Calendly URL
**File:** `app/get-started/options/page.tsx` (line 19)
**Current Value:** `https://calendly.com/your-calendly-link`
**Action:** Replace with actual Calendly scheduling link

### 2. Phone Numbers
| Location | Current Value | File |
|----------|---------------|------|
| Contact page | `(800) 555-1234` | `app/contact/page.tsx` |
| Options page | `(800) 555-1234` | `app/get-started/options/page.tsx` |
| Warranty page | `(800) 253-8203` | `app/warranty/page.tsx` |

**Action:** Confirm/replace with actual business phone number(s)

### 3. Email Addresses
| Location | Current Value | File |
|----------|---------------|------|
| Contact page | `info@lifetimeautosales.com` | `app/contact/page.tsx` |
| Options page | `support@lifetimeauto.com` | `app/get-started/options/page.tsx` |

**Action:** Confirm these are real, monitored email addresses

---

## Team Information - About Page

### Leadership Team (`app/about/page.tsx`)
The following team member entries need real names, titles, bios, and photos:

1. **Founder & CEO**
   - Name: `[Name]` → Replace with actual name
   - Bio: Contains placeholder `[Name]` reference
   - Photo: Uses placeholder icon
   - Social links: Point to `#`

2. **Chief Buying Consultant**
   - Name: `[Name]` → Replace with actual name
   - Photo: Uses placeholder icon
   - Social links: Point to `#`

3. **Director of Operations**
   - Name: `[Name]` → Replace with actual name
   - Photo: Uses placeholder icon
   - Social links: Point to `#`

### Buying Consultants (`app/about/page.tsx`)
Same as above - need real names, bios, photos, and social links.

### Consultant Names (`lib/consultants.ts`)
```typescript
export const CONSULTANTS = [
  "John Smith",      // Replace with actual consultant name
  "Sarah Johnson",   // Replace with actual consultant name
  "Mike Williams",   // Replace with actual consultant name
];
```

---

## Social Media Links

All social media links currently point to `#`. Replace with actual URLs:

| Platform | Current | Files |
|----------|---------|-------|
| Facebook | `#` | `components/Footer.tsx`, `app/about/page.tsx`, `app/contact/page.tsx` |
| LinkedIn | `#` | `components/Footer.tsx`, `app/about/page.tsx` |
| Twitter/X | `#` | `components/Footer.tsx`, `app/about/page.tsx`, `app/contact/page.tsx` |
| Instagram | `#` | `app/contact/page.tsx` |
| YouTube | `#` | `app/contact/page.tsx` |

---

## Press Releases (`app/about/page.tsx`)

Currently shows placeholder press releases with `#` links:

1. "Lifetime Auto Launches Wholesale Buying Service for Consumers" - Jan 15, 2024
2. "New Turo Investment Program Helps Entrepreneurs Build Vehicle Portfolios" - Mar 10, 2024
3. "Gig Driver Program Offers Path to Vehicle Ownership" - May 22, 2024

**Action:** Either:
- Replace with actual press releases and links
- Remove this section if no press releases exist

---

## Testimonial (`app/turo-investor/page.tsx`)

```
"I've added 8 vehicles to my Turo fleet through Lifetime Auto Sales..."
- Marcus T., Turo Host · 12 Vehicle Fleet · Dallas, TX
```

**Action:** Confirm this is a real testimonial with permission to use, or replace with actual customer testimonial.

---

## Legal Pages (Not Yet Created)

The footer links to:
- Privacy Policy (`#`)
- Terms of Service (`#`)

**Action:** Create these pages or provide content for them.

---

## Team Photos

**Location:** `public/images/team/`
**Current Status:** Directory doesn't exist / using placeholder icons

**Action:** Provide headshot photos for all team members (recommended: 400x400px minimum, square aspect ratio)

---

## Payment Integration

**File:** `app/payment/page.tsx`
**Current Status:** Simulates payment, no actual processor integrated

**Action:** Integrate Stripe or preferred payment processor before accepting real payments.

---

## Form Submissions

**Files:** 
- `app/contact/message/page.tsx`
- `app/payment/page.tsx`

**Current Status:** Forms log to console only, no backend integration

**Action:** Connect to CRM (HubSpot, Airtable, etc.) or backend API for form submissions.

---

## Checklist for Client

- [ ] Provide actual Calendly URL
- [ ] Confirm/provide phone number(s)
- [ ] Confirm/provide email addresses
- [ ] Provide team member names, bios, photos
- [ ] Provide consultant names for dropdown
- [ ] Provide social media URLs
- [ ] Provide press release content or confirm removal
- [ ] Confirm/provide testimonials
- [ ] Provide Privacy Policy content
- [ ] Provide Terms of Service content
- [ ] Set up payment processor account (Stripe recommended)
- [ ] Set up form submission backend (HubSpot, Airtable, etc.)

---

*Document generated: January 2, 2026*

