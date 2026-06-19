'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function ParaQuemESection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const gridRef  = useScrollReveal<HTMLDivElement>()
  const paraRef  = useScrollReveal<HTMLParagraphElement>()

  return (
    <section className="section section--off" aria-label="Para quem é">
      <div className="container">
        <span className="eyebrow">QUALIFICAÇÃO</span>
        <h2 ref={titleRef} className="h2 reveal">Para quem é — e para quem não é</h2>
        <p className="lead">
          Ser específico aqui evita que você invista tempo numa parceria que
          não faz sentido para o seu momento.
        </p>

        <div ref={gridRef} className="compare-grid reveal stagger">
          <div className="compare-card compare-card--gold">
            <strong>Indicado para clínicas que:</strong>
            <ul className="checklist" style={{ marginTop: '16px' }}>
              <li>
                <span className="checklist-icon" style={{ color: 'var(--gold)' }}>✓</span>
                Focam (ou querem focar) em procedimentos de alto ticket:
                Botox, Preenchimento, Bioestimuladores, Harmonização Orofacial,
                Ultrassom Microfocado
              </li>
              <li>
                <span className="checklist-icon" style={{ color: 'var(--gold)' }}>✓</span>
                Faturam a partir de R$40 mil/mês
              </li>
              <li>
                <span className="checklist-icon" style={{ color: 'var(--gold)' }}>✓</span>
                Têm alguém dedicado a responder o WhatsApp em poucos minutos —
                não o profissional sozinho, no fim do dia
              </li>
              <li>
                <span className="checklist-icon" style={{ color: 'var(--gold)' }}>✓</span>
                Topam investir verba de mídia compatível com o porte da própria cidade
              </li>
            </ul>
          </div>

          <div className="compare-card">
            <strong>Não recomendado para clínicas que:</strong>
            <ul className="checklist" style={{ marginTop: '16px' }}>
              <li>
                <span className="checklist-icon">✕</span>
                Têm como carro-chefe procedimentos de ticket baixo
                (limpeza de pele, design de sobrancelha)
              </li>
              <li>
                <span className="checklist-icon">✕</span>
                Não têm estrutura para responder rápido o lead que chega
              </li>
              <li>
                <span className="checklist-icon">✕</span>
                Buscam resultado garantido já no primeiro mês
              </li>
            </ul>
          </div>
        </div>

        <p ref={paraRef} className="reveal" style={{ textAlign: 'center', marginTop: '32px', fontWeight: 600, color: 'var(--navy)' }}>
          Se você se encontrou na coluna da esquerda, faz sentido conversar.
        </p>
      </div>
    </section>
  )
}
