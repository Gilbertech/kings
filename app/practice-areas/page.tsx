import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'
import { CheckCircle, ArrowRight, Briefcase, Scale, Building2, Home, BarChart3, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Practice Areas | Kings Law Advocates LLP',
  description: 'Explore our practice areas: Commercial Law, Dispute Resolution, Banking & Finance, Real Estate, Insolvency Law, Trade Law, and more.',
  keywords: 'practice areas, law, Kenya, commercial law, dispute resolution, real estate, banking',
}

export default function PracticeAreas() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Practice Areas"
        subtitle="Specialized expertise across multiple legal disciplines"
        imageSrc="/images/hero-commercial-law.jpg"
        imageAlt="Practice Areas"
      />

      {/* Core Practice Areas */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Commercial Law */}
            <div id="commercial-law" className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="text-secondary" size={24} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Commercial Law</h2>
                <p className="text-muted-foreground mb-6">
                  KLA comprises respected commercial law practitioners who deliver tailored legal advice actionable for business decision makers. Our partners have excelled through rigorous training, excellent deal execution skills, and commercial intellect.
                </p>
                <p className="text-muted-foreground mb-6">
                  We participate in each transaction as a reliable partner, assisting decision makers to make forward-looking decisions and delivering long-term risk reduction.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg border-2 border-secondary/30 space-y-3">
                {[
                  'Corporate transactions & M&A',
                  'Commercial contracts drafting',
                  'Commercial disputes',
                  'Corporate governance',
                  'Industry-specific qualifications (IFRS, mediation)',
                  'Risk management strategies',
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dispute Resolution */}
            <div id="dispute-resolution" className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="text-primary" size={24} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Dispute Resolution</h2>
                <p className="text-muted-foreground mb-6">
                  Our practice involves ardent litigation and dispute resolution strategies. We digest our clients' briefs and implement ideal dispute resolution strategies that maximize practical solutions and timely conclusion of matters.
                </p>
                <p className="text-muted-foreground mb-6">
                  We don't promise wins but guarantee success where the best case is laid out for adjudication.
                </p>
              </div>
              <div className="order-1 md:order-2 bg-background p-8 rounded-lg border-2 border-primary/30 space-y-3">
                {[
                  'Commercial & corporate litigation',
                  'Civil dispute resolution',
                  'Criminal litigation',
                  'High Court representation',
                  'Court of Appeal practice',
                  'Chamber pleadings expertise',
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Banking & Finance */}
            <div id="banking-finance" className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="text-primary" size={24} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Banking & Finance</h2>
                <p className="text-muted-foreground mb-6">
                  KLA comprises legal practitioners with deep knowledge in banking and finance law. We draw from our understanding of the industry, regulatory frameworks, and urgency of financial transactions to deliver efficient, actionable solutions.
                </p>
                <p className="text-muted-foreground mb-6">
                  We incorporate pragmatism and dealership in providing legal solutions that enable our clients to succeed in their deals.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg border-2 border-primary/30 space-y-3">
                {[
                  'Banking transactions',
                  'Finance law advisory',
                  'IFRS compliance',
                  'Regulatory matters',
                  'Risk management',
                  'Client-focused approach',
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Estate */}
            <div id="real-estate" className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Home className="text-primary" size={24} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Real Estate</h2>
                <p className="text-muted-foreground mb-6">
                  Our real estate team prides itself in efficient deal execution, thorough due diligence review, and speedy closure. We are involved in diverse conveyancing transactions and advising clients on multiple real estate matters.
                </p>
                <p className="text-muted-foreground mb-6">
                  We act as custodians of original title documents with professional indemnity cover up to Kenya Shillings 50 million.
                </p>
              </div>
              <div className="order-1 md:order-2 bg-background p-8 rounded-lg border-2 border-primary/30 space-y-3">
                {[
                  'Property transactions',
                  'Conveyancing services',
                  'Due diligence review',
                  'Title documentation',
                  'Diaspora real estate',
                  'Document custodian services',
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insolvency Law */}
            <div id="insolvency-law" className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-secondary" size={24} />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Insolvency Law</h2>
                <p className="text-muted-foreground mb-6">
                  Our firm capitalizes on our wide networks and rapidly growing insolvency practice. We are currently involved in multiple insolvency transactions advising insolvency practitioners on corporate decisions and processes.
                </p>
                <p className="text-muted-foreground mb-6">
                  We walk the journey with our clients, delivering milestone objectives in a timely and comprehensive manner.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg border-2 border-secondary/30 space-y-3">
                {[
                  'Insolvency advisory',
                  'Corporate restructuring',
                  'Workout strategies',
                  'Practitioner guidance',
                  'Milestone delivery',
                  'Detail-oriented execution',
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Practice Areas */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Growing Practice Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border hover:border-secondary/30 transition-colors">
              <h3 className="font-serif font-bold text-lg text-foreground mb-3">Trade Law</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Positioned to take up opportunities in framing African-centric trade objectives. Advising local and multinational corporations on cross-border trade law imperatives and Pan-African trade policies.
              </p>
              <p className="text-secondary font-semibold text-sm">Growth Area</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-secondary/30 transition-colors">
              <h3 className="font-serif font-bold text-lg text-foreground mb-3">Diaspora & Immigration Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Recognizing the potential of the Kenyan diaspora community. Offering immigration practice and legal support to offshore clients with real estate and financial services arrangements.
              </p>
              <p className="text-secondary font-semibold text-sm">Growth Area</p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-secondary/30 transition-colors">
              <h3 className="font-serif font-bold text-lg text-foreground mb-3">Climate & Environmental Law</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Advising companies and NGOs on climate change matters. Consulting for climate resilient agriculture startups and promoting environmental justice aligned with UN SDGs.
              </p>
              <p className="text-secondary font-semibold text-sm">Growth Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our Practice Areas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Specialized Expertise</h3>
              <p className="text-muted-foreground">
                Deep specialization in each practice area with tailored approaches and proven methodologies for handling complex matters.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Industry Knowledge</h3>
              <p className="text-muted-foreground">
                Understanding of industry-specific challenges, regulatory frameworks, and business imperatives.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Practical Solutions</h3>
              <p className="text-muted-foreground">
                Pragmatic advice focused on achievable outcomes and long-term value creation for our clients.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Proven Track Record</h3>
              <p className="text-muted-foreground">
                Success across diverse matters with recognition from senior practitioners and valued client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold">Have a Matter in One of Our Practice Areas?</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Our experienced team is ready to assist with tailored legal solutions
          </p>
          <Link
            href="/client-portal"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Contact Us Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
