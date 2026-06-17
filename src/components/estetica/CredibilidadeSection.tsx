'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

function TargetIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  )
}
function DataIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  )
}
function LockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
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
  const titleRef  = useScrollReveal()
  const bodyRef   = useScrollReveal()
  const pillarsRef = useScrollReveal()

  return (
    <section className="bg-navy py-20 px-4 sm:px-6" aria-label="Credibilidade ByTech3">
      <div className="max-w-5xl mx-auto">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal font-display font-bold text-white mb-6"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          Construído exclusivamente para clínicas de estética
        </h2>

        <p
          ref={bodyRef}
          className="reveal font-body text-white/80 mb-14"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: 1.65, maxWidth: '640px' }}
        >
          Não atendemos todo tipo de negócio. Especializamos em Google Ads
          para clínicas de estética e harmonização facial porque é aqui que
          o mecanismo de busca ativa funciona melhor — e onde a maioria das
          agências generalistas ainda não chegou.
        </p>

        <div
          ref={pillarsRef}
          className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="
                rounded-2xl p-6 flex flex-col gap-4
                transition-all duration-300
                hover:-translate-y-1
              "
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Icon />
              <h3
                className="font-display font-bold text-white"
                style={{ fontSize: 'clamp(1.0625rem, 2.5vw, 1.25rem)' }}
              >
                {title}
              </h3>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
