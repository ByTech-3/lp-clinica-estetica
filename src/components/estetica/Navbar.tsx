'use client'

import { useState, useEffect } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

function Logo() {
  const [imgFailed, setImgFailed] = useState(false)

  return imgFailed ? (
    <span
      className="font-display font-extrabold text-2xl text-white tracking-tight select-none"
      aria-label="ByTech3"
    >
      ByTech<span style={{ color: '#D4AF37' }}>3</span>
    </span>
  ) : (
    <img
      src="/logo.svg"
      alt="ByTech3"
      className="h-8 w-auto"
      onError={() => setImgFailed(true)}
    />
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(26,47,75,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.15)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-body font-semibold text-sm px-5 py-2.5 rounded-lg
            bg-white text-[#0D1B2E]
            transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-gold
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
          "
        >
          Diagnóstico gratuito
        </a>
      </div>
    </nav>
  )
}
