export interface Artwork {
  id: string;
  title: string;
  year: string;
  type: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface GallerySection {
  id: string;
  title: string;
  description: string;
  artworks: Artwork[];
}
