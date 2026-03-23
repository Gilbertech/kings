import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { CheckCircle } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Kings Law Advocates LLP',
  description: 'Learn about Kings Law Advocates LLP, our mission, values, and commitment to delivering exceptional legal services.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">About Kings Law Advocates</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Established to offer extraordinary legal services to corporate and individual clients with speed, agility, and innovation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 hidden md:block rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/legal-team.jpg"
                alt="Our legal team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Kings Law Advocates LLP was established with a clear vision: to offer out of the ordinary legal services to both corporate and individual clientele. We are comprised of highly qualified legal professionals with diverse backgrounds spanning law firms, corporate environments, and startups.
              </p>
              <p className="text-muted-foreground text-lg mb-4">
                We are mindful of our clients' diverse needs and offer legal advice and representation that aligns with their objectives while maintaining fidelity to the law. As a client-oriented firm, our advocates and support staff are always available to respond to your consultation and attend to urgent needs.
              </p>
              <p className="text-muted-foreground text-lg font-semibold text-secondary">
                We intend to be known for speedy, agile, practical and innovative legal solutions.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border-2 border-secondary/30 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Our Values</h3>
              {[
                'Client-Centered Approach',
                'Legal Excellence',
                'Integrity & Fidelity',
                'Practical Solutions',
                'Innovation & Agility',
                'Availability & Responsiveness',
              ].map((value, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Background */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Diverse Experience, Unified Excellence</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-secondary font-bold text-xl">📋</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-foreground">Law Firm Background</h3>
              <p className="text-muted-foreground">
                Our team has worked at leading law firms, gaining experience in complex legal matters and professional practice standards.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-secondary font-bold text-xl">🏢</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-foreground">Corporate Experience</h3>
              <p className="text-muted-foreground">
                We bring corporate sector expertise, including regulatory compliance, finance, and strategic decision-making.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-secondary font-bold text-xl">🚀</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-3 text-foreground">Startup Perspective</h3>
              <p className="text-muted-foreground">
                Startup experience brings agility, innovation, and practical problem-solving to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Our Track Record</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">3+</div>
              <p className="text-primary-foreground/90">Years Combined Experience Per Partner</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">Multiple</div>
              <p className="text-primary-foreground/90">Practice Areas Covered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">Diverse</div>
              <p className="text-primary-foreground/90">Client Base & Industries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <p className="text-primary-foreground/90">Client-Focused Dedication</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
