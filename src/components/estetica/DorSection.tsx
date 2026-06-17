'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const dores = [
  'Sua agenda oscila — semanas cheias, semanas com buracos sem previsão',
  'A maioria dos seus clientes vem de indicação, e você não controla quando chega',
  'Você já tentou impulsionar post no Instagram e não veio resultado claro',
  'Quando está cheia de clientes, não tem tempo para marketing. Quando afrouxa, já é tarde para reagir',
  'Você quer crescer, mas não consegue planejar nada porque o faturamento é imprevisível',
]

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
      style={{ color: '#E05555' }}
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export default function DorSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const listRef  = useScrollReveal<HTMLUListElement>()
  const boxRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-white py-20 px-4 sm:px-6" aria-label="Dores comuns">
      <div className="max-w-2xl mx-auto">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal font-display font-bold text-navy-dark mb-10"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          Isso parece familiar?
        </h2>

        <ul
          ref={listRef}
          className="reveal stagger space-y-5 mb-12"
        >
          {dores.map((dor, i) => (
            <li key={i} className="flex items-start gap-3">
              <XIcon />
              <span
                className="font-body text-slate"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: 1.65 }}
              >
                {dor}
              </span>
            </li>
          ))}
        </ul>

        <div
          ref={boxRef}
          className="reveal rounded-xl px-6 py-5 border-l-4"
          style={{ borderColor: '#1A2F4B', background: '#F8F7F4' }}
        >
          <p
            className="font-body font-semibold text-navy"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.65 }}
          >
            Se você marcou dois ou mais desses pontos mentalmente,
            o problema não é o seu serviço.{' '}
            <span className="text-navy-dark">
              É onde você está procurando cliente.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
