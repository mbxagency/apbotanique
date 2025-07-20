'use client';

import {useState} from 'react';

const images = [
  // Sala
  {src: '/images/sala/sala1.jpg', alt: 'Sala de Estar', category: 'sala'},
  {src: '/images/sala/sala2.jpg', alt: 'Sala de Estar', category: 'sala'},
  {src: '/images/sala/sala3.jpg', alt: 'Sala de Estar', category: 'sala'},
  {src: '/images/sala/sala4.jpg', alt: 'Sala de Estar', category: 'sala'},
  {src: '/images/sala/sala5.jpg', alt: 'Sala de Estar', category: 'sala'},
  {src: '/images/sala/sala6.jpg', alt: 'Sala de Estar', category: 'sala'},
  {src: '/images/sala/sala7.jpg', alt: 'Sala de Estar', category: 'sala'},
  {src: '/images/sala/sala8.jpg', alt: 'Sala de Estar', category: 'sala'},
  // Cozinha
  {src: '/images/cozinha/cozinha1.jpg', alt: 'Cozinha', category: 'cozinha'},
  {src: '/images/cozinha/cozinha2.jpg', alt: 'Cozinha', category: 'cozinha'},
  {src: '/images/cozinha/cozinha3.jpg', alt: 'Cozinha', category: 'cozinha'},
  // Quartos
  {src: '/images/quartos/quarto1.jpg', alt: 'Quarto', category: 'quartos'},
  {src: '/images/quartos/quarto2.jpg', alt: 'Quarto', category: 'quartos'},
  // Suite
  {src: '/images/suite/suite1.jpg', alt: 'Suíte', category: 'suite'},
  {src: '/images/suite/suite2.jpg', alt: 'Suíte', category: 'suite'},
  {src: '/images/suite/suite3.jpg', alt: 'Suíte', category: 'suite'},
  {src: '/images/suite/suite4.jpg', alt: 'Suíte', category: 'suite'},
  {src: '/images/suite/suite5.jpg', alt: 'Suíte', category: 'suite'},
  // Sacada
  {src: '/images/sacada/sacada1.jpg', alt: 'Sacada', category: 'sacada'},
  {src: '/images/sacada/sacada2.jpg', alt: 'Sacada', category: 'sacada'},
  {src: '/images/sacada/sacada3.jpg', alt: 'Sacada', category: 'sacada'},
  // Banheiros
  {src: '/images/infraestrutura/bwc-social.jpg', alt: 'Banheiro Social', category: 'banheiros'},
  {src: '/images/infraestrutura/bwc-suite.jpg', alt: 'Banheiro da Suíte', category: 'banheiros'},
  // Lavanderia
  {src: '/images/infraestrutura/lavanderia.jpg', alt: 'Lavanderia', category: 'lavanderia'},
  // Garagem
  {src: '/images/infraestrutura/vagas-garagem.jpg', alt: 'Vagas de Garagem', category: 'garagem'},
  // Áreas Comuns
  {src: '/images/academia/academia1.jpg', alt: 'Academia', category: 'areas-comuns'},
  {src: '/images/academia/academia2.jpg', alt: 'Academia', category: 'areas-comuns'},
  {src: '/images/academia/academia3.jpg', alt: 'Academia', category: 'areas-comuns'},
  {src: '/images/academia/academia4.jpg', alt: 'Academia', category: 'areas-comuns'},
  {src: '/images/areas-comuns/salao1.jpg', alt: 'Salão de Festas', category: 'areas-comuns'},
  {src: '/images/areas-comuns/salao2.jpg', alt: 'Salão de Festas', category: 'areas-comuns'},
  {src: '/images/areas-comuns/terraço.jpg', alt: 'Terraço', category: 'areas-comuns'},
  // Fachada
  {src: '/images/fachada/fachada1.jpg', alt: 'Fachada', category: 'fachada'},
  {src: '/images/fachada/fachada2.jpg', alt: 'Fachada', category: 'fachada'},
  {src: '/images/fachada/vista.jpg', alt: 'Vista', category: 'fachada'}
];

const categories = [
  {id: 'todos', name: 'Todos', icon: '🏠'},
  {id: 'sala', name: 'Sala', icon: '🛋️'},
  {id: 'cozinha', name: 'Cozinha', icon: '🍳'},
  {id: 'quartos', name: 'Quartos', icon: '🛏️'},
  {id: 'suite', name: 'Suíte', icon: '👑'},
  {id: 'sacada', name: 'Sacada', icon: '🌿'},
  {id: 'banheiros', name: 'Banheiros', icon: '🚿'},
  {id: 'lavanderia', name: 'Lavanderia', icon: '🧺'},
  {id: 'garagem', name: 'Garagem', icon: '🚗'},
  {id: 'areas-comuns', name: 'Áreas Comuns', icon: '🏊'},
  {id: 'fachada', name: 'Fachada', icon: '🏢'}
];

export default function Gallery () {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'todos'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="galeria" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              📸 Galeria de Fotos
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore cada detalhe deste apartamento através de nossa galeria completa de fotos.
              Cada imagem foi cuidadosamente selecionada para mostrar a qualidade e o charme do
              Residencial Botanique.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Imagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
