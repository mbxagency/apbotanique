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
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-xl shadow-soft">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-green-600 text-xl">🏛️</span>
                      <span className="font-bold text-gray-900">CRECI: 9169</span>
                    </div>
                    <p className="text-sm text-gray-600">Profissional Credenciado</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-soft">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-green-600 text-xl">📱</span>
                      <span className="font-bold text-gray-900">(41) 99132-8657</span>
                    </div>
                    <p className="text-sm text-gray-600">WhatsApp e Telefone</p>
                  </div>
                </div>
                
                <div className="bg-green-100 p-4 rounded-xl">
                  <div className="flex items-center justify-center gap-2 text-green-800">
                    <span className="text-xl">💼</span>
                    <span className="font-bold">Especialista em Imóveis de Luxo</span>
                  </div>
                  <p className="text-green-700 text-sm mt-2">
                    Conheça o apartamento do Residencial Botanique com um profissional experiente 
                    que entende suas necessidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 