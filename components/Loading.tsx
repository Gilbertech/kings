'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev
        return prev + Math.random() * 30
      })
    }, 300)

    // Hide after 2.5 seconds
    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
    }, 2500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Animated background elements - premium design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top right accent */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob"></div>
        
        {/* Bottom left accent */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(90deg, #bfa35f 1px, transparent 1px), linear-gradient(0deg, #bfa35f 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4">
        {/* Premium logo container */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo with glow effect */}
          <div className="relative">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/10 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
            
            {/* Logo */}
            <div className="relative flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl border border-secondary/20 p-6 hover:border-secondary/40 transition-all duration-500">
              <Image
                src="https://kingslawadvocates.com/Kings-Law-Logo.png"
                alt="Kings Law Advocates"
                width={200}
                height={80}
                className="h-20 w-auto animate-fade-in"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Branding text */}
          <div className="text-center space-y-3 animate-slide-in-up">
            <h1 className="font-serif text-5xl font-black text-white tracking-tight">
              Kings Law Advocates
            </h1>
            <p className="text-secondary/80 text-lg font-semibold tracking-widest">
              Excellence in Legal Services
            </p>
            <p className="text-white/60 text-sm">
              Preparing your premium experience
            </p>
          </div>
        </div>

        {/* Progress indicator section */}
        <div className="w-full max-w-xs space-y-4">
          {/* Animated progress bar */}
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-secondary/20">
            <div
              className="h-full bg-gradient-to-r from-secondary via-secondary to-secondary/70 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Status text */}
          <div className="text-center">
            <p className="text-white/70 text-xs font-semibold tracking-wider">
              {progress < 30 ? 'Loading services...' : progress < 70 ? 'Preparing legal solutions...' : 'Finalizing experience...'}
            </p>
          </div>
        </div>

        {/* Decorative dots animation */}
        <div className="flex gap-3 items-center justify-center mt-4">
          <div className="w-2.5 h-2.5 rounded-full bg-secondary/80 animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-2.5 h-2.5 rounded-full bg-secondary/60 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2.5 h-2.5 rounded-full bg-secondary/40 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  )
}
