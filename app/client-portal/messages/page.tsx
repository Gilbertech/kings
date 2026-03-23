'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { ArrowLeft, Send } from 'lucide-react'

export default function MessagesPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, author: 'John (You)', content: 'Hello, I have questions about my case', timestamp: '2024-03-15 10:30 AM', isUser: true },
    { id: 2, author: 'Legal Team', content: 'Hello John, thanks for reaching out. How can we assist you?', timestamp: '2024-03-15 10:45 AM', isUser: false },
    { id: 3, author: 'John (You)', content: 'I need an update on the commercial lease review', timestamp: '2024-03-15 11:00 AM', isUser: true },
    { id: 4, author: 'Legal Team', content: 'We have completed the initial review and have several recommendations. Would you like to schedule a call?', timestamp: '2024-03-15 02:15 PM', isUser: false },
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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    const newMessage = {
      id: messages.length + 1,
      author: 'You',
      content: message,
      timestamp: new Date().toLocaleString(),
      isUser: true,
    }
    setMessages([...messages, newMessage])
    setMessage('')
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
            <h1 className="text-4xl font-serif font-bold text-foreground">Messages</h1>
          </div>

          <div className="glass rounded-2xl overflow-hidden flex flex-col h-96 sm:h-[600px] animate-slide-in-up">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      msg.isUser
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-muted text-foreground rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm font-semibold mb-1">{msg.author}</p>
                    <p className="text-sm mb-2">{msg.content}</p>
                    <p className={`text-xs ${msg.isUser ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4">
              <form onSubmit={handleSendMessage} className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all hover:shadow-lg flex items-center gap-2 font-semibold"
                >
                  <Send size={18} />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm text-foreground">
              <strong>Note:</strong> All messages are reviewed during business hours. For urgent matters, please call +254 715 326 849.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
