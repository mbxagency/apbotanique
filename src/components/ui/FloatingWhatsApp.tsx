'use client';

interface FloatingWhatsAppProps {
  onClick?: () => void;
}

export default function FloatingWhatsApp ({onClick}: FloatingWhatsAppProps) {
  const handleClick = () => {
    const phone = '5541991328657';
    const message = encodeURIComponent('Olá! Tenho interesse no apartamento do Residencial Botanique, no Jardim Botânico. Gostaria de saber mais informações. Código: ARA179.');

    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');

    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
          💬
        </span>
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Falar no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
}
