'use client';

export default function FloorPlan() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Planta do Apartamento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça a distribuição inteligente dos 80m² que oferecem conforto e funcionalidade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagem da Planta */}
            <div className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <img 
                  src="/images/others/planta.jpeg" 
                  alt="Planta do apartamento Botanique" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                80m²
              </div>
            </div>

            {/* Informações da Planta */}
            <div className="space-y-8">
              {/* Destaque da Sacada */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🏆</span>
                  <h3 className="text-2xl font-bold">Uma das Maiores Sacadas</h3>
                </div>
                <p className="text-green-100 text-lg">
                  Destaque-se no segmento com uma das maiores sacadas de Curitiba, 
                  oferecendo espaço generoso para área gourmet e lazer ao ar livre.
                </p>
              </div>

              {/* Características Principais */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🍳</span>
                    <h4 className="text-xl font-bold text-gray-900">Cozinha Americana</h4>
                  </div>
                  <p className="text-gray-600">
                    Integrada à sala, proporciona fluidez e modernidade ao ambiente, 
                    ideal para receber amigos e família.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🔄</span>
                    <h4 className="text-xl font-bold text-gray-900">Espaço Fluido</h4>
                  </div>
                  <p className="text-gray-600">
                    Distribuição inteligente que conecta todos os ambientes, 
                    criando sensação de amplitude e conforto.
                  </p>
                </div>
              </div>

              {/* Composição Detalhada */}
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Composição do Apartamento</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 text-lg">🛏️</span>
                    <div>
                      <div className="font-semibold text-blue-900">2 Quartos</div>
                      <div className="text-sm text-blue-700">1 Suíte + 1 Quarto</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 text-lg">🚿</span>
                    <div>
                      <div className="font-semibold text-blue-900">2 Banheiros</div>
                      <div className="text-sm text-blue-700">Completos</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 text-lg">🍽️</span>
                    <div>
                      <div className="font-semibold text-blue-900">Cozinha</div>
                      <div className="text-sm text-blue-700">Americana Integrada</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 text-lg">🌿</span>
                    <div>
                      <div className="font-semibold text-blue-900">Sacada</div>
                      <div className="text-sm text-blue-700">Área Gourmet</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefícios */}
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                <h4 className="text-xl font-bold text-yellow-800 mb-4">Por que escolher esta planta?</h4>
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Melhor aproveitamento do espaço</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Iluminação natural em todos os ambientes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Ventilação cruzada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Privacidade entre os quartos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 