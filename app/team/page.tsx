import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
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
      <HeroSection
        title="Our Experienced Team"
        subtitle="Highly qualified legal professionals dedicated to delivering exceptional results"
        imageSrc="/images/legal-team.jpg"
        imageAlt="Our Team"
      />

      {/* Team Members */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Prince Gichaga King'ori - Managing Partner */}
            <div className="bg-background rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-3 gap-8 p-8">
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-square rounded-lg overflow-hidden border-4 border-secondary/30 shadow-lg">
                    <Image
                      src="/images/prince-gichaga.jpg"
                      alt="Prince Gichaga King'ori"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      priority
                    />
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
                  <div className="w-full aspect-square rounded-lg overflow-hidden border-4 border-secondary/30 shadow-lg">
                    <Image
                      src="/images/sheila-attorney.jpg"
                      alt="Sheila Kiago"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-1">Sheila Kiago</h3>
                    <p className="text-secondary font-semibold text-base">Legal Counsel</p>
                  </div>
                  
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Education</p>
                      <p>Bachelor of Laws (Second Class Upper Division) from Kenyatta University</p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-1">Professional Qualifications</p>
                      <p>Advocate of the High Court of Kenya with 3+ years post-admission experience</p>
                      <p>Certified Mediator (CPM) - Alternative Dispute Resolution specialist</p>
                      <p>IFRS Training and Banking Regulations certification</p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-1">Professional Experience</p>
                      <p>Legal Counsel at Equity Bank Kenya Limited - Banking law and compliance</p>
                      <p>Legal Counsel at National Bank of Kenya Limited - Financial regulations and risk management</p>
                      <p>Extensive background in banking, finance, and regulatory compliance matters</p>
                    </div>

                    <div>
                      <p className="font-semibold text-foreground mb-1">Practice Focus</p>
                      <p>Banking and Financial Services Law, Corporate Compliance, Alternative Dispute Resolution, Mediation</p>
                    </div>
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
