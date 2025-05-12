'use client';
import Countdown from "./Countdown";
import '../components.css';

export default function Date() {
  return (
    <div className="relative flex flex-col text-center justify-center items-center space-y-6 pt-6 md:pt-12 lg:pt-16">
      
      {/* Título */}
      <div className="text-[#FDB913] font-centuryBold  sm:text-xl md:text-2xl lg:text-2xl tracking-wider">
        <h2>¡QUEREMOS CELEBRAR CON VOS!</h2>
      </div>

      {/* Fecha */}
      <div className="border-y border-[rgb(253,185,19)] py-1 md:py-2 w-[45%] sm:w-[35%] md:w-[16%] max-w-[600px]">
        <div className="flex justify-center items-center gap-2  text-black font-retro text-xl sm:text-2xl md:text-3xl">
          <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem]">15</span>
          <span className="text-[#FDB913] font-centuryBold text-xl md:text-2xl">•</span>
          <span className="italic text-[2rem] sm:text-[2.5rem] md:text-[3rem]">Noviembre</span>
          <span className="text-[#FDB913] font-centuryBold text-xl md:text-2xl">•</span>
          <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem]">2025</span>
        </div>
      </div>

      {/* Countdown */}
      <div className="w-full px-4 sm:px-8 md:px-16">
        <Countdown />
      </div>
    </div>
  );
}
