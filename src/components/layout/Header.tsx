'use client';

export default function Header () {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
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
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">CRECI: 9169</span>
            <a
              href="tel:+5541991328657"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              (41) 99132-8657
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 