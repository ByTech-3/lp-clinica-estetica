'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import CTAButton from '@/components/ui/CTAButton'

const items = [
  'Volume mensal de buscas para seus procedimentos na sua cidade',
  'Análise de quem já está anunciando no Google para esse nicho',
  'Estimativa realista de custo por contato para o seu mercado',
]

export default function CTAFinal() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section section--dark" aria-label="Chamada final para diagnóstico">
      <div className="container">
        <div ref={ref} className="cta-center reveal">

          <h2 className="h2" style={{ maxWidth: '680px', margin: '0 auto 1rem' }}>
            Veja quantas pacientes estão procurando seus procedimentos{' '}
            <span className="gold-shimmer">agora</span>.
          </h2>

          <p className="lead lead--white" style={{ maxWidth: '560px', margin: '0 auto' }}>
            Diagnóstico gratuito — sem compromisso, sem contrato, sem promessa vaga.
            Você vê os dados do seu mercado. Decide com informação.
          </p>

          <ul className="cta-checklist">
            {items.map((item) => (
              <li key={item}>
                <span className="cta-check" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="cta-btn-wrap">
            <CTAButton
              location="cta-final"
              className="btn btn--white"
              style={{ fontSize: '1.0625rem', padding: '16px 40px' }}
            />
            <span className="btn-micro">Abre WhatsApp direto · Resposta em até 2h em dias úteis</span>
          </div>

        </div>
      </div>
    </section>
  )
}
