import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | Kings Law Advocates LLP',
  description: 'Meet the experienced legal professionals at Kings Law Advocates LLP. Our team brings expertise across multiple practice areas.',
}

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-5xl font-bold mb-4 text-balance">Our Experienced Team</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Highly qualified legal professionals dedicated to delivering exceptional results
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Prince Gichaga King'ori - Managing Partner */}
            <div className="bg-background rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-3 gap-8 p-8">
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center border-4 border-secondary/30">
                    <div className="text-center text-primary-foreground">
                      <div className="font-serif text-6xl font-bold mb-2">PK</div>
                      <p className="text-sm">Managing Partner</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-1">Prince Gichaga King'ori</h2>
                    <p className="text-secondary font-semibold text-lg">Managing Partner</p>
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-1">Education</h3>
                      <p>Bachelor of Laws (Second Class Upper Division) from Kenyatta University</p>
                      <p>Master of Laws in International Economic Law at Academy of International Economic Law and Policy (AIELP), Athens, Greece</p>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-1">Professional Credentials</h3>
                      <p>Advocate of the High Court of Kenya</p>
                      <p>3+ years post-admission experience</p>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-1">Experience</h3>
                      <p>Complex dispute resolution at High Court and Court of Appeal across land, commerce, company law, family, and succession matters</p>
                      <p>High-stakes commercial transactions, legal compliance, cross-border transactions, conveyancing, real estate, and banking & finance</p>
                      <p>Head of Legal, Compliance and Human Resource at Vermi-Farm Initiative</p>
                      <p>Previous roles at Wahome & Akedi Advocates and IKM Advocates (DLA Piper Africa Kenya)</p>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-foreground mb-1">Specialization</h3>
                      <p>Complex dispute resolution, commercial transactions, compliance, and innovative legal solutions</p>
                    </div>
                  </div>

                  <Link
                    href="/team/prince-gichaga"
                    className="inline-block mt-4 text-primary hover:text-secondary font-semibold transition-colors"
                  >
                    View Full Profile →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sheila Kiago - Partner (SEO Downplayed) */}
            <div className="bg-background rounded-lg overflow-hidden shadow-lg border border-border opacity-90">
              <div className="grid md:grid-cols-3 gap-8 p-8">
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-square bg-gradient-to-br from-primary/70 to-primary/60 rounded-lg flex items-center justify-center border-4 border-secondary/20">
                    <div className="text-center text-primary-foreground">
                      <div className="font-serif text-6xl font-bold mb-2">SK</div>
                      <p className="text-sm">Legal Counsel</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground/70 mb-1">Sheila Kiago</h3>
                    <p className="text-muted-foreground text-base">Legal Counsel</p>
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div>
                      <p>Bachelor of Laws (Second Class Upper Division) from Kenyatta University</p>
                      <p>Advocate of the High Court of Kenya with 3+ years experience</p>
                      <p>Certified Mediator (CPM)</p>
                    </div>

                    <div>
                      <p>Extensive background in banking and finance with IFRS training</p>
                      <p>Previous experience as Legal Counsel at Equity Bank Kenya Limited and National Bank of Kenya Limited</p>
                    </div>

                    <p className="text-xs text-muted-foreground/70 italic">Currently developing expertise through corporate experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Team Matters */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Why Choose Our Team</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="font-serif font-bold text-lg mb-3 text-foreground">Deep Expertise</h3>
              <p className="text-muted-foreground">
                Combined experience across corporate law, dispute resolution, finance, and regulatory compliance.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="font-serif font-bold text-lg mb-3 text-foreground">Practical Innovation</h3>
              <p className="text-muted-foreground">
                We bring startup agility and corporate pragmatism to every legal challenge.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="font-serif font-bold text-lg mb-3 text-foreground">Proven Track Record</h3>
              <p className="text-muted-foreground">
                Recognized by senior practitioners and valued by clients across diverse industries.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="font-serif font-bold text-lg mb-3 text-foreground">Client-Focused</h3>
              <p className="text-muted-foreground">
                Available, responsive, and committed to aligning legal solutions with your objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
