'use client';

interface ContactProps {
  onWhatsAppClick?: () => void;
  onPhoneClick?: () => void;
}

export default function Contact ({onWhatsAppClick, onPhoneClick}: ContactProps) {
  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading text-white">RESERVE AGORA - UNIDADE PROMOCIONAL!</h2>

            {/* Informações do Corretor */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/others/nova.avif"
                      alt="Arau Imóveis"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">Arau Imóveis</h3>
                  <p className="text-lg mb-4 text-green-100">Profissional credenciado com anos de experiência</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <span className="text-sm font-semibold text-green-100">CRECI: 9169</span>
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <span className="text-sm font-semibold text-green-100">(41) 99132-8657</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botões de Contato */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5541991328657?text=Olá! Tenho interesse no apartamento do Residencial Botanique, no Jardim Botânico. Gostaria de saber mais informações. Código: ARA179."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.trackWhatsAppClick) {
                    window.trackWhatsAppClick();
                  }
                  if (onWhatsAppClick) {
                    onWhatsAppClick();
                  }
                }}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a
                href="tel:+5541991328657"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.trackPhoneCall) {
                    window.trackPhoneCall();
                  }
                  if (onPhoneClick) {
                    onPhoneClick();
                  }
                }}
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </a>
            </div>

            {/* Informações Adicionais */}
            <div className="mt-8 text-green-100">
              <p className="text-lg mb-4">
                Agende sua visita e conheça pessoalmente este apartamento exclusivo!
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span>Localização:</span>
                  <span>Jardim Botânico, Curitiba</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Preço:</span>
                  <span>R$ 769.000,00</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🏠</span>
                  <span>80m² - 2 Quartos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
