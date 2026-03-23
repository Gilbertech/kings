import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'
import { Award, BookOpen, MapPin, Phone, Mail } from 'lucide-react'

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
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex items-center justify-center">
              <div className="w-64 aspect-square bg-primary-foreground/10 rounded-lg flex items-center justify-center border-4 border-secondary/40">
                <div className="text-center">
                  <div className="font-serif text-8xl font-bold mb-2 text-secondary">PK</div>
                  <p className="text-lg text-primary-foreground/80">Managing Partner</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="font-serif text-5xl font-bold mb-2 text-balance">Prince Gichaga King&apos;ori</h1>
              <p className="text-2xl text-secondary font-semibold mb-6">Managing Partner, Kings Law Advocates LLP</p>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Expert in commercial law, dispute resolution, and international economic law. Leading advocate specializing in complex transactions and strategic legal solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+254715326849"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href="mailto:info@kingslawadvocates.com"
                  className="inline-flex items-center gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold border border-primary-foreground/50 transition-colors"
                >
                  <Mail size={20} />
                  Email
                </a>
              </div>
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
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Professional Experience</h2>
                <div className="space-y-6">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2">Head of Legal, Compliance & Human Resources</h3>
                    <p className="text-secondary font-semibold mb-2">Vermi-Farm Initiative</p>
                    <p className="text-muted-foreground text-sm">
                      Leading legal strategy for a social entrepreneurship startup in the agriculture and climate change sectors. Overseeing legal compliance, corporate governance, and HR matters.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2">Senior Associate - Dispute Resolution</h3>
                    <p className="text-secondary font-semibold mb-2">Wahome & Akedi Advocates</p>
                    <p className="text-muted-foreground text-sm">
                      Represented clients in complex commercial and civil disputes before the High Court and Court of Appeal.
                    </p>
                  </div>

                  <div className="bg-background p-6 rounded-lg border border-border">
                    <h3 className="font-serif font-bold text-lg text-foreground mb-2">Associate - Corporate & Commercial Law</h3>
                    <p className="text-secondary font-semibold mb-2">IKM Advocates (DLA Piper Africa Kenya)</p>
                    <p className="text-muted-foreground text-sm">
                      Provided legal counsel on commercial transactions, corporate governance, and regulatory compliance for multinational and local corporations.
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
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Client Success Philosophy</h3>
                <p className="text-muted-foreground mb-4">
                  Prince brings a unique combination of academic rigor, practical courtroom experience, and commercial acumen to every matter. His approach emphasizes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Strategic legal planning aligned with client business objectives
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Speedy resolution without compromising quality
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Innovative solutions to complex legal challenges
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary font-bold">•</span>
                    Practical advice focused on achievable outcomes
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
