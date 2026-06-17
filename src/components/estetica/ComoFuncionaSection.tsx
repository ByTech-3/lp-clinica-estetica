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
  const titleRef = useScrollReveal<HTMLHeadingElement>()
  const stepsRef = useScrollReveal<HTMLDivElement>()
  const ctaRef   = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-white py-20 md:py-28" aria-label="Como funciona">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="gold-line" />

        <h2
          ref={titleRef}
          className="reveal text-3xl md:text-4xl font-display font-bold leading-tight text-[#0D1B2E] mb-14"
        >
          Como funciona
        </h2>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="reveal stagger grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-14"
        >
          {steps.map((s, i) => (
            <div key={s.num} className="flex flex-col">
              {/* Número + linha conectora */}
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="text-5xl font-display font-extrabold leading-none"
                  style={{ color: '#D4AF37' }}
                >
                  {s.num}
                </span>
                {/* Linha conectora apenas entre os números no desktop */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block flex-1 border-t border-dashed"
                    style={{ borderColor: 'rgba(212,175,55,0.3)' }}
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="text-xl font-display font-bold text-[#1A2F4B] mb-3">
                {s.title}
              </h3>
              <p className="text-base font-body leading-relaxed text-[#4F4F4F]">
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
              font-body font-semibold text-[#1A2F4B]
              border-2 border-[#1A2F4B] px-8 py-3.5 rounded-xl
              transition-all duration-200
              hover:bg-[#1A2F4B] hover:text-white hover:-translate-y-0.5
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A2F4B]
            "
          >
            Quero ver o volume de busca na minha cidade →
          </a>
        </div>
      </div>
    </section>
  )
}
