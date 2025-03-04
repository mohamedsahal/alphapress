'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed w-full z-50 top-0 ${darkMode ? 'bg-[#191A17] text-white' : 'bg-white text-gray-800'} transition-colors duration-300 backdrop-blur-sm bg-opacity-90`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={darkMode ? "/logo.png" : "/light logo.png"} 
                alt="Logo" 
                width={120} 
                height={120} 
                className="mr-2" 
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#EE4263] transition-colors font-medium">Home</Link>
            <Link href="/services" className="hover:text-[#EE4263] transition-colors font-medium">Services</Link>
            <Link href="/products" className="hover:text-[#EE4263] transition-colors font-medium">Products</Link>
            <Link href="/contact" className="hover:text-[#EE4263] transition-colors font-medium">Contact</Link>
            <Link href="/about" className="hover:text-[#EE4263] transition-colors font-medium">About</Link>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-all duration-300 hover:text-[#EE4263] hover:rotate-12"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <Link
              href="/get-started"
              className="bg-[#EE4263] text-white px-6 py-2 rounded-lg hover:bg-[#d93b58] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 font-medium"
            >
              Get Started
            </Link>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 hover:text-[#EE4263] transition-colors z-50"
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 z-40 ${darkMode ? 'bg-[#191A17]' : 'bg-white'} md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} backdrop-blur-sm bg-opacity-90`}
          style={{ top: '64px' }}
        >
          <div className="flex flex-col items-center space-y-8 pt-8">
            <Link 
              href="/" 
              className="text-xl hover:text-[#EE4263] transition-colors font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-xl hover:text-[#EE4263] transition-colors font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              href="/products" 
              className="text-xl hover:text-[#EE4263] transition-colors font-medium"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className="text-xl hover:text-[#EE4263] transition-colors font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              href="/about" 
              className="text-xl hover:text-[#EE4263] transition-colors font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/get-started"
              className="bg-[#EE4263] text-white px-8 py-3 rounded-lg hover:bg-[#d93b58] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-xl font-medium"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}