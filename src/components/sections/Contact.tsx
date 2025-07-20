'use client';

interface ContactProps {
  onWhatsAppClick?: () => void;
  onPhoneClick?: () => void;
}

export default function Contact({ onWhatsAppClick, onPhoneClick }: ContactProps) {
  const handleWhatsAppClick = () => {
    const phone = '5541991328657';
    const message = encodeURIComponent(`Olá! Tenho interesse no apartamento do Residencial Botanique, no Jardim Botânico. Gostaria de agendar uma visita e saber mais informações. Código: ARA179`);
    
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
    
    if (onWhatsAppClick) {
      onWhatsAppClick();
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5541991328657';
    
    if (onPhoneClick) {
      onPhoneClick();
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">Entre em Contato</h2>
            
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
                  <h3 className="text-2xl font-bold mb-2 font-heading">Arau Imóveis</h3>
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
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
              >
                <span className="text-2xl">💬</span>
                <span>WhatsApp</span>
              </button>
              <button 
                onClick={handlePhoneClick}
                className="bg-white text-green-800 p-6 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
              >
                <span className="text-2xl">📞</span>
                <span>Ligar Agora</span>
              </button>
            </div>

            {/* Informações Adicionais */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">📱</span>
                  <span className="text-green-100">(41) 99132-8657</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">📧</span>
                  <span className="text-green-100">contato@arauimoveis.com.br</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">💼</span>
                  <span className="text-green-100">Especialista em Imóveis de Luxo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 