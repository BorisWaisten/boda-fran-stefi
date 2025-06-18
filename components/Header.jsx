'use client';
import React from 'react';
import './components.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="relative w-full h-[80vh] sm:h-[80vh] md:h-[120vh] lg:h-[1200px]">
        <Image
          src="/S&D-1.jpg"
          alt="header"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority={true}
          className="w-full h-full filter grayscale"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="relative w-full h-[10rem] md:h-[14rem]"
          >
            <h1 className="absolute left-[20%] top-[-2rem] sm:text-[8rem] sm:top-[-3rem] sm:left-[30%] md:left-[29%] lg:left-[28%] lg:top-[-6rem] lg:text-[15rem] md:top-[-1.5rem] text-[6rem] md:text-[10rem] font-retro">
              Shirley
            </h1>
            <span className="absolute left-[32%] top-[3.8rem] sm:left-[38%] sm:top-[5rem] md:left-[37%] lg:left-[38%] lg:top-[8rem] lg:text-[4rem] md:top-[8rem] text-[2.2rem] md:text-[3rem] font-century">
              &
            </span>
            <h1 className="absolute left-[40%] top-[2rem] sm:text-[8rem] sm:left-[44%] sm:top-[1.9rem] md:left-[44%] lg:text-[15rem] lg:left-[43%] lg:top-[2rem] md:top-[4.2rem] text-[6rem] md:text-[10rem] font-retro">
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
          src="/papelrasgadoblack.svg"
          alt="borde rasgado"
          width={500}
          height={100}
          className="absolute w-full h-[65vh] sm:h-auto bottom-[-26vh] sm:bottom-[-30vh] md:bottom-[-40vh] lg:bottom-[-60vh] xl:bottom-[-80vh] scale-y-[-1] z-20 pointer-events-none"
        />
      </div>
    </header>
  );
};

export default Header;
