# LOCKED PLAN - DO NOT MODIFY

> **Status:** LOCKED  
> **Date Locked:** January 2, 2026  
> **Rule:** Execute checklist items only. No re-planning. No architecture changes.  
> **New ideas:** Add to Parking Lot section at bottom, not into code.

---

# Site Completion Plan for Lifetime Auto Sales

## Critical Issues (Must Fix)

### 1. Broken Navigation Link
The Header component has a broken link to `/gig-driver` (singular) but the actual page is at `/gig-drivers` (plural).

```
components/Header.tsx line 22
{ label: "Gig Drivers", href: "/gig-driver" },
```

**Fix:** Change `href: "/gig-driver"` to `href: "/gig-drivers"`

### 2. Missing Footer on Most Pages
Only the About page and Contact page have footers. The homepage, Gig Drivers, Turo Investor, Warranty, Intake, and flow pages are missing footers entirely.

**Fix:** Extract the footer from `app/about/page.tsx` into a reusable `Footer.tsx` component and add it to all pages.

### 3. Missing Page Title / Meta Tags per Page
All pages share the same generic title "Lifetime Auto Sales - Access True Wholesale Pricing". Each page should have unique, descriptive titles and meta descriptions for SEO.

**Fix:** Add page-specific `metadata` exports to each page file.

### 4. Placeholder Calendly URL
The options page has `https://calendly.com/your-calendly-link` which needs the real link.

```
app/get-started/options/page.tsx line 19
const calendlyBaseUrl = "https://calendly.com/your-calendly-link";
```

**Fix:** Replace with actual Calendly URL (client to provide).

---

## Medium Priority Issues

### 5. Placeholder Content Needs Clear Markers
Several pages contain placeholder data that the client needs to replace:

| Page | Placeholder Content |
|------|---------------------|
| About | Team names show "[Name]", "Founder & CEO" etc. with placeholder bios and `#` links |
| About | Press releases with `#` links |
| Contact | Phone number `(800) 555-1234` is placeholder |
| Contact | Email `info@lifetimeautosales.com` may be placeholder |
| Warranty | Phone number `(800) 253-8203` needs verification |
| Options page | Contact info `(800) 555-1234` and `support@lifetimeauto.com` |
| Consultants | Names in `lib/consultants.ts` are placeholders |

**Fix:** Add code comments marking each placeholder clearly, or create a `TODO.md` file listing all client-provided content needed.

### 6. Social Media Links Point to `#`
All social links (Facebook, LinkedIn, Twitter, Instagram, YouTube) across pages link to `#`.

**Fix:** Either remove social links or leave as `#` with comment noting client needs to provide URLs.

### 7. Missing `alt` Text on Decorative Images
Some background images use empty `alt=""` which is correct for decorative, but section images should have meaningful alt text.

### 8. Logo File Case Sensitivity
The logo file is `logo.PNG` (uppercase) but referenced as `logo.png` (lowercase) in some places. This works on Windows but will break on Linux servers.

```
components/Logo.tsx line 8
src="/images/logo.png"
```

**Fix:** Rename file to lowercase `logo.png` for cross-platform compatibility.

---

## Polish & UX Improvements

### 9. Intake Form Missing Validation
The intake form allows users to proceed without filling required fields. Currently no field validation or error states.

**Fix:** Add basic validation (required fields) and visual error states before allowing progression.

### 10. Missing Loading States on Navigation
No visual loading indicators when navigating between pages (Next.js handles this, but adding a progress bar improves UX).

**Fix:** (Optional) Add `nprogress` or use Next.js loading.tsx for page transitions.

### 11. Mobile Navigation UX
Mobile hamburger menu works but the desktop nav is still visible at mobile widths. The layout breaks at very narrow viewports.

**Fix:** Test and fix responsive breakpoints for header navigation.

### 12. Warranty Page Quote Form Submission
The warranty page has duplicate forms (hero and bottom) that both just redirect to `/#schedule`. They should submit data or be removed.

**Fix:** Either integrate form submission or simplify to just CTA buttons.

### 13. "Learn More" Button on Turo Page Does Nothing
The secondary "Learn More" button has no href or click handler.

```
app/turo-investor/page.tsx line 117
<Button ... variant="outline" ... >
  Learn More
</Button>
```

**Fix:** Add scroll-to-section functionality or link to relevant anchor.

---

## Code Quality

### 14. Remove Console.log Statements
Multiple files have `console.log` for debugging that should be removed or replaced with proper logging:
- `app/contact/message/page.tsx` line 44
- `app/payment/page.tsx` line 36

### 15. ESLint/TypeScript Clean
The codebase currently has no lint errors, which is good. Maintain this.

---

## Execution Checklist

- [x] **1. Fix broken /gig-driver link** in Header.tsx to /gig-drivers
- [x] **2. Create Footer component** - extract from about page into reusable component
- [x] **3. Add Footer to all pages** missing it (homepage, gig-drivers, turo, warranty, intake flows)
- [x] **4. Update Calendly URL** - marked with TODO comment for client action
- [x] **5. Add page-specific metadata** (title, description) to each page
- [x] **6. Fix logo case sensitivity** - renamed logo.PNG to logo.png
- [x] **7. Document placeholders** - created docs/CLIENT-PLACEHOLDERS.md
- [x] **8. Fix Learn More button** - added scroll behavior on Turo page
- [x] **9. Remove console.log statements** from message and payment pages
- [x] **10. Mobile nav polish** - verified responsive classes are correct (hidden lg:flex)

---

## Files to Modify

| File | Changes |
|------|---------|
| `components/Header.tsx` | Fix gig-driver link |
| `components/Footer.tsx` | NEW - extract from about page |
| `app/page.tsx` | Add Footer, add metadata |
| `app/gig-drivers/page.tsx` | Add Footer, add metadata |
| `app/turo-investor/page.tsx` | Add Footer, add metadata, fix Learn More |
| `app/warranty/page.tsx` | Add Footer, add metadata |
| `app/intake/page.tsx` | Add Footer, add validation |
| `app/results/page.tsx` | Add Footer |
| `app/payment/page.tsx` | Add Footer, remove console.log |
| `app/get-started/page.tsx` | Add Footer |
| `app/get-started/options/page.tsx` | Add Footer, update Calendly URL |
| `app/contact/message/page.tsx` | Remove console.log |
| `public/images/logo.PNG` | Rename to lowercase |
| `lib/consultants.ts` | Add comment noting placeholders |

---

## Parking Lot (Future Ideas - DO NOT IMPLEMENT NOW)

> Add any new ideas here during execution. These will NOT be implemented in this phase.

| Idea | Source | Notes |
|------|--------|-------|
| | | |
| | | |
| | | |

---

*Plan locked. Execute only. No scope creep.*
