'use client';

import {useState, useEffect} from 'react';

export default function UrgencyBanner () {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return {...prev, seconds: prev.seconds - 1};
        } else if (prev.minutes > 0) {
          return {...prev, minutes: prev.minutes - 1, seconds: 59};
        } else if (prev.hours > 0) {
          return {hours: prev.hours - 1, minutes: 59, seconds: 59};
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 text-center animate-pulse-soft">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🔥</span>
          <span className="font-bold">PROMOÇÃO ESPECIAL</span>
          <span className="text-xl">🔥</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm">Termina em:</span>
          <div className="flex space-x-1">
            <div className="bg-white/20 px-2 py-1 rounded text-sm font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-white/20 px-2 py-1 rounded text-sm font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <span>:</span>
            <div className="bg-white/20 px-2 py-1 rounded text-sm font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm">Economia de R$ 50.000</span>
          <span className="text-xl">💰</span>
        </div>
      </div>
    </div>
  );
}
