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
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-heading">
            Características do Imóvel
          </h2>
          <p className="text-gray-600 font-body">
            Conheça todos os detalhes deste apartamento exclusivo
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4 md:gap-6">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group border border-gray-100"
            >
              <div className="text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className={`text-sm md:text-lg font-bold mb-2 ${item.color}`}>
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-body">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
