'use client'

import Navbar               from '@/components/estetica/Navbar'
import Hero                 from '@/components/estetica/Hero'
import DorSection           from '@/components/estetica/DorSection'
import DiagnosticoSection   from '@/components/estetica/DiagnosticoSection'
import SolucaoSection       from '@/components/estetica/SolucaoSection'
import ComoFuncionaSection  from '@/components/estetica/ComoFuncionaSection'
import IncluiSection        from '@/components/estetica/IncluiSection'
import CredibilidadeSection from '@/components/estetica/CredibilidadeSection'
import ParaQuemESection     from '@/components/estetica/ParaQuemESection'
import PrecosSection        from '@/components/estetica/PrecosSection'
import ObjecoesSection      from '@/components/estetica/ObjecoesSection'
import CTAFinal             from '@/components/estetica/CTAFinal'
import Footer               from '@/components/estetica/Footer'
import CTAButton            from '@/components/ui/CTAButton'
import { useScrollTracking } from '@/hooks/useScrollTracking'

export default function EsteticaPage() {
  useScrollTracking()

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
      <ParaQuemESection />
      <PrecosSection />
      <ObjecoesSection />
      <CTAFinal />
      <Footer />

      {/* Sticky mobile CTA bar */}
      <div className="sticky-mobile">
        <CTAButton
          location="sticky-mobile"
          className="btn btn--white btn--full"
        />
      </div>
    </main>
  )
}
