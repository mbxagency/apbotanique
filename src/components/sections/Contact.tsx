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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading text-white">🔥 RESERVE AGORA - UNIDADE PROMOCIONAL!</h2>

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
                📱 WhatsApp
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
                📞 Telefone
              </a>
            </div>

            {/* Informações Adicionais */}
            <div className="mt-8 text-green-100">
              <p className="text-lg mb-4">
                Agende sua visita e conheça pessoalmente este apartamento exclusivo!
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Jardim Botânico, Curitiba</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💰</span>
                  <span>R$ 729.000,00</span>
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
