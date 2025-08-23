'use client';

import ArtworkCard from './ArtworkCard';
import { Artwork } from '../types/artwork';

interface GallerySectionProps {
  title?: string;
  artworks: Artwork[];
  className?: string;
}

export default function GallerySection({ title, artworks, className = "py-16" }: GallerySectionProps) {
  return (
    <section className={className}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <h2 className="text-2xl font-light text-gray-900 mb-12 text-center tracking-wide">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
    </section>
  );
}
