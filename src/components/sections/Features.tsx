export default function Features () {
  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🔥 OPORTUNIDADE ÚNICA - Diferenciais e Infraestrutura
        </h2>

        {/* Detalhes do condomínio */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Detalhes do Condomínio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">R$ 254,10</div>
              <div className="text-sm text-gray-600">Total Mensal</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">R$ 231,00</div>
              <div className="text-sm text-gray-600">Quota Mensal</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600">R$ 23,10</div>
              <div className="text-sm text-gray-600">Fundo de Reserva</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">+R$ 90.000</div>
              <div className="text-sm text-gray-600">Em caixa para obras</div>
            </div>
          </div>
        </div>

        {/* Infraestrutura */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Academia Completa</h4>
            <p className="text-gray-600">
              Academia bem equipada para manter sua saúde e bem-estar em dia.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Áreas Comuns</h4>
            <p className="text-gray-600">
              Salão de festas e terraço para momentos especiais com família e amigos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Sacada Ampliada</h4>
            <p className="text-gray-600">
              Uma das maiores sacadas da cidade no segmento, com churrasqueira a carvão.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Cozinha Gourmet</h4>
            <p className="text-gray-600">
              Cozinha americana integrada à sala, perfeita para receber amigos e família.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Móveis Planejados</h4>
            <p className="text-gray-600">
              Todos os ambientes projetados por arquiteta com móveis planejados.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Portaria Remota</h4>
            <p className="text-gray-600">
              Sistema moderno de portaria remota para maior segurança e praticidade.
            </p>
          </div>
        </div>

        {/* Itens que podem ficar no apartamento */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Itens que Podem Ficar no Apartamento (Opcional)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Adega de Vinhos Electrolux para 12 Garrafas</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Cervejeira Consul Titanium para 75 latas</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">TV 65" LG</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">TV 49" LG</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Cooktop Brastemp 4 Bocas Duplachama</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Cama Box</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Coifa de Parede Electrolux 90CVS</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Sofá 4 Lugares Retrátil e Reclinável</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Forno de Embutir Elétrico Brastemp 84L</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Micro-ondas de Embutir 34L Philco</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Aquecedor De Água À Gás Lorenzetti</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Geladeira Brastemp Frost Free 375L</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Lava & Seca 11 Kg Samsung Inox</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
              <span className="text-sm">Mesa e Banquetas para Churrasqueira</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 