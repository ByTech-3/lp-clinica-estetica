'use client'
import { useEffect, useRef } from 'react'
import { GTM } from '@/lib/gtm'

export function useScrollTracking() {
  const fired = useRef(false)
  useEffect(() => {
    const onScroll = () => {
      if (fired.current) return
      const pct = window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)
      if (pct >= 0.75) {
        fired.current = true
        GTM.scrollDepth75()
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
