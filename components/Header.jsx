'use client';
import React from 'react';
import './components.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="relative w-full h-[100vw] md:h-[80vw] lg:h-[70vw]">
        <Image
          src="/fondo.jpg"
          alt="header"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority={true}
          className=" w-full h-full filter grayscale"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">

          <motion.svg
            viewBox="0 0 500 200"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="
              w-[25vh] h-[10vh]
              sm:w-[30vh] sm:h-[15vh]
              md:w-[30vh] md:h-[15vh]
              lg:w-[20vw] lg:h-auto
              mt-16
            "
          >
            <path id="curve" d="M 50 160 Q 250 -50 450 160" fill="transparent" />
            <text width="500">
              <textPath
                xlinkHref="#curve"
                startOffset="50%"
                textAnchor="middle"
                className="fill-white text-[4rem] md:text-[4rem] lg:text-[4.2rem] font-century"
              >
                ¡Nos Casamos!
              </textPath>
            </text>
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="relative w-full h-[10rem] md:h-[14rem]"
          >
            <h1 className="absolute left-[20%] top-[-2rem] sm:text-[8rem] sm:top-[-3rem] sm:left-[30%] md:left-[20%] lg:left-[33%] lg:top-[-6rem] lg:text-[15rem] md:top-0 text-[6rem] md:text-[5.8rem] font-retro">
              Shirley
            </h1>
            <span className="absolute left-[32%] top-[3.8rem] sm:left-[38%] sm:top-[5rem] md:left-[47%] lg:left-[40%] lg:top-[8.5rem] lg:text-[4rem] md:top-[2.4rem] text-[2.2rem] md:text-[2.8rem] font-century">
              &
            </span>
            <h1 className="absolute left-[40%] top-[2rem] sm:text-[8rem] sm:left-[44%] sm:top-[1.9rem] md:left-[58%] lg:text-[15rem] lg:left-[44%] lg:top-[2rem] md:top-[4.2rem] text-[6rem] md:text-[5.8rem] font-retro">
              Diego
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
            className="sm:absolute sm:top-[80%] text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] lg:pt-[2rem] font-centuryBold"
          >
            15.11.25
          </motion.p>
        </div>

        <Image
          src="/papelrasgado.svg"
          alt="borde rasgado"
          width={500}
          height={100}
          className="absolute top-[58%] lg:top-[40%] w-full h-auto z-20 pointer-events-none"
        />
      </div>
    </header>
  );
};

export default Header;
