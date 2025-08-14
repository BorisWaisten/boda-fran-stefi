'use client'
import React from 'react';
import { FaInstagram, FaGlobe, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GothicCross from './Invitation/GothicCross';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] w-full py-12 text-gray-300 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/trama.svg')] opacity-5"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Sección inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Logo Waisten Programación"
              width={40}
              height={40}
              className="w-10 h-10 select-none cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => window.open('https://www.waistenprogramacion.com.ar/', '_blank')}
            />
            <p className="text-xs text-gray-500">
              Desarrollado por{' '}
              <a 
                href="https://www.waistenprogramacion.com.ar/" 
                className="text-[#b8860b] hover:text-white underline transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Waisten Programación
              </a>
            </p>
          </div>
          
          <p className="text-xs text-gray-500 font-religiousBody">
            © 2025 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
