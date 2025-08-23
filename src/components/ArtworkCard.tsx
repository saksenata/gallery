'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Artwork } from '../types/artwork';

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link href={`/gallery/${artwork.id}`} className="group block">
      <div className="relative overflow-hidden bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-lg">
        <div className="aspect-[4/3] relative">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
            {artwork.title}
          </h3>
          <p className="text-sm text-gray-500">{artwork.year}</p>
        </div>
      </div>
    </Link>
  );
}
