'use client'

import Hero from '@/components/sections/Hero'
import QuickInfo from '@/components/sections/QuickInfo'
import PriceHighlight from '@/components/sections/PriceHighlight'
import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import Location from '@/components/sections/Location'
import Region from '@/components/sections/Region'
import OptionalItems from '@/components/sections/OptionalItems'
import FloorPlan from '@/components/sections/FloorPlan'
import Video from '@/components/sections/Video'
import RegionDevelopment from '@/components/sections/RegionDevelopment'
import PropertyHighlights from '@/components/sections/PropertyHighlights'
import Contact from '@/components/sections/Contact'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import { useScrollTracking } from '@/hooks/useScrollTracking'

export default function Home() {
  useScrollTracking()
  return (
    <main className="min-h-screen">
      <Hero />
      <Video />
      <QuickInfo />
      <PriceHighlight />
      <About />
      <Gallery />
      <FloorPlan />
      <PropertyHighlights />
      <Location />
      <Region />
      <RegionDevelopment />
      <OptionalItems />
      <Contact />
      <FloatingWhatsApp />
      
      {/* Admin Button Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-gray-200 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Portal Administrativo</h3>
            <p className="text-sm text-gray-600 mb-4">Acesso ao dashboard de analytics</p>
            <a
              href="/admin"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Acessar Portal Admin
            </a>
          </div>
        </div>
      </section>
      
      {/* SEO Hidden Content for Google */}
      <div className="sr-only">
        <h2>Apartamento à Venda Curitiba Jardim Botânico</h2>
        <p>Apartamento 2 quartos suíte à venda no Jardim Botânico Curitiba. Imóvel com 2 vagas, área gourmet, acabamento de luxo. Preço promocional R$ 729.000. Condomínio R$ 254,10/mês. Localização privilegiada próximo ao Shopping Total, UFPR, Parque Autódromo. Última unidade disponível com desconto especial. Agende sua visita hoje mesmo!</p>
        <h3>Palavras-chave: apartamento à venda curitiba, imóvel jardim botânico, apartamento 2 quartos suíte, vagas garagem curitiba, área gourmet, condomínio barato, apartamento promocional, oportunidade única, investimento imobiliário, localização estratégica, parque autódromo, shopping total, ufpr, apartamento com suíte, 2 vagas, sacada gourmet, lavanderia, academia, salão de festas, primeiro morador 2020, iptu baixo, valorização garantida, acabamento premium, infraestrutura completa</h3>
      </div>
    </main>
  )
}
