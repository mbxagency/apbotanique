'use client';

import {useState} from 'react';

export default function Gallery () {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const images = [
    {src: '/images/sala/sala1.jpg', alt: 'Sala de estar', category: 'sala'},
    {src: '/images/sala/sala2.jpg', alt: 'Sala de estar', category: 'sala'},
    {src: '/images/sala/sala3.jpg', alt: 'Sala de estar', category: 'sala'},
    {src: '/images/sala/sala4.jpg', alt: 'Sala de estar', category: 'sala'},
    {src: '/images/sala/sala5.jpg', alt: 'Sala de estar', category: 'sala'},
    {src: '/images/sala/sala6.jpg', alt: 'Sala de estar', category: 'sala'},
    {src: '/images/sala/sala7.jpg', alt: 'Sala de estar', category: 'sala'},
    {src: '/images/sala/sala8.jpg', alt: 'Sala de estar', category: 'sala'},
    {src: '/images/cozinha/cozinha1.jpg', alt: 'Cozinha americana', category: 'cozinha'},
    {src: '/images/cozinha/cozinha2.jpg', alt: 'Cozinha americana', category: 'cozinha'},
    {src: '/images/cozinha/cozinha3.jpg', alt: 'Cozinha americana', category: 'cozinha'},
    {src: '/images/quartos/quarto1.jpg', alt: 'Quarto principal', category: 'quartos'},
    {src: '/images/quartos/quarto2.jpg', alt: 'Quarto secundário', category: 'quartos'},
    {src: '/images/suite/suite1.jpg', alt: 'Suíte', category: 'suite'},
    {src: '/images/suite/suite2.jpg', alt: 'Suíte', category: 'suite'},
    {src: '/images/suite/suite3.jpg', alt: 'Suíte', category: 'suite'},
    {src: '/images/suite/suite4.jpg', alt: 'Suíte', category: 'suite'},
    {src: '/images/suite/suite5.jpg', alt: 'Suíte', category: 'suite'},
    {src: '/images/sacada/sacada1.jpg', alt: 'Sacada', category: 'sacada'},
    {src: '/images/sacada/sacada2.jpg', alt: 'Sacada', category: 'sacada'},
    {src: '/images/sacada/sacada3.jpg', alt: 'Sacada', category: 'sacada'},
    {src: '/images/academia/academia1.jpg', alt: 'Academia', category: 'areas-comuns'},
    {src: '/images/academia/academia2.jpg', alt: 'Academia', category: 'areas-comuns'},
    {src: '/images/academia/academia3.jpg', alt: 'Academia', category: 'areas-comuns'},
    {src: '/images/academia/academia4.jpg', alt: 'Academia', category: 'areas-comuns'},
    {src: '/images/areas-comuns/salao1.jpg', alt: 'Salão de festas', category: 'areas-comuns'},
    {src: '/images/areas-comuns/salao2.jpg', alt: 'Salão de festas', category: 'areas-comuns'},
    {src: '/images/fachada/fachada1.jpg', alt: 'Fachada do edifício', category: 'fachada'},
    {src: '/images/fachada/fachada2.jpg', alt: 'Fachada do edifício', category: 'fachada'},
    {src: '/images/quartos/hall-quartos.jpg', alt: 'Hall dos quartos', category: 'quartos'},
    {src: '/images/infraestrutura/lavanderia.jpg', alt: 'Lavanderia', category: 'lavanderia'},
    {src: '/images/infraestrutura/bwc-social.jpg', alt: 'Banheiro social', category: 'banheiros'},
    {src: '/images/infraestrutura/bwc-suite.jpg', alt: 'Banheiro da suíte', category: 'banheiros'},
    {src: '/images/infraestrutura/vagas-garagem.jpg', alt: 'Vagas de garagem', category: 'garagem'},
    {src: '/images/areas-comuns/terraço.jpg', alt: 'Terraço', category: 'areas-comuns'},
    {src: '/images/fachada/vista.jpg', alt: 'Vista', category: 'fachada'}
  ];

  const filters = [
    {id: 'todos', name: '🏠 Todos', icon: '🏠'},
    {id: 'sala', name: '🛋️ Sala', icon: '🛋️'},
    {id: 'cozinha', name: '🍳 Cozinha', icon: '🍳'},
    {id: 'quartos', name: '🛏️ Quartos', icon: '🛏️'},
    {id: 'suite', name: '👑 Suíte', icon: '👑'},
    {id: 'sacada', name: '🌿 Sacada', icon: '🌿'},
    {id: 'banheiros', name: '🚿 Banheiros', icon: '🚿'},
    {id: 'lavanderia', name: '🧺 Lavanderia', icon: '🧺'},
    {id: 'garagem', name: '🚗 Garagem', icon: '🚗'},
    {id: 'areas-comuns', name: '🏢 Áreas Comuns', icon: '🏢'},
    {id: 'fachada', name: '🏗️ Fachada', icon: '🏗️'}
  ];

  const filteredImages = activeFilter === 'todos' 
    ? images 
    : images.filter(image => image.category === activeFilter);

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
          <p className="text-lg text-gray-600 mb-8">
            Conheça todos os detalhes do apartamento e das áreas comuns
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-soft hover:shadow-md'
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span>{filter.name.replace(filter.icon, '').trim()}</span>
              </button>
            ))}
          </div>

          {/* Contador de fotos */}
          <div className="text-sm text-gray-500 mb-6">
            {filteredImages.length} foto{filteredImages.length !== 1 ? 's' : ''} encontrada{filteredImages.length !== 1 ? 's' : ''}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((image, index) => (
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
                {/* Categoria da foto */}
                <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  {filters.find(f => f.id === image.category)?.icon} {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há fotos */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhuma foto encontrada</h3>
            <p className="text-gray-500">Tente selecionar outra categoria</p>
          </div>
        )}

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
