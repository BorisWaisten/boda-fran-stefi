'use client'
import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2025-11-15T00:00:00');
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        DIAS: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(3, '0'),
        HORAS: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        MINUTOS: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      };
    } else {
      timeLeft = {
        DIAS: '000',
        HORAS: '00',
        MINUTOS: '00',
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const isWeddingDay = timeLeft.DIAS === '000' && timeLeft.HORAS === '00' && timeLeft.MINUTOS === '00';

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div 
      key={interval} 
      className="relative text-black overflow-hidden bg-gradient-to-r from-[#e6c976] via-[#C4A24D] to-[#8f7537] rounded-lg py-2 w-[5rem] sm:w-[7rem] md:w-[8rem] lg:w-[7rem] text-center font-centuryBold mx-2 shadow-lg group"
    >
      <span className="block sm:text-3xl lg:text-2xl ">
        {timeLeft[interval]}
      </span>
      <span className="block sm:text-lg md:text-xl lg:text-2xl ">
        {interval}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
    </div>
  ));

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
      {isWeddingDay ? (
        <span className="text-2xl text-primary">¡Es el día de la boda!</span>
      ) : (
        timerComponents
      )}
    </div>
  );
}
