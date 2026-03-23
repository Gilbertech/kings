'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/services', label: 'Services' },
    { href: '/insights', label: 'Insights' },
    { href: '/client-portal/login', label: 'Portal' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
         {/* Logo */}
<Link href="/" className="flex items-center gap-3 group hover-lift">
  <div className="relative w-32 h-10 sm:w-40 sm:h-12 flex-shrink-0">
    <Image
      src="https://kingslawadvocates.com/Kings-Law-Logo.png"
      alt="Kings Law Advocates Logo"
      fill
      className="object-contain"
      priority
    />
  </div>
  
  
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 w-6 h-0.5 bg-secondary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-4 items-center">
            <a
              href="https://wa.me/254715550550?text=Hello%20Kings%20Law%20Advocates"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/client-portal"
              className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-slide-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 hover:bg-muted/50 rounded-lg transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-2 pt-4 flex gap-2">
              <a
                href="https://wa.me/254715550550?text=Hello%20Kings%20Law%20Advocates"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white px-4 py-3 rounded-lg font-semibold transition-all"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <Link
                href="/client-portal"
                className="flex-1 text-center bg-primary text-white px-4 py-3 rounded-lg font-semibold transition-all"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
