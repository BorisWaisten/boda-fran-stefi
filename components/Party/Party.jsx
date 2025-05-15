'use client';
import React from 'react';
import { motion, time } from 'framer-motion';
import '../components.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
      className="relative text-primary z-20 container  mt-1 text-center mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl lg:text-5xl text-primary font-centuryBold "
        variants={fadeInUp}
      >
        ¡LA FIESTA!
      </motion.h2>

      <motion.h3
        className="font-retro text-secondary italic text-4xl md:text-lg lg:text-4xl "
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
            className="bg-primary text-white font-centuryBold py-2 px-6 rounded-full shadow-md hover:bg-primary hover:text-black transition-colors"
          >
            SUGERIR CANCIÓN
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
            className=" bg-primary text-white font-centuryBold py-2 px-6 rounded-full shadow-md hover:bg-primary hover:text-black transition-colors"
          >
            INSPIRATE
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Party;
