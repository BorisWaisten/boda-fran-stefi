'use client';

import React from 'react';
import '../components.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Invitation = () => {
  const informacion = [
    {
      title: 'CEREMONIA',
      icon: '/iglesia.svg',
      day: 'Sábado 15',
      time: '19 hs',
      place: '"Capilla María Auxiliadora"',
      street:'Presbitero Joannas y Aristóbulo del Valle',
      location: 'Urdinarrain, Entre Ríos',
      address: 'https://www.google.com/maps/place/Parroquia...',
      iconAnimation: {
        animate: {
          scale: [3, 3.2, 3],
          y: [0, -4, 0], // rebote suave
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      title: 'CIVIL | FIESTA',
      icon: '/brindis.svg',
      day: 'Sábado 15',
      time: '20 hs',
      place: 'Salón "La Lidia"',
      street: '743 Dr. Armando H. Zerolli',
      location: 'Urdinarrain, Entre Ríos',
      address: 'https://www.google.com/maps/place/Salon...',
      iconAnimation: {
        animate: {
          scale: [3, 3.2, 3],
          rotate: [0, -10, 10, 0]
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  ];

  return (
    <section className="relative z-30 text-center mt-10 md:mt-14 ">
      
      
      <div className="grid grid-cols-1 mx-auto  md:grid-cols-2 gap-10 md:gap-0 max-w-5xl  ">
        {informacion.map((evento, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div
              className="relative overflow-hidden bg-gradient-to-r from-[#e6c976] via-[#C4A24D] to-[#8f7537] rounded-full p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 shadow-lg group"
            >
              <motion.img
                animate={evento.iconAnimation.animate}
                transition={evento.iconAnimation.transition}
                width={100}
                height={100}
                src={evento.icon}
                alt={evento.title}
                className="w-10 h-10 scale-[3] relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-white/30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
            </div>

            <h3 className="text-primary font-centuryBold text-xl md:text-2xl  uppercase">{evento.title}</h3>
            <p className="font-centuryBold text-primary w-[25%]  md:text-xl mt-2">{evento.day} |{evento.time}|</p>

            <p className="font-retro text-primary text-4xl md:text-6xl ">{evento.place}</p>

            <div className='flex flex-col w-full gap-2'>
              <p className="text-primary mx-auto text-sm md:text-lg font-centuryBold">{evento.street}</p>
              <p className="text-primary mx-auto text-sm md:text-lg font-centuryBold">{evento.location}</p>
            </div>

            <button
              className="relative overflow-hidden  text-white bg-gradient-to-r from-[#e6c976] via-[#C4A24D] to-[#8f7537] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#C4A24D]/50 font-centuryBold rounded-full text-sm md:text-lg lg:text-xl px-8 py-3 text-center uppercase tracking-wider shadow-lg group mt-4"
              onClick={() => window.open(evento.address)}
            >
              <span className="relative ">Cómo Llegar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-white/30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Invitation;
