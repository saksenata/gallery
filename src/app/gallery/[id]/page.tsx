import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { artworks } from '../../../data/artworks';
import Image from 'next/image';

interface ArtworkPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArtworkDetail({ params }: ArtworkPageProps) {
  const { id } = await params;
  const artwork = artworks.find(a => a.id === id);

  if (!artwork) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <div className="max-w-4xl mx-auto px-6 text-center py-20">
            <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">Artwork not found</h1>
            <p className="text-lg text-gray-600">The artwork you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="relative aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
                  <Image 
                    src={artwork.imageUrl} 
                    alt={artwork.title} 
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    priority={true}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-light text-gray-900 mb-8 tracking-wide">{artwork.title}</h1>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Year</h2>
                    <p className="text-lg text-gray-900">{artwork.year}</p>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Type</h2>
                    <p className="text-lg text-gray-900">{artwork.type}</p>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Dimensions</h2>
                    <p className="text-lg text-gray-900">{artwork.dimensions}</p>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Description</h2>
                    <p className="text-lg text-gray-900 leading-relaxed">{artwork.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}