'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-light text-gray-900 tracking-wider">
            SAKSENATA
          </Link>
          <nav className="hidden md:flex space-x-12">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide">
              Home
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide">
              Gallery
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="mailto:info@saksenata.art" className="text-gray-600 hover:text-gray-900 transition-colors text-sm hidden md:block">
              E-mail
            </a>
            <button 
              className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/gallery" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="mailto:info@saksenata.art" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                E-mail
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
