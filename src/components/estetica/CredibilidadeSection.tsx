'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: 'Especialização em nicho',
    body: 'Keywords, anúncios e landing pages construídos especificamente para procedimentos estéticos — sem template genérico.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'O diagnóstico como prova',
    body: 'Antes de assinar qualquer coisa, você vê com dados reais quantas pacientes estão buscando seus procedimentos na sua cidade agora.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Transparência total',
    body: 'Acesso direto à conta Google Ads. Relatório mensal legível. Verba direto no Google. Sem caixa preta.',
  },
]

export default function CredibilidadeSection() {
  const titleRef   = useScrollReveal<HTMLHeadingElement>()
  const bodyRef    = useScrollReveal<HTMLParagraphElement>()
  const pillarsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section section--navy" aria-label="Credibilidade ByTech3">
      <div className="container">
        <span className="gold-line" />

        <h2 ref={titleRef} className="h2 reveal" style={{ maxWidth: '640px' }}>
          Construído exclusivamente para clínicas de estética
        </h2>

        <p ref={bodyRef} className="lead lead--white reveal" style={{ maxWidth: '600px' }}>
          Não atendemos todo tipo de negócio. Especializamos em Google Ads
          para clínicas de estética e harmonização facial porque é aqui que
          o mecanismo de busca ativa funciona melhor — e onde a maioria das
          agências generalistas ainda não chegou.
        </p>

        <div ref={pillarsRef} className="pillars-grid reveal stagger">
          {pillars.map(({ icon, title, body }) => (
            <div key={title} className="pillar">
              <div className="pillar-icon">{icon}</div>
              <p className="pillar-title">{title}</p>
              <p className="pillar-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
