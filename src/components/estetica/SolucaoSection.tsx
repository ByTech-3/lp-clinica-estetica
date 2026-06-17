'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function SolucaoSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const bodyRef  = useScrollReveal<HTMLDivElement>()
  const boxRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section section--navy" aria-label="A solução ByTech3">
      <div className="container">
        <span className="eyebrow">A ByTech3</span>

        <h2 ref={titleRef} className="h2 reveal" style={{ maxWidth: '760px' }}>
          A máquina que coloca sua clínica na frente de quem já decidiu fazer
          o <span className="gold-shimmer">procedimento</span>.
        </h2>

        <div ref={bodyRef} className="reveal" style={{ maxWidth: '640px' }}>
          <p style={{ fontWeight: 600, fontSize: '1.125rem', color: '#fff', marginBottom: '0.75rem' }}>
            Não criamos desejo. Capturamos quem já tem.
          </p>
          <p className="lead--white">
            Campanhas de Google Ads construídas exclusivamente para clínicas de
            estética e harmonização facial — com estrutura de keywords por
            procedimento, anúncios que qualificam antes do clique e landing page
            que converte visita em contato.
          </p>
        </div>

        <div
          ref={boxRef}
          className="reveal"
          style={{
            border: '1px solid rgba(212,175,55,0.4)',
            background: 'rgba(212,175,55,0.06)',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '640px',
            marginTop: '32px',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: 1.7 }}>
            A maioria das agências de estética foca em Meta Ads e criativos visuais.
            A ByTech3 domina Google Ads para este nicho —{' '}
            <strong style={{ color: '#fff', fontWeight: 600 }}>
              o canal de maior intenção de compra, onde a concorrência da sua clínica ainda não chegou.
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}
