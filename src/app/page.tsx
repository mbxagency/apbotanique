'use client';

import Hero from '@/components/sections/Hero';
import QuickInfo from '@/components/sections/QuickInfo';
import PriceHighlight from '@/components/sections/PriceHighlight';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Location from '@/components/sections/Location';
import Region from '@/components/sections/Region';
import OptionalItems from '@/components/sections/OptionalItems';
import FloorPlan from '@/components/sections/FloorPlan';
import Video from '@/components/sections/Video';
import RegionDevelopment from '@/components/sections/RegionDevelopment';
import PropertyHighlights from '@/components/sections/PropertyHighlights';
import Contact from '@/components/sections/Contact';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default function HomePage () {
  const handleWhatsAppClick = (source: string) => {
    // Analytics tracking removed for deployment
    console.log('WhatsApp clicked from:', source);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Seção Hero */}
      <Hero />

      {/* Vídeo do Apartamento */}
      <Video />

      {/* Informações Rápidas */}
      <QuickInfo />

      {/* Destaque de Preço */}
      <PriceHighlight />

      {/* Sobre o Apartamento */}
      <About />

      {/* Galeria de Fotos */}
      <Gallery />

      {/* Planta do Apartamento */}
      <FloorPlan />

      {/* Destaques do Imóvel */}
      <PropertyHighlights />

      {/* Localização */}
      <Location />

      {/* Região */}
      <Region />

      {/* Desenvolvimento da Região */}
      <RegionDevelopment />

      {/* Itens Opcionais */}
      <OptionalItems />

      {/* Contato */}
      <Contact />

      {/* WhatsApp Flutuante */}
      <FloatingWhatsApp
        onClick={() => handleWhatsAppClick('floating')}
      />
    </main>
  );
}
