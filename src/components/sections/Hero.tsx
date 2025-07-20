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
    <section className="relative h-screen overflow-hidden">
      {/* Slideshow */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                console.error(`Erro ao carregar imagem: ${slide.image}`);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              style={{opacity: 0, transition: 'opacity 0.5s ease-in-out'}}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10" />
          </div>
        ))}

        {/* Overlay com Informações */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
              Residencial Botanique
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {slides[currentSlide]?.title || ''}
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              {slides[currentSlide]?.description || ''}
            </p>

            {/* Informações do Imóvel */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400 line-through mb-1">
                    R$ 779.000
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    R$ 729.000
                  </div>
                  <div className="text-sm text-gray-300">Preço com Desconto</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    R$ 254
                  </div>
                  <div className="text-sm text-gray-300">Condomínio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                    ~80m²
                  </div>
                  <div className="text-sm text-gray-300">Área Privativa</div>
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5541991328657?text=Olá! Tenho interesse no apartamento do Residencial Botanique, no Jardim Botânico. Gostaria de agendar uma visita e saber o valor do condomínio. Código: ARA179. Aguardo seu retorno."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                📱 Agendar Visita
              </a>
              <a
                href="#galeria"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors duration-300 border border-white/30 flex items-center justify-center gap-2"
              >
                📸 Ver Fotos
              </a>
            </div>
          </div>
        </div>

        {/* Controles do Slideshow */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
