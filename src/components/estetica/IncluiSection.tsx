'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

function SearchKwIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  )
}
function AdsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  )
}
function LandingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
      <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-6"/>
    </svg>
  )
}
function NegIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
function TrackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}
function ReportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  )
}

const items = [
  {
    Icon: SearchKwIcon,
    title: 'Pesquisa de keywords por procedimento',
    body: 'Seus anúncios aparecem para quem busca exatamente o que você oferece',
  },
  {
    Icon: AdsIcon,
    title: 'Criação e gestão dos anúncios',
    body: 'Você não precisa entender de Google Ads para ter resultado nele',
  },
  {
    Icon: LandingIcon,
    title: 'Landing page otimizada para conversão',
    body: 'O clique não vai para seu site genérico — vai para uma página feita para converter',
  },
  {
    Icon: NegIcon,
    title: 'Palavras-chave negativas calibradas',
    body: 'Você não paga por cliques de quem não vai agendar',
  },
  {
    Icon: TrackIcon,
    title: 'Rastreamento de cada contato gerado',
    body: 'Você sabe de onde veio cada lead — sem achismo',
  },
  {
    Icon: ReportIcon,
    title: 'Relatório mensal em linguagem humana',
    body: 'Sem dashboard técnico. Leads, custo, procedimentos mais buscados, próximos passos.',
  },
]

export default function IncluiSection() {
  const titleRef = useScrollReveal()
  const gridRef  = useScrollReveal()
  const boxRef   = useScrollReveal()

  return (
    <section className="bg-offwhite py-20 px-4 sm:px-6" aria-label="O que está incluso">
      <div className="max-w-5xl mx-auto">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal font-display font-bold text-navy-dark mb-12"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          Tudo que está incluso
        </h2>

        <div
          ref={gridRef}
          className="reveal stagger grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
        >
          {items.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="
                bg-white rounded-2xl p-5 flex gap-4 items-start
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-card-hover
              "
              style={{ border: '1.5px solid #EBEBEB' }}
            >
              <div className="shrink-0 mt-0.5">
                <Icon />
              </div>
              <div>
                <p className="font-body font-semibold text-navy-dark text-sm mb-1">
                  {title}
                </p>
                <p className="font-body text-slate text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Card destaque — verba transparente */}
        <div
          ref={boxRef}
          className="reveal rounded-2xl px-6 py-5 flex items-start gap-3"
          style={{ border: '1.5px solid rgba(212,175,55,0.5)', background: 'rgba(212,175,55,0.05)' }}
        >
          <span className="text-gold text-xl leading-none mt-0.5" aria-hidden="true">✦</span>
          <p className="font-body text-navy-dark text-sm leading-relaxed">
            <span className="font-semibold">Verba de mídia paga diretamente no Google</span>{' '}
            — com total transparência. A ByTech3 não toca nesse dinheiro.
          </p>
        </div>
      </div>
    </section>
  )
}
