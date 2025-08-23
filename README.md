# SAKSENATA - Personal Art Gallery

A modern, responsive personal art gallery and portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing the work of Sena, an AI enthusiast and multidisciplinary creator.

## About the Artist

**Sena** is a multidisciplinary creator blending technology, art, and storytelling. With a background in fullstack programming and a deep enthusiasm for AI, photography, and filmmaking, Sena explores how code, visuals, and emotion intersect.

The gallery features a collection of photographic works that capture moments of urban life, nature, and abstract compositions, reflecting the artist's unique perspective on the world through the lens of technology and creativity.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Personal Gallery**: Showcase of Sena's photographic and artistic works
- **Individual Artwork Pages**: Dynamic routing for each artwork with detailed information
- **Contact Form**: Interactive contact form for inquiries and collaborations
- **About Page**: Information about the artist, mission, and creative philosophy
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast loading

## Project Structure

```
gallery/
├── components/
│   ├── Header.tsx          # Navigation header component
│   ├── Footer.tsx          # Footer component with links and info
│   ├── ArtworkCard.tsx     # Individual artwork display card
│   ├── GallerySection.tsx  # Section to display multiple artworks
│   └── ContactForm.tsx     # Contact form component
├── app/
│   ├── page.tsx            # Homepage with hero section and featured works
│   ├── about/
│   │   └── page.tsx        # About page with artist information
│   ├── gallery/
│   │   ├── page.tsx        # Main gallery page
│   │   └── [id]/
│   │       └── page.tsx    # Individual artwork detail page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── layout.tsx          # Root layout
├── data/
│   └── artworks.ts         # Artwork data and metadata
├── styles/
│   └── globals.css         # Global styles and Tailwind imports
├── types/
│   └── artwork.ts          # TypeScript type definitions
└── public/
    └── images/             # Artwork images and artist photos
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Pages

- **Homepage** (`/`): Features a hero section introducing SAKSENATA, featured artworks, and artist preview
- **Gallery** (`/gallery`): Displays all artworks in a grid layout
- **Artwork Detail** (`/gallery/[id]`): Individual artwork page with detailed information
- **About** (`/about`): Information about Sena, creative philosophy, and artistic journey
- **Contact** (`/contact`): Contact form and collaboration opportunities

## Components

- **Header**: Navigation menu with links to all pages
- **Footer**: Contact information and quick links
- **ArtworkCard**: Displays artwork information in a card format
- **GallerySection**: Renders a collection of artworks
- **ContactForm**: Interactive form for user inquiries and collaborations

## Styling

The project uses Tailwind CSS v4 for styling, providing:
- Responsive design utilities
- Modern color schemes with gray tones
- Consistent spacing and typography
- Hover effects and smooth transitions
- Clean, minimalist aesthetic

## Data Structure

Artworks are defined with the following properties:
- `id`: Unique identifier
- `title`: Artwork title
- `year`: Creation year
- `type`: Art type (photo, digital, etc.)
- `dimensions`: Image dimensions or physical dimensions
- `description`: Detailed description of the artwork
- `imageUrl`: Path to artwork image
- `category`: Art category (abstract, urban, landscape, etc.)

## Current Artworks

The gallery currently features:
- **Stop** (2024) - Urban photography capturing street moments
- **Street** (2024) - Morning street photography
- **Moon** (2024) - Night sky photography

## Technology Stack

- **Next.js 15**: Latest features with app router and Turbopack
- **React 19**: Latest React features
- **TypeScript**: Full type safety for components and data
- **Tailwind CSS v4**: Modern styling framework
- **Framer Motion**: Smooth animations and transitions
- **ESLint**: Code quality and consistency

## Development

- **Turbopack**: Fast development server with Next.js 15
- **TypeScript**: Full type safety for components and data
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Optimized images and fast loading

## Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js applications.

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome through the contact form.

## License

This project is open source and available under the MIT License.

---

*SAKSENATA - Where technology, storytelling, and art converge to shape human experience.*
