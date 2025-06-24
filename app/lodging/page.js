'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import hospedajeIcon from '@/public/hospedaje.svg';
import hojitasIcon from '@/public/hojitas.svg';
import { useRouter } from 'next/navigation';

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

const LodgingPage = () => {
  const router = useRouter();
  return (
    <section className="relative py-12 min-h-screen bg-black text-center flex flex-col items-center justify-center overflow-hidden">
      {/* SVG hojitas izquierda */}
      <Image
        src={hojitasIcon}
        alt="decoración"
        className="absolute top-0 left-[-5.1vh] rotate-[75deg] w-[16vh] sm:w-[25vh] sm:left-[-7vh] md:left-[-9vh] md:w-[30vh]  lg:w-[35vh] lg:left-[-10vh] xl:w-[35vh] xl:left-[-10vh] "
      />
      <Image
        src={hojitasIcon}
        alt="decoración"
        className="absolute top-12 right-[-3vh] rotate-[-10deg] w-[16vh] sm:right-[-5vh] sm:w-[25vh]  md:w-[30vh] lg:w-[35vh] lg:rigth-[-9vh] md:right-[-7vh] xl:right-[-7vh] transform "
      />
      <Image
        src="/trama.svg"
        alt="Decoración"
        width={1920}
        height={200}
        className="absolute top-[15%] right-[35%] w-full scale-110 sm:scale-[.5] sm:right-[42%] sm:top-[5%] md:scale-[.5] md:top-[10vh] lg:top-[-7vh] lg:right-[45vh] lg:scale-[.4] xl:top-[-30vh] xl:scale-[.3] xl:right-[50vh] z-[0] pointer-events-none "
      />
      <Image
        src="/trama.svg"
        alt="Decoración trama derecha"
        width={1920}
        height={200}
        className="block sm:hidden absolute top-[59%] right-[-35%] w-full scale-110 pointer-events-none z-0"
      />
      {/* Título y botón volver */}
      <div className="relative z-10 flex flex-col items-center mb-8 w-full">
        <h1 className="text-4xl font-bold text-primary mb-2">Hospedaje</h1>
        <button
          onClick={() => router.push('/#party')}
          className="inline-flex items-center bg-primary text-black py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 hover:text-white transition-colors text-lg font-semibold mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Volver
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex justify-center"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-2 max-w-4xl mx-auto px-6 mt-6">
          {hospedajes.map((hotel, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center  py-6 px-4 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary font-centuryBold text-xl md:text-2xl uppercase mb-1">
                {hotel.nombre}
              </h3>
              <p className="text-primary font-centuryBold whitespace-pre-line mb-1">
                {hotel.direccion}
              </p>
              <p className="text-primary font-centuryBold">{`tel: ${hotel.telefono}`}</p>
              <button
                className="relative  overflow-hidden text-white bg-gradient-to-r from-[#e6c976] via-[#C4A24D] to-[#8f7537] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#C4A24D]/50 font-centuryBold rounded-full text-sm md:text-lg lg:text-xl px-8 py-3 text-center uppercase tracking-wider shadow-lg group mt-4"
                onClick={() => window.open(hotel.link)}
              >
                <span className="relative z-10">CÓMO LLEGAR</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-white/30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LodgingPage;
