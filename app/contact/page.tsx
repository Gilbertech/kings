import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Kings Law Advocates LLP',
  description: 'Get in touch with Kings Law Advocates. Multiple ways to contact our office in Nairobi, Kenya.',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Reach out to Kings Law Advocates for legal assistance and expert consultation"
        imageSrc="/images/hero-commercial-law.jpg"
        imageAlt="Contact Us"
      />

      {/* Contact Information */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-12">Get in Touch</h2>

              <div className="space-y-8">
                {/* Phone */}
                <a
                  href="tel:+254715326849"
                  className="flex gap-6 p-6 bg-background rounded-lg border-2 border-secondary/30 hover:border-secondary hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                    <Phone size={32} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">Phone</h3>
                    <p className="text-secondary font-semibold mb-1">+254 715 326 849</p>
                    <p className="text-secondary font-semibold">+254 708 719 223</p>
                    <p className="text-muted-foreground text-sm mt-2">Available Monday - Friday, 9 AM - 5 PM</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@kingslawadvocates.com"
                  className="flex gap-6 p-6 bg-background rounded-lg border-2 border-secondary/30 hover:border-secondary hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                    <Mail size={32} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">Email</h3>
                    <p className="text-secondary font-semibold">info@kingslawadvocates.com</p>
                    <p className="text-muted-foreground text-sm mt-2">Response time: Within 24 business hours</p>
                  </div>
                </a>

                {/* Office */}
                <a
                  href="https://maps.google.com/?q=Manga+House+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-6 p-6 bg-background rounded-lg border-2 border-primary/30 hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <MapPin size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">Office Location</h3>
                    <p className="text-foreground font-semibold">Manga House, Wing 2</p>
                    <p className="text-foreground font-semibold">Vunoh Business Center</p>
                    <p className="text-foreground font-semibold">Nairobi, Kenya</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254715550550?text=Hello%20Kings%20Law%20Advocates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-6 p-6 bg-background rounded-lg border-2 border-secondary/30 hover:border-secondary hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                    <MessageCircle size={32} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">WhatsApp</h3>
                    <p className="text-secondary font-semibold">+254 715 550 550</p>
                    <p className="text-muted-foreground text-sm mt-2">Instant messaging for quick inquiries</p>
                  </div>
                </a>

                {/* Office Hours */}
                <div className="flex gap-6 p-6 bg-background rounded-lg border border-border">
                  <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={32} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">Office Hours</h3>
                    <p className="text-foreground font-semibold">Monday - Friday</p>
                    <p className="text-foreground font-semibold">9:00 AM - 5:00 PM EAT</p>
                    <p className="text-muted-foreground text-sm mt-2">Closed on weekends and public holidays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-8">
              <div className="bg-background p-8 rounded-lg border-2 border-primary/30">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Company Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Company Name:</span><br />
                    Kings Law Advocates LLP
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">KRA PIN:</span><br />
                    P052494595U
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Practice Focus:</span><br />
                    Commercial Law, Dispute Resolution, Banking & Finance, Real Estate, and specialized practice areas
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 border-2 border-primary/30 p-8 rounded-lg">
                <h3 className="font-serif font-bold text-lg text-foreground mb-3">Multiple Contact Options</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Phone for urgent matters
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Email for detailed inquiries
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Client Portal for secure submissions
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    In-person consultations available
                  </li>
                </ul>
              </div>

              <Link
                href="/client-portal"
                className="inline-flex items-center justify-center gap-2 w-full bg-secondary hover:bg-secondary/90 text-primary px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Use Client Portal <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Our Location</h2>
          <div className="w-full h-96 bg-card rounded-lg border border-border overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.789266637641!2d36.77844!3d-1.30339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f19d1e9e7c4c9%3A0x7e8e8e8e8e8e8e8e!2sManga%20House%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kings Law Advocates Location"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm">
            Located in Upperhill, one of Nairobi's premium business districts
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
