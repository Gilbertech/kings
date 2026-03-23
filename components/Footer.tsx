'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <Link href="/" className="block mb-4 group hover-lift">
              <div className="relative w-40 h-12 flex-shrink-0">
                <Image
                  src="https://kingslawadvocates.com/Kings-Law-Logo.png"
                  alt="Kings Law Advocates Logo"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </Link>
            <h3 className="font-serif text-lg font-bold mb-2">Kings Law Advocates LLP</h3>
            <p className="text-primary-foreground/80 text-sm">
              Premium legal services for corporate and individual clients in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-secondary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif font-bold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/practice-areas#commercial-law" className="hover:text-secondary transition-colors">
                  Commercial Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#dispute-resolution" className="hover:text-secondary transition-colors">
                  Dispute Resolution
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#banking-finance" className="hover:text-secondary transition-colors">
                  Banking & Finance
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#real-estate" className="hover:text-secondary transition-colors">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80">
                  Manga House, Wing 2<br />
                  Vunoh Business Center<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="flex gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <p className="text-primary-foreground/80">+254 715 326 849</p>
              </div>
              <div className="flex gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@kingslawadvocates.com" className="hover:text-secondary transition-colors">
                  info@kingslawadvocates.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Kings Law Advocates LLP. All rights reserved.</p>
            <p>KRA PIN: P052494595U</p>
          </div>
        </div>
      </div>
    </footer>
  )
}