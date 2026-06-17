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

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-4 text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A2F4B]"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-[#1A2F4B] text-lg leading-snug">
          {q}
        </span>
        <span
          className="text-xl font-bold shrink-0 transition-transform duration-300 leading-none"
          style={{
            color: '#D4AF37',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px' }}
        aria-hidden={!open}
      >
        <p className="text-base font-body leading-relaxed text-[#4F4F4F] mt-3">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function ObjecoesSection() {
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const listRef  = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-[#F8F7F4] py-20 md:py-28" aria-label="Perguntas frequentes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal text-3xl md:text-4xl font-display font-bold leading-tight text-[#0D1B2E] mb-10"
        >
          Perguntas frequentes
        </h2>

        <div ref={listRef} className="reveal max-w-3xl">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
