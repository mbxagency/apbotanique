'use client';

import {useState, useEffect} from 'react';

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
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60" />
          </div>
        ))}

        {/* Overlay com Informações */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading text-shadow-lg leading-tight">
              Residencial Botanique
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-200 font-heading text-shadow">
              {slides[currentSlide]?.title || ''}
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300 font-body">
              {slides[currentSlide]?.description || ''}
            </p>

            {/* Informações do Imóvel */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 mb-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-gray-400 line-through mb-2">
                    R$ 779.000
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-3 text-shadow">
                    R$ 729.000
                  </div>
                  <div className="text-sm text-gray-300 font-body">Preço com Desconto</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-3 text-shadow">
                    R$ 254
                  </div>
                  <div className="text-sm text-gray-300 font-body">Condomínio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-3 text-shadow">
                    ~80m²
                  </div>
                  <div className="text-sm text-gray-300 font-body">Área Privativa</div>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5541991328657?text=Olá! Tenho interesse no apartamento do Residencial Botanique, no Jardim Botânico. Gostaria de saber mais informações. Código: ARA179."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="text-2xl">📱</span>
                Agendar Visita
              </a>
              <a
                href="#galeria"
                className="bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="text-2xl">📸</span>
                Ver Fotos
              </a>
            </div>
          </div>
        </div>

        {/* Controles do Slideshow */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
          aria-label="Slide anterior"
        >
          <span className="text-2xl font-bold">‹</span>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
          aria-label="Próximo slide"
        >
          <span className="text-2xl font-bold">›</span>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
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
