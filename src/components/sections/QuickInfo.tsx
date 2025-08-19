'use client';

export default function QuickInfo () {
  const infoItems = [
    {icon: '📏', value: '~80m²', label: 'Área Privativa', color: 'text-green-600'},
    {icon: '🏠', value: '113m²', label: 'Área Total', color: 'text-blue-600'},
    {icon: '🛏️', value: '2', label: 'Quartos', color: 'text-purple-600'},
    {icon: '🛁', value: '1', label: 'Suíte', color: 'text-pink-600'},
    {icon: '🚗', value: '2', label: 'Vagas', color: 'text-orange-600'},
    {icon: '🚿', value: '2', label: 'Banheiros', color: 'text-indigo-600'},
    {icon: '🍽️', value: 'Área Gourmet', label: 'Sacada ampla', color: 'text-red-600'},
    {icon: '📄', value: 'R$ 1.050', label: 'IPTU Anual', color: 'text-teal-600'},
    {icon: '🏢', value: '2020', label: 'Primeiro Morador', color: 'text-cyan-600'}
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-heading">
            Características do Imóvel
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-body">
            Conheça todos os detalhes deste apartamento exclusivo
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-3 sm:gap-4 md:gap-6">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 text-center group border border-gray-100"
            >
              <div className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className={`text-xs sm:text-sm md:text-lg font-bold mb-1 sm:mb-2 ${item.color}`}>
                {item.value}
              </div>
              <div className="text-xs text-gray-600 font-body">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Admin Button */}
        <div className="text-center mt-8 p-4 bg-white rounded-xl shadow-lg border-2 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Portal Administrativo</p>
          <a
            href="/admin"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Acessar Portal Admin
          </a>
        </div>
      </div>
    </section>
  );
}
