'use client';

export default function Realtor () {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-soft border border-green-100">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="bg-white p-6 rounded-full shadow-lg">
                  <img
                    src="/images/others/nova.avif"
                    alt="Arau Imóveis"
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Arau Imóveis
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Profissional credenciado com anos de experiência no mercado imobiliário de Curitiba.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                    <span className="text-sm font-semibold text-gray-700">CRECI: 9169</span>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                    <span className="text-sm font-semibold text-gray-700">(41) 99132-8657</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
