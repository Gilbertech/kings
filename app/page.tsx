'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, Shield, Zap, Award, Users, Heart, CheckCircle, Briefcase, Scale, Building2, MapPin, TrendingUp, BarChart3, DollarSign } from 'lucide-react'

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(end * progress))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}+</span>
}

interface BubblePosition {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

const FloatingBubble = ({ delay, size, position }: { delay: number; size: string; position: BubblePosition }) => (
  <div
    className={`absolute ${size} rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-secondary/20 animate-bubble-float`}
    style={{ animationDelay: `${delay}s`, ...position }}
  />
)

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Floating Bubbles */}
          <FloatingBubble delay={0} size="w-32 h-32" position={{ top: '80px', right: '40px' }} />
          <FloatingBubble delay={0.5} size="w-24 h-24" position={{ top: '128px', left: '80px' }} />
          <FloatingBubble delay={1} size="w-20 h-20" position={{ bottom: '160px', right: '128px' }} />
          <FloatingBubble delay={1.5} size="w-28 h-28" position={{ bottom: '80px', left: '40px' }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-up">
                <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
                  Welcome to Premium Legal Services
                </div>
                <h1 className="text-5xl md:text-6xl font-serif font-black text-foreground mb-6 leading-tight">
                  Justice & Excellence for Your Business
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Kings Law Advocates delivers strategic legal solutions tailored to your unique business needs. From corporate law to dispute resolution, we're your trusted partners.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/client-portal/login"
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    Access Portal
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-bold transition-all duration-300"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>

              <div className="relative h-96 md:h-full hidden md:block animate-slide-in-right">
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/office-professionals.jpg"
                    alt="Legal professionals at work"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Practice Areas</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Comprehensive legal expertise across all sectors</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { Icon: Briefcase, title: 'Commercial Law', desc: 'Corporate transactions and business advisory', color: 'from-blue-500/10' },
                { Icon: Scale, title: 'Dispute Resolution', desc: 'Litigation and arbitration services', color: 'from-purple-500/10' },
                { Icon: Building2, title: 'Banking & Finance', desc: 'Finance law and regulatory compliance', color: 'from-green-500/10' },
                { Icon: MapPin, title: 'Real Estate', desc: 'Property transactions and conveyancing', color: 'from-amber-500/10' },
                { Icon: BarChart3, title: 'Insolvency Law', desc: 'Corporate restructuring solutions', color: 'from-red-500/10' },
                { Icon: TrendingUp, title: 'Emerging Practice', desc: 'Trade law and environmental matters', color: 'from-teal-500/10' },
              ].map((service, i) => {
                const Icon = service.Icon
                return (
                  <div
                    key={i}
                    className={`group bg-gradient-to-br ${service.color} to-transparent backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover-lift cursor-pointer animate-slide-in-up transition-all hover:border-secondary/50`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-300">
                      <Icon className="text-secondary" size={28} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                    <div className="mt-4 h-0.5 w-0 group-hover:w-8 bg-secondary transition-all duration-300"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Why Choose Kings Law</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We combine expertise with innovation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 hidden md:block rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/consultation-meeting.jpg"
                  alt="Client consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: 'Rapid Response', desc: 'Fast-tracked solutions without compromising quality' },
                  { icon: Award, title: 'Proven Excellence', desc: 'Award-winning team with decades of experience' },
                  { icon: Shield, title: 'Client Focused', desc: 'Your success is our priority' },
                  { icon: Users, title: 'Expert Team', desc: 'Specialized advocates for every practice area' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 animate-slide-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Client Testimonials</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">What our satisfied clients say about us</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'John Kariuki',
                  company: 'Kariuki Enterprises Ltd',
                  text: 'Exceptional legal counsel during our commercial transaction. Their speed and attention to detail was remarkable.',
                  rating: 5,
                },
                {
                  name: 'Sarah Omondi',
                  company: 'Tech Startup Founder',
                  text: 'Guided us through complex regulatory requirements with clarity. Highly recommended for growing businesses.',
                  rating: 5,
                },
                {
                  name: 'David Mwangi',
                  company: 'Property Developer',
                  text: 'Efficient conveyancing and expert real estate advice. Made the entire transaction seamless.',
                  rating: 5,
                },
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-2xl hover-lift">
                  <div className="flex gap-1 mb-4">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, idx) => (
                        <span key={idx} className="text-secondary text-lg">★</span>
                      ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{item.text}"</p>
                  <div>
                    <p className="font-serif font-bold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-slide-in-up">Need Legal Assistance?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our expert team today for a confidential consultation. We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-full font-bold transition-all duration-300 hover:shadow-xl"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/254715550550?text=Hello%20Kings%20Law%20Advocates"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-full font-bold transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
