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
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()
  const boxRef   = useScrollReveal<HTMLDivElement>()
  const ctaRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-white py-20 md:py-28" aria-label="Investimento por fase">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal text-3xl md:text-4xl font-display font-bold leading-tight text-[#0D1B2E] mb-3"
        >
          Investimento por fase
        </h2>
        <p className="text-base md:text-lg font-body leading-relaxed text-[#4F4F4F] mb-12">
          O preço acompanha o valor entregue em cada momento.
        </p>

        <div
          ref={cardsRef}
          className="reveal stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {phases.map((p) => (
            <div
              key={p.mes}
              className="rounded-2xl p-6 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 relative"
              style={
                p.highlight
                  ? { border: '2px solid #D4AF37', background: '#1A2F4B' }
                  : { border: '1px solid #E5E5E5', background: '#FFFFFF' }
              }
            >
              {p.highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-body font-semibold px-3 py-1 rounded-full"
                  style={{ background: '#D4AF37', color: '#0D1B2E' }}
                >
                  Preço integral
                </span>
              )}
              <span
                className="text-xs font-body font-semibold uppercase tracking-wider mb-1"
                style={{ color: p.highlight ? '#D4AF37' : '#8A8A8A' }}
              >
                {p.mes}
              </span>
              <p
                className="text-3xl font-display font-extrabold"
                style={{ color: p.highlight ? '#FFFFFF' : '#1A2F4B' }}
              >
                {p.preco}
              </p>
              <p
                className="text-sm font-body font-semibold mt-2 mb-1"
                style={{ color: p.highlight ? '#D4AF37' : '#1A2F4B' }}
              >
                {p.label}
              </p>
              <p
                className="text-sm font-body leading-relaxed"
                style={{ color: p.highlight ? 'rgba(255,255,255,0.7)' : '#4F4F4F' }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Parágrafo explicativo */}
        <p className="text-sm font-body leading-relaxed text-[#4F4F4F] text-center mx-auto mt-8 max-w-xl">
          Começamos por menos porque o mês 1 é o mês de maior trabalho interno
          e menor retorno visível — é o mês de setup. À medida que a campanha
          matura e os resultados aparecem, o preço acompanha o valor entregue.
        </p>

        {/* Box de verba */}
        <div
          ref={boxRef}
          className="reveal mt-8 rounded-r-xl p-5"
          style={{
            background: '#F8F7F4',
            borderLeft: '4px solid #D4AF37',
          }}
        >
          <p className="text-sm font-body leading-relaxed text-[#4F4F4F]">
            <span className="font-semibold text-[#1A2F4B]">+ Verba de mídia:</span>{' '}
            R$1.000–1.500/mês diretamente no Google (não passa pela ByTech3)
            <br />
            <span className="text-[#8A8A8A]">
              Total no mês 4: ~R$2.600/mês para uma clínica que fatura R$40–70k. Menos de 6% em marketing.
            </span>
          </p>
        </div>

        {/* CTA intermediário */}
        <div ref={ctaRef} className="reveal flex justify-center mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-body font-semibold text-[#1A2F4B]
              border-2 border-[#1A2F4B] px-8 py-3.5 rounded-xl
              transition-all duration-200
              hover:bg-[#1A2F4B] hover:text-white hover:-translate-y-0.5
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A2F4B]
            "
          >
            Começar com o diagnóstico gratuito →
          </a>
        </div>
      </div>
    </section>
  )
}
