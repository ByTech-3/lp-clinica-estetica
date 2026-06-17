import { WHATSAPP_URL } from '@/lib/constants'

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'rgba(255,255,255,0.5)' }}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" aria-label="Seção principal">
      <div className="container">
        <div className="hero-grid">

          {/* Copy */}
          <div>
            <span className="eyebrow">Google Ads para Clínicas de Estética</span>

            <h1 className="h1">
              Toda semana, dezenas de pessoas na sua cidade buscam no Google o procedimento
              que você oferece. Quantas estão encontrando{' '}
              <span style={{ color: '#D4AF37' }}>a sua clínica</span>?
            </h1>

            <p className="lead lead--white">
              Enquanto a maioria das clínicas depende de indicação e Instagram,
              o Google já está cheio de pacientes com decisão tomada — procurando
              ativamente onde agendar. A ByTech3 coloca a sua clínica na frente delas.
            </p>

            <div className="hero-cta">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--white btn--full"
              >
                Quero meu diagnóstico gratuito →
              </a>
              <span className="btn-micro">Sem compromisso · Resposta em até 2h</span>
            </div>
          </div>

          {/* Google search mock — desktop only */}
          <div className="hero-mockup" aria-hidden="true">
            <div className="hero-mock-card">
              <div className="hero-mock-search">
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <SearchIcon />
                  harmonização facial campinas
                </span>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>×</span>
              </div>
              <hr className="hero-mock-divider" />
              <span className="hero-mock-badge">Anúncio</span>
              <p className="hero-mock-title">Sua Clínica | Harmonização Facial em Campinas</p>
              <p className="hero-mock-sub">Agende Hoje — Procedimentos Premium | Ver Horários</p>
              <p className="hero-mock-url">bytech3.com.br/sua-clinica</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
