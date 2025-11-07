# BIG STEPPER Website

The official website for BIG STEPPER - The Meme That Moves.

## Features

- Modern Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for smooth animations
- Fully responsive design
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
BIGSTEPPER/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── images/               # Image assets
├── components/           # Reusable components (empty for now)
├── public/              # Static files
└── package.json         # Dependencies
```

## Sections

- **Hero**: Main landing section with CTA buttons
- **About**: Introduction to BIG STEPPER
- **Lore**: The legend of the Big Shoes
- **Tokenomics**: Token details and distribution
- **Roadmap**: Development phases
- **Community**: Social links and community info
- **Footer**: Legal disclaimer

## Customization

### Update Links

Edit the social media and platform links in [app/page.tsx](app/page.tsx):
- Twitter: Line 61
- Telegram: Lines 53 & 362
- Pump.fun: Lines 64 & 370

### Add Images

Place your Big Stepper images in the `/public` folder and update the `Image` components in [app/page.tsx](app/page.tsx).

### Modify Colors

Update the color scheme in [tailwind.config.ts](tailwind.config.ts) and [app/globals.css](app/globals.css).

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Any Node.js hosting

## License

This is a meme token website with no intrinsic value. Built for entertainment and community purposes.

---

**BIG STEPPER — One Step Ahead of the Herd.**
