'use client';

export default function RegionDevelopment () {
  const developments = [
    {
      title: 'Parque Autódromo',
      description: 'Parque urbano com pista de caminhada, quadras esportivas e área de lazer',
      distance: '1,8 km',
      icon: '🏃',
      status: 'Em funcionamento'
    },
    {
      title: 'Novo Terminal do Capão da Imbuia',
      description: 'Terminal de ônibus moderno com linhas para toda Curitiba',
      distance: '2,3 km',
      icon: '🚌',
      status: 'Em funcionamento'
    },
    {
      title: 'Shopping Jockey Plaza',
      description: 'Centro comercial com mais de 200 lojas, restaurantes e lazer',
      distance: '2,8 km',
      icon: '🛍️',
      status: 'Em funcionamento'
    },
    {
      title: 'Hospital Cajuru',
      description: 'Hospital de referência com atendimento 24h e especialidades médicas',
      distance: '3,1 km',
      icon: '🏥',
      status: 'Em funcionamento'
    },
    {
      title: 'Jardim Botânico',
      description: 'Principal atração turística de Curitiba com estufa e jardins',
      distance: '500 m',
      icon: '🌺',
      status: 'Em funcionamento'
    },
    {
      title: 'Linha Verde',
      description: 'Corredor exclusivo de ônibus com faixa dedicada e alta frequência',
      distance: '800 m',
      icon: '🚇',
      status: 'Em funcionamento'
    },
    {
      title: 'Aeroporto Afonso Pena',
      description: 'Aeroporto internacional com voos para todo o Brasil e América do Sul',
      distance: '8,5 km',
      icon: '✈️',
      status: 'Em funcionamento'
    },
    {
      title: 'Parque Barigui',
      description: 'Um dos maiores parques urbanos de Curitiba com lago, trilhas e lazer',
      distance: '4,2 km',
      icon: '🌳',
      status: 'Em funcionamento'
    },
    {
      title: 'Teatro Guaíra',
      description: 'Principal casa de espetáculos de Curitiba com programação cultural',
      distance: '3,8 km',
      icon: '🎭',
      status: 'Em funcionamento'
    },
    {
      title: 'Universidade Federal do Paraná',
      description: 'Campus do Centro Politécnico da UFPR com cursos de engenharia',
      distance: '2,1 km',
      icon: '🎓',
      status: 'Em funcionamento'
    }
  ];



  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              🚀 Desenvolvimento da Região
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A região do Jardim Botânico está em constante evolução, com novos projetos e
              infraestruturas que prometem valorizar ainda mais os imóveis da área.
            </p>
          </div>

          {/* Infraestrutura Atual */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🏗️ Infraestrutura Atual
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developments.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-green-600">
                          {item.distance}
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Destaque da Valorização */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              📈 Valorização Garantida
            </h3>
            <p className="text-green-100 mb-6">
              Com todos esses projetos em andamento e a localização privilegiada, a região do
              Jardim Botânico está destinada a se tornar ainda mais valorizada nos próximos anos.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl mb-2">🏠</div>
                <div className="font-bold">Valorização</div>
                <div className="text-sm text-green-100">Estimada em 15-20%</div>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl mb-2">📍</div>
                <div className="font-bold">Localização</div>
                <div className="text-sm text-green-100">Área nobre</div>
              </div>
              <div className="bg-white/20 p-4 rounded-xl">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-bold">Potencial</div>
                <div className="text-sm text-green-100">Alto crescimento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
