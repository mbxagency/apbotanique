'use client';

export default function PriceHighlight () {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-soft border border-green-100">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="bg-green-500 p-6 rounded-full text-white text-3xl">
                🏷️
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-display">
                  Preço Abaixo da Média do Mercado
                </h2>
                
                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="text-center">
                                <div className="text-2xl font-bold text-green-700">R$ 6.451/m²</div>
            <div className="text-sm text-gray-700">Preço do Apartamento</div>
                  </div>
                  
                  <div className="text-2xl text-red-500 animate-bounce">
                    ↓
                  </div>
                  
                  <div className="text-center">
                                <div className="text-2xl font-bold text-red-600">R$ 8.166/m²</div>
            <div className="text-sm text-gray-700">Média da região</div>
                  </div>
                </div>
                
                <div className="bg-green-100 p-4 rounded-xl mb-6">
                                  <div className="flex items-center justify-center gap-2 text-green-800">
                  <span className="text-xl">💰</span>
                  <span className="font-bold">Economia de R$ 1.715/m²</span>
                  <span className="text-sm font-semibold">(21% abaixo da média)</span>
                </div>
                </div>
                
                <div className="bg-yellow-100 p-4 rounded-xl mb-6 border border-yellow-300">
                  <div className="flex items-center justify-center gap-2 text-yellow-800">
                    <span className="text-xl">🏆</span>
                    <span className="font-bold">Condomínio: R$ 254,10/mês</span>
                  </div>
                  <p className="text-center text-yellow-700 text-sm mt-2">
                    Um dos condomínios mais baratos de Curitiba!
                  </p>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-xl mb-6 border border-blue-300">
                  <div className="flex items-center justify-center gap-2 text-blue-800 mb-2">
                    <span className="text-xl">💰</span>
                    <span className="font-bold">+ de R$ 90.000 em caixa</span>
                  </div>
                  <p className="text-center text-blue-700 text-sm">
                    Para obras de melhoria, pintura e manutenção
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Este apartamento está sendo oferecido por um preço excepcional, 
                  representando uma economia significativa em relação ao valor de mercado 
                  da região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 