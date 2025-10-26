'use client';

export default function PriceHighlight () {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-heading">
              OPORTUNIDADE ÚNICA!
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 font-body">
              <strong>UNIDADE PROMOCIONAL!</strong> Desconto exclusivo por tempo limitado
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-soft border-2 border-green-200">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 sm:p-8 rounded-full text-white text-3xl sm:text-4xl shadow-lg">
                $
              </div>

              <div className="text-center w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-heading">
                  Desconto de R$ 20.000
                </h3>

                {/* Preços com destaque */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 font-body">Preço Original</div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-400 line-through">R$ 789.000</div>
                  </div>

                  <div className="text-3xl sm:text-4xl text-red-500 animate-pulse font-bold">
                    ↓
                  </div>

                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-green-600 mb-1 sm:mb-2 font-body">Preço com Desconto</div>
                    <div className="text-3xl sm:text-4xl font-bold text-green-700">R$ 769.000</div>
                  </div>
                </div>

                {/* Destaque da economia */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 sm:p-6 rounded-lg sm:rounded-xl mb-4 sm:mb-6 text-white text-center">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                    <span className="text-lg sm:text-2xl font-bold font-heading">Economia de R$ 20.000</span>
                  </div>
                  <p className="text-green-100 font-body text-sm sm:text-base">
                    <strong>Não perca esta oportunidade única!</strong> Unidade promocional!
                  </p>
                </div>

                {/* Informações adicionais */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 max-w-2xl mx-auto">
                  <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-yellow-200">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-yellow-800 mb-2">
                      <span className="font-bold font-heading text-sm sm:text-base">Condomínio: R$ 254,10/mês</span>
                    </div>
                    <p className="text-center text-yellow-700 text-xs sm:text-sm font-body">
                      Um dos condomínios mais baratos de Curitiba!
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-blue-200">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 text-blue-800 mb-2">
                      <span className="font-bold font-heading text-sm sm:text-base">+ de R$ 90.000 em caixa</span>
                    </div>
                    <p className="text-center text-blue-700 text-xs sm:text-sm font-body">
                      Para obras de melhoria, pintura e manutenção
                    </p>
                  </div>
                </div>

                {/* Call to action */}
                <div className="bg-red-50 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-red-200 text-center max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-1 sm:gap-2 text-red-800 mb-2">
                    <span className="font-bold font-heading text-sm sm:text-base">Oferta por Tempo Limitado</span>
                  </div>
                  <p className="text-red-700 text-xs sm:text-sm font-body">
                    <strong>ÚLTIMA CHANCE!</strong> Não perca esta oportunidade única de economia!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
