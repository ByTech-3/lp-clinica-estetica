'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const dores = [
  'Sua agenda oscila — semanas cheias, semanas com buracos sem previsão',
  'A maioria dos seus clientes vem de indicação, e você não controla quando chega',
  'Você já tentou impulsionar post no Instagram e não veio resultado claro',
  'Quando está cheia de clientes, não tem tempo para marketing. Quando afrouxa, já é tarde para reagir',
  'Você quer crescer, mas não consegue planejar nada porque o faturamento é imprevisível',
]

export default function DorSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const listRef  = useScrollReveal<HTMLUListElement>()
  const boxRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-white py-20 md:py-28" aria-label="Dores comuns">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal text-3xl md:text-4xl font-display font-bold leading-tight text-[#0D1B2E] mb-10"
        >
          Isso parece familiar?
        </h2>

        <ul
          ref={listRef}
          className="reveal stagger space-y-4 mb-10 max-w-2xl"
        >
          {dores.map((dor, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-red-400 font-bold text-xl shrink-0 mt-0.5" aria-hidden="true">✕</span>
              <span className="text-base md:text-lg font-body leading-relaxed text-[#4F4F4F]">
                {dor}
              </span>
            </li>
          ))}
        </ul>

        <div
          ref={boxRef}
          className="reveal max-w-2xl"
          style={{
            borderLeft: '4px solid #D4AF37',
            paddingLeft: '1.5rem',
          }}
        >
          <p className="font-body font-semibold text-[#1A2F4B] text-lg md:text-xl leading-relaxed">
            Se você marcou dois ou mais desses pontos mentalmente,
            o problema não é o seu serviço.{' '}
            É onde você está procurando cliente.
          </p>
        </div>
      </div>
    </section>
  )
}
