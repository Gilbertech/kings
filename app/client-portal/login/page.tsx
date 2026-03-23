'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { Mail, Lock, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simulate authentication
    if (email && password.length >= 6) {
      // Store session in localStorage (demo purposes)
      localStorage.setItem('clientSession', JSON.stringify({ email, timestamp: Date.now() }))
      router.push('/client-portal/dashboard')
    } else {
      setError('Please enter valid credentials')
      setLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="w-full max-w-md px-4 sm:px-6">
          <div className="glass p-8 sm:p-12 rounded-3xl">
            <div className="text-center mb-8 animate-slide-in-up">
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-2">Client Portal</h1>
              <p className="text-muted-foreground">Access your cases and documents</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? 'Logging in...' : 'Login'}
                {!loading && <ArrowRight size={20} />}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-background text-muted-foreground">Demo Credentials</span>
                </div>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg text-sm">
                <p className="text-muted-foreground mb-2">
                  <span className="font-semibold">Email:</span> demo@kingslawadvocates.com
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Password:</span> demo123
                </p>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Don't have access?{' '}
                <Link href="/contact" className="text-secondary hover:text-secondary/80 font-semibold transition-colors">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
