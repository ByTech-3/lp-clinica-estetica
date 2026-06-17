import { WHATSAPP_URL } from '@/lib/constants'

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-[#0D1B2E] flex items-center pt-24 pb-16"
      aria-label="Seção principal"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Copy */}
        <div>
          <p className="text-xs md:text-sm font-body font-semibold tracking-widest uppercase text-[#D4AF37] mb-6">
            Google Ads para Clínicas de Estética
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-white mb-6">
            Toda semana, dezenas de pessoas na sua cidade buscam
            no Google o procedimento que você oferece.
            Quantas estão encontrando{' '}
            <span style={{ color: '#D4AF37' }}>a sua clínica</span>?
          </h1>

          <p className="text-base md:text-lg font-body leading-relaxed text-white/80 mb-8">
            Enquanto a maioria das clínicas depende de indicação e Instagram,
            o Google já está cheio de pacientes com decisão tomada — procurando
            ativamente onde agendar. A ByTech3 coloca a sua clínica na frente delas.
          </p>

          <div className="flex flex-col items-start gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto text-center
                bg-white text-[#0D1B2E] font-body font-semibold
                px-8 py-4 rounded-lg text-base
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-white
              "
            >
              Quero meu diagnóstico gratuito →
            </a>
            <span className="font-body text-white/60 text-sm">
              Sem compromisso · Resposta em até 2h
            </span>
          </div>
        </div>

        {/* Google search card mock — desktop only */}
        <div className="hidden lg:block" aria-hidden="true">
          <div
            className="rounded-2xl p-6 select-none"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(212,175,55,0.2)',
            }}
          >
            {/* Barra de busca */}
            <div
              className="rounded-lg px-4 py-3 flex items-center justify-between mb-5"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-2 text-white/60 text-sm font-body">
                <SearchIcon />
                <span>harmonização facial campinas</span>
              </div>
              <span className="text-white/30 text-base leading-none">×</span>
            </div>

            {/* Separação */}
            <div className="border-t mb-5" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

            {/* Resultado de anúncio */}
            <div className="space-y-2">
              <span
                className="inline-block font-body text-[11px] font-medium px-2 py-0.5 rounded"
                style={{ border: '1px solid rgba(212,175,55,0.45)', color: 'rgba(212,175,55,0.9)' }}
              >
                Anúncio
              </span>
              <p className="font-body font-semibold text-white text-sm leading-snug">
                Sua Clínica | Harmonização Facial em Campinas
              </p>
              <p className="font-body text-white/55 text-xs leading-relaxed">
                Agende Hoje — Procedimentos Premium | Ver Horários
              </p>
              <p className="font-body text-xs" style={{ color: 'rgba(212,175,55,0.55)' }}>
                bytech3.com.br/sua-clinica
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
