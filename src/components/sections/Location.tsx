'use client';

import {useState, useEffect} from 'react';

interface RouteInfo {
  distance: string;
  duration: string;
  loading: boolean;
}

export default function Location () {
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [routeInfo, setRouteInfo] = useState<Record<string, RouteInfo>>({});

  const distances = [
    {
      place: 'Jardim Botânico',
      distance: '500 m',
      duration: '3 min',
      icon: '🌺',
      address: 'R. Eng. Ostoja Roguski, 690 - Jardim Botânico'
    },
    {
      place: 'Shopping Jockey Plaza',
      distance: '2,2 km',
      duration: '7 min',
      icon: '🛍️',
      address: 'Av. Pres. Getúlio Vargas, 2645 - Água Verde'
    },
    {
      place: 'Hospital Cajuru',
      distance: '3 km',
      duration: '8 min',
      icon: '🏥',
      address: 'R. São José, 300 - Centro'
    },
    {
      place: 'Aeroporto Afonso Pena',
      distance: '8,5 km',
      duration: '15 min',
      icon: '✈️',
      address: 'Av. Rocha Pombo, s/n - São José dos Pinhais'
    },
    {
      place: 'Parc Autódromo',
      distance: '1,8 km',
      duration: '10 min',
      icon: '🌳',
      address: 'Av. Cândido Hartmann, s/n - Bigorrilho'
    },
    {
      place: 'Teatro Guaíra',
      distance: '3,8 km',
      duration: '9 min',
      icon: '🎭',
      address: 'R. XV de Novembro, 971 - Centro'
    }
  ];

  const curiosities = [
    {
      icon: '🌺',
      title: 'Jardim Botânico',
      description: 'Um dos principais cartões postais de Curitiba'
    },
    {
      icon: '🏛️',
      title: 'Centro Histórico',
      description: 'Arquitetura preservada e cultura local'
    },
    {
      icon: '🌳',
      title: 'Parques Urbanos',
      description: 'Mais de 20 parques e áreas verdes'
    },
    {
      icon: '🚌',
      title: 'Transporte Público',
      description: 'Sistema integrado de ônibus e BRT'
    }
  ];

  const getRouteInfo = async (destination: string, placeName: string) => {
    const apartmentAddress = 'Av. Prefeito Maurício Fruet, 1270, Jardim Botânico, Curitiba';
    const destinationAddress = destination;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
          apartmentAddress
        )}&destination=${encodeURIComponent(
          destinationAddress
        )}&key=YOUR_API_KEY`
      );

      if (response.ok) {
        const data = await response.json();
        if (data.routes && data.routes.length > 0) {
          const route = data.routes[0];
          const leg = route.legs[0];
          setRouteInfo(prev => ({
            ...prev,
            [placeName]: {
              distance: leg.distance.text,
              duration: leg.duration.text,
              loading: false
            }
          }));
        }
      }
    } catch {
      // Silently handle error
    }
  };

  const handleDestinationClick = (place: string) => {
    setSelectedDestination(place);
  };

  const getSelectedMapUrl = () => {
    if (!selectedDestination) {
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d-49.2334!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce472f8c9d1c1%3A0x9c9c9c9c9c9c9c9c!2sAv.%20Prefeito%20Maur%C3%ADcio%20Fruet%2C%201270%2C%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890';
    }

    const destination = distances.find(d => d.place === selectedDestination);
    if (!destination) {
      return '';
    }

    const apartmentAddress = 'Av. Prefeito Maurício Fruet, 1270, Jardim Botânico, Curitiba';
    const destinationAddress = destination.address;

    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d-49.2334!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce472f8c9d1c1%3A0x9c9c9c9c9c9c9c9c!2s${encodeURIComponent(
      apartmentAddress
    )}!5e0!3m2!1spt-BR!2sbr!4v1234567890&origin=${encodeURIComponent(
      apartmentAddress
    )}&destination=${encodeURIComponent(destinationAddress)}&mode=driving`;
  };

  useEffect(() => {
    distances.forEach(item => {
      getRouteInfo(item.address, item.place);
    });
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-heading">
              📍 Localização Estratégica
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Localizado no coração do Jardim Botânico, este apartamento oferece acesso privilegiado
              aos principais pontos turísticos e serviços de Curitiba.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Mapa Interativo */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  🗺️ Mapa Interativo
                </h3>
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-soft">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={getSelectedMapUrl()}
                      width="100%"
                      height="100%"
                      style={{border: 0}}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização do Apartamento"
                    />
                  </div>
                </div>
              </div>

              {/* Botões de Destino */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  🎯 Selecione um Destino
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {distances.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleDestinationClick(item.place)}
                      className={`p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                        selectedDestination === item.place
                          ? 'bg-green-600 text-white shadow-md'
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                📍 Pontos Turísticos
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {distances.map((item, index) => {
                  const route = routeInfo[item.place];
                  return (
                    <div
                      key={index}
                      className={`p-3 sm:p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 cursor-pointer ${
                        selectedDestination === item.place
                          ? 'bg-green-50 border-2 border-green-200'
                          : 'bg-white'
                      }`}
                      onClick={() => handleDestinationClick(item.place)}
                    >
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-xl sm:text-2xl">{item.icon}</span>
                        <div className="text-center flex-1">
                          <h4 className="font-semibold text-gray-900 hover:text-gray-900 text-sm sm:text-base">
                            {item.place}
                          </h4>
                          {route ? (
                            <>
                              <p className="text-xs sm:text-sm text-gray-600 hover:text-gray-600">
                                {route.distance}
                              </p>
                              <p className="text-xs sm:text-sm text-green-700 font-semibold hover:text-green-700">
                                {route.duration}
                              </p>
                            </>
                          ) : (
                            <div className="flex items-center justify-center gap-1 sm:gap-2">
                              <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-green-600"></div>
                              <span className="text-xs sm:text-sm text-gray-500">Calculando rota...</span>
                            </div>
                          )}
                          <p className="text-xs text-gray-500 mt-1 hidden sm:block">{item.address}</p>
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
          <div className="mt-6 sm:mt-8 md:mt-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              🌟 Sobre a Região
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {curiosities.map((item, index) => (
                <div key={index} className="bg-white p-3 sm:p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 hover:text-gray-900 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 hover:text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Destaque da Localização */}
          <div className="mt-6 sm:mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-white text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                🏆 Localização Estratégica
              </h3>
              <p className="text-green-100 mb-4 text-sm sm:text-base">
                Localizado no coração do Jardim Botânico, você tem acesso rápido a todos os principais
                pontos turísticos de Curitiba, combinando tranquilidade residencial com facilidade de
                locomoção.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
                <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full">Centro Turístico</span>
                <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full">Área Nobre</span>
                <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full">Acesso Fácil</span>
                <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full">Valorização</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 