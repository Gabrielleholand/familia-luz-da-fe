'use client'

import { useState, useEffect } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#ebooks', label: 'Ebooks' },
    { href: '#pack', label: 'Pack' },
    { href: '#autora', label: 'Autora' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="font-label text-gold text-sm sm:text-base tracking-widest uppercase"
          >
            Família à Luz da Fé
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label text-text-light/80 hover:text-gold text-sm tracking-wider uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pack"
              className="font-label text-sm tracking-wider uppercase bg-gold text-navy px-5 py-2.5 hover:bg-gold-dark transition-colors btn-gold-hover"
            >
              Comprar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gold p-2"
            aria-label="Menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-label text-text-light/80 hover:text-gold text-sm tracking-wider uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pack"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-label text-sm tracking-wider uppercase bg-gold text-navy px-5 py-2.5 hover:bg-gold-dark transition-colors text-center"
              >
                Comprar
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
