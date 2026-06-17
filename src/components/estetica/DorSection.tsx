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
    <section className="section section--white" aria-label="Dores comuns">
      <div className="container">
        <span className="gold-line" />

        <h2 ref={titleRef} className="h2 reveal">
          Isso parece familiar?
        </h2>

        <ul ref={listRef} className="checklist reveal stagger">
          {dores.map((dor, i) => (
            <li key={i}>
              <span className="checklist-icon" aria-hidden="true">✕</span>
              <span>{dor}</span>
            </li>
          ))}
        </ul>

        <div
          ref={boxRef}
          className="reveal"
          style={{
            borderLeft: '4px solid var(--gold)',
            paddingLeft: '1.5rem',
            maxWidth: '640px',
          }}
        >
          <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '1.0625rem', lineHeight: 1.65, margin: 0 }}>
            Se você marcou dois ou mais desses pontos mentalmente,
            o problema não é o seu serviço.{' '}
            É onde você está procurando cliente.
          </p>
        </div>
      </div>
    </section>
  )
}
