export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4 tracking-wide">Design & Development</h3>
            <p className="text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">Indonesia</a> & <a href="#" className="hover:text-gray-900 transition-colors">JAVA</a>
            </p>
            <p className="text-sm text-gray-600 mt-2">2025</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4 tracking-wide">Connect</h3>
            <div className="space-y-2">
              <a href="mailto:info@saksenata.art" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                E-mail
              </a>
              <a href="https://www.instagram.com/saksenata/" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4 tracking-wide">Saksenata</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI enthusiast and multidisciplinary creator with a passion for aesthetics, photography, and filmmaking. Exploring how technology, storytelling, and art converge to shape human experience.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">© 2025 Saksenata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}