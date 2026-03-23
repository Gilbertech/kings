'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ClientPortal() {
  const router = useRouter()
  useEffect(() => {
    const session = localStorage.getItem('clientSession')
    if (session) {
      router.push('/client-portal/dashboard')
    } else {
      router.push('/client-portal/login')
    }
  }, [router])

  return null
}
