'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { ArrowLeft, FileText, Calendar, User, MessageSquare, CheckCircle, Clock } from 'lucide-react'

export default function CaseDetailsPage() {
  const router = useRouter()
  const params = useParams()
  const caseId = params.id as string
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

  const caseDetails = {
    id: caseId,
    title: 'Commercial Lease Agreement',
    status: 'In Progress',
    stage: 'Review & Negotiation',
    description: 'Negotiation and review of commercial lease terms for business premises on Nairobi CBD',
    openedDate: '2024-03-15',
    assignedAttorney: 'Oketch King',
    attorneyEmail: 'oketch@kingslawadvocates.com',
    attorneyPhone: '+254 715 326 849',
    caseValue: 'KES 850,000',
    nextDeadline: '2024-04-05',
    documents: [
      { name: 'Lease Draft (Initial).pdf', uploadedDate: '2024-03-15' },
      { name: 'Marked-up Lease (V2).pdf', uploadedDate: '2024-03-18' },
      { name: 'Negotiation Notes.docx', uploadedDate: '2024-03-20' },
    ],
    timeline: [
      { date: '2024-03-15', event: 'Case opened', type: 'info' },
      { date: '2024-03-18', event: 'Initial lease review completed', type: 'success' },
      { date: '2024-03-20', event: 'Negotiation round 1 - feedback provided', type: 'success' },
      { date: '2024-04-05', event: 'Negotiation deadline (Expected)', type: 'pending' },
    ],
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 animate-slide-in-up">
            <Link href="/client-portal/cases" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <div>
              <p className="text-sm text-secondary font-semibold">{caseId}</p>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">{caseDetails.title}</h1>
            </div>
          </div>

          {/* Status Card */}
          <div className="glass p-6 rounded-xl mb-8 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Status</p>
                <h2 className="text-2xl font-serif font-bold text-foreground">{caseDetails.stage}</h2>
              </div>
              <span className="inline-block px-6 py-2 bg-blue-500/20 text-blue-700 dark:text-blue-400 font-semibold rounded-full">
                {caseDetails.status}
              </span>
            </div>
            <p className="text-muted-foreground mt-4">{caseDetails.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Case Information */}
            <div className="glass p-6 rounded-xl animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-serif font-bold text-foreground mb-6">Case Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Opened Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-secondary" />
                    <p className="font-semibold text-foreground">{new Date(caseDetails.openedDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Next Deadline</p>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-orange-500" />
                    <p className="font-semibold text-foreground">{new Date(caseDetails.nextDeadline).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Case Value</p>
                  <p className="font-semibold text-foreground text-lg">{caseDetails.caseValue}</p>
                </div>
              </div>
            </div>

            {/* Assigned Attorney */}
            <div className="glass p-6 rounded-xl animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-serif font-bold text-foreground mb-6">Your Attorney</h3>
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                  <User size={28} className="text-secondary" />
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground text-lg">{caseDetails.assignedAttorney}</p>
                  <p className="text-sm text-muted-foreground">Lead Attorney</p>
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href={`mailto:${caseDetails.attorneyEmail}`}
                  className="flex items-center gap-2 p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <span className="text-primary font-semibold flex-1">{caseDetails.attorneyEmail}</span>
                </a>
                <a
                  href={`tel:${caseDetails.attorneyPhone}`}
                  className="flex items-center gap-2 p-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors"
                >
                  <span className="text-secondary font-semibold flex-1">{caseDetails.attorneyPhone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="glass p-6 rounded-xl mb-8 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-serif font-bold text-foreground mb-6">Case Documents</h3>
            <div className="space-y-3">
              {caseDetails.documents.map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-background/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-semibold text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">Uploaded {new Date(doc.uploadedDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors text-secondary font-semibold">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="glass p-6 rounded-xl animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-lg font-serif font-bold text-foreground mb-6">Case Timeline</h3>
            <div className="space-y-6">
              {caseDetails.timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.type === 'success'
                          ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                          : item.type === 'pending'
                            ? 'bg-orange-500/20 text-orange-700 dark:text-orange-400'
                            : 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
                      }`}
                    >
                      {item.type === 'success' ? (
                        <CheckCircle size={16} />
                      ) : item.type === 'pending' ? (
                        <Clock size={16} />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-current"></div>
                      )}
                    </div>
                    {i < caseDetails.timeline.length - 1 && <div className="w-0.5 h-12 bg-border my-2"></div>}
                  </div>
                  <div className="pb-6">
                    <p className="text-xs text-muted-foreground mb-1">{new Date(item.date).toLocaleDateString()}</p>
                    <p className="font-semibold text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/client-portal/messages"
              className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              Message Attorney
            </Link>
            <Link
              href="/client-portal/documents"
              className="flex-1 px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              <FileText size={20} />
              Upload Documents
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
