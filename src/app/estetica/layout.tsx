import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
  title: 'ByTech3 | Google Ads para Clínicas de Estética',
  description:
    'Coloque sua clínica na frente de pacientes que já decidiram fazer o procedimento — no Google, na sua cidade, no momento exato da busca.',
  openGraph: {
    title: 'ByTech3 | Google Ads para Clínicas de Estética',
    description:
      'A máquina que coloca sua clínica na frente de pacientes que já decidiram fazer o procedimento.',
    type: 'website',
  },
}

export default function EsteticaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
