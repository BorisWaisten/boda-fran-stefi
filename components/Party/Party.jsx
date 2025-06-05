'use client';
import React from 'react';
import { motion, time } from 'framer-motion';
import '../components.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import hojitasIcon from '@/public/hojitas.svg'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const animationMusic = {
  animate: {
    scale: [0.2, 0.95, 0.2],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 3,
      times: [0, 0.5, 1],
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};



const animationOutfit = {
   animate: {
    rotateY: [0, 180, 360],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
    },
  }
};

const Party = () => {
  const router = useRouter();

  const handleSongSuggestionClick = () => {
    router.push('/song');
  };

  return (
    <motion.div
      className="relative text-primary z-20 mb-10 container  mt-1 text-center mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >

      <Image
        src={hojitasIcon}
        alt="decoración"
        className="absolute top-[-10vh] left-[-5.1vh] rotate-[75deg] w-[16vh] sm:w-[25vh] sm:left-[-7vh] md:left-[-6vh] md:w-[20vh] md:left-[-10vh] lg:w-[25vh] lg:left-[-7vh] xl:w-[35vh] xl:left-[-20vh] "
      />

            <Image
        src={hojitasIcon}
        alt="decoración"
        className="absolute top-14 right-[-3.5vh] rotate-[-10deg] w-[16vh] sm:right-[-5vh] sm:w-[25vh]  md:right-[-4vh] md:w-[20vh] lg:w-[25vh] lg:right-[-5vh] xl:right-[-16.5vh] transform "
      />


      <motion.h2
        className="text-2xl md:text-3xl lg:text-5xl text-primary font-centuryBold "
        variants={fadeInUp}
      >
        ¡LA FIESTA!
      </motion.h2>

      <motion.h3
        className="font-retro text-primary italic text-4xl md:text-lg lg:text-4xl "
        variants={fadeInUp}
      >
        ¡Algunos detalles a tener en cuenta!
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Música */}
        <motion.div className="px-4" variants={fadeInUp}>
          <div className="flex justify-center mx-auto my-2 bg-black rounded-full  w-fit">
            <motion.div
              {...animationMusic}
            >
              <Image
                width={100}
                height={100}
                src="/musica.svg"
                alt="party"
                className="w-24 scale-150"
              />
            </motion.div>
          </div>

          <h3 className="text-3xl font-centuryBold  ">MÚSICA</h3>
          <p className="text-sm sm:text-lg font-century py-3">
              Tema fiestero no puede faltar
          </p>

          <button
            onClick={handleSongSuggestionClick}
            className="relative overflow-hidden text-white bg-gradient-to-r from-[#e6c976] via-[#C4A24D] to-[#8f7537] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#C4A24D]/50 font-centuryBold rounded-full text-sm md:text-lg lg:text-xl px-8 py-3 text-center uppercase tracking-wider shadow-lg group"
          >
            <span className="relative z-10">Sugerir Canción</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-white/30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
          </button>
        </motion.div>

        {/* Vestimenta */}
        <motion.div className="px-4" variants={fadeInUp}>
          <div className="flex justify-center mx-auto my-2 bg-black rounded-full  w-fit">
            <motion.div
              {...animationOutfit}
            >
              <Image
                width={100}
                height={100}
                src="/vestimenta.svg"
                alt="party"
                className="w-24 scale-150"
              />
            </motion.div>
          </div>

          <h3 className="text-3xl font-centuryBold text-primary ">VESTIMENTA</h3>
          <p className="text-sm sm:text-lg font-century py-3">Formal - Elegante</p>
          <button
            onClick={() => router.push('/outfits')}
            className="relative overflow-hidden text-white bg-gradient-to-r from-[#e6c976] via-[#C4A24D] to-[#8f7537] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#C4A24D]/50 font-centuryBold rounded-full text-sm md:text-lg lg:text-xl px-8 py-3 text-center uppercase tracking-wider shadow-lg group"
          >
            <span className="relative z-10">Inspirate</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-white/30 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Party;
