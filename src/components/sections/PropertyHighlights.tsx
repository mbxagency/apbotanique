'use client';

export default function PropertyHighlights () {
  const highlights = [
    {
      title: 'Vista para Serra do Mar',
      description: 'Desfrute de uma vista deslumbrante da Serra do Mar diretamente da sua sacada',
      icon: '🏔️',
      color: 'blue'
    },
    {
      title: '700m do Jardim Botânico',
      description: 'Localização privilegiada a apenas 700 metros do famoso Jardim Botânico de Curitiba',
      icon: '🌳',
      color: 'green'
    },
    {
      title: 'Cozinha Americana',
      description: 'Cozinha integrada à sala de estar, perfeita para receber amigos e família',
      icon: '🍳',
      color: 'orange'
    },
    {
      title: 'Churrasqueira',
      description: 'Sacada com churrasqueira a carvão para momentos especiais',
      icon: '🔥',
      color: 'red'
    },
    {
      title: 'Academia',
      description: 'Condomínio com academia equipada para manter sua saúde em dia',
      icon: '💪',
      color: 'purple'
    },
    {
      title: 'Móveis Planejados',
      description: 'Todos os ambientes projetados por arquiteta com móveis planejados',
      icon: '🪑',
      color: 'indigo'
    },
    {
      title: 'Melhor Custo-Benefício',
      description: 'Um dos condomínios mais baratos de Curitiba com excelente localização e qualidade',
      icon: '💰',
      color: 'yellow'
    },
    {
      title: 'Portaria Remota',
      description: 'Sistema moderno de portaria remota para maior segurança e praticidade',
      icon: '🏢',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100',
      green: 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100',
      orange: 'bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100',
      red: 'bg-red-50 border-red-200 text-red-800 hover:bg-red-100',
      purple: 'bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100',
      teal: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Destaques do Imóvel
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Conheça os diferenciais exclusivos que tornam este apartamento único
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${getColorClasses(highlight.color)}`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-bold mb-3 font-heading">{highlight.title}</h3>
                  <p className="text-sm leading-relaxed font-body">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Destaque Especial */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 font-heading">
                🏆 Apartamento Excepcional
              </h3>
              <p className="text-lg mb-6 font-body">
                Este apartamento combina localização privilegiada, acabamentos de qualidade e um dos melhores custos-benefício de Curitiba. 
                Ideal para quem busca conforto, praticidade e valorização imobiliária.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-xl">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-bold">Localização Premium</div>
                  <div className="text-sm text-green-100">Jardim Botânico</div>
                </div>
                <div className="bg-white/20 p-4 rounded-xl">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-bold">Melhor Preço</div>
                  <div className="text-sm text-green-100">R$ 729.000</div>
                </div>
                <div className="bg-white/20 p-4 rounded-xl">
                  <div className="text-2xl mb-2">🏢</div>
                  <div className="font-bold">Condomínio Baixo</div>
                  <div className="text-sm text-green-100">R$ 254,10/mês</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 