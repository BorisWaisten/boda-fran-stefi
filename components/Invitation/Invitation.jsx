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
      day: 'Sábado 22',
      time: '18 hs',
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
      day: 'Sábado 22',
      time: '19 hs',
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
    <section className="relative py-10 bg-white z-20 text-center md:mt-14 ">
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
              className="bg-black rounded-full p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4"
            >
              <motion.img
                animate={evento.iconAnimation.animate}
                transition={evento.iconAnimation.transition}
                width={100}
                height={100}
                src={evento.icon}
                alt={evento.title}
                className="w-10 h-10 scale-[3]"
              />
            </div>

            <h3 className="text-primary font-centuryBold text-xl md:text-2xl  uppercase">{evento.title}</h3>
            <p className="font-centuryBold w-[25%]  md:text-xl mt-2">{evento.day} |{evento.time}|</p>

            <p className="font-retro text-primary text-4xl md:text-6xl ">{evento.place}</p>

            <div className='flex flex-col w-full gap-2'>
              <p className="text-black mx-auto text-sm md:text-lg font-centuryBold">{evento.street}</p>
              <p className="text-black mx-auto text-sm md:text-lg font-centuryBold">{evento.location}</p>
            </div>

            <button
              className="mt-4 bg-black text-primary font-centuryBold py-2 px-6 rounded-full shadow-md hover:bg-primary hover:text-black transition-colors"
              onClick={() => window.open(evento.address)}
            >
              CÓMO LLEGAR
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Invitation;
