import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Services | Kings Law Advocates LLP',
  description: 'Comprehensive legal services including commercial law, dispute resolution, banking & finance, real estate, and specialized practice areas.',
}

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Our Legal Services"
        subtitle="Comprehensive and specialized legal solutions tailored to your unique needs"
        imageSrc="/images/hero-commercial-law.jpg"
        imageAlt="Legal Services"
      />

      {/* Core Services Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">What We Offer</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Commercial Law */}
            <div className="bg-background p-8 rounded-lg border-2 border-secondary/30 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Commercial Law</h3>
              <p className="text-muted-foreground mb-6">
                Tailored legal advice for business decision makers with practical deal execution and commercial intellect.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Corporate transactions & deals</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Commercial contracts drafting</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Corporate governance guidance</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Risk management strategies</span>
                </li>
              </ul>
              <Link href="/practice-areas#commercial-law" className="text-primary hover:text-secondary font-semibold transition-colors inline-flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-background p-8 rounded-lg border-2 border-secondary/30 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Dispute Resolution</h3>
              <p className="text-muted-foreground mb-6">
                Expert litigation and dispute resolution strategies with experience up to the highest courts.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Commercial litigation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Court of Appeal representation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Civil dispute resolution</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Criminal litigation</span>
                </li>
              </ul>
              <Link href="/practice-areas#dispute-resolution" className="text-primary hover:text-secondary font-semibold transition-colors inline-flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Banking & Finance */}
            <div className="bg-background p-8 rounded-lg border-2 border-secondary/30 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Banking & Finance</h3>
              <p className="text-muted-foreground mb-6">
                Deep knowledge in banking law, finance transactions, and regulatory compliance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Banking transactions</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Finance law advisory</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">IFRS compliance</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Regulatory matters</span>
                </li>
              </ul>
              <Link href="/practice-areas#banking-finance" className="text-primary hover:text-secondary font-semibold transition-colors inline-flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Real Estate */}
            <div className="bg-background p-8 rounded-lg border-2 border-secondary/30 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Real Estate</h3>
              <p className="text-muted-foreground mb-6">
                Efficient deal execution, thorough due diligence, and speedy conveyancing transactions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Property transactions</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Conveyancing services</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Due diligence review</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground">Document custody</span>
                </li>
              </ul>
              <Link href="/practice-areas#real-estate" className="text-primary hover:text-secondary font-semibold transition-colors inline-flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Our Service Process</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We listen to understand your needs and objectives clearly',
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Thorough legal analysis and strategy development',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Efficient implementation with transparent communication',
              },
              {
                step: '04',
                title: 'Resolution',
                description: 'Delivery of practical outcomes aligned with your goals',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-6 rounded-lg border border-border h-full">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-secondary font-bold text-xl font-serif">{item.step}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-secondary/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold">Need Legal Assistance?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Get in touch with our team for a consultation tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/client-portal"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold border border-primary-foreground/50 transition-colors"
            >
              View Practice Areas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
