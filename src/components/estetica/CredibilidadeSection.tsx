'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

function TargetIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  )
}
function DataIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  )
}
function LockIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  )
}

const pillars = [
  {
    Icon: TargetIcon,
    title: 'Especialização em nicho',
    body: 'Keywords, anúncios e landing pages construídos especificamente para procedimentos estéticos — sem template genérico.',
  },
  {
    Icon: DataIcon,
    title: 'O diagnóstico como prova',
    body: 'Antes de assinar qualquer coisa, você vê com dados reais quantas pacientes estão buscando seus procedimentos na sua cidade agora.',
  },
  {
    Icon: LockIcon,
    title: 'Transparência total',
    body: 'Acesso direto à conta Google Ads. Relatório mensal legível. Verba direto no Google. Sem caixa preta.',
  },
]

export default function CredibilidadeSection() {
  const titleRef   = useScrollReveal<HTMLHeadingElement>()
  const bodyRef    = useScrollReveal<HTMLParagraphElement>()
  const pillarsRef = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-[#1A2F4B] py-20 md:py-28" aria-label="Credibilidade ByTech3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal text-3xl md:text-4xl font-display font-bold leading-tight text-white mb-6"
        >
          Construído exclusivamente para clínicas de estética
        </h2>

        <p
          ref={bodyRef}
          className="reveal text-base md:text-lg font-body leading-relaxed text-white/80 mb-14 max-w-2xl"
        >
          Não atendemos todo tipo de negócio. Especializamos em Google Ads
          para clínicas de estética e harmonização facial porque é aqui que
          o mecanismo de busca ativa funciona melhor — e onde a maioria das
          agências generalistas ainda não chegou.
        </p>

        <div
          ref={pillarsRef}
          className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {pillars.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="text-[#D4AF37] text-3xl">
                <Icon />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">
                {title}
              </h3>
              <p className="font-body text-white/75 leading-relaxed text-sm">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
