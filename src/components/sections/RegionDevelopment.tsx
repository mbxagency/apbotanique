'use client';

export default function RegionDevelopment () {
  const developments = [
    {
      title: 'Parc Autódromo',
      description: 'Um dos maiores parques urbanos de Curitiba, com 1,5 milhão de m² de área verde. O Parc Autódromo oferece trilhas para caminhada, ciclovias, quadras esportivas, playgrounds e áreas de convivência. Localizado a apenas 2km do apartamento, é perfeito para atividades ao ar livre e momentos de lazer em família.',
      icon: '🌳',
      features: ['Trilhas para caminhada', 'Ciclovias', 'Quadras esportivas', 'Playgrounds'],
      color: 'green'
    },
    {
      title: 'Novo Terminal do Capão da Imbuia',
      description: 'O novo terminal de ônibus do Capão da Imbuia, em fase final de construção, vai revolucionar o transporte público da região. Com estrutura moderna e integração com várias linhas de ônibus, facilitará o deslocamento para todas as regiões de Curitiba. A apenas 1,5km do apartamento, oferecerá ainda mais conveniência para os moradores.',
      icon: '🚌',
      features: ['Múltiplas linhas de ônibus', 'Integração com BRT', 'Operação 24h', 'Acessibilidade completa'],
      color: 'blue'
    },
    {
      title: 'Valorização Imobiliária',
      description: 'A região do Jardim Botânico está em constante valorização, com novos empreendimentos comerciais e residenciais sendo construídos. A proximidade com o Parc Autódromo e o novo terminal de ônibus torna esta área ainda mais atrativa para investimentos imobiliários, garantindo excelente potencial de valorização para o futuro.',
      icon: '📈',
      features: ['Novos empreendimentos', 'Comércio em expansão', 'Valorização crescente', 'Localização premium'],
      color: 'purple'
    }
  ];

  const infrastructure = [
    {
      title: 'Infraestrutura Comercial',
      description: 'O Jardim Botânico possui uma infraestrutura comercial completa e diversificada, com mais de 150 estabelecimentos comerciais na região. A proximidade com o apartamento garante praticidade para o dia a dia, com opções de qualidade para todas as necessidades.',
      icon: '🛒',
      features: ['25+ mercados e supermercados', '18 padarias e confeitarias', '45+ restaurantes e lanchonetes', '12 farmácias e drogarias'],
      color: 'orange'
    },
    {
      title: 'Educação de Qualidade',
      description: 'A região oferece excelentes opções educacionais, desde escolas infantis até universidades renomadas. Com fácil acesso a instituições públicas e particulares, o Jardim Botânico é ideal para famílias que valorizam a educação.',
      icon: '🎓',
      features: ['8 escolas infantis', '12 escolas de ensino fundamental', '6 colégios de ensino médio', '3 universidades próximas'],
      color: 'indigo'
    },
    {
      title: 'Saúde e Bem-estar',
      description: 'A região conta com uma rede completa de serviços de saúde, incluindo hospitais, clínicas especializadas e unidades básicas de saúde. A proximidade com importantes centros médicos garante tranquilidade para os moradores.',
      icon: '🏥',
      features: ['3 hospitais principais', '15+ clínicas médicas', '8 consultórios odontológicos', '6 academias e centros esportivos'],
      color: 'red'
    },
    {
      title: 'Transporte e Mobilidade',
      description: 'O Jardim Botânico possui excelente conectividade com toda Curitiba através de uma rede de transporte público eficiente. Com múltiplas linhas de ônibus e integração com o sistema BRT, o deslocamento é rápido e prático.',
      icon: '🚇',
      features: ['12 linhas de ônibus', 'Integração BRT', '3 terminais próximos', 'Acesso fácil às principais vias'],
      color: 'teal'
    }
  ];

  const statistics = [
    { label: 'Habitantes', value: '45.000+', icon: '👥' },
    { label: 'Domicílios', value: '15.000+', icon: '🏠' },
    { label: 'IDH', value: '0,850 (alto)', icon: '📊' },
    { label: 'Valorização Anual', value: '12%', icon: '📈' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-50 border-green-200 text-green-800',
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      red: 'bg-red-50 border-red-200 text-red-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Desenvolvimento da Região
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Conheça os principais desenvolvimentos e infraestrutura que tornam o Jardim Botânico uma das melhores regiões de Curitiba
            </p>
          </div>

          {/* Principais Desenvolvimentos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-heading">
              🚀 Principais Desenvolvimentos
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {developments.map((item, index) => (
                <div key={index} className={`p-6 rounded-2xl border-2 ${getColorClasses(item.color)}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="text-xl font-bold font-heading">{item.title}</h4>
                  </div>
                  <p className="text-sm mb-4 font-body leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <span className="text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Infraestrutura */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-heading">
              🏗️ Infraestrutura Completa
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {infrastructure.map((item, index) => (
                <div key={index} className={`p-6 rounded-2xl border-2 ${getColorClasses(item.color)}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="text-xl font-bold font-heading">{item.title}</h4>
                  </div>
                  <p className="text-sm mb-4 font-body leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <span className="text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Estatísticas do Bairro */}
          <div className="bg-white p-8 rounded-2xl shadow-soft border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-heading">
              📊 Estatísticas do Bairro
            </h3>
            <p className="text-gray-600 text-center mb-8 font-body">
              O Jardim Botânico é um dos bairros mais valorizados de Curitiba, com indicadores socioeconômicos superiores à média da cidade. A região oferece excelente qualidade de vida e infraestrutura completa.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-green-600 font-heading">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 