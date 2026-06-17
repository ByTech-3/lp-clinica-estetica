'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

function SearchKwIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  )
}
function AdsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  )
}
function LandingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-6"/>
    </svg>
  )
}
function NegIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
function TrackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}
function ReportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  )
}

const items = [
  { Icon: SearchKwIcon, title: 'Pesquisa de keywords por procedimento',   body: 'Seus anúncios aparecem para quem busca exatamente o que você oferece' },
  { Icon: AdsIcon,      title: 'Criação e gestão dos anúncios',           body: 'Você não precisa entender de Google Ads para ter resultado nele' },
  { Icon: LandingIcon,  title: 'Landing page otimizada para conversão',   body: 'O clique não vai para seu site genérico — vai para uma página feita para converter' },
  { Icon: NegIcon,      title: 'Palavras-chave negativas calibradas',     body: 'Você não paga por cliques de quem não vai agendar' },
  { Icon: TrackIcon,    title: 'Rastreamento de cada contato gerado',     body: 'Você sabe de onde veio cada lead — sem achismo' },
  { Icon: ReportIcon,   title: 'Relatório mensal em linguagem humana',    body: 'Sem dashboard técnico. Leads, custo, procedimentos mais buscados, próximos passos.' },
]

export default function IncluiSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const gridRef  = useScrollReveal<HTMLDivElement>()
  const boxRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-[#F8F7F4] py-20 md:py-28" aria-label="O que está incluso">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal text-3xl md:text-4xl font-display font-bold leading-tight text-[#0D1B2E] mb-12"
        >
          Tudo que está incluso
        </h2>

        <div
          ref={gridRef}
          className="reveal stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
        >
          {items.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 border border-gray-100 flex gap-4 items-start transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.13)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)')}
            >
              <div className="shrink-0 mt-0.5">
                <Icon />
              </div>
              <div>
                <p className="font-display font-bold text-[#1A2F4B] text-sm mb-2">{title}</p>
                <p className="font-body text-[#4F4F4F] text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Card destaque — verba transparente */}
        <div
          ref={boxRef}
          className="reveal mt-8 rounded-r-xl p-5 flex items-center gap-3"
          style={{
            borderLeft: '4px solid #D4AF37',
            background: '#F8F7F4',
            border: '1px solid rgba(212,175,55,0.25)',
            borderLeftWidth: '4px',
            borderLeftColor: '#D4AF37',
          }}
        >
          <span className="text-[#D4AF37] text-xl leading-none shrink-0" aria-hidden="true">✦</span>
          <p className="font-body text-[#4F4F4F] text-sm leading-relaxed">
            <span className="font-semibold text-[#1A2F4B]">Verba de mídia paga diretamente no Google</span>{' '}
            — com total transparência. A ByTech3 não toca nesse dinheiro.
          </p>
        </div>
      </div>
    </section>
  )
}
