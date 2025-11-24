# Appscrip Shopping Page Task

A shopping page built with React and Next.js framework, featuring Server Side Rendering (SSR).


Live Demo - https://appscrip-task-vikash.vercel.app/

## Tech Stack

- **React.js** - UI library
- **Next.js 14** - React framework with built-in SSR support
- **TypeScript** - Type safety
- **Minimal Dependencies** - Only essential packages

## Features

-  Server Side Rendering (SSR) enabled by default
-  Responsive design ready
-  SEO optimized structure
-  Clean code structure and naming conventions
-  Minimal DOM size
-  TypeScript for type safety

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
app/
  ├── components/
  │   ├── ProductSection.tsx  # Product listing with filters
  │   └── Footer.tsx           # Footer component
  ├── layout.tsx              # Root layout with SEO metadata
  ├── page.tsx                 # Home page (SSR enabled)
  └── globals.css              # Global styles
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build
6. Click "Deploy"

### Vercel Configuration

The project includes:
- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files to exclude from deployment
- Optimized `next.config.js` for production

### Environment Variables

If you need to add environment variables:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

## Features Implemented

✅ Server Side Rendering (SSR)
✅ Responsive design (Mobile, Tablet, Desktop)
✅ SEO optimization (Meta tags, Schema markup, H1/H2 tags)
✅ FakeStore API integration
✅ Product filtering and sorting
✅ Wishlist functionality
✅ Clean code structure
✅ Minimal dependencies

