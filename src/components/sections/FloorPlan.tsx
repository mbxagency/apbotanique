'use client';

export default function FloorPlan () {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Planta do Apartamento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Conheça a distribuição inteligente dos 80m² que oferecem conforto e funcionalidade
            </p>
          </div>

          <div className="flex flex-col items-center space-y-12">
            {/* Imagem da Planta */}
            <div className="relative max-w-2xl w-full">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <img
                  src="/images/others/planta.jpeg"
                  alt="Planta do apartamento Botanique"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold font-heading">
                80m²
              </div>
            </div>

            {/* Informações da Planta */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
              <div className="bg-white p-6 rounded-xl shadow-soft text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <div className="text-gray-600">Quartos</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-soft text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <div className="text-gray-600">Suíte</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-soft text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <div className="text-gray-600">Vagas</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-soft text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
                <div className="text-gray-600">Banheiros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 