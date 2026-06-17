'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37', flexShrink: 0 }}>
      <path d={d} />
      {d2 && <path d={d2} />}
    </svg>
  )
}

const items = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    title: 'Pesquisa de keywords por procedimento',
    body: 'Seus anúncios aparecem para quem busca exatamente o que você oferece',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    title: 'Criação e gestão dos anúncios',
    body: 'Você não precisa entender de Google Ads para ter resultado nele',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-6"/></svg>,
    title: 'Landing page otimizada para conversão',
    body: 'O clique não vai para seu site genérico — vai para uma página feita para converter',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Palavras-chave negativas calibradas',
    body: 'Você não paga por cliques de quem não vai agendar',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Rastreamento de cada contato gerado',
    body: 'Você sabe de onde veio cada lead — sem achismo',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: 'Relatório mensal em linguagem humana',
    body: 'Sem dashboard técnico. Leads, custo, procedimentos mais buscados, próximos passos.',
  },
]

export default function IncluiSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const gridRef  = useScrollReveal<HTMLDivElement>()
  const boxRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section section--off" aria-label="O que está incluso">
      <div className="container">
        <span className="gold-line" />

        <h2 ref={titleRef} className="h2 reveal">Tudo que está incluso</h2>

        <div ref={gridRef} className="cards-grid reveal stagger">
          {items.map(({ icon, title, body }) => (
            <div key={title} className="card">
              <div className="card-icon">{icon}</div>
              <div>
                <p className="card-title">{title}</p>
                <p className="card-body">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={boxRef} className="highlight-box reveal" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>✦</span>
          <p style={{ margin: 0 }}>
            <strong style={{ color: 'var(--navy)' }}>Verba de mídia paga diretamente no Google</strong>{' '}
            — com total transparência. A ByTech3 não toca nesse dinheiro.
          </p>
        </div>
      </div>
    </section>
  )
}
