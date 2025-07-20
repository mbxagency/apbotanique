'use client';

export default function Header () {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-green-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/others/nova.avif"
              alt="Arau Imóveis"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Arau Imóveis</h1>
              <p className="text-sm text-gray-600">Especialistas em Imóveis de Luxo</p>
            </div>
          </div>
          
          {/* Property Information - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="text-center bg-gray-50 px-4 py-2 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 font-heading">Residencial Botanique</h2>
              <div className="text-sm text-gray-600">Jardim Botânico • Curitiba</div>
            </div>
            <div className="text-center bg-green-50 px-4 py-2 rounded-lg border border-green-200">
              <div className="text-xl font-bold text-green-700">R$ 729.000</div>
              <div className="text-xs text-green-600 font-semibold">Preço com Desconto</div>
            </div>
            <div className="text-center bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
              <div className="text-sm font-semibold text-blue-700">Condomínio: R$ 254,10</div>
              <div className="text-xs text-blue-600">Taxa Mensal</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">CRECI: 9169</span>
            <a
              href="tel:+5541991328657"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              (41) 99132-8657
            </a>
          </div>
        </div>
        
        {/* Property Information - Mobile */}
        <div className="md:hidden py-3 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="text-center bg-white px-3 py-2 rounded-lg shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 font-heading">Residencial Botanique</h2>
              <div className="text-xs text-gray-600">Jardim Botânico • Curitiba</div>
            </div>
            <div className="text-center bg-green-50 px-3 py-2 rounded-lg border border-green-200">
              <div className="text-base font-bold text-green-700">R$ 729.000</div>
              <div className="text-xs text-green-600 font-semibold">Preço</div>
            </div>
            <div className="text-center bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
              <div className="text-xs font-semibold text-blue-700">Cond: R$ 254,10</div>
              <div className="text-xs text-blue-600">Mensal</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
