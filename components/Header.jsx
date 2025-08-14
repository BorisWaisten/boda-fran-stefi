'use client';
import React from 'react';
import './components.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import GothicCross from './Invitation/GothicCross';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-40 bg-black/20 backdrop-blur-sm">
      <div className="relative w-full h-screen">
        <Image
          src="/bodaF&S/foto2.jpeg"
          alt="Header religioso"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority={true}
          className="w-full h-full "
        />

        {/* Overlay con estilo gótico católico */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        
        
        {/* Navegación móvil */}
        <MobileNav />
        

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 px-4">
          {/* Título principal con fuente gótica */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="font-gothicTitle text-4xl md:text-6xl lg:text-8xl mb-4 tracking-wider text-[#f5f5dc]">
              Stefi
            </h1>
            
            {/* Símbolo religioso entre nombres */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-1 h-8 bg-[#b8860b]/80 mx-4"></div>
              <span className="font-religiousSubtitle text-[#b8860b] text-2xl md:text-3xl lg:text-4xl mx-4">
                &
              </span>
              <div className="w-1 h-8 bg-[#b8860b]/80 mx-4"></div>
            </div>
            
            <h1 className="font-gothicTitle text-4xl md:text-6xl lg:text-8xl tracking-wider text-[#f5f5dc]">
              Fran
            </h1>
          </motion.div>

          {/* Subtítulo con estilo religioso */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
            className="text-center"
          >
            {/* Cruz gótica decorativa */}
            <div className="flex justify-center mb-4">
              <GothicCross size={35} color="#b8860b" />
            </div>
            
            <p className="font-religiousSubtitle text-[#b8860b] text-lg md:text-xl lg:text-2xl mb-2 tracking-wide">
              Unidos en el Amor de Dios
            </p>
            <p className="font-religiousBody text-[#f5f5dc] text-sm md:text-base lg:text-lg opacity-90">
              Invitan a celebrar su Sagrado Matrimonio
            </p>
          </motion.div>

          {/* Fecha con estilo gótico */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
            className="mt-8 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-none p-6 border-2 border-[#b8860b]/50">
              <p className="font-gothicTitle text-[#b8860b] text-2xl md:text-3xl lg:text-4xl tracking-wider">
                15.11.25
              </p>
              <p className="font-religiousBody text-[#f5f5dc] text-sm md:text-base mt-2 opacity-90">
                Sábado, 15 de Noviembre de 2025
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </header>
  );
};

export default Header;
