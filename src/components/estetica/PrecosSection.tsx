'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WHATSAPP_URL } from '@/lib/constants'

const phases = [
  {
    mes: 'Mês 1',
    preco: 'R$980/mês',
    label: 'Setup completo',
    desc: 'Pesquisa de keywords, estrutura da conta, criação da campanha e landing page.',
    featured: false,
  },
  {
    mes: 'Mês 2',
    preco: 'R$1.100/mês',
    label: 'Otimização',
    desc: 'Otimização com dados reais — resultados começando a aparecer.',
    featured: false,
  },
  {
    mes: 'Mês 3',
    preco: 'R$1.250/mês',
    label: 'Escala',
    desc: 'Máquina calibrada e funcionando com consistência.',
    featured: false,
  },
  {
    mes: 'Mês 4+',
    preco: 'R$1.500/mês',
    label: 'Preço integral',
    desc: 'Sistema gerando resultado consistente — preço acompanha o valor entregue.',
    featured: true,
  },
]

export default function PrecosSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const cardsRef = useScrollReveal<HTMLDivElement>()
  const mathRef  = useScrollReveal<HTMLDivElement>()
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

        <div ref={mathRef} className="highlight-box reveal">
          <h3 className="h3">A matemática do retorno</h3>
          <p>Você não precisa de dezenas de pacientes para a campanha se pagar — só dos primeiros.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0' }}>
            <li style={{ marginBottom: '8px' }}>
              <span style={{ color: 'var(--gold)', marginRight: '8px' }}>→</span>
              1 aplicação de Botox (R$1.200–1.600) já cobre o fee do mês inteiro
            </li>
            <li style={{ marginBottom: '8px' }}>
              <span style={{ color: 'var(--gold)', marginRight: '8px' }}>→</span>
              2 Preenchimentos labiais cobrem o fee + parte da verba de mídia
            </li>
            <li style={{ marginBottom: '8px' }}>
              <span style={{ color: 'var(--gold)', marginRight: '8px' }}>→</span>
              1 Bioestimulador de colágeno (a partir de R$2.500) cobre o investimento total do mês com folga
            </li>
          </ul>
          <p><strong>A partir do segundo paciente fechado no mês, a campanha vira lucro líquido.</strong></p>
        </div>

        <div ref={boxRef} className="highlight-box reveal">
          <p>
            <strong>+ Verba de mídia:</strong> a partir de R$1.000–1.500/mês em cidades
            de porte médio. Em capitais e praças mais competitivas, o ideal começa em
            R$2.000–2.500/mês — fazemos esse diagnóstico gratuitamente antes de
            qualquer compromisso.
          </p>
          <p style={{ marginTop: '12px', fontSize: '0.875rem', opacity: 0.8 }}>
            Exemplo cidade de porte médio (mês 4+): R$1.500 (fee) + R$1.250 (mídia) ≈ R$2.750/mês<br />
            Exemplo capital (mês 4+): R$1.500 (fee) + R$2.250 (mídia) ≈ R$3.750/mês
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
