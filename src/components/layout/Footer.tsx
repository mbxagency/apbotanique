'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/others/nova.avif" 
                alt="Arau Imóveis" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-xl font-bold text-green-400 font-heading">Arau Imóveis</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Apartamento de luxo no coração do Jardim Botânico, uma das regiões mais nobres de Curitiba.
            </p>
            <div className="flex space-x-4">
              <span className="text-green-400">📍</span>
              <span className="text-gray-300">Jardim Botânico, Curitiba - PR</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400 font-heading">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <span>🏢</span>
                <span>Arau Imóveis</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <span>(41) 99132-8657</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>(41) 99132-8657</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>contato@arauimoveis.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏛️</span>
                <span>CRECI: 9169</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400 font-heading">Informações</h3>
            <div className="space-y-2 text-gray-300">
              <div>🏠 80m² de área privativa</div>
              <div>🛏️ 2 quartos (1 suíte)</div>
              <div>🚗 2 vagas de garagem</div>
              <div>💰 R$ 729.000</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Residencial Botanique. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 