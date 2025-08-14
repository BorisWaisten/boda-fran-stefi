'use client';

import React from 'react';
import '../components.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GothicCross from './GothicCross';


const Invitation = () => {
  const informacion = [
    {
      title: 'CEREMONIA RELIGIOSA',
      day: 'Sábado 29 de Octubre',
      time: '16:30 hs',
      place: 'Parroquia Nuestra Señora del Carmen',
      location: 'Cañuelas, Buenos Aires',
      address: 'https://www.google.com/maps/place/Parroquia+Nuestra+Senora+Del+Carmen/@-35.0541043,-58.7615045,15z/data=!4m5!3m4!1s0x0:0x76d4ff8f39fb325d!8m2!3d-35.0541043!4d-58.7615044',
      description: 'Celebración del Sagrado Sacramento del Matrimonio',
      iconAnimation: {
        animate: {
          scale: [1, 1.1, 1],
          y: [0, -5, 0],
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
  ];

  return (
    <section className="relative z-10 text-center py-20 px-4 min-h-screen">
      {/* Fondo absoluto con la imagen - se mantiene dentro de la sección */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bodaF&S/foto1.jpeg"
          alt="Fondo ceremonial"
          fill
          className="object-fill"
          priority
        />
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>
      
      {/* Contenido sobre el fondo */}
      <div className="relative z-10">
        {/* Título principal con estilo gótico católico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <div className="relative">
            {/* Decoración gótica superior */}
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent"></div>
              <div className="mx-4">
                <GothicCross size={40} color="#b8860b" />
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent"></div>
            </div>
            
            <h2 className="font-gothicTitle text-4xl md:text-5xl lg:text-6xl text-[#f5f5dc] mb-4 tracking-wider">
              INVITACIÓN
            </h2>
            
            {/* Decoración gótica inferior */}
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent"></div>
              <div className="mx-4">
                <GothicCross size={40} color="#b8860b" />
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent"></div>
            </div>
          </div>
          
          <p className="font-religiousBody text-balance text-[#f5f5dc] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Con la bendición de Dios y el amor de nuestras familias, 
            los invitamos a compartir este momento tan especial en nuestras vidas
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {informacion.map((evento, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Tarjeta principal con estilo gótico católico */}
              <div className="relative overflow-hidden  bg-white/10 backdrop-blur-sm">
                
                <div className="relative z-10 p-8 md:p-12">
            

                  {/* Título del evento */}
                  <h3 className="font-religiousSubtitle text-white text-2xl md:text-3xl mb-6 tracking-wide border-b-2 border-[#b8860b] pb-4">
                    {evento.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="font-religiousBody text-balance text-white text-base md:text-lg mb-6 italic">
                    {evento.description}
                  </p>

                  {/* Fecha y hora con estilo elegante */}
                  <div className="p-6 mb-6">
                    <p className="font-religiousSubtitle text-white text-lg md:text-xl mb-2">
                      {evento.day}
                    </p>
                    <p className="font-gothicTitle text-white text-3xl md:text-4xl tracking-wider">
                      {evento.time}
                    </p>
                  </div>

                  {/* Lugar */}
                  <div className="mb-8">
                    <p className="font-religiousSubtitle text-white text-xl md:text-2xl mb-3">
                      {evento.place}
                    </p>
                    <div className="space-y-2">
                      <p className="font-religiousBody text-white text-base md:text-lg">
                        {evento.location}
                      </p>
                    </div>
                  </div>

                  {/* Botón con estilo gótico */}
                  <button
                    className="relative overflow-hidden bg-gradient-to-r rounded-full from-[#b8860b]  to-[#b8860b] hover:from-[#b8860b] hover:to-[#b8860b] text-white font-religiousSubtitle px-8 py-4 text-base md:text-lg transition-all duration-300 group border-2 border-white shadow-lg"
                    onClick={() => window.open(evento.address)}
                  >
                    <span className="relative z-10">Cómo Llegar</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out"></div>
                  </button>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mensaje final con estilo gótico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white p-8 max-w-3xl mx-auto relative">
            {/* Decoración superior */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-[#b8860b] rounded-full flex items-center justify-center">
                <GothicCross size={24} color="white" />
              </div>
            </div>
            
            <p className="font-religiousBody text-balance text-white text-lg md:text-xl italic mb-3">
              &ldquo;Lo que Dios ha unido, que no lo separe el hombre&rdquo;
            </p>
            <p className="font-religiousSubtitle text-[#b8860b] text-sm md:text-base">
              - Marcos 10:9
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
