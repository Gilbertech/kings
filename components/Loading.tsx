'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary to-primary/90 flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo */}
        <div className="relative w-48 h-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl animate-pulse"></div>
          <Image
            src="/images/kings-law-logo-white.png"
            alt="Kings Law Advocates"
            width={200}
            height={80}
            className="object-contain relative z-10 animate-bounce"
            priority
          />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-white mb-2">Kings Law Advocates</h1>
          <p className="text-white/80 text-sm tracking-wider">Premium Legal Services</p>
        </div>

        {/* Loading spinner */}
        <div className="flex gap-2 items-center justify-center mt-4">
          <div className="w-3 h-3 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Loading text */}
        <p className="text-white/70 text-sm mt-6 animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
