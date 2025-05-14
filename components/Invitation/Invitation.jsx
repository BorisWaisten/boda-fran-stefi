'use client';

import React from 'react';
import '../components.css';
import Image from 'next/image';

const Invitation = () => {
const informacion = [
  {
    title: 'CEREMONIA',
    icon: '/matrimonio.gif',
    day: 'Sábado 22',
    time: '18 hs',
    type: '"Capilla',
    place: 'María Auxiliadora"',
    location: 'Presbitero Joannas y Aristóbulo del Valle, Urdinarrain, Entre Ríos',
    address: 'https://www.google.com/maps/place/Parroquia...',
  },
  {
    title: 'CIVIL | FIESTA',
    icon: '/fiesta.gif',
    day: 'Sábado 22',
    time: '19 hs',
    type: 'Salón',
    place: '"La Lidia"',
    location: '743 Dr. Armando H. Zerolli, Urdinarrain, Entre Ríos',
    address: 'https://www.google.com/maps/place/Salon...',
  },
]

  return (
    <section className="relative py-10 bg-white z-20 text-center md:mt-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 max-w-5xl md:max-w-2xl mx-auto ">
        {informacion.map((evento, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div className="bg-black rounded-full p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 ">
              <Image width={100} height={100} src={evento.icon} alt={evento.title} className="w-10 h-10" />
            </div>
            <h3 className="text-primary font-centuryBold text-xl md:text-2xl uppercase">{evento.title}</h3>
            <p className="font-centuryBold w-[25%] md:w-[35%] md:text-xl mt-2">{evento.day} | {evento.time} |</p>

            <p className="font-retro text-primary text-3xl md:text-5xl mt-1">
              {evento.type}
            </p>

            <p className="font-retro text-primary text-3xl md:text-5xl mb-1">
              {evento.place}
            </p>

            <p className="text-black text-sm md:text-lg text-justify w-[45%] md:w-[60%] font-centuryBold">{evento.location}</p>


            <button
              className="mt-4 bg-black text-primary font-centuryBold py-2 px-6 rounded-full shadow-md hover:bg-primary transition-colors"
              onClick={() => window.open(evento.address)}
            >
              CÓMO LLEGAR
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Invitation;
