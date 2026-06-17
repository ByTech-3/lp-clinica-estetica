'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WHATSAPP_URL } from '@/lib/constants'

const phases = [
  {
    mes: 'Mês 1',
    preco: 'R$750/mês',
    label: 'Setup completo',
    desc: 'Pesquisa de keywords, estrutura da conta, criação da campanha e landing page.',
    highlight: false,
  },
  {
    mes: 'Mês 2',
    preco: 'R$950/mês',
    label: 'Otimização',
    desc: 'Otimização com dados reais — resultados começando a aparecer.',
    highlight: false,
  },
  {
    mes: 'Mês 3',
    preco: 'R$1.100/mês',
    label: 'Escala',
    desc: 'Máquina calibrada e funcionando com consistência.',
    highlight: false,
  },
  {
    mes: 'Mês 4+',
    preco: 'R$1.400/mês',
    label: 'Preço integral',
    desc: 'Sistema gerando resultado consistente — preço acompanha o valor entregue.',
    highlight: true,
  },
]

export default function PrecosSection() {
  const titleRef = useScrollReveal()
  const cardsRef = useScrollReveal()
  const boxRef   = useScrollReveal()
  const ctaRef   = useScrollReveal()

  return (
    <section className="bg-white py-20 px-4 sm:px-6" aria-label="Investimento por fase">
      <div className="max-w-5xl mx-auto">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal font-display font-bold text-navy-dark mb-3"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          Investimento por fase
        </h2>
        <p className="font-body text-slate mb-12" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)' }}>
          O preço acompanha o valor entregue em cada momento.
        </p>

        {/* Cards de fase */}
        <div
          ref={cardsRef}
          className="reveal stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
        >
          {phases.map((p) => (
            <div
              key={p.mes}
              className="
                rounded-2xl p-5 flex flex-col gap-3
                transition-all duration-300 hover:-translate-y-1
              "
              style={
                p.highlight
                  ? {
                      border: '2px solid #D4AF37',
                      background: '#0D1B2E',
                    }
                  : {
                      border: '1.5px solid #EBEBEB',
                      background: '#FAFAFA',
                    }
              }
            >
              <span
                className="font-body text-xs font-semibold uppercase tracking-wider"
                style={{ color: p.highlight ? '#D4AF37' : '#8A8A8A' }}
              >
                {p.mes}
              </span>
              <p
                className="font-display font-extrabold"
                style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                  color: p.highlight ? '#FFFFFF' : '#0D1B2E',
                }}
              >
                {p.preco}
              </p>
              <p
                className="font-body font-semibold text-sm"
                style={{ color: p.highlight ? '#D4AF37' : '#1A2F4B' }}
              >
                {p.label}
              </p>
              <p
                className="font-body text-xs leading-relaxed"
                style={{ color: p.highlight ? 'rgba(255,255,255,0.7)' : '#4F4F4F' }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Parágrafo explicativo */}
        <p
          className="font-body text-slate text-center mx-auto mb-8"
          style={{
            fontSize: 'clamp(0.9375rem, 2.5vw, 1rem)',
            lineHeight: 1.65,
            maxWidth: '600px',
          }}
        >
          Começamos por menos porque o mês 1 é o mês de maior trabalho interno
          e menor retorno visível — é o mês de setup. À medida que a campanha
          matura e os resultados aparecem, o preço acompanha o valor entregue.
        </p>

        {/* Box de verba */}
        <div
          ref={boxRef}
          className="reveal rounded-xl px-6 py-5 mb-10"
          style={{
            background: '#F8F7F4',
            borderLeft: '4px solid #D4AF37',
          }}
        >
          <p className="font-body text-slate text-sm leading-relaxed">
            <span className="font-semibold text-navy-dark">+ Verba de mídia:</span>{' '}
            R$1.000–1.500/mês diretamente no Google (não passa pela ByTech3)
            <br />
            <span className="text-corporate">
              Total no mês 4: ~R$2.600/mês para uma clínica que fatura R$40–70k. Menos de 6% em marketing.
            </span>
          </p>
        </div>

        {/* CTA intermediário */}
        <div ref={ctaRef} className="reveal flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-body font-semibold text-navy-dark
              border-2 border-navy px-8 py-3.5 rounded-xl
              transition-all duration-200
              hover:bg-navy hover:text-white hover:-translate-y-0.5 hover:shadow-card
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy
            "
          >
            Começar com o diagnóstico gratuito →
          </a>
        </div>
      </div>
    </section>
  )
}
