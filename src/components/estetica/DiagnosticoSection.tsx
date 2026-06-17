'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

function HeartIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-corporate">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-gold">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export default function DiagnosticoSection() {
  const titleRef = useScrollReveal()
  const cardsRef = useScrollReveal()
  const paraRef  = useScrollReveal()

  return (
    <section className="bg-offwhite py-20 px-4 sm:px-6" aria-label="Instagram vs Google">
      <div className="max-w-4xl mx-auto">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal font-display font-bold text-navy-dark mb-3"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          Instagram cria desejo.{' '}
          <span className="text-navy">Google captura decisão.</span>
        </h2>
        <p
          className="font-body text-slate mb-12"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
        >
          São públicos completamente diferentes — e isso muda tudo.
        </p>

        {/* Cards comparativos */}
        <div
          ref={cardsRef}
          className="reveal stagger grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
        >
          {/* Instagram */}
          <div
            className="bg-white rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            style={{ border: '1.5px solid #E5E5E5' }}
          >
            <div className="flex items-center gap-3">
              <HeartIcon />
              <span className="font-body font-semibold text-slate text-sm uppercase tracking-wider">
                Meta / Instagram
              </span>
            </div>
            <p className="font-display font-bold text-navy-dark" style={{ fontSize: '1.1rem' }}>
              Quem vê seu anúncio no Instagram
            </p>
            <p className="font-body text-slate text-sm leading-relaxed italic">
              "Talvez se interesse. Talvez salve o post. Talvez pense em fazer algum dia."
            </p>
            <span
              className="self-start font-body text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: '#F0F0F0', color: '#4F4F4F' }}
            >
              Desejo em formação
            </span>
          </div>

          {/* Google */}
          <div
            className="bg-white rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold"
            style={{ border: '1.5px solid rgba(212,175,55,0.35)' }}
          >
            <div className="flex items-center gap-3">
              <SearchIcon />
              <span className="font-body font-semibold text-gold-dark text-sm uppercase tracking-wider">
                Google
              </span>
            </div>
            <p className="font-display font-bold text-navy-dark" style={{ fontSize: '1.1rem' }}>
              Quem busca no Google
            </p>
            <p className="font-body text-slate text-sm leading-relaxed italic">
              "Ela já decidiu que quer fazer o procedimento. Está só escolhendo onde."
            </p>
            <span
              className="self-start font-body text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: 'rgba(212,175,55,0.15)',
                color: '#B8941E',
              }}
            >
              Decisão tomada ✓
            </span>
          </div>
        </div>

        {/* Dado */}
        <p
          ref={paraRef}
          className="reveal font-body text-slate text-center mx-auto"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: 1.65, maxWidth: '600px' }}
        >
          Em cidades médias do Brasil, termos como{' '}
          <strong className="font-semibold text-navy-dark">"botox"</strong>,{' '}
          <strong className="font-semibold text-navy-dark">"harmonização facial"</strong>{' '}
          e{' '}
          <strong className="font-semibold text-navy-dark">"preenchimento labial"</strong>{' '}
          são buscados centenas de vezes por mês.
          Esse volume existe — e só converte para clínicas que aparecem na hora certa.
        </p>
      </div>
    </section>
  )
}
