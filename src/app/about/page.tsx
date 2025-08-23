import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">About Saksenata</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                AI enthusiast and multidisciplinary creator with a passion for aesthetics, photography, and filmmaking. Exploring how technology, storytelling, and art converge to shape human experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  We believe that art has the power to inspire, challenge, and transform. Our mission is to create a platform 
                  where artists can share their unique perspectives and where art enthusiasts can discover works that resonate 
                  with their souls.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To become the premier destination for contemporary art, fostering a community that celebrates creativity, 
                  diversity, and artistic excellence while making art accessible to everyone.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-12 mb-20">
              <h2 className="text-2xl font-light text-gray-900 mb-8 text-center tracking-wide">About the Artist</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                Sena is a multidisciplinary creator blending technology, art, and storytelling. With a background in fullstack programming and a deep enthusiasm for AI, photography, and filmmaking, Sena explores how code, visuals, and emotion intersect.
              </p>
              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Join me in exploring the harmony between programming, AI, and visual storytelling — discovering beauty in both algorithms and artistry.
              </p>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">Join Our Community</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you're an artist looking to showcase your work or an art lover seeking inspiration, 
                we invite you to be part of our growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/gallery"
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-full text-sm tracking-wide"
                >
                  Explore Gallery
                </a>
                <a
                  href="mailto:info@saksenata.art"
                  className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors rounded-full text-sm tracking-wide"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
