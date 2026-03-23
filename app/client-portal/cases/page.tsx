'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { ArrowLeft, FileText } from 'lucide-react'

export default function CasesPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const session = localStorage.getItem('clientSession')
    if (!session) {
      router.push('/client-portal/login')
    } else {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [router])

  if (loading) return null
  if (!isAuthenticated) return null

  const allCases = [
    {
      id: 'CAS-2024-001',
      title: 'Commercial Lease Agreement',
      status: 'In Progress',
      date: '2024-03-15',
      stage: 'Review & Negotiation',
      description: 'Negotiation and review of commercial lease terms for business premises',
    },
    {
      id: 'CAS-2024-002',
      title: 'Property Transfer Deed',
      status: 'Completed',
      date: '2024-03-10',
      stage: 'Finalized',
      description: 'Property transfer documentation and conveyancing process completed',
    },
    {
      id: 'CAS-2024-003',
      title: 'Corporate Restructuring',
      status: 'In Progress',
      date: '2024-03-08',
      stage: 'Documentation',
      description: 'Corporate restructuring and documentation for business reorganization',
    },
    {
      id: 'CAS-2023-045',
      title: 'Dispute Resolution',
      status: 'Completed',
      date: '2023-11-20',
      stage: 'Resolved',
      description: 'Commercial dispute resolution through arbitration',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 animate-slide-in-up">
            <Link href="/client-portal/dashboard" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-4xl font-serif font-bold text-foreground">Your Cases</h1>
          </div>

          <div className="space-y-4">
            {allCases.map((caseItem, i) => (
              <Link
                key={i}
                href={`/client-portal/cases/${caseItem.id}`}
                className="glass p-6 rounded-xl hover-lift group cursor-pointer block animate-slide-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FileText size={20} className="text-secondary" />
                      <p className="text-xs text-secondary font-semibold">{caseItem.id}</p>
                    </div>
                    <h4 className="text-lg font-serif font-bold text-foreground group-hover:text-secondary transition-colors mb-2">
                      {caseItem.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{caseItem.description}</p>
                    <p className="text-xs text-muted-foreground font-medium">{caseItem.stage}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 flex-shrink-0">
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${
                        caseItem.status === 'Completed'
                          ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                          : 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
                      }`}
                    >
                      {caseItem.status}
                    </span>
                    <p className="text-xs text-muted-foreground">{new Date(caseItem.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
