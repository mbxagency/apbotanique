'use client';

export default function PropertyHighlights () {
  const highlights = [
    {
      icon: '🏠',
      title: 'Área Privativa',
      value: '~80m²',
      description: 'Espaço amplo e bem distribuído'
    },
    {
      icon: '🏢',
      title: 'Área Total',
      value: '113,84m²',
      description: 'Incluindo áreas comuns'
    },
    {
      icon: '🛏️',
      title: '2 Quartos',
      value: '1 Suíte',
      description: 'Conforto e privacidade'
    },
    {
      icon: '🚿',
      title: '2 Banheiros',
      value: 'Completo',
      description: 'Um social e um na suíte'
    },
    {
      icon: '🚗',
      title: '2 Vagas',
      value: 'Cobertas',
      description: 'Garagem privativa'
    },
    {
      icon: '🌿',
      title: 'Sacada',
      value: 'Gourmet',
      description: 'Com churrasqueira'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              ✨ Destaques do Imóvel
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Conheça as principais características deste apartamento que o tornam uma excelente
              oportunidade de investimento e moradia no Jardim Botânico.
            </p>
          </div>

          {/* Grid de Destaques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-2xl font-bold text-green-600 mb-2">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Informações Adicionais */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🏗️ Características Técnicas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Porcelanato nos banheiros</li>
                  <li>• Cozinha com armários planejados</li>
                  <li>• Interfone</li>
                  <li>• Portaria 24h</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🌟 Diferenciais
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Localização privilegiada</li>
                  <li>• Área nobre de Curitiba</li>
                  <li>• Próximo a pontos turísticos</li>
                  <li>• Fácil acesso ao centro</li>
                  <li>• Valorização garantida</li>
                  <li>• Condomínio bem administrado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 