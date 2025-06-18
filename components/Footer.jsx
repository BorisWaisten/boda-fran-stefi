'use client'
import React from 'react';
import { FaInstagram, FaGlobe, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="bg-[#253439] w-full py-6 text-gray-400">
      <div className="w-full flex flex-row items-center justify-center gap-4">
        <Image
          src="/logoWaisten.svg"
          alt="Logo Waisten Programación"
          width={56}
          height={56}
          className="w-16 scale-[1.5] select-none mb-0 cursor-pointer"
          priority
          onClick={() => window.open('https://www.waistenprogramacion.com.ar/', '_blank')}
        />
        <p className="text-sm text-center">Desarrollado por <a href="https://www.instagram.com/waistenprogramacion/" className="underline hover:text-white italic transition">WaistenProgramacion</a> ©2025</p>
      </div>
    </footer>
  );
};

export default Footer;
