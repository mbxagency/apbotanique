'use client';

export default function Video () {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-heading">
              Conheça o Apartamento
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Veja em detalhes cada ambiente deste apartamento de 80m² no coração do Jardim Botânico
            </p>
          </div>

          {/* Video Container */}
          <div className="relative px-2 sm:px-4">
            <div className="bg-black rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-none"
                controls
                poster="/images/others/nova.avif"
                preload="metadata"
                playsInline
                controlsList="nodownload"
              >
                <source src="/images/others/botanique_arau.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-2 sm:px-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 md:p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-900 ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏠</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">80m² Bem Distribuídos</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Cada metro quadrado pensado para oferecer conforto e funcionalidade
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌿</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Sacada Generosa</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Uma das maiores sacadas do segmento para área gourmet e lazer
                </p>
              </div>
            </div>

            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📍</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Localização Premium</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  No coração do Jardim Botânico, uma das regiões mais nobres de Curitiba
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 sm:mt-10 md:mt-12 text-center px-4">
            <div className="bg-gradient-to-r from-green-500 to-green-600 inline-block p-1 rounded-xl sm:rounded-2xl">
              <div className="bg-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
                  Agende sua visita e conheça pessoalmente este apartamento!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
