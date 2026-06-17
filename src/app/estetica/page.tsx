import Navbar               from '@/components/estetica/Navbar'
import Hero                 from '@/components/estetica/Hero'
import DorSection           from '@/components/estetica/DorSection'
import DiagnosticoSection   from '@/components/estetica/DiagnosticoSection'
import SolucaoSection       from '@/components/estetica/SolucaoSection'
import ComoFuncionaSection  from '@/components/estetica/ComoFuncionaSection'
import IncluiSection        from '@/components/estetica/IncluiSection'
import CredibilidadeSection from '@/components/estetica/CredibilidadeSection'
import PrecosSection        from '@/components/estetica/PrecosSection'
import ObjecoesSection      from '@/components/estetica/ObjecoesSection'
import CTAFinal             from '@/components/estetica/CTAFinal'
import Footer               from '@/components/estetica/Footer'
import { WHATSAPP_URL }     from '@/lib/constants'

export default function EsteticaPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DorSection />
      <DiagnosticoSection />
      <SolucaoSection />
      <ComoFuncionaSection />
      <IncluiSection />
      <CredibilidadeSection />
      <PrecosSection />
      <ObjecoesSection />
      <CTAFinal />
      <Footer />

      {/* Sticky mobile CTA bar */}
      <div className="sticky-mobile">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--white btn--full"
        >
          Quero meu diagnóstico gratuito →
        </a>
      </div>
    </main>
  )
}
