'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { FileText, MessageSquare, Calendar, LogOut, Plus, Eye } from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [clientEmail, setClientEmail] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const session = localStorage.getItem('clientSession')
    if (session) {
      try {
        const parsed = JSON.parse(session)
        setClientEmail(parsed.email)
        setIsAuthenticated(true)
      } catch {
        router.push('/client-portal/login')
      }
    } else {
      router.push('/client-portal/login')
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('clientSession')
    router.push('/client-portal/login')
  }

  if (loading) return null

  if (!isAuthenticated) return null

  const recentCases = [
    {
      id: 'CAS-2024-001',
      title: 'Commercial Lease Agreement',
      status: 'In Progress',
      date: '2024-03-15',
      stage: 'Review & Negotiation',
    },
    {
      id: 'CAS-2024-002',
      title: 'Property Transfer Deed',
      status: 'Completed',
      date: '2024-03-10',
      stage: 'Finalized',
    },
    {
      id: 'CAS-2024-003',
      title: 'Corporate Restructuring',
      status: 'In Progress',
      date: '2024-03-08',
      stage: 'Documentation',
    },
  ]

  const quickStats = [
    { label: 'Active Cases', value: '2', icon: FileText, color: 'from-blue-500 to-blue-600' },
    { label: 'Messages', value: '5', icon: MessageSquare, color: 'from-purple-500 to-purple-600' },
    { label: 'Upcoming Meetings', value: '1', icon: Calendar, color: 'from-orange-500 to-orange-600' },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 animate-slide-in-up">
            <div>
              <h1 className="text-4xl font-serif font-bold text-foreground mb-2">Your Dashboard</h1>
              <p className="text-muted-foreground">Manage your cases and documents</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 border-2 border-destructive/30 text-destructive hover:bg-destructive/5 rounded-xl font-semibold transition-all"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>

          {/* Welcome Card */}
          <div className="glass p-8 rounded-2xl mb-8 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Welcome back, {clientEmail.split('@')[0]}!</h2>
            <p className="text-muted-foreground">Here's an overview of your legal matters and recent activities.</p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {quickStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="glass p-8 rounded-2xl hover-lift animate-slide-in-up"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm font-medium mb-1">{stat.label}</p>
                      <p className="text-4xl font-serif font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} text-white`}>
                      <Icon size={28} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Actions Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass p-8 rounded-2xl animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/client-portal/new-case"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all group"
                >
                  <Plus size={20} />
                  <span>Start a New Case</span>
                </Link>
                <Link
                  href="/client-portal/messages"
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/10 hover:bg-secondary/20 text-secondary font-semibold transition-all group"
                >
                  <MessageSquare size={20} />
                  <span>Send a Message</span>
                </Link>
                <Link
                  href="/client-portal/documents"
                  className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-semibold transition-all group"
                >
                  <FileText size={20} />
                  <span>Upload Documents</span>
                </Link>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="text-foreground font-semibold">info@kingslawadvocates.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="text-foreground font-semibold">+254 715 326 849</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/254715550550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 font-semibold"
                  >
                    +254 715 550 550
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Active Cases */}
          <div className="animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">Your Cases</h3>
              <Link href="/client-portal/cases" className="text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2">
                View All
                <Eye size={18} />
              </Link>
            </div>

            <div className="space-y-4">
              {recentCases.map((caseItem, i) => (
                <Link
                  key={i}
                  href={`/client-portal/cases/${caseItem.id}`}
                  className="glass p-6 rounded-xl hover-lift group cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-xs text-secondary font-semibold mb-1">{caseItem.id}</p>
                      <h4 className="text-lg font-serif font-bold text-foreground group-hover:text-secondary transition-colors mb-2">
                        {caseItem.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{caseItem.stage}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <span
                        className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
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
        </div>
      </main>
    </>
  )
}
