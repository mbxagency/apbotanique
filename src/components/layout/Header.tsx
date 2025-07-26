import Link from 'next/link';

export default function Header () {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Banner Superior com Informações do Imóvel */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="text-center md:text-left">
                              <h1 className="text-lg md:text-xl font-bold">
                  APARTAMENTO À VENDA
                </h1>
              <p className="text-sm text-green-100">
                Jardim Botânico, Curitiba - PR
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center">
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <p className="text-xs text-green-100">Preço</p>
                <p className="text-lg font-bold">
                  R$ 729.000
                </p>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <p className="text-xs text-green-100">Condomínio</p>
                <p className="text-lg font-bold">R$ 254</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação Principal */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🏠</span>
              <span className="text-xl font-bold text-gray-900">Botanique</span>
            </Link>

            {/* Links de Navegação */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#sobre"
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                Sobre
              </Link>
              <Link
                href="#galeria"
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                Galeria
              </Link>
              <Link
                href="#localizacao"
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                Localização
              </Link>
              <Link
                href="#contato"
                className="text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                Contato
              </Link>
            </div>

            {/* Botão de Contato */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://wa.me/5541991328657?text=Olá! Tenho interesse no apartamento do Residencial Botanique, no Jardim Botânico. Gostaria de saber mais informações. Código: ARA179."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.trackWhatsAppClick) {
                    window.trackWhatsAppClick();
                  }
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
