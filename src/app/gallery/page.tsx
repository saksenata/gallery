import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ArtworkCard from '../../components/ArtworkCard';
import { artworks } from '../../data/artworks';

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-wide">Gallery</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our collection of contemporary artworks that bridge technology and creativity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}