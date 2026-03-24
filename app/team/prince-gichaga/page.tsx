import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Link from 'next/link'
import { Metadata } from 'next'
import { Award, BookOpen, MapPin, Phone, Mail, Star, Target, Users, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prince Gichaga King\'ori | Managing Partner | Kings Law Advocates',
  description: 'Prince Gichaga King\'ori is the Managing Partner at Kings Law Advocates LLP. Expert in commercial law, dispute resolution, and international economic law with 3+ years post-admission experience.',
  keywords: 'Prince Gichaga King\'ori, Managing Partner, Advocate, Commercial Law, Dispute Resolution, Kenya',
  openGraph: {
    title: 'Prince Gichaga King\'ori - Managing Partner | Kings Law Advocates',
    description: 'Expert lawyer specializing in commercial law, dispute resolution, and cross-border transactions',
    type: 'profile',
  },
}

export default function PrinceProfile() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Prince Gichaga King'ori"
        subtitle="Managing Partner - Commercial Law & Dispute Resolution Expert"
        imageSrc="/images/hero-prince-gichaga.jpg"
        imageAlt="Prince Gichaga King'ori, Managing Partner"
      />

      {/* Quick Stats */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">3+</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Years Post-Admission</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">100+</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Cases Successfully Handled</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">15+</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Practice Areas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">50+</div>
              <p className="text-sm md:text-base text-primary-foreground/80">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="md:col-span-2 space-y-12">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen size={28} className="text-secondary" />
                  <h2 className="font-serif text-3xl font-bold text-foreground">Education</h2>
                </div>
                <div className="space-y-4 ml-11">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2">Master of Laws (LL.M.)</h3>
                    <p className="text-muted-foreground">
                      International Economic Law<br />
                      Academy of International Economic Law and Policy (AIELP)<br />
                      European Public Law Organization, Athens, Greece<br />
                      <span className="text-sm italic text-muted-foreground/70">Currently Pursuing</span>
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2">Bachelor of Laws (LL.B.)</h3>
                    <p className="text-muted-foreground">
                      Second Class Upper Division<br />
                      Kenyatta University, Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Credentials */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award size={28} className="text-secondary" />
                  <h2 className="font-serif text-3xl font-bold text-foreground">Professional Credentials</h2>
                </div>
                <div className="space-y-3 ml-11">
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-foreground font-semibold">Advocate of the High Court of Kenya</p>
                    <p className="text-muted-foreground text-sm">Qualified to practice before all courts in Kenya</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-border">
                    <p className="text-foreground font-semibold">3+ Years Post-Admission Experience</p>
                    <p className="text-muted-foreground text-sm">Extensive courtroom and transactional experience</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase size={28} className="text-secondary" />
                  <h2 className="font-serif text-3xl font-bold text-foreground">Professional Experience</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-background p-6 rounded-lg border border-border hover:border-secondary/50 transition-colors">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">Head of Legal, Compliance & Human Resources</h3>
                    <p className="text-secondary font-semibold mb-3">Vermi-Farm Initiative</p>
                    <p className="text-muted-foreground">
                      Leading comprehensive legal strategy for an innovative social entrepreneurship startup operating at the intersection of agriculture, climate change, and sustainable development. Responsibilities include overseeing all legal compliance matters, ensuring robust corporate governance frameworks, managing human resource policies, and providing strategic legal counsel for organizational growth. Collaborating with international partners on cross-border transactions and climate resilience initiatives.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border hover:border-secondary/50 transition-colors">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">Senior Associate - Dispute Resolution</h3>
                    <p className="text-secondary font-semibold mb-3">Wahome & Akedi Advocates</p>
                    <p className="text-muted-foreground">
                      Successfully represented clients in complex commercial and civil disputes before Kenya's highest courts, including the High Court and Court of Appeal. Handled matters spanning land disputes, commercial transactions, company law, family law, and succession matters. Developed expertise in litigation strategy, evidence presentation, and appellate practice. Built strong track record of favorable settlements and court victories.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border hover:border-secondary/50 transition-colors">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-1">Associate - Corporate & Commercial Law</h3>
                    <p className="text-secondary font-semibold mb-3">IKM Advocates (DLA Piper Africa Kenya)</p>
                    <p className="text-muted-foreground">
                      Provided comprehensive legal counsel on diverse commercial transactions for multinational corporations and established local businesses. Specialized in corporate transactions, M&A advisory, contract drafting, corporate governance compliance, and regulatory matters. Gained exposure to international best practices and complex cross-border transaction experience while working with one of Africa's largest law firms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Areas of Expertise */}
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Areas of Expertise</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Commercial Law',
                    'Dispute Resolution',
                    'Complex Litigation',
                    'Land Law',
                    'Company Law',
                    'Family Law',
                    'Succession Planning',
                    'High Court Advocacy',
                    'Court of Appeal Practice',
                    'International Economic Law',
                    'Cross-Border Transactions',
                    'Banking & Finance',
                    'Real Estate Transactions',
                    'Conveyancing',
                    'Legal Compliance',
                    'Corporate Governance',
                  ].map((expertise, index) => (
                    <div key={index} className="bg-background p-4 rounded-lg border border-border">
                      <p className="text-foreground font-semibold text-sm">{expertise}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Focus */}
              <div className="bg-primary/10 border-2 border-secondary/30 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Target size={28} className="text-secondary" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">Client Success Philosophy</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Prince brings a unique combination of academic rigor, practical courtroom experience, and commercial acumen to every matter. His approach emphasizes:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3 items-start">
                    <Star size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>Strategic legal planning aligned with client business objectives and long-term success</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Star size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>Speedy resolution without compromising quality or thoroughness of analysis</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Star size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>Innovative solutions to complex legal challenges using creative problem-solving</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Star size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>Practical advice focused on achievable outcomes and measurable client value</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-background p-8 rounded-lg border-2 border-secondary sticky top-24">
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+254715326849" className="text-primary hover:text-secondary font-semibold transition-colors">
                      +254 715 326 849
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:info@kingslawadvocates.com" className="text-primary hover:text-secondary font-semibold transition-colors break-all">
                      info@kingslawadvocates.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Office</p>
                    <p className="font-semibold text-foreground text-sm">
                      Manga House, Wing 2<br />
                      Vunoh Business Center<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                  <button className="w-full bg-secondary hover:bg-secondary/90 text-primary px-4 py-2 rounded-lg font-semibold transition-colors mt-4">
                    Request Consultation
                  </button>
                </div>
              </div>

              {/* Back Link */}
              <Link href="/team" className="text-primary hover:text-secondary font-semibold transition-colors block text-center">
                ← Back to Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
