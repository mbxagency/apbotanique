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

import Contact from '@/components/sections/Contact';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function HomePage() {
  const { trackEvent } = useAnalytics();

  const handleWhatsAppClick = (source: string) => {
    trackEvent('whatsapp_click', { source });
  };

  const handlePhoneClick = (source: string) => {
    trackEvent('phone_click', { source });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Seção Hero */}
      <Hero 
        onWhatsAppClick={() => handleWhatsAppClick('hero')}
        onPhoneClick={() => handlePhoneClick('hero')}
      />
      
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
      
      {/* Localização */}
      <Location />
      
      {/* Região */}
      <Region />
      

      
      {/* Itens Opcionais */}
      <OptionalItems />
      
      {/* Contato */}
      <Contact 
        onWhatsAppClick={() => handleWhatsAppClick('contact')}
        onPhoneClick={() => handlePhoneClick('contact')}
      />
      
      {/* WhatsApp Flutuante */}
      <FloatingWhatsApp 
        onClick={() => handleWhatsAppClick('floating')}
      />
    </main>
  );
}
