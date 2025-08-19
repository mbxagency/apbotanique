'use client';

import {useState, useEffect} from 'react';
import { analytics } from '@/lib/analytics/realTimeTracker';

const slides = [
  {
    image: '/images/sala/sala1.jpg',
    title: 'Sala de Estar Elegante',
    description: 'Ambiente espaçoso e bem iluminado'
  },
  {
    image: '/images/suite/suite1.jpg',
    title: 'Suíte Principal',
    description: 'Conforto e privacidade em um só lugar'
  },
  {
    image: '/images/cozinha/cozinha1.jpg',
    title: 'Cozinha Americana',
    description: 'Funcional e integrada à sala'
  },
  {
    image: '/images/sacada/sacada1.jpg',
    title: 'Sacada Gourmet',
    description: 'Área de lazer com churrasqueira'
  }
];

export default function Hero () {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Slideshow */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/70" />
          </div>
        ))}

        {/* Overlay com Informações */}
        <div className="absolute inset-0 flex flex-col justify-center pb-8 sm:pb-12 md:pb-16 z-10 px-4">
          <div className="text-center text-white w-full max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 font-heading text-shadow-lg leading-tight">
              APARTAMENTO À VENDA NO JARDIM BOTÂNICO
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-gray-200 font-heading text-shadow">
              <strong>OPORTUNIDADE ÚNICA!</strong> Residencial Botanique
            </p>
            <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6 text-gray-300 font-body">
              <strong>UNIDADE PROMOCIONAL</strong> - Jardim Botânico, Curitiba | <strong>Desconto Especial!</strong>
            </p>

            {/* Informações do Imóvel */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-gray-400 line-through mb-1">
                    R$ 779.000
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2 text-shadow">
                    R$ 729.000
                  </div>
                  <div className="text-xs text-gray-300 font-body">Preço com Desconto</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 mb-1 sm:mb-2 text-shadow">
                    R$ 254
                  </div>
                  <div className="text-xs text-gray-300 font-body">Condomínio</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-400 mb-1 sm:mb-2 text-shadow">
                    ~80m²
                  </div>
                  <div className="text-xs text-gray-300 font-body">Área Privativa</div>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
              <a
                href="https://wa.me/5541991328657?text=Olá! Tenho interesse no apartamento do Residencial Botanique, no Jardim Botânico. Gostaria de saber mais informações. Código: ARA179."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics?.trackWhatsAppClick()}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp
              </a>
              <a
                href="#galeria"
                onClick={() => analytics?.trackPhotoView()}
                className="bg-white/20 backdrop-blur-md text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      FOTOS
              </a>
            </div>
          </div>
        </div>

        {/* Controles do Slideshow */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
          aria-label="Slide anterior"
        >
          <span className="text-lg sm:text-xl md:text-2xl font-bold">‹</span>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
          aria-label="Próximo slide"
        >
          <span className="text-lg sm:text-xl md:text-2xl font-bold">›</span>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
