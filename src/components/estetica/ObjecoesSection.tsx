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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-b"
      style={{ borderColor: '#E5E5E5' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between gap-4
          py-5 text-left
          font-body font-semibold text-navy-dark
          hover:text-navy transition-colors duration-200
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy
        "
        aria-expanded={open}
        style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1.0625rem)' }}
      >
        <span>{q}</span>
        <ChevronIcon open={open} />
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px' }}
        aria-hidden={!open}
      >
        <p
          className="font-body text-slate pb-5"
          style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1rem)', lineHeight: 1.7 }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

export default function ObjecoesSection() {
  const titleRef = useScrollReveal()
  const listRef  = useScrollReveal()

  return (
    <section className="bg-offwhite py-20 px-4 sm:px-6" aria-label="Perguntas frequentes">
      <div className="max-w-2xl mx-auto">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal font-display font-bold text-navy-dark mb-10"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          Perguntas frequentes
        </h2>

        <div ref={listRef} className="reveal">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
