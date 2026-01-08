# Lifetime Auto Sales - Homepage

A pixel-accurate homepage built with Next.js 14 and Tailwind CSS, matching the provided reference design.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Dark Navy | `#08163F` | Main background |
| Secondary Navy | `#272B4A` | Gradient secondary |
| Accent Blue | `#1C3885` | Accent elements |
| Primary Red CTA | `#D81326` | Call-to-action buttons |
| White | `#FFFFFF` | Text |
| Gold | `#C9A227` | Logo accent |

## Page Structure

1. **Fixed Header** (~76px)
   - Logo with gold emblem
   - Navigation: Home, Services, How It Works, About, Contact
   - Red CTA button

2. **Hero Section** (Two-Column Layout)
   - Bold headline with italic styling
   - Subheadline
   - Supporting copy
   - Primary CTA button
   - Trust line
   - Hero image with rounded left edge

3. **Trust/Auction Strip**
   - Centered headline
   - Auction partner logos: Manheim, ACV, IAA, ADESA

4. **Footer Microcopy**
   - Centered descriptive text

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Hero Image
To replace the hero image with an actual auction lot photo, update the URL in `app/page.tsx`:

```tsx
backgroundImage: `
  linear-gradient(to right, #08163F 0%, rgba(8,22,63,0.85) 15%, rgba(8,22,63,0.5) 35%, transparent 55%),
  url('YOUR_IMAGE_URL_HERE')
`,
```

For best results, use an image that:
- Shows rows of cars in an auction lot (aerial/side view)
- Has good resolution (2000px+ width)
- Has a sunset/golden hour color tone to match the design

### Fonts
The design uses system fonts by default. To match the reference more closely, consider adding:
- A serif font for "Manheim" logo
- A bold sans-serif for headlines

## File Structure

```
├── app/
│   ├── globals.css      # Tailwind directives and base styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Homepage component
├── components/
│   ├── Header.tsx       # Fixed navigation header
│   └── Logo.tsx         # Lifetime Auto Sales logo
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Dependencies
```

## Development Notes

- Desktop-first responsive design
- No animations (as per requirements)
- Clean Tailwind class usage
- Semantic HTML structure





