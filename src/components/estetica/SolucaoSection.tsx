'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function SolucaoSection() {
  const titleRef = useScrollReveal()
  const bodyRef  = useScrollReveal()
  const boxRef   = useScrollReveal()

  return (
    <section
      className="bg-navy py-20 px-4 sm:px-6"
      aria-label="A solução ByTech3"
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="font-body font-medium text-gold uppercase mb-4"
          style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}
        >
          A ByTech3
        </p>

        <h2
          ref={titleRef}
          className="reveal font-display font-extrabold text-white mb-6"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          A máquina que coloca sua clínica na frente
          de quem já decidiu fazer o{' '}
          <span className="gold-shimmer">procedimento</span>.
        </h2>

        <div ref={bodyRef} className="reveal space-y-4 mb-10">
          <p
            className="font-body font-semibold text-white text-lg"
          >
            Não criamos desejo. Capturamos quem já tem.
          </p>
          <p
            className="font-body text-white/85"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: 1.65 }}
          >
            Campanhas de Google Ads construídas exclusivamente para clínicas de
            estética e harmonização facial — com estrutura de keywords por
            procedimento, anúncios que qualificam antes do clique e landing page
            que converte visita em contato.
          </p>
        </div>

        <div
          ref={boxRef}
          className="reveal rounded-xl p-6"
          style={{
            border: '1px solid rgba(212,175,55,0.4)',
            background: 'rgba(212,175,55,0.06)',
          }}
        >
          <p
            className="font-body text-white/90"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: 1.65 }}
          >
            A maioria das agências de estética foca em Meta Ads e criativos visuais.
            A ByTech3 domina Google Ads para este nicho —{' '}
            <span className="font-semibold text-white">
              o canal de maior intenção de compra, onde a concorrência da sua clínica ainda não chegou.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
