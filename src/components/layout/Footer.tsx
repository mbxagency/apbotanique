'use client';

export default function Footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Informações da Imobiliária */}
          <div>
            <h3 className="text-xl font-bold mb-4">Arau Imóveis</h3>
            <p className="text-gray-300 mb-2">
              Especialistas em imóveis de luxo em Curitiba
            </p>
            <p className="text-gray-300 mb-2">
              CRECI: 9169
            </p>
            <p className="text-gray-300">
              (41) 99132-8657
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre o Apartamento
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-white transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="text-gray-300 hover:text-white transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>📱 (41) 99132-8657</p>
              <p>📧 contato@arauimoveis.com.br</p>
              <p>📍 Jardim Botânico, Curitiba - PR</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Arau Imóveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 