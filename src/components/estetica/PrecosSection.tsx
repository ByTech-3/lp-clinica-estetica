'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WHATSAPP_URL } from '@/lib/constants'

const phases = [
  {
    mes: 'Mês 1',
    preco: 'R$750/mês',
    label: 'Setup completo',
    desc: 'Pesquisa de keywords, estrutura da conta, criação da campanha e landing page.',
    featured: false,
  },
  {
    mes: 'Mês 2',
    preco: 'R$950/mês',
    label: 'Otimização',
    desc: 'Otimização com dados reais — resultados começando a aparecer.',
    featured: false,
  },
  {
    mes: 'Mês 3',
    preco: 'R$1.100/mês',
    label: 'Escala',
    desc: 'Máquina calibrada e funcionando com consistência.',
    featured: false,
  },
  {
    mes: 'Mês 4+',
    preco: 'R$1.400/mês',
    label: 'Preço integral',
    desc: 'Sistema gerando resultado consistente — preço acompanha o valor entregue.',
    featured: true,
  },
]

export default function PrecosSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()
  const boxRef   = useScrollReveal<HTMLDivElement>()
  const ctaRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section section--white" aria-label="Investimento por fase">
      <div className="container">
        <span className="gold-line" />

        <h2 ref={titleRef} className="h2 reveal">Investimento por fase</h2>
        <p className="lead">O preço acompanha o valor entregue em cada momento.</p>

        <div ref={cardsRef} className="price-grid reveal stagger">
          {phases.map((p) => (
            <div key={p.mes} className={`price-card${p.featured ? ' price-card--featured' : ''}`}>
              {p.featured && <span className="price-badge">Preço integral</span>}
              <p className="price-label">{p.mes}</p>
              <p className="price-value">{p.preco}</p>
              <p className="price-name">{p.label}</p>
              <p className="price-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="price-explainer">
          Começamos por menos porque o mês 1 é o mês de maior trabalho interno
          e menor retorno visível — é o mês de setup. À medida que a campanha
          matura e os resultados aparecem, o preço acompanha o valor entregue.
        </p>

        <div ref={boxRef} className="highlight-box reveal">
          <p>
            <strong style={{ color: 'var(--navy)' }}>+ Verba de mídia:</strong>{' '}
            R$1.000–1.500/mês diretamente no Google (não passa pela ByTech3)
            <br />
            <span style={{ color: '#8A8A8A' }}>
              Total no mês 4: ~R$2.600/mês para uma clínica que fatura R$40–70k. Menos de 6% em marketing.
            </span>
          </p>
        </div>

        <div ref={ctaRef} className="prices-cta reveal">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            Começar com o diagnóstico gratuito →
          </a>
        </div>
      </div>
    </section>
  )
}
