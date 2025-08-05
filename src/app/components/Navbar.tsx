'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Aquí podrías implementar la lógica para cambiar el tema
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 fixed w-full top-0 z-50" role="navigation" aria-label="Navegación principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo pixelado */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu} aria-label="Ir al inicio">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-sm flex items-center justify-center" aria-hidden="true">
                <div className="w-4 h-4 bg-white rounded-sm opacity-80"></div>
              </div>
              <span className="ml-2 text-white font-bold text-lg">Portfolio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8" role="menubar">
              <Link 
                href="#work" 
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                role="menuitem"
              >
                Work
              </Link>
              <Link 
                href="#about" 
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                role="menuitem"
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                role="menuitem"
              >
                Contact
              </Link>
              
              {/* Toggle de tema oscuro */}
              <button
                onClick={toggleTheme}
                className="text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded transition-colors"
                aria-label="Cambiar modo oscuro"
                aria-pressed={isDarkMode}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded transition-colors"
              aria-label="Cambiar modo oscuro"
              aria-pressed={isDarkMode}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded transition-colors"
              aria-label="Abrir menú de navegación"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2 border border-gray-800" role="menu">
            <Link 
              href="#work" 
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              onClick={closeMobileMenu}
              role="menuitem"
            >
              Work
            </Link>
            <Link 
              href="#about" 
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              onClick={closeMobileMenu}
              role="menuitem"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              onClick={closeMobileMenu}
              role="menuitem"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 