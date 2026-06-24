import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'ByTech3 — Google Ads para Clínicas de Estética',
  description: 'Diagnóstico gratuito de Google Ads para clínicas de estética. Veja o potencial do seu mercado antes de qualquer compromisso.',
  icons: { icon: '/icon.svg' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <GoogleTagManager gtmId="GTM-TQ7MWTK9" />
        {children}
      </body>
    </html>
  )
}
