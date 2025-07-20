'use client';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-900 to-green-800 text-white z-50 px-4 py-3 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold text-green-100 tracking-wider relative px-3 py-2 rounded-lg border border-green-100/30 bg-green-100/10 transition-all duration-300 font-display">
          Residencial Botanique
          <span className="text-xs ml-1 text-green-100/80 animate-pulse">•</span>
        </h1>
        <div className="text-right">
          <div className="text-base md:text-lg font-bold text-green-100">R$ 729.000</div>
          <div className="text-xs opacity-90">Condomínio: R$ 254,10</div>
        </div>
      </div>
    </header>
  );
} 