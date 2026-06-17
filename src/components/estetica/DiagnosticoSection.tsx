'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

function HeartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#8A8A8A' }}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export default function DiagnosticoSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()
  const paraRef  = useScrollReveal<HTMLParagraphElement>()

  return (
    <section className="bg-[#F8F7F4] py-20 md:py-28" aria-label="Instagram vs Google">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal text-3xl md:text-4xl font-display font-bold leading-tight text-[#0D1B2E] mb-3"
        >
          Instagram cria desejo.{' '}
          <span style={{ color: '#1A2F4B' }}>Google captura decisão.</span>
        </h2>
        <p className="text-base md:text-lg font-body leading-relaxed text-[#4F4F4F] mb-12">
          São públicos completamente diferentes — e isso muda tudo.
        </p>

        {/* Cards comparativos */}
        <div
          ref={cardsRef}
          className="reveal stagger grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-12"
        >
          {/* Instagram */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
            <div className="flex items-center gap-3">
              <HeartIcon />
              <span className="font-body font-semibold text-[#8A8A8A] text-sm uppercase tracking-wider">
                Meta / Instagram
              </span>
            </div>
            <p className="font-display font-bold text-[#0D1B2E] text-lg">
              Quem vê seu anúncio no Instagram
            </p>
            <p className="font-body text-[#4F4F4F] text-sm leading-relaxed italic">
              "Talvez se interesse. Talvez salve o post. Talvez pense em fazer algum dia."
            </p>
            <span className="self-start font-body text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-500">
              Desejo em formação
            </span>
          </div>

          {/* Google */}
          <div
            className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1"
            style={{
              border: '2px solid rgba(212,175,55,0.4)',
              boxShadow: '0 4px 24px rgba(212,175,55,0.25)',
            }}
          >
            <div className="flex items-center gap-3">
              <SearchIcon />
              <span className="font-body font-semibold text-[#B8941E] text-sm uppercase tracking-wider">
                Google
              </span>
            </div>
            <p className="font-display font-bold text-[#0D1B2E] text-lg">
              Quem busca no Google
            </p>
            <p className="font-body text-[#4F4F4F] text-sm leading-relaxed italic">
              "Ela já decidiu que quer fazer o procedimento. Está só escolhendo onde."
            </p>
            <span
              className="self-start font-body text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: 'rgba(212,175,55,0.15)', color: '#B8941E' }}
            >
              Decisão tomada ✓
            </span>
          </div>
        </div>

        {/* Dado */}
        <p
          ref={paraRef}
          className="reveal text-base md:text-lg font-body leading-relaxed text-[#4F4F4F] max-w-3xl"
        >
          Em cidades médias do Brasil, termos como{' '}
          <strong className="font-semibold text-[#0D1B2E]">"botox"</strong>,{' '}
          <strong className="font-semibold text-[#0D1B2E]">"harmonização facial"</strong>{' '}
          e{' '}
          <strong className="font-semibold text-[#0D1B2E]">"preenchimento labial"</strong>{' '}
          são buscados centenas de vezes por mês.
          Esse volume existe — e só converte para clínicas que aparecem na hora certa.
        </p>
      </div>
    </section>
  )
}
