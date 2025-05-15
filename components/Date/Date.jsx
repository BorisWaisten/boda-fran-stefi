'use client';
import Countdown from "./Countdown";
import '../components.css';

export default function Date() {
  return (
    <div className="relative flex flex-col text-center justify-center items-center space-y-6 pt-6 md:pt-12 lg:pt-16">
      
      {/* Título */}
      <div className="text-primary font-centuryBold  sm:text-xl md:text-2xl lg:text-2xl tracking-wider">
        <h2>¡QUEREMOS CELEBRAR CON VOS!</h2>
      </div>

      {/* Fecha */}
      <div className="border-y border-[rgb(181,137,52)] py-2 md:py-4 w-[55%] sm:w-[42%] md:w-[22%] max-w-[600px]">
        <div className="flex justify-center items-center gap-2 text-black font-retro text-2xl sm:text-4xl md:text-6xl">
          <span className="text-[2.5rem] sm:text-[4rem] md:text-[5rem]">15</span>
          <span className="text-primary font-centuryBold text-2xl md:text-4xl">•</span>
          <span className="italic text-[2.5rem] sm:text-[4rem] md:text-[5rem]">Noviembre</span>
          <span className="text-primary font-centuryBold text-2xl md:text-4xl">•</span>
          <span className="text-[2.5rem] sm:text-[4rem] md:text-[5rem]">2025</span>
        </div>
      </div>

      {/* Countdown */}
      <div className="w-full px-4 sm:px-8 md:px-16">
        <Countdown />
      </div>
    </div>
  );
}
