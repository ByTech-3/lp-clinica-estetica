'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WHATSAPP_URL } from '@/lib/constants'

const items = [
  'Volume mensal de buscas para seus procedimentos na sua cidade',
  'Análise de quem já está anunciando no Google para esse nicho',
  'Estimativa realista de custo por contato para o seu mercado',
]

export default function CTAFinal() {
  const contentRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-[#0D1B2E] py-24 md:py-32" aria-label="Chamada final para diagnóstico">
      <div
        ref={contentRef}
        className="reveal max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-display font-extrabold leading-tight text-white mb-6">
          Veja quantas pacientes estão procurando
          seus procedimentos{' '}
          <span className="gold-shimmer">agora</span>.
        </h2>

        <p className="text-base md:text-lg font-body leading-relaxed text-white/80 mb-8 max-w-xl mx-auto">
          Diagnóstico gratuito — sem compromisso, sem contrato, sem promessa vaga.
          Você vê os dados do seu mercado. Decide com informação.
        </p>

        {/* Lista do que inclui */}
        <ul className="space-y-3 mt-8 text-left max-w-sm mx-auto mb-10">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="text-[#D4AF37] font-bold text-lg shrink-0" aria-hidden="true">✓</span>
              <span className="font-body text-white/85 text-base leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto text-center
              bg-white text-[#0D1B2E] font-body font-bold text-lg
              px-10 py-5 rounded-xl
              transition-colors duration-200
              hover:bg-[#D4AF37] hover:text-[#0D1B2E]
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
            "
          >
            Quero meu diagnóstico gratuito →
          </a>
          <span className="font-body text-white/50 text-sm">
            Abre WhatsApp direto · Resposta em até 2h em dias úteis
          </span>
        </div>
      </div>
    </section>
  )
}
