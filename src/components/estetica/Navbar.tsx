'use client'

import { useState, useEffect } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Navegação principal">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src="/logo-bytech3.svg" alt="ByTech3" />
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--white"
          style={{ padding: '10px 22px', fontSize: '0.875rem' }}
        >
          Diagnóstico gratuito
        </a>
      </div>
    </nav>
  )
}
