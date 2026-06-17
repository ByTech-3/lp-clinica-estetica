'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WHATSAPP_URL } from '@/lib/constants'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico gratuito',
    body: 'Mostramos quantas pessoas buscam seus procedimentos na sua cidade. Você vê o tamanho real da oportunidade antes de qualquer compromisso.',
  },
  {
    num: '02',
    title: 'Estrutura e campanha',
    body: 'Montamos a campanha, criamos os anúncios, configuramos o rastreamento. Você aprova, nós executamos tudo.',
  },
  {
    num: '03',
    title: 'Pacientes chegando',
    body: 'A campanha roda e os contatos chegam. Reunião mensal de 30 minutos para alinhar resultado. Nada mais.',
  },
]

export default function ComoFuncionaSection() {
  const titleRef = useScrollReveal()
  const stepsRef = useScrollReveal()
  const ctaRef   = useScrollReveal()

  return (
    <section className="bg-white py-20 px-4 sm:px-6" aria-label="Como funciona">
      <div className="max-w-5xl mx-auto">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal font-display font-bold text-navy-dark mb-14"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', lineHeight: 1.1 }}
        >
          Como funciona
        </h2>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="reveal stagger relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-14"
        >
          {/* Linha conectora — desktop */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.666%+1rem)] right-[calc(16.666%+1rem)] h-px"
            style={{ background: 'rgba(212,175,55,0.25)' }}
            aria-hidden="true"
          />

          {steps.map((s) => (
            <div key={s.num} className="flex flex-col gap-4">
              <span
                className="font-display font-extrabold"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                  color: '#D4AF37',
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>
              <h3
                className="font-display font-bold text-navy-dark"
                style={{ fontSize: 'clamp(1.125rem, 3vw, 1.375rem)' }}
              >
                {s.title}
              </h3>
              <p
                className="font-body text-slate"
                style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1rem)', lineHeight: 1.65 }}
              >
                {s.body}
              </p>
            </div>
          ))}
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
            Quero ver o volume de busca na minha cidade →
          </a>
        </div>
      </div>
    </section>
  )
}
