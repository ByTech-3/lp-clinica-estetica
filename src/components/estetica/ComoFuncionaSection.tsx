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
    <section className="section section--white" aria-label="Como funciona">
      <div className="container">
        <span className="gold-line" />

        <h2 ref={titleRef} className="h2 reveal">Como funciona</h2>

        <div ref={stepsRef} className="steps-grid reveal stagger">
          {steps.map((s) => (
            <div key={s.num}>
              <p className="step-number">{s.num}</p>
              <p className="step-title">{s.title}</p>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="steps-cta reveal">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            Quero ver o volume de busca na minha cidade →
          </a>
        </div>
      </div>
    </section>
  )
}
