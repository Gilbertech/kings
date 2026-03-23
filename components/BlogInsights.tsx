import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export default function BlogInsights() {
  const insights = [
    {
      id: 1,
      title: 'Understanding Kenya\'s New Corporate Governance Framework',
      date: 'March 2024',
      category: 'Corporate Law',
      excerpt: 'A comprehensive guide to the latest corporate governance requirements and how they impact your business operations.',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Real Estate Transactions: Common Pitfalls to Avoid',
      date: 'February 2024',
      category: 'Real Estate',
      excerpt: 'Discover the most common mistakes in property transactions and how to protect yourself from costly legal issues.',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Dispute Resolution: When to Litigate vs. Arbitrate',
      date: 'January 2024',
      category: 'Dispute Resolution',
      excerpt: 'Learn the differences between litigation and arbitration, and which approach is best for your specific situation.',
      readTime: '6 min read',
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Legal Insights & Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest articles on legal trends, regulatory updates, and practical advice
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {insights.map((article) => (
            <article key={article.id} className="group bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all hover:border-secondary">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
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

                <p className="text-muted-foreground text-sm">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <Link
                    href={`/insights/${article.id}`}
                    className="text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2 transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors"
          >
            View All Articles
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
