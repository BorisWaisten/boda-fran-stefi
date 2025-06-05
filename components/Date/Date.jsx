'use client';
import Countdown from "./Countdown";
import '../components.css';
import Image from "next/image";
import hojitasIcon from '@/public/hojitas.svg'

export default function Date() {
  return (
    <div className="relative text-primary flex flex-col text-center justify-center items-center space-y-6 pt-6 md:pt-12 lg:pt-16">
      
      <Image
        src={hojitasIcon}
        alt="decoración"
        className="absolute top-12 left-[-3.5vh] rotate-[75deg] w-[12vh] sm:w-[25vh] sm:left-[-7vh] md:left-[-7vh] md:w-[25vh] md:left-[-10vh] lg:w-[35vh] lg:left-[-10vh] xl:w-[35vh] xl:left-[-10vh] "
      />

            <Image
        src={hojitasIcon}
        alt="decoración"
        className="absolute top-12 right-[-2.5vh] rotate-[-10deg] w-[12vh] sm:right-[-5vh] sm:w-[25vh]  md:w-[25vh] lg:w-[35vh] lg:rigth-[-9vh] md:right-[-5vh] lg:right-[-7vh] xl:right-[-7vh] transform "
      />
      
      {/* Título */}
      <div className=" font-centuryBold  sm:text-xl md:text-2xl lg:text-2xl tracking-wider">
        <h2>¡QUEREMOS CELEBRAR CON VOS!</h2>
      </div>

      {/* Fecha */}
      <div className="border-y border-[rgb(181,137,52)] py-2 md:py-4 w-[55%] sm:w-[42%] md:w-[22%] max-w-[600px]">
        <div className="flex justify-center items-center gap-2  font-retro text-2xl sm:text-4xl md:text-6xl">
          <span className="text-[2.5rem] sm:text-[4rem] md:text-[5rem]">15</span>
          <span className=" font-centuryBold text-2xl md:text-4xl">•</span>
          <span className="italic text-[2.5rem] sm:text-[4rem] md:text-[5rem]">Noviembre</span>
          <span className=" font-centuryBold text-2xl md:text-4xl">•</span>
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
