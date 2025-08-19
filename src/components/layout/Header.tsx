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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
