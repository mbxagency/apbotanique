'use client';

import {useState} from 'react';

export default function Gallery () {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/images/sala/sala1.jpg', alt: 'Sala de estar' },
    { src: '/images/sala/sala2.jpg', alt: 'Sala de estar' },
    { src: '/images/sala/sala3.jpg', alt: 'Sala de estar' },
    { src: '/images/sala/sala4.jpg', alt: 'Sala de estar' },
    { src: '/images/sala/sala5.jpg', alt: 'Sala de estar' },
    { src: '/images/sala/sala6.jpg', alt: 'Sala de estar' },
    { src: '/images/sala/sala7.jpg', alt: 'Sala de estar' },
    { src: '/images/sala/sala8.jpg', alt: 'Sala de estar' },
    { src: '/images/cozinha/cozinha1.jpg', alt: 'Cozinha americana' },
    { src: '/images/cozinha/cozinha2.jpg', alt: 'Cozinha americana' },
    { src: '/images/cozinha/cozinha3.jpg', alt: 'Cozinha americana' },
    { src: '/images/quartos/quarto1.jpg', alt: 'Quarto principal' },
    { src: '/images/quartos/quarto2.jpg', alt: 'Quarto secundário' },
    { src: '/images/suite/suite1.jpg', alt: 'Suíte' },
    { src: '/images/suite/suite2.jpg', alt: 'Suíte' },
    { src: '/images/suite/suite3.jpg', alt: 'Suíte' },
    { src: '/images/suite/suite4.jpg', alt: 'Suíte' },
    { src: '/images/suite/suite5.jpg', alt: 'Suíte' },
    { src: '/images/sacada/sacada1.jpg', alt: 'Sacada' },
    { src: '/images/sacada/sacada2.jpg', alt: 'Sacada' },
    { src: '/images/sacada/sacada3.jpg', alt: 'Sacada' },
    { src: '/images/academia/academia1.jpg', alt: 'Academia' },
    { src: '/images/academia/academia2.jpg', alt: 'Academia' },
    { src: '/images/academia/academia3.jpg', alt: 'Academia' },
    { src: '/images/academia/academia4.jpg', alt: 'Academia' },
    { src: '/images/areas-comuns/salao1.jpg', alt: 'Salão de festas' },
    { src: '/images/areas-comuns/salao2.jpg', alt: 'Salão de festas' },
    { src: '/images/fachada/fachada1.jpg', alt: 'Fachada do edifício' },
    { src: '/images/fachada/fachada2.jpg', alt: 'Fachada do edifício' },
    { src: '/images/quartos/hall-quartos.jpg', alt: 'Hall dos quartos' },
    { src: '/images/infraestrutura/lavanderia.jpg', alt: 'Lavanderia' },
    { src: '/images/infraestrutura/bwc-social.jpg', alt: 'Banheiro social' },
    { src: '/images/infraestrutura/bwc-suite.jpg', alt: 'Banheiro da suíte' },
    { src: '/images/infraestrutura/vagas-garagem.jpg', alt: 'Vagas de garagem' },
    { src: '/images/areas-comuns/terraço.jpg', alt: 'Terraço' },
    { src: '/images/fachada/vista.jpg', alt: 'Vista' }
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Galeria de Fotos
          </h2>
          <p className="text-lg text-gray-600">
            Conheça todos os detalhes do apartamento e das áreas comuns
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => openModal(image.src)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 