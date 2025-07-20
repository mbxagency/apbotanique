'use client';

export default function Location () {
  const distances = [
    { icon: '🌳', place: 'Jardim Botânico', distance: '700m', time: '8 min a pé' },
    { icon: '🏥', place: 'Hospital Erasto Gaertner', distance: '1,2km', time: '3 min de carro' },
    { icon: '🛒', place: 'Shopping Palladium', distance: '2,5km', time: '5 min de carro' },
    { icon: '🚌', place: 'Terminal do Portão', distance: '1,8km', time: '4 min de carro' },
    { icon: '🏫', place: 'Universidade Positivo', distance: '1,5km', time: '4 min de carro' },
    { icon: '🏪', place: 'Supermercado', distance: '500m', time: '6 min a pé' }
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

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
              Localização Privilegiada
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              O Jardim Botânico é uma das regiões mais nobres de Curitiba, 
              com excelente infraestrutura e qualidade de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Distâncias */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                📍 Distâncias e Direções
              </h3>
              <div className="space-y-4">
                {distances.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.place}</h4>
                          <p className="text-sm text-gray-600">{item.distance}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-green-700 font-semibold">{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curiosidades da Região */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                🌟 Sobre a Região
              </h3>
              <div className="space-y-4">
                {curiosities.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-1">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Destaque da Localização */}
          <div className="mt-8 md:mt-12">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 md:p-8 rounded-2xl text-white text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                🏆 Melhor Localização de Curitiba
              </h3>
              <p className="text-green-100 mb-4">
                O Jardim Botânico é reconhecido como uma das melhores regiões para morar em Curitiba, 
                combinando sofisticação, tranquilidade e praticidade.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">Área Nobre</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Segurança</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Qualidade de Vida</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Valorização</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 