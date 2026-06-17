'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function SolucaoSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const bodyRef  = useScrollReveal<HTMLDivElement>()
  const boxRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-[#1A2F4B] py-20 md:py-28" aria-label="A solução ByTech3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs md:text-sm font-body font-semibold tracking-widest uppercase text-[#D4AF37] mb-4">
          A ByTech3
        </p>

        <h2
          ref={titleRef}
          className="reveal text-3xl md:text-4xl font-display font-extrabold leading-tight text-white mb-6 max-w-3xl"
        >
          A máquina que coloca sua clínica na frente
          de quem já decidiu fazer o{' '}
          <span className="gold-shimmer">procedimento</span>.
        </h2>

        <div ref={bodyRef} className="reveal space-y-4 mb-8 max-w-2xl">
          <p className="font-body font-semibold text-white text-lg md:text-xl">
            Não criamos desejo. Capturamos quem já tem.
          </p>
          <p className="text-base md:text-lg font-body leading-relaxed text-white/80">
            Campanhas de Google Ads construídas exclusivamente para clínicas de
            estética e harmonização facial — com estrutura de keywords por
            procedimento, anúncios que qualificam antes do clique e landing page
            que converte visita em contato.
          </p>
        </div>

        <div
          ref={boxRef}
          className="reveal rounded-xl p-6 max-w-2xl"
          style={{
            border: '1px solid rgba(212,175,55,0.4)',
            background: 'rgba(212,175,55,0.05)',
          }}
        >
          <p className="text-base md:text-lg font-body leading-relaxed text-white/90">
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
