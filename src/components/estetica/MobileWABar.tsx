'use client'

import { useState, useEffect } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

export default function MobileWABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
      aria-hidden={!visible}
    >
      <div className="bg-[#1A2F4B] py-3 px-4 shadow-lg">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="
            block w-full text-center
            bg-[#D4AF37] text-[#0D1B2E] font-body font-bold
            py-3 rounded-lg text-sm
            transition-opacity duration-200 hover:opacity-90
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
          "
        >
          Quero meu diagnóstico gratuito →
        </a>
      </div>
    </div>
  )
}
