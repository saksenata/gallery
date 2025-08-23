import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-20">
              <h1 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">Contact</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch with us for any inquiries about our gallery or artworks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">Get in Touch</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Email</h3>
                    <a href="mailto:info@saksenata.art" className="text-lg text-gray-900 hover:text-gray-700 transition-colors">
                      info@saksenata.art
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Connect</h3>
                    <div className="space-y-2">
                      <a href="#" className="block text-lg text-gray-900 hover:text-gray-700 transition-colors">
                        Instagram
                      </a>
                      <a href="#" className="block text-lg text-gray-900 hover:text-gray-700 transition-colors">
                        Twitter
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">About</h3>
                    <p className="text-lg text-gray-900 leading-relaxed">
                      AI enthusiast and multidisciplinary creator with a passion for aesthetics, photography, and filmmaking. Exploring how technology, storytelling, and art converge to shape human experience.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-8 tracking-wide">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
