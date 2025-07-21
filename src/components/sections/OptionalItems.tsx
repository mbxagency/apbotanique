'use client';

export default function OptionalItems () {
  const optionalItems = [
    {
      name: 'Adega de Vinhos Electrolux para 12 Garrafas',
      description: 'Com até 18°C e Controle de Temperatura - ACB12',
      icon: '🍷'
    },
    {
      name: 'Cervejeira Consul Titanium',
      description: 'Para 75 latas com display digital',
      icon: '🍺'
    },
    {
      name: 'TV 65" LG',
      description: 'Televisor de alta definição',
      icon: '📺'
    },
    {
      name: 'TV 49" LG',
      description: 'Televisor secundário',
      icon: '📺'
    },
    {
      name: 'Cooktop Brastemp 4 Bocas',
      description: 'Duplachama Timer Touch Preto',
      icon: '🔥'
    },
    {
      name: 'Cama Box',
      description: 'Cama confortável para o quarto',
      icon: '🛏️'
    },
    {
      name: 'Coifa de Parede Electrolux 90CVS',
      description: '3 Velocidades',
      icon: '💨'
    },
    {
      name: 'Sofá 4 Lugares Retrátil e Reclinável',
      description: 'Cinza',
      icon: '🛋️'
    },
    {
      name: 'Forno de Embutir Elétrico Brastemp',
      description: '84 Litros Cor Inox Espelhado com Convecção e Timer Touch',
      icon: '🔥'
    },
    {
      name: 'Micro-ondas de Embutir 34L Philco',
      description: 'Espelhado',
      icon: '⚡'
    },
    {
      name: 'Aquecedor De Água À Gás Lorenzetti',
      description: 'Lz 1600 Dei Inox 15 Litros Digital Bivolt',
      icon: '🚿'
    },
    {
      name: 'Geladeira Brastemp Frost Free Duplex',
      description: '375 litros',
      icon: '❄️'
    },
    {
      name: 'Lava & Seca 11 Kg Samsung',
      description: 'Inox',
      icon: '🧺'
    },
    {
      name: 'Mesa | Banquetas para Churrasqueira',
      description: 'Móveis para área gourmet',
      icon: '🍖'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título e Descrição */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Itens Opcionais
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Este elegante apartamento de 2 quartos, incluindo uma suíte, está à venda e é uma excelente
              oportunidade para quem busca conforto, estilo e uma localização privilegiada. Situado na
              Av. Prefeito Maurício Fruet, 1270, no bairro Jardim Botânico, este imóvel oferece uma área
              privativa de ~80 m² e uma área total de ~114 m², proporcionando um espaço ideal para
              toda a família.
            </p>
          </div>


          {/* Lista de Itens Opcionais */}
          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
              Itens que podem ficar no apartamento (opcional)
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {optionalItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white text-center">
              <p className="text-lg font-semibold mb-2">
                Se você está em busca de um apartamento que une conforto, elegância e uma localização privilegiada,
                este é o imóvel perfeito para você e sua família.
              </p>
              <p className="text-green-100">
                Não perca a oportunidade de adquirir este belíssimo apartamento no Residencial Botanique.
                Agende uma visita e prepare-se para se encantar com cada detalhe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 