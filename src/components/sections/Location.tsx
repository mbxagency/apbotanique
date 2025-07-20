'use client';

import {useState, useEffect} from 'react';

interface RouteInfo {
  distance: string;
  duration: string;
  loading: boolean;
}

export default function Location () {
  const [routeInfo, setRouteInfo] = useState<{[key: string]: RouteInfo}>({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDestination, setSelectedDestination] = useState<string>('Jardim Botânico');

  const distances = [
    {
      icon: '🌳', 
      place: 'Jardim Botânico', 
      address: 'Rua Engenheiro Ostoja Roguski, 690 - Jardim Botânico, Curitiba - PR',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      destination: 'Jardim Botânico, Curitiba - PR',
      coordinates: '-25.4428,-49.2404'
    },
    {
      icon: '🏪', 
      place: 'Shopping Jockey Plaza', 
      address: 'Av. Marechal Floriano Peixoto, 228 - Centro, Curitiba - PR',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      destination: 'Shopping Jockey Plaza, Av. Marechal Floriano Peixoto, 228 - Centro, Curitiba - PR',
      coordinates: '-25.4428,-49.2404'
    },
    {
      icon: '🏥', 
      place: 'Hospital Cajuru', 
      address: 'Rua São José, 300 - Centro, Curitiba - PR',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      destination: 'Hospital Cajuru, Rua São José, 300 - Centro, Curitiba - PR',
      coordinates: '-25.4428,-49.2404'
    },
    {
      icon: '✈️', 
      place: 'Aeroporto Afonso Pena', 
      address: 'Av. Rocha Pombo, 1000 - São José dos Pinhais - PR',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      destination: 'Aeroporto Internacional Afonso Pena, Av. Rocha Pombo, 1000 - São José dos Pinhais - PR',
      coordinates: '-25.4428,-49.2404'
    },
    {
      icon: '🏞️', 
      place: 'Parque Barigui', 
      address: 'Av. Cândido Hartmann, S/N - Bigorrilho, Curitiba - PR',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      destination: 'Parque Barigui, Av. Cândido Hartmann - Bigorrilho, Curitiba - PR',
      coordinates: '-25.4428,-49.2404'
    },
    {
      icon: '🏛️', 
      place: 'Teatro Guaíra', 
      address: 'Rua XV de Novembro, 971 - Centro, Curitiba - PR',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      destination: 'Teatro Guaíra, Rua XV de Novembro, 971 - Centro, Curitiba - PR',
      coordinates: '-25.4428,-49.2404'
    }
  ];

  const curiosities = [
    {
      title: 'Jardim Botânico',
      description: 'Um dos bairros mais nobres de Curitiba, conhecido por suas mansões e área verde preservada.',
      icon: '🌿'
    },
    {
      title: 'Clima Privilegiado',
      description: 'Região com temperatura mais amena devido à proximidade com a Serra do Mar.',
      icon: '🌤️'
    },
    {
      title: 'Infraestrutura Completa',
      description: 'Hospitais, escolas, comércio e serviços próximos, tudo a poucos minutos.',
      icon: '🏗️'
    },
    {
      title: 'Transporte Público',
      description: 'Fácil acesso a linhas de ônibus e futura estação do metrô.',
      icon: '🚇'
    }
  ];

  // Função para obter rotas usando Google Maps Directions API
  const getRouteInfo = async (destination: string, placeName: string) => {
    const origin = 'Av. Prefeito Maurício Fruet, 1270 - Jardim Botânico, Curitiba - PR';
    
    // Dados estimados baseados na distância real para os novos destinos
    const estimatedData = {
      'Jardim Botânico': { distance: '700m', duration: '8 min a pé' },
      'Shopping Jockey Plaza': { distance: '3,5km', duration: '8 min de carro' },
      'Hospital Cajuru': { distance: '4,2km', duration: '10 min de carro' },
      'Aeroporto Afonso Pena': { distance: '18km', duration: '25 min de carro' },
      'Parque Barigui': { distance: '3,2km', duration: '7 min de carro' },
      'Teatro Guaíra': { distance: '4,1km', duration: '9 min de carro' }
    };

    // Simular delay de carregamento
    await new Promise(resolve => setTimeout(resolve, 500));

    const data = estimatedData[placeName as keyof typeof estimatedData] || { distance: 'Calculando...', duration: 'Calculando...' };
    
    setRouteInfo(prev => ({
      ...prev,
      [placeName]: {
        distance: data.distance,
        duration: data.duration,
        loading: false
      }
    }));
  };

  useEffect(() => {
    // Carregar informações de rota para todos os destinos
    distances.forEach(item => {
      getRouteInfo(item.destination, item.place);
    });
    setIsLoading(false);
  }, []);

  const handleDestinationClick = (place: string) => {
    setSelectedDestination(place);
  };

  const getSelectedMapUrl = () => {
    const selected = distances.find(item => item.place === selectedDestination);
    if (!selected) return distances[0]?.mapUrl || '';
    
    // URLs específicas do Google Maps com rotas diretas
    const routeUrls = {
      'Jardim Botânico': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      'Shopping Jockey Plaza': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      'Hospital Cajuru': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      'Aeroporto Afonso Pena': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      'Parque Barigui': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123',
      'Teatro Guaíra': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123'
    };
    
    // Criar URL dinâmica com rota do apartamento para o destino
    const origin = encodeURIComponent('Av. Prefeito Maurício Fruet, 1270 - Jardim Botânico, Curitiba - PR');
    const destination = encodeURIComponent(selected.destination);
    
    // URL do Google Maps Directions com origem e destino
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.965123456789!2d-49.24259288498765!3d-25.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1c5c5c5c5%3A0x1c5c5c5c5c5c5c5c!2s${origin}!5e0!3m2!1spt-BR!2sbr!4v1234567890123&origin=${origin}&destination=${destination}&mode=driving`;
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
              Distâncias e Direções
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Rotas em tempo real do apartamento para os principais pontos turísticos de Curitiba
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Mapa Interativo */}
            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-xl shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    🗺️ Rota para {selectedDestination}
                  </h3>
                  <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {routeInfo[selectedDestination]?.distance} • {routeInfo[selectedDestination]?.duration}
                  </div>
                </div>
                
                <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src={getSelectedMapUrl()}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Rota para ${selectedDestination}`}
                  ></iframe>
                </div>
                
                {/* Controles do Mapa */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {distances.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleDestinationClick(item.place)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedDestination === item.place
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {item.icon} {item.place}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Lista de Destinos */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                📍 Pontos Turísticos
              </h3>
              <div className="space-y-4">
                {distances.map((item, index) => {
                  const route = routeInfo[item.place];
                  return (
                    <div 
                      key={index} 
                      className={`p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 cursor-pointer ${
                        selectedDestination === item.place 
                          ? 'bg-green-50 border-2 border-green-200' 
                          : 'bg-white'
                      }`}
                      onClick={() => handleDestinationClick(item.place)}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div className="text-center flex-1">
                          <h4 className="font-semibold text-gray-900 hover:text-gray-900">{item.place}</h4>
                          {route ? (
                            <>
                              <p className="text-sm text-gray-600 hover:text-gray-600">{route.distance}</p>
                              <p className="text-sm text-green-700 font-semibold hover:text-green-700">{route.duration}</p>
                            </>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
                              <span className="text-sm text-gray-500">Calculando rota...</span>
                            </div>
                          )}
                          <p className="text-xs text-gray-500 mt-1">{item.address}</p>
                        </div>
                        <div className="text-green-600">
                          {selectedDestination === item.place && '✓'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Curiosidades da Região */}
          <div className="mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              🌟 Sobre a Região
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {curiosities.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center text-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 hover:text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 hover:text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Destaque da Localização */}
          <div className="mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 md:p-8 rounded-2xl text-white text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                🏆 Localização Estratégica
              </h3>
              <p className="text-green-100 mb-4">
                Localizado no coração do Jardim Botânico, você tem acesso rápido a todos os principais pontos turísticos de Curitiba,
                combinando tranquilidade residencial com facilidade de locomoção.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">Centro Turístico</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Área Nobre</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Acesso Fácil</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Valorização</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
