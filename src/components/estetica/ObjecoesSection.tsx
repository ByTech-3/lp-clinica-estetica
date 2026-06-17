'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const faqs = [
  {
    q: '"Já tentei tráfego pago e não funcionou."',
    a: 'Na maioria dos casos, o que não funcionou foi Meta Ads — ou Google sem landing page específica e sem estrutura de keywords por procedimento. São erros de execução, não de canal. O Google Ads correto para clínica de estética funciona de forma completamente diferente do que provavelmente foi testado.',
  },
  {
    q: '"E se eu investir e não ver resultado?"',
    a: 'Por isso existe o diagnóstico gratuito: você vê o potencial do mercado antes de qualquer compromisso. Se depois do primeiro mês você sentir que não faz sentido continuar, encerramos sem multa — e a conta Google Ads configurada fica com você.',
  },
  {
    q: '"Não tenho tempo para acompanhar uma agência."',
    a: 'O modelo é feito para quem não tem tempo. Você aprova a campanha inicial e participa de uma reunião de 30 minutos por mês. O resto é com a ByTech3.',
  },
  {
    q: '"Meu público não usa Google, vem do Instagram."',
    a: 'Seu público descobre você no Instagram. Mas quando ela decide que vai fazer o procedimento e começa a pesquisar onde — ela vai para o Google. São momentos diferentes da mesma jornada. A ByTech3 captura o segundo momento: o de maior intenção e maior probabilidade de agendamento.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={`faq-toggle${open ? ' faq-toggle--open' : ''}`} aria-hidden="true">+</span>
      </button>
      <div className={`faq-answer${open ? ' faq-answer--open' : ''}`} aria-hidden={!open}>
        <p className="faq-answer-inner">{a}</p>
      </div>
    </div>
  )
}

export default function ObjecoesSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const listRef  = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section section--off" aria-label="Perguntas frequentes">
      <div className="container">
        <span className="gold-line" />

        <h2 ref={titleRef} className="h2 reveal">Perguntas frequentes</h2>

        <div ref={listRef} className="faq-list reveal" style={{ maxWidth: '720px' }}>
          {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}
