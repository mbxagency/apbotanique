'use client';

import {useState, useEffect} from 'react';

interface HeroProps {
  onWhatsAppClick?: () => void;
  onPhoneClick?: () => void;
}

export default function Hero ({onWhatsAppClick, onPhoneClick}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {src: '/images/sala/sala1.jpg', alt: 'Apartamento Botanique - Sala de estar'},
    {src: '/images/suite/suite1.jpg', alt: 'Apartamento Botanique - Suíte principal'},
    {src: '/images/cozinha/cozinha1.jpg', alt: 'Apartamento Botanique - Cozinha americana'},
    {src: '/images/quartos/quarto1.jpg', alt: 'Apartamento Botanique - Quarto principal'},
    {src: '/images/sacada/sacada1.jpg', alt: 'Apartamento Botanique - Sacada'},
    {src: '/images/fachada/vista.jpg', alt: 'Apartamento Botanique - Vista'}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const changeSlide = (direction: number) => {
    setCurrentSlide((prev) => {
      const newSlide = prev + direction;
      if (newSlide < 0) { return slides.length - 1; }
      if (newSlide >= slides.length) { return 0; }
      return newSlide;
    });
  };

  const handleWhatsAppClick = () => {
    const phone = '5541991328657';
    const message = encodeURIComponent('Olá! Tenho interesse no apartamento do Residencial Botanique, no Jardim Botânico. Gostaria de agendar uma visita e saber mais informações. Código: ARA179');

    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');

    if (onWhatsAppClick) {
      onWhatsAppClick();
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5541991328657';

    if (onPhoneClick) {
      onPhoneClick();
    }
  };

  return (
    <section className="relative h-screen mt-16 overflow-hidden">
      {/* Slider */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-5 z-10">
        <button
          onClick={() => changeSlide(-1)}
          className="bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <span className="text-gray-700">‹</span>
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => changeSlide(1)}
          className="bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <span className="text-gray-700">›</span>
        </button>
      </div>

      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80 flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-3 text-shadow-lg font-display">
            Apartamento de Luxo
          </h2>
          <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-2 text-green-200 font-heading">
            Edifício Botanique
          </h3>
          <p className="text-base md:text-lg lg:text-xl mb-4 opacity-90">
            Jardim Botânico • Curitiba
          </p>

          {/* Preço com Desconto */}
          <div className="mb-6 md:mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/30 inline-block">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-300 mb-1">Preço Original</div>
                  <div className="text-lg md:text-xl font-bold text-gray-400 line-through">R$ 779.000</div>
                </div>
                
                <div className="text-2xl md:text-3xl text-red-400 animate-pulse font-bold">
                  ↓
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-green-300 mb-1">Preço com Desconto</div>
                  <div className="text-2xl md:text-3xl font-bold text-green-400">R$ 729.000</div>
                </div>
              </div>
              
              <div className="mt-3 text-center">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Desconto de R$ 50.000
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 md:gap-3 shadow-lg"
            >
              <span className="text-xl md:text-2xl">💬</span>
              <span>Falar no WhatsApp</span>
            </button>

            <button
              onClick={handlePhoneClick}
              className="bg-white/20 hover:bg-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center justify-center gap-2 md:gap-3 backdrop-blur-sm"
            >
              <span className="text-lg md:text-xl">📞</span>
              <span>Ligar Agora</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
