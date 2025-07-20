'use client';

export default function About () {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Detalhes do Condomínio
            </h2>
            <p className="text-lg text-gray-600">
              Transparência total sobre os valores e benefícios
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Coluna Esquerda - Valores Fixos */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Valores Fixos</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Quota Mensal</span>
                    <span className="font-bold">R$ 231,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fundo de Reserva</span>
                    <span className="font-bold">R$ 23,10</span>
                  </div>
                  <div className="border-t border-white/30 pt-3 mt-3">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Fixo</span>
                      <span>R$ 254,10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Consumo - Última Fatura</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Taxa de Água</span>
                    <span className="font-bold text-blue-900">R$ 101,92</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700">Gás - Consumo</span>
                    <span className="font-bold text-blue-900">R$ 133,08</span>
                  </div>
                  <div className="border-t border-blue-300 pt-3 mt-3">
                    <div className="flex justify-between items-center font-bold text-blue-900">
                      <span>Total Variável</span>
                      <span>R$ 235,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Resumo e Benefícios */}
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-yellow-800 mb-2">Melhor Custo-Benefício</h3>
                  <p className="text-yellow-700">
                    Um dos condomínios mais baratos de Curitiba com excelente localização
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">+ de R$ 90.000</h3>
                  <p className="text-green-700">
                    Em caixa para obras de melhoria, pintura e manutenção
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4 text-center">Total Geral Mensal</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">R$ 489,10</div>
                  <p className="text-gray-300 text-sm">
                    Valor total incluindo fixo + variável
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">🏆 Condomínio Excepcional</h3>
            <p className="text-lg mb-4">
              Com apenas R$ 254,10 de taxa fixa mensal, este é um dos condomínios mais acessíveis 
              de Curitiba, oferecendo excelente custo-benefício em uma das melhores localizações da cidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Valor Acessível</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Localização Premium</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Infraestrutura Completa</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Segurança 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 