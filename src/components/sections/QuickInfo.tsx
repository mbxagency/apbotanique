'use client';

export default function QuickInfo () {
  const infoItems = [
    { icon: '📏', value: '~80m²', label: 'Área Privativa' },
    { icon: '🏠', value: '113m²', label: 'Área Total' },
    { icon: '🛏️', value: '2', label: 'Quartos' },
    { icon: '🛁', value: '1', label: 'Suíte' },
    { icon: '🚗', value: '2', label: 'Vagas' },
    { icon: '🚿', value: '2', label: 'Banheiros' },
    { icon: '🍽️', value: 'Área Gourmet', label: 'Sacada ampla' },
    { icon: '📄', value: 'R$ 1.050', label: 'IPTU Anual' },
    { icon: '🏢', value: '2020', label: 'Primeiro Morador' }
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-3 md:gap-4">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 md:p-4 rounded-xl shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className="text-xl md:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-sm md:text-lg font-bold text-green-600 mb-1">
                {item.value}
              </div>
              <div className="text-xs text-gray-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 