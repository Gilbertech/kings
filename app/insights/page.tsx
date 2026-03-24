import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Insights & Articles | Kings Law Advocates LLP',
  description: 'Expert legal articles, insights, and updates on corporate law, real estate, dispute resolution, and more.',
  keywords: 'legal insights, articles, corporate law, real estate law, dispute resolution, Kenya',
}

export default function Insights() {
  const articles = [
    {
      id: 1,
      title: "Understanding Kenya's New Corporate Governance Framework",
      date: 'March 2024',
      category: 'Corporate Law',
      excerpt: 'A comprehensive guide to the latest corporate governance requirements and how they impact your business operations. Learn about board responsibilities, shareholder rights, and compliance obligations.',
      readTime: '5 min read',
      featured: true,
    },
    {
      id: 2,
      title: 'Real Estate Transactions: Common Pitfalls to Avoid',
      date: 'February 2024',
      category: 'Real Estate',
      excerpt: 'Discover the most common mistakes in property transactions and how to protect yourself from costly legal issues. Includes detailed guidance on due diligence, title verification, and escrow management.',
      readTime: '7 min read',
      featured: true,
    },
    {
      id: 3,
      title: 'Dispute Resolution: When to Litigate vs. Arbitrate',
      date: 'January 2024',
      category: 'Dispute Resolution',
      excerpt: 'Learn the differences between litigation and arbitration, and which approach is best for your specific situation. Compare costs, timelines, confidentiality, and enforceability.',
      readTime: '6 min read',
      featured: true,
    },
    {
      id: 4,
      title: 'Banking Law Updates: Navigating Regulatory Changes',
      date: 'December 2023',
      category: 'Banking & Finance',
      excerpt: 'Stay informed about recent banking regulations and their implications for financial institutions and clients. Covers Basel III compliance, anti-money laundering requirements, and digital banking.',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'Employment Law: Protecting Your Rights as an Employer',
      date: 'November 2023',
      category: 'Employment Law',
      excerpt: 'Essential guide to employment law compliance and managing workplace issues effectively. Covers contracts, termination procedures, discrimination prevention, and statutory obligations.',
      readTime: '7 min read',
    },
    {
      id: 6,
      title: 'Intellectual Property Rights in the Digital Age',
      date: 'October 2023',
      category: 'IP Law',
      excerpt: 'Understanding copyright, trademarks, and patents in today\'s digital landscape. Learn how to protect your innovations, enforce IP rights, and navigate licensing agreements.',
      readTime: '9 min read',
    },
  ]

  const categories = ['All', 'Corporate Law', 'Real Estate', 'Dispute Resolution', 'Banking & Finance', 'Employment Law']

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Legal Insights & Updates"
        subtitle="Expert articles and resources to keep you informed about legal trends and regulatory updates"
        imageSrc="/images/hero-insights.jpg"
        imageAlt="Legal Insights"
      />

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  category === 'All'
                    ? 'bg-secondary text-primary'
                    : 'bg-background border border-border text-foreground hover:border-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className={`group rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all hover:border-secondary ${
                  article.featured ? 'bg-card' : 'bg-background'
                }`}
              >
                <div className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    <Link
                      href={`/insights/${article.id}`}
                      className="text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2 transition-colors group/link"
                    >
                      Read More
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-4xl font-bold">Stay Updated</h2>
          <p className="text-lg text-primary-foreground/90">
            Subscribe to our newsletter for the latest legal insights, regulatory updates, and expert analysis
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 border border-primary-foreground/30 focus:outline-none focus:border-secondary"
            />
            <button className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-primary font-semibold rounded-lg transition-all transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
