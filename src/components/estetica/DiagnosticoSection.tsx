'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

function HeartIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#8A8A8A' }}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#D4AF37' }}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export default function DiagnosticoSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()
  const paraRef  = useScrollReveal<HTMLParagraphElement>()

  return (
    <section className="section section--off" aria-label="Instagram vs Google">
      <div className="container">
        <span className="gold-line" />

        <h2 ref={titleRef} className="h2 reveal">
          Instagram cria desejo.{' '}
          <span style={{ color: 'var(--navy)' }}>Google captura decisão.</span>
        </h2>
        <p className="lead" style={{ marginBottom: 0 }}>
          São públicos completamente diferentes — e isso muda tudo.
        </p>

        <div ref={cardsRef} className="compare-grid reveal stagger">
          {/* Instagram */}
          <div className="compare-card">
            <div className="compare-card-header">
              <HeartIcon />
              <span className="compare-card-channel">Meta / Instagram</span>
            </div>
            <p className="compare-card-title">Quem vê seu anúncio no Instagram</p>
            <p className="compare-card-quote">
              "Talvez se interesse. Talvez salve o post. Talvez pense em fazer algum dia."
            </p>
            <span className="compare-tag compare-tag--gray">Desejo em formação</span>
          </div>

          {/* Google */}
          <div className="compare-card compare-card--gold">
            <div className="compare-card-header">
              <SearchIcon />
              <span className="compare-card-channel compare-card-channel--gold">Google</span>
            </div>
            <p className="compare-card-title">Quem busca no Google</p>
            <p className="compare-card-quote">
              "Ela já decidiu que quer fazer o procedimento. Está só escolhendo onde."
            </p>
            <span className="compare-tag compare-tag--gold">Decisão tomada ✓</span>
          </div>
        </div>

        <p ref={paraRef} className="lead reveal" style={{ maxWidth: '680px', marginTop: '16px', marginBottom: 0 }}>
          Em cidades médias do Brasil, termos como{' '}
          <strong style={{ color: 'var(--navy-dk)', fontWeight: 600 }}>"botox"</strong>,{' '}
          <strong style={{ color: 'var(--navy-dk)', fontWeight: 600 }}>"harmonização facial"</strong>{' '}
          e{' '}
          <strong style={{ color: 'var(--navy-dk)', fontWeight: 600 }}>"preenchimento labial"</strong>{' '}
          são buscados centenas de vezes por mês.
          Esse volume existe — e só converte para clínicas que aparecem na hora certa.
        </p>
      </div>
    </section>
  )
}
