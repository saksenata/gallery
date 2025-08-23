import Header from '../components/Header';
import Footer from '../components/Footer';
import GallerySection from '../components/GallerySection';
import { artworks } from '../data/artworks';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredArtworks = artworks.slice(0, 6);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-wide">
              SAKSENATA
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              AI enthusiast and multidisciplinary creator with a passion for aesthetics, photography, and filmmaking. Exploring how technology, storytelling, and art converge to shape human experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gallery"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors rounded-full text-sm tracking-wide"
              >
                View Gallery
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-full text-sm tracking-wide"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Artworks */}
        <GallerySection 
          title="Featured Works" 
          artworks={featuredArtworks} 
          className="py-20 bg-gray-50"
        />

        {/* About Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">About the Artist</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Sena is a multidisciplinary creator blending technology, art, and storytelling. With a background in fullstack programming and a deep enthusiasm for AI, photography, and filmmaking, Sena explores how code, visuals, and emotion intersect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Join me in exploring the harmony between programming, AI, and visual storytelling — discovering beauty in both algorithms and artistry.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At the core of Sena&apos;s work is the pursuit of creativity through innovation — transforming lines of code into experiences, and capturing human moments through the lens of technology. Each project reflects a fusion of logic and imagination, where digital tools meet artistic vision.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors rounded-full text-sm tracking-wide"
                >
                  Read More
                </Link>
              </div>
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image 
                  src="/images/artist.jpg" 
                  alt="Artist portrait" 
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}