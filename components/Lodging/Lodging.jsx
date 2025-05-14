'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import hospedajeIcon from '@/public/hospedaje.svg';
import hojitasIcon from '@/public/hojitas.svg';

const hospedajes = [
  {
    nombre: 'HOTEL NOGARO',
    direccion: 'Av. Libertad 551\nUrdinarrain, Entre Ríos',
    telefono: '03446 480122',
    link: 'https://www.google.com/maps/place/HOTEL+NOGARO+Urdinarrain/@-32.6877136,-58.8906613,1203m/data=!3m1!1e3!4m18!1m8!3m7!1s0x95b0448e02ff96e5:0x37de7cb00b4b9d5c!2sUrdinarrain,+Entre+R%C3%ADos!3b1!8m2!3d-32.6886776!4d-58.8867856!16s%2Fm%2F025w2ft!3m8!1s0x95b0449224bf0cc7:0x22caf634ab230e2!5m2!4m1!1i2!8m2!3d-32.6877131!4d-58.8880582!16s%2Fg%2F11cjkdnjj1?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D',
  },
  {
    nombre: 'HOTEL PALMERA',
    direccion: 'Dr. Virginio Silva 522\nUrdinarrain, Entre Ríos',
    telefono: '03446-15606310',
    link: 'https://www.google.com/maps/place/HOTEL+PALMERA+Urdinarrain/@-32.6877136,-58.8906613,1203m/data=!3m1!1e3!4m18!1m8!3m7!1s0x95b0448e02ff96e5:0x37de7cb00b4b9d5c!2sUrdinarrain,+Entre+R%C3%ADos!3b1!8m2!3d-32.6886776!4d-58.8867856!16s%2Fm%2F025w2ft!3m8!1s0x95b0448e02ff96e5:0x2b82063115050c97!5m2!4m1!1i2!8m2!3d-32.6881623!4d-58.8889648!16s%2Fg%2F1tfnzskq?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D',
  },
  {
    nombre: 'GLAK APART',
    direccion: 'Salta 435\nUrdinarrain, Entre Ríos',
    telefono: '(011) 69675050',
    link: 'https://www.google.com/maps/place/Glak+Apart/@-32.6961686,-58.8864266,75m/data=!3m1!1e3!4m14!1m7!3m6!1s0x95b0449b336ae869:0x462712b3fa16c257!2sSalta+445,+E2826+Urdinarrain,+Entre+R%C3%ADos!3b1!8m2!3d-32.6962416!4d-58.8861993!3m5!1s0x95b045000e3e5bcf:0xf49d11b20d215623!8m2!3d-32.6961105!4d-58.8863518!16s%2Fg%2F11ybw354cm?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D',
  },
  {
    nombre: 'LAS CASITAS DE URDI',
    direccion: 'Tilda Thamar y Patriarca\nUrdinarrain, Entre Ríos',
    telefono: '(011) 15 45798065',
    link: 'https://www.google.com/maps/place/Las+casitas+de+urdi/@-32.6941778,-58.8802585,601m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95b0448e534ae957:0x8696527931136501!8m2!3d-32.6941823!4d-58.8776836!16s%2Fg%2F11c2l97lx5?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D',
  },
];

const Lodging = () => {
  return (
    <section className="relative py-12 bg-white text-center overflow-hidden">
      {/* SVG hojitas izquierda */}
      <Image
        src={hojitasIcon}
        alt="decoración"
        className="absolute top-0 left-[3vh] rotate-[70deg] w-24 md:w-32"
      />

      {/* SVG hojitas derecha */}
      <Image
        src={hojitasIcon}
        alt="decoración"
        className="absolute top-12 right-[3.8vh] w-24 md:w-32 transform "
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="font-retro text-4xl md:text-2xl text-black italic mb-2">
          luego de la fiesta
        </h3>

        <div className="flex flex-col items-center mb-4">
          <Image
            src={hospedajeIcon}
            alt="Icono hospedaje"
            className="w-full h-[5vh] scale-[3.5] d:w-14 mx-auto"
          />
          <h2 className="text-primary font-centuryBold text-2xl md:text-4xl uppercase mt-2">
            ¡Hospedaje!
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto px-6 mt-6">
          {hospedajes.map((hotel, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary font-centuryBold text-xl md:text-2xl uppercase mb-1">
                {hotel.nombre}
              </h3>
              <p className="text-black font-centuryBold whitespace-pre-line mb-1">
                {hotel.direccion}
              </p>
              <p className="text-black font-centuryBold">{`tel: ${hotel.telefono}`}</p>
              <button
                className="mt-4 bg-black text-primary font-centuryBold py-2 px-6 rounded-full shadow-md hover:bg-primary hover:text-black transition-colors"
                onClick={() => window.open(hotel.link)}
              >
                CÓMO LLEGAR
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Lodging;
