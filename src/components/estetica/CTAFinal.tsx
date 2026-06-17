'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WHATSAPP_URL, CTA_LABEL, CTA_MICROCOPY } from '@/lib/constants'

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 mt-0.5 text-gold"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const items = [
  'Volume mensal de buscas para seus procedimentos na sua cidade',
  'Análise de quem já está anunciando no Google para esse nicho',
  'Estimativa realista de custo por contato para o seu mercado',
]

export default function CTAFinal() {
  const contentRef = useScrollReveal()

  return (
    <section
      className="bg-navy-dark py-24 px-4 sm:px-6"
      aria-label="Chamada final para diagnóstico"
    >
      <div
        ref={contentRef}
        className="reveal max-w-2xl mx-auto text-center"
      >
        <h2
          className="font-display font-extrabold text-white mb-6"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          Veja quantas pacientes estão procurando
          seus procedimentos{' '}
          <span className="gold-shimmer">agora</span>.
        </h2>

        <p
          className="font-body text-white/80 mb-8"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: 1.65 }}
        >
          Diagnóstico gratuito — sem compromisso, sem contrato, sem promessa vaga.
          Você vê os dados do seu mercado. Decide com informação.
        </p>

        {/* Lista do que inclui */}
        <ul className="text-left inline-flex flex-col gap-3 mb-10">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span
                className="font-body text-white/85"
                style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1rem)', lineHeight: 1.6 }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto text-center
              bg-white text-navy-dark font-body font-bold
              px-10 py-5 rounded-xl text-base
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-lg
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
            "
          >
            {CTA_LABEL}
          </a>
          <span className="font-body text-white/50 text-sm">
            {CTA_MICROCOPY}
          </span>
        </div>
      </div>
    </section>
  )
}
