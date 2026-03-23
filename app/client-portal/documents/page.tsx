'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { ArrowLeft, Upload, FileText, Download, Trash2 } from 'lucide-react'

export default function DocumentsPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Commercial_Lease_Draft.pdf', size: '2.4 MB', uploadDate: '2024-03-15', type: 'PDF' },
    { id: 2, name: 'Property_Survey_Report.pdf', size: '1.8 MB', uploadDate: '2024-03-10', type: 'PDF' },
    { id: 3, name: 'Corporate_Documents.docx', size: '0.8 MB', uploadDate: '2024-03-08', type: 'DOCX' },
    { id: 4, name: 'Financial_Statements_2023.xlsx', size: '1.2 MB', uploadDate: '2024-02-28', type: 'XLSX' },
  ])

  useEffect(() => {
    const session = localStorage.getItem('clientSession')
    if (!session) {
      router.push('/client-portal/login')
    } else {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [router])

  const handleRemoveDocument = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id))
  }

  if (loading) return null
  if (!isAuthenticated) return null

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 animate-slide-in-up">
            <Link href="/client-portal/dashboard" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-4xl font-serif font-bold text-foreground">Documents</h1>
          </div>

          {/* Upload Section */}
          <div className="glass p-8 rounded-2xl mb-8 animate-slide-in-up">
            <div className="border-2 border-dashed border-secondary/30 rounded-xl p-8 text-center hover:border-secondary/50 transition-colors">
              <Upload size={48} className="mx-auto text-secondary mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Upload Documents</h3>
              <p className="text-muted-foreground mb-6">Drag and drop your files here or click to browse</p>
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all hover:shadow-lg">
                Choose Files
              </button>
              <p className="text-xs text-muted-foreground mt-4">
                Maximum file size: 50 MB. Supported formats: PDF, DOCX, XLSX, JPG, PNG
              </p>
            </div>
          </div>

          {/* Documents List */}
          <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Your Documents</h2>
            <div className="space-y-3">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="glass p-4 sm:p-6 rounded-xl hover-lift flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <FileText className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{doc.name}</h3>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>{doc.size}</span>
                        <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                        <span className="bg-secondary/20 text-secondary px-2 py-0.5 rounded">{doc.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Download">
                      <Download size={20} className="text-secondary" />
                    </button>
                    <button
                      onClick={() => handleRemoveDocument(doc.id)}
                      className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={20} className="text-destructive" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
